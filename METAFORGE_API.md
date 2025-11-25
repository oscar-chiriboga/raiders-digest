# Metaforge API Integration - Arc Raiders

## 🎉 SUCCESS! Working API Found

**Metaforge has a fully functional API for Arc Raiders data!**

Base URL: `https://metaforge.app/api/arc-raiders`

## API Endpoints

### Get All Items
```
GET https://metaforge.app/api/arc-raiders/items
```

Returns all game items including:
- Weapons (all tiers)
- Materials
- Consumables
- Equipment
- etc.

### Response Format
```json
{
  "data": [
    {
      "id": "bettina-i",
      "name": "Bettina I",
      "description": "Has slow fire rate and high damage output.",
      "item_type": "Weapon",
      "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-i.webp",
      "rarity": "Epic",
      "value": 8000,
      "workbench": "Gunsmith III",
      "stat_block": {
        "damage": 14,
        "fireRate": 32,
        "range": 51.3,
        "stability": 76.4,
        "magazineSize": 20,
        "weight": 11
      },
      "subcategory": "Assault Rifle",
      "ammo_type": "Heavy"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 515,
    "totalPages": 11
  }
}
```

## Features

✅ **No CORS issues** - Works perfectly from browser  
✅ **CDN-hosted images** - Fast, reliable image delivery  
✅ **Complete stats** - Damage, fire rate, range, etc.  
✅ **All tiers** - Weapons I, II, III, IV  
✅ **JSON format** - Easy to parse  
✅ **Free to use** - No API key required  

## Implementation

### Service Created
`src/services/metaforgeService.js` provides:

```javascript
// Fetch all weapons
const weapons = await fetchWeapons();

// Get image for specific weapon
const imageUrl = await getWeaponImage('Bettina');

// Get images for multiple weapons
const imageMap = await getWeaponImages(WEAPONS_DATA);
// Returns: { "Bettina": "https://cdn.metaforge.app/...", ... }
```

### Usage in WeaponsScreen

```javascript
import { getWeaponImages } from '../services/metaforgeService';

useEffect(() => {
  const loadImages = async () => {
    const images = await getWeaponImages(WEAPONS_DATA);
    setWeaponImages(images);
  };
  loadImages();
}, []);
```

## Image URLs

All images are served from Metaforge's CDN:
```
https://cdn.metaforge.app/arc-raiders/icons/{weapon-id}.webp
```

Examples:
- `https://cdn.metaforge.app/arc-raiders/icons/bettina-i.webp`
- `https://cdn.metaforge.app/arc-raiders/icons/anvil-i.webp`
- `https://cdn.metaforge.app/arc-raiders/icons/ferro-i.webp`

## Weapon Tiers

Metaforge tracks all weapon upgrade tiers:
- `Bettina I` (base)
- `Bettina II` (upgrade 1)
- `Bettina III` (upgrade 2)
- `Bettina IV` (upgrade 3)

Our app shows base weapons, but can be extended to show all tiers.

## Data Transformation

The service includes `transformWeaponData()` to convert Metaforge format to app format:

```javascript
// Metaforge → App format
{
  name: "Bettina",           // Base name without tier
  tier: "S",                 // Mapped from rarity
  type: "Assault Rifle",     // From subcategory
  desc: "...",               // From description
  craft: "Gunsmith III",     // From workbench
  image: "https://...",      // From icon
  stats: { ... }             // From stat_block
}
```

## Advantages Over Wiki

| Feature | Metaforge API | Arc Raiders Wiki |
|---------|---------------|------------------|
| **CORS Support** | ✅ Yes | ❌ No |
| **JSON Format** | ✅ Yes | ❌ Returns HTML |
| **Images** | ✅ CDN URLs | ⚠️ Manual download |
| **Stats** | ✅ Full data | ⚠️ Parse HTML |
| **Reliability** | ✅ High | ❌ Low |
| **Speed** | ✅ Fast | ❌ Slow |

## Current Status

✅ **Metaforge API integrated** in `src/services/metaforgeService.js`  
✅ **WeaponsScreen updated** to use Metaforge  
✅ **Images loading automatically** from CDN  
✅ **No manual downloads needed**  

## Testing

Refresh your app (http://localhost:8083) and check the console:
```
🚀 Loading weapon images from Metaforge API...
✅ Mapped Bettina → https://cdn.metaforge.app/arc-raiders/icons/bettina-i.webp
✅ Mapped Ferro → https://cdn.metaforge.app/arc-raiders/icons/ferro-i.webp
...
✅ Loaded 20/20 weapon images from Metaforge
```

Images should now appear in weapon cards! 🎉

## Future Enhancements

- Add support for weapon tier selection (I/II/III/IV)
- Fetch real-time stats from API instead of hardcoded data
- Add enemies, items, and other content from API
- Cache API responses for offline support

## Credits

Thanks to **Metaforge** for providing this excellent API!  
Website: https://metaforge.app
