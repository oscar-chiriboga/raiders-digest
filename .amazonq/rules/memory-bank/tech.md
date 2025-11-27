# Raiders Digest - Technology Stack

## Core Technologies

### Framework & Runtime
- **React Native**: 0.81.5 - Cross-platform mobile framework
- **React**: 19.1.0 - UI library
- **React DOM**: 19.1.0 - Web rendering
- **Expo**: ~54.0.25 - Development platform and build tooling

### Navigation
- **@react-navigation/native**: ^7.1.21 - Navigation framework
- **@react-navigation/native-stack**: ^7.8.0 - Stack navigator
- **@react-navigation/bottom-tabs**: ^7.8.6 - Tab navigator
- **react-native-screens**: ^4.18.0 - Native screen optimization
- **react-native-safe-area-context**: ^5.6.2 - Safe area handling

### Storage & State
- **@react-native-async-storage/async-storage**: ^2.2.0 - Persistent local storage
- No external state management (uses React hooks)

### UI & Graphics
- **expo-linear-gradient**: ^15.0.7 - Gradient components
- **expo-status-bar**: ~3.0.8 - Status bar control
- **react-native-svg**: ^15.15.0 - SVG rendering
- **@expo/vector-icons**: Ionicons for icons

### Web Support
- **react-native-web**: ^0.21.0 - Web platform compatibility

### Development Tools
- **@react-native-community/cli-server-api**: ^20.0.2 - Development server

## Build System

### Package Manager
- npm (package-lock.json present)

### Available Scripts
```bash
npm start              # Start Expo development server
npm run android        # Run on Android device/emulator
npm run ios            # Run on iOS device/simulator
npm run web            # Run in web browser
npm run build          # Export for web deployment
npm run build:prod     # Production web build
```

### Build Configuration
- **Expo Config**: app.json defines app metadata
- **Web Export**: Static site generation via `expo export`
- **Platform Support**: iOS, Android, Web

## Deployment

### Platform: Vercel
- Static site hosting
- Automatic deployments from Git
- Configuration in vercel.json
- Custom 404 handling (public/404.html)

### Build Process
1. `expo export --platform web` generates static files
2. Output in `dist/` directory
3. Vercel serves static assets
4. No server-side rendering required

## Development Environment

### Requirements
- Node.js (version not specified, recommend LTS)
- npm package manager
- Expo CLI (installed via dependencies)

### Platform-Specific Setup
- **iOS**: Xcode and iOS Simulator (macOS only)
- **Android**: Android Studio and Android Emulator
- **Web**: Modern web browser

### Configuration Files
- **app.json**: Expo app configuration
  - App name, slug, version
  - Platform-specific settings
  - Icon and splash screen
  - New architecture enabled
- **package.json**: Dependencies and scripts
- **vercel.json**: Deployment configuration
- **.gitignore**: Git exclusions
- **.vercelignore**: Vercel deployment exclusions

## Code Style & Standards

### Language
- JavaScript (ES6+)
- JSX for component templates
- No TypeScript

### Module System
- ES6 imports/exports
- Relative path imports for local modules
- Named exports for utilities
- Default exports for components

### Platform Detection
```javascript
Platform.OS === 'ios' | 'android' | 'web'
```

### Styling Approach
- React Native StyleSheet API
- Inline style objects
- Platform-specific styles via Platform.select()
- Responsive design via Dimensions API

## Data Management

### Static Data
- JSON-like JavaScript objects in `data-*.js` files
- No database required
- All data bundled with app

### API Integration (Optional)
- Wiki API service for external data
- Metaforge API service
- Caching layer via apiCache utility
- Custom useApiData hook

### Storage Strategy
- AsyncStorage for user preferences
- localStorage for web authentication
- No backend database
- No user accounts or cloud sync

## Asset Management

### Images
- PNG format for icons and UI elements
- JPEG for photos and screenshots
- Organized in assets/ directory
- Platform-specific icons (iOS, Android, Web)

### Fonts
- Platform default fonts
- Courier New for monospace (iOS)
- Generic monospace fallback (Android/Web)

## Performance Considerations

### Optimization Strategies
- Static data (no API calls for core features)
- Lazy loading not implemented (small app size)
- Minimal dependencies
- Native screen optimization via react-native-screens

### Bundle Size
- Single bundle for all platforms
- No code splitting
- All data included in bundle
- Suitable for small-to-medium apps

## Version Information
- **App Version**: 1.0.0
- **Expo SDK**: ~54.0.25
- **React Native**: 0.81.5
- **React**: 19.1.0
