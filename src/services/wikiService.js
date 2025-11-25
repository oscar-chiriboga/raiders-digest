/**
 * Wiki API Service
 * Uses Wikimedia REST API for better CORS support and cleaner responses
 */

// Arc Raiders Wiki
const WIKI_BASE_URL = 'https://arcraiders.wiki';

// Wikimedia REST API endpoints (better than MediaWiki API)
const WIKI_REST_API = `${WIKI_BASE_URL}/rest.php/v1`;

// Fallback to MediaWiki API if REST doesn't work
const WIKI_LEGACY_API = `${WIKI_BASE_URL}/api.php`;

// CORS Proxy - only use if absolutely needed
const CORS_PROXY = 'https://corsproxy.io/?';

/**
 * Fetch image URL from wiki for an item
 * @param {string} itemName - Name of the item (e.g., "Bettina", "Ferro")
 * @returns {Promise<string|null>} - Image URL or null if not found
 */
/**
 * Fetch item image using Wikimedia REST API
 * Better CORS support and cleaner responses
 */
export async function getItemImageFromWiki(itemName, useProxy = false) {
  try {
    // Method 1: Try REST API first (better CORS)
    const searchUrl = `${WIKI_REST_API}/search/page?q=${encodeURIComponent(itemName)}&limit=1`;
    
    console.log(`🔍 Searching wiki for: ${itemName}`);
    const searchResponse = await fetch(searchUrl);
    
    if (!searchResponse.ok) {
      console.log(`REST API not available, trying legacy API...`);
      return await getItemImageFromWikiLegacy(itemName, useProxy);
    }
    
    const searchData = await searchResponse.json();
    
    if (!searchData.pages?.length) {
      console.log(`❌ No wiki page found for: ${itemName}`);
      return null;
    }
    
    const pageKey = searchData.pages[0].key;
    
    // Get page data including image
    const pageUrl = `${WIKI_REST_API}/page/${encodeURIComponent(pageKey)}`;
    const pageResponse = await fetch(pageUrl);
    const pageData = await pageResponse.json();
    
    // Get thumbnail from page data
    const thumbnail = pageData.thumbnail?.url;
    
    if (thumbnail) {
      console.log(`✅ Found image for ${itemName}`);
      return thumbnail;
    }
    
    return null;
  } catch (error) {
    console.error(`❌ Error fetching image for ${itemName}:`, error.message);
    // Fallback to legacy API
    return await getItemImageFromWikiLegacy(itemName, useProxy);
  }
}

/**
 * Legacy MediaWiki API fallback
 */
async function getItemImageFromWikiLegacy(itemName, useProxy = false) {
  try {
    const baseSearchUrl = `${WIKI_LEGACY_API}?action=query&list=search&srsearch=${encodeURIComponent(itemName)}&format=json`;
    const searchUrl = useProxy ? `${CORS_PROXY}${encodeURIComponent(baseSearchUrl)}` : `${baseSearchUrl}&origin=*`;
    
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    
    if (!searchData.query?.search?.length) {
      return null;
    }
    
    const pageTitle = searchData.query.search[0].title;
    
    const baseImageUrl = `${WIKI_LEGACY_API}?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&format=json&pithumbsize=512`;
    const imageUrl = useProxy ? `${CORS_PROXY}${encodeURIComponent(baseImageUrl)}` : `${baseImageUrl}&origin=*`;
    
    const imageResponse = await fetch(imageUrl);
    const imageData = await imageResponse.json();
    
    const pages = imageData.query.pages;
    const pageId = Object.keys(pages)[0];
    return pages[pageId]?.thumbnail?.source || null;
  } catch (error) {
    console.error(`Legacy API also failed:`, error.message);
    return null;
  }
}

/**
 * Fetch item data from wiki
 * @param {string} itemName - Name of the item
 * @returns {Promise<Object|null>} - Item data or null
 */
export async function getItemDataFromWiki(itemName) {
  try {
    const url = `${WIKI_API_URL}?action=parse&page=${encodeURIComponent(itemName)}&prop=text&format=json&origin=*`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.parse) {
      return {
        title: data.parse.title,
        html: data.parse.text['*'],
        // Parse additional data from infobox if needed
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching data for ${itemName}:`, error);
    return null;
  }
}

/**
 * Batch fetch images for multiple items
 * @param {Array<Object>} items - Array of items with 'name' property
 * @returns {Promise<Map>} - Map of item names to image URLs
 */
export async function batchFetchWikiImages(items) {
  const imageMap = new Map();
  
  console.log(`Fetching images for ${items.length} items from wiki...`);
  
  // Fetch in parallel but with rate limiting
  const batchSize = 5;
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const promises = batch.map(item => 
      getItemImageFromWiki(item.name)
        .then(url => ({ name: item.name, url }))
    );
    
    const results = await Promise.all(promises);
    results.forEach(({ name, url }) => {
      if (url) imageMap.set(name, url);
    });
    
    // Small delay between batches to be nice to the wiki
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  console.log(`✓ Successfully fetched ${imageMap.size} images`);
  return imageMap;
}

/**
 * Cache images locally (for development)
 * Downloads images to local assets folder
 */
export async function downloadAndCacheImage(imageUrl, itemName) {
  // This would be used in a Node.js script to download images
  // Not for browser use
  console.log(`Would download: ${imageUrl} as ${itemName}.png`);
  // Implementation would use fs to save to assets folder
}

/**
 * Alternative: Use Wikimedia Commons API
 * If the game wiki doesn't have good API access
 */
export async function searchWikimediaCommons(searchTerm) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json&origin=*`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.query?.search || [];
  } catch (error) {
    console.error('Error searching Wikimedia:', error);
    return [];
  }
}

/**
 * Alternative: Use official game API if available
 * Check these resources:
 * 1. The Cycle Discord - API announcements
 * 2. https://github.com/TCF-Wiki/TCF-API (community API)
 * 3. Game's official website developer section
 */
export async function getItemFromOfficialAPI(itemName) {
  // Example structure if official API exists:
  /*
  try {
    const response = await fetch(`https://api.thecycle.game/v1/items/${itemName}`);
    const data = await response.json();
    return {
      name: data.name,
      image: data.icon_url,
      stats: data.stats,
      // ... other data
    };
  } catch (error) {
    console.error('Official API error:', error);
    return null;
  }
  */
  console.log('Official API not implemented yet. Using wiki API instead.');
  return null;
}

// Export configuration for easy switching
export const WIKI_CONFIG = {
  baseUrl: WIKI_BASE_URL,
  restApi: WIKI_REST_API,
  legacyApi: WIKI_LEGACY_API,
  corsProxy: CORS_PROXY,
  
  // Wikimedia REST API endpoints:
  // - /search/page - Search for pages
  // - /page/{title} - Get page content and metadata
  // - /page/{title}/html - Get page HTML
  // - /file/{title} - Get file info
  
  // Can be changed to other game wikis:
  // - 'https://escapefromtarkov.fandom.com'
  // - 'https://deadlock.wiki.gg'
  // - 'https://example.wiki.gg'
};
