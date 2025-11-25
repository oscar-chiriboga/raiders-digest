/**
 * Metaforge API Service for Arc Raiders
 * Documentation: https://metaforge.app/api/arc-raiders
 */

const METAFORGE_API_BASE = 'https://metaforge.app/api/arc-raiders';

/**
 * Fetch all items from Metaforge API
 * @returns {Promise<Array>} Array of all items
 */
export async function fetchAllItems() {
  try {
    const response = await fetch(`${METAFORGE_API_BASE}/items`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('❌ Error fetching items from Metaforge:', error);
    return [];
  }
}

/**
 * Fetch only weapons from Metaforge API
 * @returns {Promise<Array>} Array of weapon items
 */
export async function fetchWeapons() {
  try {
    const items = await fetchAllItems();
    // Filter for items with item_type === "Weapon"
    return items.filter(item => item.item_type === 'Weapon');
  } catch (error) {
    console.error('❌ Error fetching weapons from Metaforge:', error);
    return [];
  }
}

/**
 * Get weapon image URL from Metaforge
 * @param {string} weaponName - Name of the weapon (e.g., "Bettina")
 * @returns {Promise<string|null>} Image URL or null
 */
export async function getWeaponImage(weaponName) {
  try {
    const weapons = await fetchWeapons();
    
    // Match weapon by name (case-insensitive, check base name without tier)
    const weapon = weapons.find(w => 
      w.name.toLowerCase().startsWith(weaponName.toLowerCase())
    );
    
    if (weapon && weapon.icon) {
      console.log(`✅ Found image for ${weaponName}:`, weapon.icon);
      return weapon.icon;
    }
    
    console.log(`❌ No image found for ${weaponName}`);
    return null;
  } catch (error) {
    console.error(`❌ Error fetching image for ${weaponName}:`, error);
    return null;
  }
}

/**
 * Get weapon images for multiple weapons
 * @param {Array<{name: string}>} weapons - Array of weapons with name property
 * @returns {Promise<Object>} Object mapping weapon names to image URLs
 */
export async function getWeaponImages(weapons) {
  try {
    const allWeapons = await fetchWeapons();
    const imageMap = {};
    
    for (const weapon of weapons) {
      // Find matching weapon (get tier I version for consistency)
      const match = allWeapons.find(w => 
        w.name.toLowerCase().includes(weapon.name.toLowerCase()) &&
        w.name.includes('I') && // Prefer tier I
        !w.name.includes('II') && // Not tier II, III, or IV
        !w.name.includes('III') &&
        !w.name.includes('IV')
      );
      
      if (match && match.icon) {
        imageMap[weapon.name] = match.icon;
        console.log(`✅ Mapped ${weapon.name} → ${match.icon}`);
      } else {
        // Try any tier if tier I not found
        const anyMatch = allWeapons.find(w => 
          w.name.toLowerCase().includes(weapon.name.toLowerCase())
        );
        if (anyMatch && anyMatch.icon) {
          imageMap[weapon.name] = anyMatch.icon;
          console.log(`✅ Mapped ${weapon.name} → ${anyMatch.icon}`);
        }
      }
    }
    
    return imageMap;
  } catch (error) {
    console.error('❌ Error fetching weapon images:', error);
    return {};
  }
}

/**
 * Transform Metaforge weapon data to match app format
 * @param {Object} metaforgeWeapon - Weapon from Metaforge API
 * @returns {Object} Weapon in app format
 */
export function transformWeaponData(metaforgeWeapon) {
  // Extract tier from name (e.g., "Bettina I" → tier I)
  const tierMatch = metaforgeWeapon.name.match(/\b(I|II|III|IV)\b/);
  const tier = tierMatch ? tierMatch[1] : 'I';
  
  // Get base name without tier
  const baseName = metaforgeWeapon.name.replace(/\s+(I|II|III|IV)$/, '').trim();
  
  // Map rarity to tier
  const rarityToTier = {
    'Common': 'C',
    'Uncommon': 'B',
    'Rare': 'A',
    'Epic': 'S',
    'Legendary': 'S'
  };
  
  return {
    name: baseName,
    tier: rarityToTier[metaforgeWeapon.rarity] || 'B',
    type: metaforgeWeapon.subcategory || 'Weapon',
    desc: metaforgeWeapon.description || '',
    craft: metaforgeWeapon.workbench || 'Unknown',
    image: metaforgeWeapon.icon || null,
    // Additional stats from Metaforge
    stats: {
      damage: metaforgeWeapon.stat_block?.damage || 0,
      fireRate: metaforgeWeapon.stat_block?.fireRate || 0,
      range: metaforgeWeapon.stat_block?.range || 0,
      stability: metaforgeWeapon.stat_block?.stability || 0,
      magazineSize: metaforgeWeapon.stat_block?.magazineSize || 0,
      weight: metaforgeWeapon.stat_block?.weight || 0,
    }
  };
}
