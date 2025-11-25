# Adding Images to Raiders Digest

## ⚠️ Arc Raiders Wiki - Manual Download Required

**The Arc Raiders wiki (https://arcraiders.wiki) does NOT support API access or CORS.**

All images must be downloaded manually from the wiki.

## Quick Guide: How to Add Item Images

### 1. **Download Images from Arc Raiders Wiki**

**🚀 Quick Method:** Open `download-helper.html` in your browser and click "Open All Weapon Pages"

**Manual Method:**
1. Visit https://arcraiders.wiki/wiki/Weapons (or relevant page)
2. Click on an item (e.g., "Bettina")
3. Right-click on the item image
4. Select "Save Image As..."
5. Save with proper naming:
   - Use lowercase
   - Replace spaces with hyphens
   - Example: "Il Toro" → `il-toro.png`

### 2. **Prepare Your Images**
- Save weapon/enemy/loot images as `.png` or `.jpg`
- Recommended size: **512x512px** for consistency
- Use transparent backgrounds for PNG files
- Name format: `weapon-name.png` (lowercase, hyphenated)

Example: `bettina.png`, `ferro.png`, `wasp-drone.png`

### 3. **Add Images to Assets Folder**

Place downloaded images in the correct folder:

```
assets/
  └── items/
      ├── weapons/
      │   ├── bettina.png          ← from https://arcraiders.wiki/wiki/Bettina
      │   ├── ferro.png            ← from https://arcraiders.wiki/wiki/Ferro
      │   └── tempest.png          ← from https://arcraiders.wiki/wiki/Tempest
      ├── enemies/
      │   ├── wasp.png
      │   ├── queen.png
      │   └── leaper.png
      └── loot/
          ├── arc-alloy.png
          └── queen-reactor.png
```

### 4. **Update Data Files**

In `src/data.js`, add an `image` field to each item:

```javascript
export const WEAPONS_DATA = [
  { 
    name: 'Bettina',
    image: require('../assets/items/weapons/bettina.png'), // Add this line
    tier: 'S',
    type: 'Assault Rifle',
    desc: 'Lower fire rate but massive damage...',
    craft: '3 Adv. Mech Components...'
  },
  // ... more weapons
];
```

### 5. **Update Component to Use Images**

The placeholder in `WeaponsScreen.js` is already set up! Just update it:

```javascript
// Replace the placeholder View with:
{weapon.image ? (
  <Image 
    source={weapon.image} 
    style={styles.weaponImage}
    resizeMode="contain"
  />
) : (
  <View style={styles.weaponImagePlaceholder}>
    <Text style={styles.placeholderText}>📷</Text>
    <Text style={styles.imageLabel}>{weapon.name}</Text>
  </View>
)}
```

### 6. **Bulk Image Import (Optional)**

For many images, use this pattern in `data.js`:

```javascript
// At the top of data.js
const weaponImages = {
  bettina: require('../assets/items/weapons/bettina.png'),
  ferro: require('../assets/items/weapons/ferro.png'),
  tempest: require('../assets/items/weapons/tempest.png'),
  // ... add all weapons
};

// Then in the data:
export const WEAPONS_DATA = [
  { 
    name: 'Bettina',
    image: weaponImages.bettina,
    // ... rest of data
  },
];
```

## Alternative: Use URLs for Images

If you want to use online images (easier to update):

```javascript
export const WEAPONS_DATA = [
  { 
    name: 'Bettina',
    imageUrl: 'https://yourdomain.com/images/bettina.png',
    // ... rest of data
  },
];
```

Then in the component:

```javascript
<Image 
  source={{ uri: weapon.imageUrl }} 
  style={styles.weaponImage}
  resizeMode="contain"
/>
```

## Image Style Already Defined

The image container is already styled in `WeaponsScreen.js`:
- Desktop: 180px height
- Mobile: 140px height
- Full width
- Dark background with subtle border

Just add your images and they'll automatically fit perfectly! 🎨
