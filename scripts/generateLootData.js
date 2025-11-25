const https = require('https');
const fs = require('fs');

async function fetchItems(page = 1, limit = 100) {
  return new Promise((resolve, reject) => {
    https.get(`https://metaforge.app/api/arc-raiders/items?page=${page}&limit=${limit}&includeComponents=true`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function generateLootData() {
  console.log('🔍 Fetching all items from Metaforge API...\n');
  
  const firstPage = await fetchItems(1);
  const totalPages = firstPage.pagination.totalPages;
  
  console.log(`📦 Total Items: ${firstPage.pagination.total}`);
  console.log(`📄 Fetching ${totalPages} pages...\n`);
  
  // Fetch all pages
  const allItems = [...firstPage.data];
  for (let page = 2; page <= totalPages; page++) {
    process.stdout.write(`  Fetching page ${page}/${totalPages}...\r`);
    const pageData = await fetchItems(page);
    allItems.push(...pageData.data);
  }
  
  console.log(`\n✅ Fetched ${allItems.length} items\n`);
  
  // Filter out weapons (we have a separate weapons screen)
  const lootItems = allItems.filter(item => item.item_type !== 'Weapon');
  
  console.log(`💎 Processing ${lootItems.length} loot items...\n`);
  
  // Categorize items into logical groups
  const categoryMapping = {
    'Medical': ['Quick Use', 'Medical', 'Consumable'],
    'Materials': ['Basic Material', 'Topside Material', 'Refined Material', 'Advanced Material', 'Nature', 'Material', 'Refinement'],
    'Recyclables': ['Recyclable'],
    'Blueprints': ['Blueprint'],
    'Mods': ['Modification', 'Mods'],
    'Equipment': ['Augment', 'Shield', 'Gadget'],
    'Ammo': ['Ammunition'],
    'Throwables': ['Throwable'],
    'Keys': ['Key', 'Quest Item'],
    'Collectibles': ['Trinket', 'Cosmetic', 'Misc']
  };
  
  function getMainCategory(itemType) {
    for (const [category, types] of Object.entries(categoryMapping)) {
      if (types.includes(itemType)) {
        return category;
      }
    }
    return 'Other';
  }
  
  // Transform items to app format
  const transformedItems = lootItems.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description || 'No description available.',
    category: getMainCategory(item.item_type),
    subcategory: item.item_type,
    rarity: item.rarity || 'Common',
    value: item.value || 0,
    weight: item.stat_block?.weight || 0,
    stackSize: item.stat_block?.stackSize || 1,
    icon: item.icon,
    lootArea: item.loot_area || 'Unknown',
    workbench: item.workbench || null,
    uses: item.flavor_text || null,
    recycleComponents: item.recycle_components || [],
    droppedBy: item.dropped_by || [],
    components: item.components || [],
    usedIn: item.used_in || []
  }));
  
  // Sort by category, then rarity, then name
  const rarityOrder = { 'Legendary': 5, 'Epic': 4, 'Rare': 3, 'Uncommon': 2, 'Common': 1, 'None': 0 };
  transformedItems.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    if (rarityOrder[b.rarity] !== rarityOrder[a.rarity]) {
      return rarityOrder[b.rarity] - rarityOrder[a.rarity];
    }
    return a.name.localeCompare(b.name);
  });
  
  // Generate stats
  const categoryStats = {};
  const rarityStats = {};
  transformedItems.forEach(item => {
    categoryStats[item.category] = (categoryStats[item.category] || 0) + 1;
    rarityStats[item.rarity] = (rarityStats[item.rarity] || 0) + 1;
  });
  
  console.log('📊 CATEGORY BREAKDOWN:');
  Object.entries(categoryStats).sort((a,b) => b[1] - a[1]).forEach(([cat, count]) => {
    console.log(`  ${cat.padEnd(20)} ${count}`);
  });
  
  console.log('\n✨ RARITY BREAKDOWN:');
  Object.entries(rarityStats).sort((a,b) => rarityOrder[b[0]] - rarityOrder[a[0]]).forEach(([rarity, count]) => {
    console.log(`  ${rarity.padEnd(20)} ${count}`);
  });
  
  // Generate the data file
  const fileContent = `// Auto-generated from Metaforge API
// Generated: ${new Date().toISOString()}
// Total Items: ${transformedItems.length}

export const LOOT_DATA = ${JSON.stringify(transformedItems, null, 2)};

export const LOOT_CATEGORIES = ${JSON.stringify(Object.keys(categoryStats).sort(), null, 2)};

export const LOOT_RARITIES = ${JSON.stringify(['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'], null, 2)};

export const CATEGORY_STATS = ${JSON.stringify(categoryStats, null, 2)};

export const RARITY_STATS = ${JSON.stringify(rarityStats, null, 2)};
`;
  
  const outputPath = 'src/data-generated-loot.js';
  fs.writeFileSync(outputPath, fileContent);
  
  console.log(`\n✅ Generated ${outputPath}`);
  console.log(`📝 Total loot items: ${transformedItems.length}`);
  console.log(`📦 Categories: ${Object.keys(categoryStats).length}`);
  console.log(`✨ Rarities: ${Object.keys(rarityStats).length}`);
  console.log('\n🎉 Done! Import from src/data-generated-loot.js\n');
}

generateLootData().catch(console.error);
