/**
 * Metaforge Map Data Scraper
 * 
 * This script scrapes map data from metaforge.app for Arc Raiders maps.
 * It extracts POI locations, categories, and coordinates.
 * 
 * Usage: node scripts/scrapeMetaforgeMap.js <map-name>
 * Example: node scripts/scrapeMetaforgeMap.js dam
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const MAP_URLS = {
  'dam': 'https://metaforge.app/arc-raiders/map/dam',
  'spaceport': 'https://metaforge.app/arc-raiders/map/spaceport',
  'buried-city': 'https://metaforge.app/arc-raiders/map/buried-city',
  'blue-gate': 'https://metaforge.app/arc-raiders/map/blue-gate',
  'stella-montis': 'https://metaforge.app/arc-raiders/map/stella-montis'
};

const MAP_NAMES = {
  'dam': 'Dam Battlegrounds',
  'spaceport': 'Spaceport',
  'buried-city': 'Buried City',
  'blue-gate': 'The Blue Gate',
  'stella-montis': 'Stella Montis'
};

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractMapDataFromHTML(html) {
  // Metaforge typically embeds map data in JavaScript variables or JSON in the page
  // Look for common patterns:
  
  // Pattern 1: Look for JSON data in script tags
  const scriptMatches = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
  
  for (const script of scriptMatches) {
    const scriptContent = script.replace(/<\/?script[^>]*>/gi, '');
    
    // Look for map data structures
    const patterns = [
      /mapData\s*=\s*(\{[\s\S]*?\});/,
      /markers\s*=\s*(\[[\s\S]*?\]);/,
      /points\s*=\s*(\[[\s\S]*?\]);/,
      /locations\s*=\s*(\[[\s\S]*?\]);/,
      /"markers":\s*(\[[\s\S]*?\])/,
      /"points":\s*(\[[\s\S]*?\])/
    ];
    
    for (const pattern of patterns) {
      const match = scriptContent.match(pattern);
      if (match) {
        try {
          const data = JSON.parse(match[1]);
          return data;
        } catch (e) {
          // Continue to next pattern
        }
      }
    }
  }
  
  // Pattern 2: Look for Next.js data
  const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (nextDataMatch) {
    try {
      const nextData = JSON.parse(nextDataMatch[1]);
      // Navigate through Next.js data structure to find map data
      if (nextData.props?.pageProps?.mapData) {
        return nextData.props.pageProps.mapData;
      }
      if (nextData.props?.pageProps?.markers) {
        return nextData.props.pageProps.markers;
      }
      if (nextData.props?.pageProps?.data) {
        return nextData.props.pageProps.data;
      }
    } catch (e) {
      console.error('Error parsing Next.js data:', e.message);
    }
  }
  
  return null;
}

function transformToRaidersDigestFormat(data, mapId) {
  // Transform the scraped data to our format
  if (Array.isArray(data)) {
    return data.map((point, index) => {
      // Try to extract common fields
      const transformed = {
        id: point.id || index + 1,
        name: point.name || point.title || point.label || 'Unknown',
        pos: point.pos || point.position || point.coordinates || [0, 0],
        type: point.type || point.category || 'poi'
      };
      
      // Add optional fields if they exist
      if (point.description) transformed.description = point.description;
      if (point.subcategory) transformed.subcategory = point.subcategory;
      if (point.icon) transformed.icon = point.icon;
      
      return transformed;
    });
  }
  
  return data;
}

async function scrapeMap(mapId) {
  console.log(`\n🔍 Scraping map: ${MAP_NAMES[mapId]} (${mapId})`);
  console.log(`📍 URL: ${MAP_URLS[mapId]}`);
  
  try {
    console.log('⏳ Fetching page...');
    const html = await fetchPage(MAP_URLS[mapId]);
    
    console.log('🔎 Extracting map data...');
    const rawData = extractMapDataFromHTML(html);
    
    if (!rawData) {
      console.error('❌ Could not find map data in the page.');
      console.log('\n💡 The data might be loaded dynamically via API.');
      console.log('   Try checking the Network tab in browser DevTools for API calls.');
      return null;
    }
    
    console.log('✅ Found map data!');
    console.log(`📊 Data type: ${Array.isArray(rawData) ? 'Array' : 'Object'}`);
    
    if (Array.isArray(rawData)) {
      console.log(`📌 Found ${rawData.length} points`);
    }
    
    // Transform to our format
    const transformedData = transformToRaidersDigestFormat(rawData, mapId);
    
    // Save both raw and transformed data
    const outputDir = path.join(__dirname, '..', 'scraped-data');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const rawFile = path.join(outputDir, `${mapId}-raw.json`);
    const transformedFile = path.join(outputDir, `${mapId}-transformed.json`);
    
    fs.writeFileSync(rawFile, JSON.stringify(rawData, null, 2));
    fs.writeFileSync(transformedFile, JSON.stringify(transformedData, null, 2));
    
    console.log(`\n💾 Saved files:`);
    console.log(`   Raw: ${rawFile}`);
    console.log(`   Transformed: ${transformedFile}`);
    
    return transformedData;
    
  } catch (error) {
    console.error(`❌ Error scraping ${mapId}:`, error.message);
    return null;
  }
}

async function scrapeAllMaps() {
  console.log('🚀 Starting Metaforge map scraper...\n');
  
  const results = {};
  
  for (const mapId of Object.keys(MAP_URLS)) {
    const data = await scrapeMap(mapId);
    results[mapId] = data;
    
    // Wait between requests to be polite
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n✅ Scraping complete!');
  console.log(`📊 Successfully scraped ${Object.values(results).filter(Boolean).length} maps`);
  
  return results;
}

// CLI handling
const args = process.argv.slice(2);
const mapId = args[0];

if (mapId && MAP_URLS[mapId]) {
  scrapeMap(mapId);
} else if (mapId === 'all') {
  scrapeAllMaps();
} else {
  console.log('Metaforge Map Data Scraper\n');
  console.log('Usage:');
  console.log('  node scripts/scrapeMetaforgeMap.js <map-id>');
  console.log('  node scripts/scrapeMetaforgeMap.js all\n');
  console.log('Available maps:');
  Object.keys(MAP_URLS).forEach(id => {
    console.log(`  - ${id} (${MAP_NAMES[id]})`);
  });
  process.exit(1);
}
