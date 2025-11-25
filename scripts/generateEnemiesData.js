const https = require('https');
const fs = require('fs');
const path = require('path');

// Fetch all enemies (ARCs) from the Metaforge API
function fetchEnemies() {
  return new Promise((resolve, reject) => {
    https.get('https://metaforge.app/api/arc-raiders/arcs', (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

// Map enemy category based on name/description
function categorizeEnemy(enemy) {
  const name = enemy.name.toLowerCase();
  const desc = enemy.description.toLowerCase();
  
  // Flying enemies
  if (name.includes('wasp') || name.includes('hornet') || name.includes('snitch') || 
      name.includes('rocketeer') || desc.includes('flying') || desc.includes('drone') ||
      desc.includes('aerial')) {
    return 'Flying';
  }
  
  // Ground enemies
  if (name.includes('tick') || name.includes('pop') || name.includes('fireball') ||
      name.includes('surveyor') || name.includes('rollbot')) {
    return 'Ground';
  }
  
  // Turrets/Stationary
  if (name.includes('turret') || name.includes('sentinel') || 
      desc.includes('turret') || desc.includes('stationary')) {
    return 'Turret';
  }
  
  // Boss/Heavy enemies
  if (name.includes('queen') || name.includes('bastion') || name.includes('bombardier') ||
      name.includes('matriarch') || name.includes('leaper') || name.includes('shredder') ||
      desc.includes('massive') || desc.includes('goliath') || desc.includes('colossal')) {
    return 'Heavy';
  }
  
  // Default to Ground
  return 'Ground';
}

// Determine threat level
function getThreatLevel(enemy) {
  const name = enemy.name.toLowerCase();
  const desc = enemy.description.toLowerCase();
  
  if (name.includes('queen') || name.includes('bombardier') || desc.includes('death sentence')) {
    return 'Extreme';
  }
  
  if (name.includes('bastion') || name.includes('matriarch') || name.includes('leaper') ||
      name.includes('shredder') || name.includes('rocketeer')) {
    return 'High';
  }
  
  if (name.includes('hornet') || name.includes('sentinel') || name.includes('surveyor')) {
    return 'Medium';
  }
  
  return 'Low';
}

// Transform enemy data to app format
function transformEnemy(enemy) {
  return {
    id: enemy.id,
    name: enemy.name,
    image: enemy.icon,
    fullImage: enemy.image || enemy.icon,
    category: categorizeEnemy(enemy),
    threat: getThreatLevel(enemy),
    description: enemy.description,
    shortDesc: enemy.description.substring(0, 150) + (enemy.description.length > 150 ? '...' : ''),
  };
}

async function generateEnemiesData() {
  try {
    console.log('Fetching enemies from Metaforge API...');
    
    const response = await fetchEnemies();
    const enemies = response.data;
    
    console.log(`Found ${enemies.length} enemies`);
    
    // Transform enemies
    const transformedEnemies = enemies.map(transformEnemy);
    
    // Group by category
    const categories = {
      All: transformedEnemies.length,
      Flying: transformedEnemies.filter(e => e.category === 'Flying').length,
      Ground: transformedEnemies.filter(e => e.category === 'Ground').length,
      Turret: transformedEnemies.filter(e => e.category === 'Turret').length,
      Heavy: transformedEnemies.filter(e => e.category === 'Heavy').length,
    };
    
    console.log('\nEnemy breakdown:');
    Object.entries(categories).forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count}`);
    });
    
    // List enemies by category
    console.log('\nEnemies by category:');
    ['Flying', 'Ground', 'Turret', 'Heavy'].forEach(category => {
      const categoryEnemies = transformedEnemies.filter(e => e.category === category);
      if (categoryEnemies.length > 0) {
        console.log(`\n${category}:`);
        categoryEnemies.forEach(e => {
          console.log(`  - ${e.name} (${e.threat})`);
        });
      }
    });
    
    // Generate the data file
    const outputPath = path.join(__dirname, '..', 'src', 'data-generated-enemies.js');
    const fileContent = `// Auto-generated enemies data from Metaforge API
// Generated on: ${new Date().toISOString()}
// Source: https://metaforge.app/api/arc-raiders/arcs

export const ENEMIES_DATA = ${JSON.stringify(transformedEnemies, null, 2)};

export const ENEMY_CATEGORIES = ['All', 'Flying', 'Ground', 'Turret', 'Heavy'];

export const THREAT_LEVELS = ['Low', 'Medium', 'High', 'Extreme'];
`;
    
    fs.writeFileSync(outputPath, fileContent, 'utf8');
    console.log(`\n✓ Generated ${outputPath}`);
    console.log(`✓ Total enemies: ${transformedEnemies.length}`);
    
  } catch (error) {
    console.error('Error generating enemies data:', error);
    process.exit(1);
  }
}

generateEnemiesData();
