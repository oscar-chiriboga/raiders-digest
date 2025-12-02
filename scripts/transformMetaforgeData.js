/**
 * Transform Metaforge API data to Raiders Digest format
 * 
 * Run: node scripts/transformMetaforgeData.js
 */

const fs = require('fs');
const path = require('path');

// The raw data from https://metaforge.app/api/game-map-data?tableID=arc_map_data&mapID=dam
const rawData = require('./metaforgeRawData.json');

// Category mapping from Metaforge to Raiders Digest
const categoryMap = {
  // Locations
  'extraction': { type: 'extract', icon: 'extract' },
  'player_spawn': { type: 'spawn', icon: 'spawn' },
  'hatch': { type: 'hatch', icon: 'hatch' },
  'supply_station': { type: 'supply', icon: 'supply' },
  'field_depot': { type: 'depot', icon: 'depot' },
  'field_crate': { type: 'crate', icon: 'crate' },
  'metro_station': { type: 'metro', icon: 'metro' },
  'metro_entrance': { type: 'metro', icon: 'metro' },
  'locked_room': { type: 'locked', icon: 'locked' },
  'raider_camp': { type: 'camp', icon: 'camp' },
  
  // Containers
  'weapon_case': { type: 'weapon', icon: 'weapon-crate' },
  'med_crate': { type: 'medical', icon: 'med-crate' },
  'ammo_crate': { type: 'ammo', icon: 'ammo-crate' },
  'utility_crate': { type: 'utility', icon: 'utility-crate' },
  'breachable_container': { type: 'breach', icon: 'breach' },
  'raider_cache': { type: 'cache', icon: 'cache' },
  'base_container': { type: 'container', icon: 'container' },
  'locker': { type: 'locker', icon: 'locker' },
  'car': { type: 'vehicle', icon: 'vehicle' },
  'box': { type: 'box', icon: 'box' },
  'basket': { type: 'basket', icon: 'basket' },
  'bag': { type: 'bag', icon: 'bag' },
  
  // ARCs (enemies)
  'baron_husk': { type: 'baron', icon: 'baron' },
  'arc_husk': { type: 'arc-husk', icon: 'arc-husk' },
  'arc_courier': { type: 'courier', icon: 'courier' },
  'arc_probe': { type: 'probe', icon: 'probe' },
  'security_breach': { type: 'breach-event', icon: 'breach-event' },
  'android': { type: 'droid', icon: 'droid' },
  'tick': { type: 'tick', icon: 'tick' },
  'pop': { type: 'pop', icon: 'pop' },
  'fireball': { type: 'fireball', icon: 'fireball' },
  'rollbot': { type: 'rollbot', icon: 'rollbot' },
  'turret': { type: 'turret', icon: 'turret' },
  'sentinel': { type: 'sentinel', icon: 'sentinel' },
  'snitch': { type: 'snitch', icon: 'snitch' },
  'wasp': { type: 'wasp', icon: 'wasp' },
  'hornet': { type: 'hornet', icon: 'hornet' },
  'shredder': { type: 'shredder', icon: 'shredder' },
  'bison': { type: 'bison', icon: 'bison' },
  'rocketeer': { type: 'rocketeer', icon: 'rocketeer' },
  'bombardier': { type: 'bombardier', icon: 'bombardier' },
  'bastion': { type: 'bastion', icon: 'bastion' },
  'queen': { type: 'queen', icon: 'queen' },
  'matriarch': { type: 'matriarch', icon: 'matriarch' },
  
  // Nature
  'olive': { type: 'nature', icon: 'olive' },
  'lemons': { type: 'nature', icon: 'lemon' },
  'mushroom': { type: 'nature', icon: 'mushroom' },
  'prickly-pear': { type: 'nature', icon: 'prickly-pear' },
  'great-mullein': { type: 'nature', icon: 'mullein' },
  'agave': { type: 'nature', icon: 'agave' },
  'apricot': { type: 'nature', icon: 'apricot' },
  'moss': { type: 'nature', icon: 'moss' },
  'fertilizer': { type: 'nature', icon: 'fertilizer' },
  'roots': { type: 'nature', icon: 'roots' },
  
  // Events
  'antenna': { type: 'event', icon: 'antenna' },
  'bunker': { type: 'event', icon: 'bunker' },
  'harvester': { type: 'event', icon: 'harvester' },
  
  // Quests
  'quests': { type: 'quest', icon: 'quest' },
  'button': { type: 'interact', icon: 'button' },
  'fuel-cell': { type: 'interact', icon: 'fuel-cell' },
};

function transformData(data) {
  const points = [];
  let id = 1;
  
  for (const item of data.allData) {
    const mapping = categoryMap[item.subcategory];
    
    if (!mapping) {
      // Skip unknown categories
      console.log(`Skipping unknown subcategory: ${item.subcategory}`);
      continue;
    }
    
    // Skip items with zlayers !== 2147483647 (these might be underground/alternative layers)
    // Keep items with zlayers === 1 (some new additions)
    if (item.zlayers !== 2147483647 && item.zlayers !== 1) {
      continue;
    }
    
    // Skip items with eventConditionMask !== 1 (conditional spawns)
    // Keep items with eventConditionMask === 1, 8, 16, 64 (common spawn conditions)
    const validMasks = [1, 8, 16, 64];
    if (!validMasks.includes(item.eventConditionMask)) {
      continue;
    }
    
    points.push({
      id: id++,
      name: item.instanceName || mapping.type,
      pos: [item.lat, item.lng],
      type: mapping.type,
      icon: mapping.icon,
      category: item.category,
      subcategory: item.subcategory,
    });
  }
  
  return points;
}

// Transform the data
console.log('🔄 Transforming Metaforge data...\n');
const transformedPoints = transformData(rawData);

console.log(`✅ Transformed ${transformedPoints.length} markers\n`);

// Group by category for stats
const byCategory = {};
for (const point of transformedPoints) {
  if (!byCategory[point.category]) {
    byCategory[point.category] = 0;
  }
  byCategory[point.category]++;
}

console.log('📊 Breakdown by category:');
for (const [category, count] of Object.entries(byCategory).sort((a, b) => b[1] - a[1])) {
  console.log(`   ${category}: ${count}`);
}

// Create the output file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'damBattlegroundsData.js');
const fileContent = `/**
 * Dam Battlegrounds Map Data
 * Extracted from Metaforge.app API
 * ${new Date().toISOString()}
 */

export const damBattlegroundsPoints = ${JSON.stringify(transformedPoints, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`\n✅ Wrote ${transformedPoints.length} points to ${outputPath}\n`);

// Also save a sample for inspection
const samplePath = path.join(__dirname, 'damBattlegroundsSample.json');
fs.writeFileSync(samplePath, JSON.stringify(transformedPoints.slice(0, 20), null, 2), 'utf8');
console.log(`📝 Saved first 20 points sample to ${samplePath}\n`);
