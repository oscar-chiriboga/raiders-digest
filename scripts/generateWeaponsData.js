/**
 * Generate weapons data from Metaforge API
 * Run with: node scripts/generateWeaponsData.js
 * 
 * This will fetch all weapons from Metaforge and create a data.js file
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const METAFORGE_API = 'https://metaforge.app/api/arc-raiders/items';
const OUTPUT_FILE = path.join(__dirname, '../src/data-generated.js');

/**
 * Fetch JSON from HTTPS URL
 */
function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
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

/**
 * Map Metaforge rarity to app tier
 */
function mapRarityToTier(rarity) {
  const mapping = {
    'Common': 'C',
    'Uncommon': 'B',
    'Rare': 'A',
    'Epic': 'S',
    'Legendary': 'S'
  };
  return mapping[rarity] || 'B';
}

/**
 * Map Metaforge subcategory to app weapon type
 * Also checks description for hints if subcategory is missing
 */
function mapSubcategoryToType(subcategory, description, name) {
  const mapping = {
    'Assault Rifle': 'Assault Rifle',
    'Battle Rifle': 'Rifle',
    'Sniper Rifle': 'Sniper',
    'Submachine Gun': 'SMG',
    'Light Machinegun': 'Heavy',
    'Shotgun': 'Shotgun',
    'Pistol': 'Pistol',
    'Hand Cannon': 'Pistol',
    'Special': 'Heavy'
  };
  
  // Try subcategory first
  if (subcategory && mapping[subcategory]) {
    return mapping[subcategory];
  }
  
  // Check description for weapon type hints
  const desc = (description || '').toLowerCase();
  if (desc.includes('smg') || desc.includes('submachine')) return 'SMG';
  if (desc.includes('lmg') || desc.includes('machinegun') || desc.includes('machine gun')) return 'Heavy';
  if (desc.includes('sniper')) return 'Sniper';
  if (desc.includes('shotgun')) return 'Shotgun';
  if (desc.includes('rifle') && desc.includes('assault')) return 'Assault Rifle';
  if (desc.includes('rifle')) return 'Rifle';
  if (desc.includes('pistol')) return 'Pistol';
  
  // Special case mapping by name
  const weaponName = (name || '').toLowerCase();
  if (weaponName === 'bobcat' || weaponName === 'stitcher') return 'SMG';
  if (weaponName === 'torrente') return 'Heavy';
  
  return 'Weapon';
}

/**
 * Get base weapon name without tier
 */
function getBaseName(name) {
  return name.replace(/\s+(I|II|III|IV)$/i, '').trim();
}

/**
 * Fetch all pages from API
 */
async function fetchAllPages() {
  const allItems = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    console.log(`📄 Fetching page ${page}...`);
    const response = await fetchJSON(`${METAFORGE_API}?page=${page}`);
    
    if (response.data && response.data.length > 0) {
      allItems.push(...response.data);
      hasMore = response.pagination?.hasNextPage || false;
      page++;
    } else {
      hasMore = false;
    }
  }
  
  return allItems;
}

/**
 * Generate weapons data
 */
async function generateWeaponsData() {
  console.log('🚀 Fetching weapons from Metaforge API...\n');
  
  try {
    const allItems = await fetchAllPages();
    console.log(`📦 Fetched ${allItems.length} total items\n`);
    
    // Filter for weapons (tier I only for main list)
    const allWeapons = allItems.filter(item => item.item_type === 'Weapon');
    
    // Get unique base weapons (tier I preferred)
    const baseWeaponsMap = new Map();
    
    for (const weapon of allWeapons) {
      const baseName = getBaseName(weapon.name);
      
      // Prefer tier I weapons for the base list
      if (!baseWeaponsMap.has(baseName) || weapon.name.includes(' I')) {
        if (weapon.name.includes(' I') && !weapon.name.includes(' II') && !weapon.name.includes(' III') && !weapon.name.includes(' IV')) {
          baseWeaponsMap.set(baseName, weapon);
        } else if (!baseWeaponsMap.has(baseName)) {
          baseWeaponsMap.set(baseName, weapon);
        }
      }
    }
    
    const baseWeapons = Array.from(baseWeaponsMap.values());
    
    console.log(`⚔️  Found ${baseWeapons.length} unique base weapons`);
    console.log(`📊 Total weapon variants (all tiers): ${allWeapons.length}\n`);
    
    // Transform to app format
    const weaponsData = baseWeapons.map(weapon => {
      const baseName = getBaseName(weapon.name);
      const stats = weapon.stat_block || {};
      
      return {
        name: baseName,
        image: weapon.icon,
        tier: mapRarityToTier(weapon.rarity),
        type: mapSubcategoryToType(weapon.subcategory, weapon.description, baseName),
        desc: weapon.description || 'No description available',
        craft: weapon.workbench || 'Unknown',
        // Additional stats from API
        stats: {
          damage: stats.damage || 0,
          fireRate: stats.fireRate || 0,
          range: stats.range || 0,
          stability: stats.stability || 0,
          magazineSize: stats.magazineSize || 0,
          weight: stats.weight || 0,
          ammoType: weapon.ammo_type || 'Unknown'
        }
      };
    });
    
    // Sort by name
    weaponsData.sort((a, b) => a.name.localeCompare(b.name));
    
    // Generate the file content
    const fileContent = `/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from Metaforge API: ${new Date().toISOString()}
 * 
 * To regenerate: node scripts/generateWeaponsData.js
 */

export const WEAPONS_DATA = ${JSON.stringify(weaponsData, null, 2)};

export const ENEMIES_DATA = [
  { name: 'Wasp', type: 'ARC Unit', threat: 'Low', desc: 'Fast-moving scout drone.', loot: 'ARC Circuitry' },
  { name: 'Queen', type: 'ARC Boss', threat: 'Very High', desc: 'Massive flying unit.', loot: 'Queen Reactor' },
  { name: 'Bastion', type: 'ARC Tank', threat: 'High', desc: 'Heavily armored ground unit.', loot: 'Bastion Cell' },
  { name: 'Shrimp', type: 'ARC Unit', threat: 'Medium', desc: 'Explosive kamikaze unit.', loot: 'ARC Alloy' },
];

export const LOOT_DATA = [
  { name: 'ARC Alloy', rarity: 'Common', use: 'Crafting Material', value: 200 },
  { name: 'Queen Reactor', rarity: 'Legendary', use: 'Boss Drop', value: 10000 },
  { name: 'Bastion Cell', rarity: 'Epic', use: 'Crafting Component', value: 5000 },
  { name: 'ARC Circuitry', rarity: 'Rare', use: 'Electronics', value: 1000 },
];

export const MAPS_DATA = [
  { name: 'Downtown', size: 'Large', difficulty: 'Hard', features: 'Urban warfare, tall buildings' },
  { name: 'Industrial Zone', size: 'Medium', difficulty: 'Medium', features: 'Factories, conveyor belts' },
  { name: 'Outskirts', size: 'Large', difficulty: 'Easy', features: 'Open fields, scattered buildings' },
];

export const PATCH_NOTES_DATA = [
  { 
    version: '0.5.0', 
    date: '2024-11-20',
    changes: [
      'Added new weapons from Metaforge API',
      'Updated weapon stats to match live game',
      'Improved UI performance'
    ]
  },
];
`;
    
    // Write to file
    fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf8');
    
    console.log(`✅ Generated ${weaponsData.length} weapons!`);
    console.log(`📁 Saved to: ${OUTPUT_FILE}\n`);
    
    // Print sample weapons
    console.log('📋 Sample weapons generated:');
    weaponsData.slice(0, 5).forEach(w => {
      console.log(`   • ${w.name} (${w.type}) - ${w.tier} tier`);
      console.log(`     Stats: ${w.stats.damage} dmg, ${w.stats.fireRate} rpm, ${w.stats.magazineSize} mag`);
      console.log(`     Image: ${w.image}`);
    });
    
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Review the generated file: src/data-generated.js`);
    console.log(`   2. If it looks good, rename it to replace src/data.js`);
    console.log(`   3. Or import it: import { WEAPONS_DATA } from './data-generated';`);
    console.log(`\n✨ Your app now has real-time data from the game! 🎮`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run
generateWeaponsData().catch(console.error);
