const https = require('https');
const fs = require('fs');
const path = require('path');

async function generateMapData() {
  const areas = new Set();
  const areaItems = {};
  
  console.log('Fetching all items to generate map data...\n');
  
  // Fetch all items
  for (let page = 1; page <= 11; page++) {
    await new Promise(resolve => {
      https.get(`https://metaforge.app/api/arc-raiders/items?page=${page}`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const json = JSON.parse(data);
          json.data.forEach(item => {
            if (item.loot_area) {
              areas.add(item.loot_area);
              if (!areaItems[item.loot_area]) {
                areaItems[item.loot_area] = [];
              }
              areaItems[item.loot_area].push({
                name: item.name,
                type: item.item_type,
                rarity: item.rarity,
                icon: item.icon
              });
            }
          });
          resolve();
        });
      });
    });
  }
  
  console.log(`Found ${areas.size} unique loot areas`);
  
  // Simplify area names - split multi-area locations
  const simplifiedAreas = {};
  areas.forEach(area => {
    // Split comma-separated areas
    const subAreas = area.split(',').map(a => a.trim());
    subAreas.forEach(subArea => {
      if (!simplifiedAreas[subArea]) {
        simplifiedAreas[subArea] = {
          name: subArea,
          items: []
        };
      }
      simplifiedAreas[subArea].items.push(...areaItems[area]);
    });
  });
  
  // Create map locations from simplified areas
  const mapLocations = Object.entries(simplifiedAreas).map(([name, data]) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: name,
    description: getAreaDescription(name),
    category: categorizeArea(name),
    icon: getAreaIcon(name),
    itemCount: data.items.length,
    rareLootChance: calculateRareLootChance(data.items),
    dangerLevel: getDangerLevel(name),
  })).sort((a, b) => a.name.localeCompare(b.name));
  
  console.log(`\nGenerated ${mapLocations.length} map locations\n`);
  
  // Display breakdown
  const categories = {};
  mapLocations.forEach(loc => {
    if (!categories[loc.category]) {
      categories[loc.category] = [];
    }
    categories[loc.category].push(loc);
  });
  
  console.log('Locations by category:');
  Object.entries(categories).forEach(([cat, locs]) => {
    console.log(`\n${cat}: ${locs.length}`);
    locs.forEach(loc => {
      console.log(`  - ${loc.name} (${loc.itemCount} items, ${loc.dangerLevel} danger)`);
    });
  });
  
  // Generate the data file
  const outputPath = path.join(__dirname, '..', 'src', 'data-generated-maps.js');
  const fileContent = `// Auto-generated map locations from Metaforge API loot areas
// Generated on: ${new Date().toISOString()}
// Source: https://metaforge.app/api/arc-raiders/items

export const MAP_LOCATIONS = ${JSON.stringify(mapLocations, null, 2)};

export const MAP_CATEGORIES = ['All', 'ARC Territory', 'Industrial', 'Residential', 'Medical', 'Natural', 'Security'];

export const DANGER_LEVELS = ['Low', 'Medium', 'High', 'Extreme'];
`;
  
  fs.writeFileSync(outputPath, fileContent, 'utf8');
  console.log(`\n✓ Generated ${outputPath}`);
  console.log(`✓ Total locations: ${mapLocations.length}`);
}

function categorizeArea(area) {
  const lower = area.toLowerCase();
  if (lower.includes('arc') || lower.includes('exodus')) return 'ARC Territory';
  if (lower.includes('residential') || lower.includes('commercial') || lower.includes('old world')) return 'Residential';
  if (lower.includes('medical')) return 'Medical';
  if (lower.includes('mechanical') || lower.includes('electrical') || lower.includes('technological') || lower.includes('industrial')) return 'Industrial';
  if (lower.includes('nature')) return 'Natural';
  if (lower.includes('security') || lower.includes('raider')) return 'Security';
  return 'Mixed';
}

function getAreaIcon(area) {
  const lower = area.toLowerCase();
  if (lower.includes('arc') || lower.includes('exodus')) return '⚠️';
  if (lower.includes('residential')) return '🏠';
  if (lower.includes('medical')) return '⚕️';
  if (lower.includes('mechanical')) return '⚙️';
  if (lower.includes('electrical') || lower.includes('technological')) return '⚡';
  if (lower.includes('nature')) return '🌿';
  if (lower.includes('security')) return '🛡️';
  if (lower.includes('commercial')) return '🏪';
  if (lower.includes('industrial')) return '🏭';
  if (lower.includes('old world')) return '🏛️';
  return '📍';
}

function getAreaDescription(area) {
  const lower = area.toLowerCase();
  if (lower.includes('arc')) return 'High-risk ARC-controlled territory with valuable resources';
  if (lower.includes('exodus')) return 'Abandoned space facility with rare technological components';
  if (lower.includes('residential')) return 'Residential area with everyday supplies and crafting materials';
  if (lower.includes('medical')) return 'Medical facility with healing items and pharmaceutical resources';
  if (lower.includes('mechanical')) return 'Industrial zone with mechanical parts and components';
  if (lower.includes('electrical') || lower.includes('technological')) return 'Tech hub with electronic components and advanced materials';
  if (lower.includes('nature')) return 'Natural environment with organic resources and herbs';
  if (lower.includes('security')) return 'Security installation with weapons and tactical gear';
  if (lower.includes('commercial')) return 'Commercial district with various trade goods';
  if (lower.includes('industrial')) return 'Industrial sector with raw materials and equipment';
  if (lower.includes('old world')) return 'Historic location with valuable antiques and artifacts';
  if (lower.includes('raider')) return 'Raider territory with military supplies';
  return 'Loot location with various resources';
}

function getDangerLevel(area) {
  const lower = area.toLowerCase();
  if (lower.includes('arc') || lower.includes('exodus')) return 'Extreme';
  if (lower.includes('security') || lower.includes('raider')) return 'High';
  if (lower.includes('industrial') || lower.includes('mechanical')) return 'Medium';
  return 'Low';
}

function calculateRareLootChance(items) {
  const rareCount = items.filter(item => 
    item.rarity === 'Rare' || item.rarity === 'Epic' || item.rarity === 'Legendary'
  ).length;
  return Math.round((rareCount / items.length) * 100);
}

generateMapData();
