// Find min/max coordinates in damBattlegroundsData.js
const fs = require('fs');

// Read the generated data file
const fileContent = fs.readFileSync('./src/data/damBattlegroundsData.js', 'utf8');

// Extract the array (it's exported as damBattlegroundsPoints)
const arrayMatch = fileContent.match(/export const damBattlegroundsPoints = (\[[\s\S]*\]);/);
if (!arrayMatch) {
  console.error('Could not find damBattlegroundsPoints array');
  process.exit(1);
}

const points = JSON.parse(arrayMatch[1]);

console.log(`📊 Analyzing ${points.length} markers...\n`);

// Find min/max lat/lng
let minLat = Infinity, maxLat = -Infinity;
let minLng = Infinity, maxLng = -Infinity;

points.forEach(point => {
  const [lat, lng] = point.pos;
  minLat = Math.min(minLat, lat);
  maxLat = Math.max(maxLat, lat);
  minLng = Math.min(minLng, lng);
  maxLng = Math.max(maxLng, lng);
});

console.log('📏 Coordinate Ranges:');
console.log(`   Latitude (Y):  ${minLat.toFixed(2)} to ${maxLat.toFixed(2)}`);
console.log(`   Longitude (X): ${minLng.toFixed(2)} to ${maxLng.toFixed(2)}`);
console.log(`\n📐 Dimensions:`);
console.log(`   Width (X):  ${(maxLng - minLng).toFixed(2)}`);
console.log(`   Height (Y): ${(maxLat - minLat).toFixed(2)}`);

console.log('\n🎯 Recommended Map Bounds:');
// Add some padding (5%)
const paddingX = (maxLng - minLng) * 0.05;
const paddingY = (maxLat - minLat) * 0.05;

const recommendedBounds = [
  [Math.floor(minLat - paddingY), Math.floor(minLng - paddingX)],
  [Math.ceil(maxLat + paddingY), Math.ceil(maxLng + paddingX)]
];

console.log(`   With 5% padding: [[${recommendedBounds[0][0]}, ${recommendedBounds[0][1]}], [${recommendedBounds[1][0]}, ${recommendedBounds[1][1]}]]`);

// Round to nice numbers
const niceBounds = [
  [Math.floor(minLat / 100) * 100, Math.floor(minLng / 100) * 100],
  [Math.ceil(maxLat / 100) * 100, Math.ceil(maxLng / 100) * 100]
];

console.log(`   Rounded to 100s:  [[${niceBounds[0][0]}, ${niceBounds[0][1]}], [${niceBounds[1][0]}, ${niceBounds[1][1]}]]`);

// Check if it's close to 5120x5120 (common game map size)
console.log('\n💡 Analysis:');
if (maxLat < 5200 && maxLng < 5200) {
  console.log('   ✅ Coordinates fit within 5120x5120 (common Leaflet map size)');
  console.log('   Recommended: [[0, 0], [5120, 5120]]');
} else if (maxLat < 7100 && maxLng < 7100) {
  console.log('   ✅ Coordinates fit within 7000x7000 (your current map size)');
  console.log('   Keep: [[0, 0], [7000, 7000]]');
} else {
  console.log('   ⚠️  Coordinates exceed typical map sizes');
  console.log(`   Recommended: [[0, 0], [${Math.ceil(Math.max(maxLat, maxLng) / 1000) * 1000}, ${Math.ceil(Math.max(maxLat, maxLng) / 1000) * 1000}]]`);
}
