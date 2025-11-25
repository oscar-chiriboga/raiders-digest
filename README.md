# 🎮 Raiders Digest

A comprehensive companion app for ARC Raiders, featuring weapon stats, loot locations, quest tracking, and more.

## 🔐 Access

The app is password-protected. Default password: **`raiders2024`**

Once you enter the password, your device will remember you and won't ask again.

## ✨ Features

- **📋 Quest Tracking** - Star your important quests and track them on the home screen
- **⚔️ Weapons Database** - Browse all weapons with detailed stats and filters
- **💎 Loot Catalog** - Complete loot items with rarity and descriptions
- **👾 Enemy Intel** - Information on all ARC threats
- **🗺️ Map Locations** - Key locations and danger zones
- **🛒 Traders** - Trader information and specialties

## 🚀 Quick Start

### Development
```bash
npm install
npm start
```

### Build for Web
```bash
npm run build
```

### Deploy to Vercel
```bash
git push origin main
```
Then connect your repo in [Vercel Dashboard](https://vercel.com)

## 🔧 Configuration

### Change Password
Edit `src/screens/ComingSoonScreen.js`:
```javascript
const PASSWORD = 'your-new-password'; // Line 5
```

### Reset Device Authentication
Clear browser localStorage or use browser dev tools:
```javascript
localStorage.removeItem('RAIDERS_AUTH')
```

## 📱 Tech Stack

- **React Native** - Cross-platform framework
- **Expo** - Development and build tooling
- **React Navigation** - Navigation management
- **AsyncStorage** - Local data persistence
- **Static Data** - No external API dependencies

## 🎨 Design

Cyberpunk/military theme with:
- Dark green and black color scheme
- Terminal-style UI elements
- Glowing accents and animations
- Tactical military aesthetic

## 📄 License

Private project for ARC Raiders community

---

**Made with 💚 for ARC Raiders players**
