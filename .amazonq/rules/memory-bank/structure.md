# Raiders Digest - Project Structure

## Directory Organization

### Root Level
```
RaidersDigest-all/
├── src/                    # Main application source code
├── assets/                 # Static assets (images, icons)
├── scripts/                # Data generation scripts
├── public/                 # Public web assets
├── .expo/                  # Expo build cache
├── App.js                  # Application entry point
├── index.js                # Root index file
├── app.json                # Expo configuration
├── package.json            # Dependencies and scripts
└── vercel.json             # Vercel deployment config
```

### Source Directory (`src/`)
```
src/
├── components/             # Reusable UI components
│   ├── AnimatedScreen.js   # Screen transition animations
│   ├── BackButton.js       # Navigation back button
│   ├── DesktopNav.js       # Desktop navigation bar
│   ├── Footer.js           # App footer component
│   ├── MobileTabBar.js     # Mobile bottom tab bar
│   └── RainbowDecoration.js # Visual decoration element
├── screens/                # Screen components (main views)
│   ├── HomeScreen.js       # Landing page with starred quests
│   ├── QuestsScreen.js     # Quest database and tracking
│   ├── WeaponsScreen.js    # Weapons catalog with filters
│   ├── LootScreen.js       # Loot items database
│   ├── LootCheatSheetScreen.js # Quick loot reference
│   ├── EnemiesScreen.js    # Enemy information
│   ├── MapsScreen.js       # Map locations
│   ├── TradersScreen.js    # Trader information
│   ├── PatchNotesScreen.js # Version history
│   ├── SurvivalGuideScreen.js # Game guide
│   └── CraftingScreen.js   # Crafting information
├── navigation/             # Navigation configuration
│   └── MainTabNavigator.js # Tab navigation setup
├── services/               # External API integrations
│   ├── wikiService.js      # Wiki API service
│   └── metaforgeService.js # Metaforge API service
├── utils/                  # Utility functions
│   ├── apiCache.js         # API response caching
│   ├── apiService.js       # Generic API utilities
│   └── useApiData.js       # Custom hook for API data
├── styles/                 # Shared style definitions
│   └── colors.js           # Color palette constants
├── data-*.js               # Static data files
├── AppNavigator.js         # Root navigation setup
└── constants.js            # App-wide constants
```

### Assets Directory
```
assets/
├── images/                 # General images
│   └── rd-logo.jpeg        # App logo
├── items/                  # Game item images
│   └── weapons/            # Weapon images
├── icon.png                # App icon
├── splash-icon.png         # Splash screen
├── adaptive-icon.png       # Android adaptive icon
└── favicon.png             # Web favicon
```

### Scripts Directory
```
scripts/
├── generateWeaponsData.js  # Weapons data generator
├── generateLootData.js     # Loot data generator
├── generateEnemiesData.js  # Enemies data generator
└── generateMapData.js      # Maps data generator
```

## Core Components

### Navigation Architecture
- **AppNavigator**: Root navigator with password protection screen
- **MainTabNavigator**: Bottom tab navigation for main screens
- **DesktopNav**: Top navigation bar for desktop/tablet views
- **MobileTabBar**: Custom bottom tab bar for mobile

### Screen Components
All screens follow a consistent pattern:
- Wrapped in `AnimatedScreen` for transitions
- Responsive design with desktop/mobile layouts
- Back button navigation (mobile) or persistent nav (desktop)
- Consistent header styling with terminal aesthetic

### Data Layer
- **Static Data Files**: `data-*.js` files contain all game information
- **Generated Data**: Scripts in `/scripts` generate data from external sources
- **API Services**: Optional external data fetching with caching
- **AsyncStorage**: Persistent local storage for user preferences

### Styling System
- **Inline StyleSheet**: React Native StyleSheet API
- **Color Constants**: Centralized color definitions in `styles/colors.js`
- **Responsive Styles**: Conditional styling based on screen dimensions
- **Platform-Specific**: Platform.OS checks for iOS/Android/web differences

## Architectural Patterns

### Component Structure
- Functional components with React Hooks
- useState for local state management
- useEffect for lifecycle operations
- Custom hooks for shared logic (useApiData)

### Data Flow
1. Static data imported from `data-*.js` files
2. Optional API fetching through services layer
3. Caching via apiCache utility
4. AsyncStorage for persistence
5. Component state for UI updates

### Responsive Design
- Dimensions API for screen size detection
- Conditional rendering for mobile/desktop
- Adaptive layouts and navigation
- Platform-specific styling

### Code Organization
- Feature-based screen organization
- Shared components in `/components`
- Utilities and services separated
- Data files at src root level
