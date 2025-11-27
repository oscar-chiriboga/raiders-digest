# Raiders Digest - Development Guidelines

## Code Quality Standards

### File Structure & Organization
- **Auto-generated files**: Mark with header comment including generation timestamp and item count
  ```javascript
  // Auto-generated from Metaforge API
  // Generated: 2025-11-25T00:08:22.666Z
  // Total Items: 440
  ```
- **Export patterns**: Use named exports for data constants (e.g., `export const LOOT_DATA = [...]`)
- **Data organization**: Group related data in dedicated files (e.g., `data-generated-loot.js`, `data-quests.js`)

### Code Formatting
- **Line breaks**: Use Windows-style line endings (`\r\n`)
- **Indentation**: 2 spaces for JavaScript/JSX
- **String quotes**: Single quotes for JavaScript, double quotes for JSX attributes
- **Semicolons**: Always use semicolons to terminate statements
- **Trailing commas**: Include in multi-line arrays and objects

### Naming Conventions
- **Constants**: SCREAMING_SNAKE_CASE for data constants (e.g., `LOOT_DATA`, `CACHE_DURATION`)
- **Components**: PascalCase for React components (e.g., `LootScreen`, `AnimatedScreen`)
- **Functions**: camelCase for functions and methods (e.g., `getCachedData`, `loadTrackedQuests`)
- **Files**: PascalCase for component files, camelCase for utility files
- **CSS classes**: camelCase for StyleSheet definitions

### Documentation
- **JSDoc comments**: Use for utility functions with parameter and return type descriptions
  ```javascript
  /**
   * Get cached data if available and not expired
   * @param {string} key - Cache key
   * @returns {Promise<any|null>} - Cached data or null if expired/not found
   */
  ```
- **Inline comments**: Explain complex logic, API quirks, or business rules
- **Console logging**: Use descriptive prefixes for debugging (e.g., `[Cache HIT]`, `[Cache EXPIRED]`)

## Semantic Patterns

### React Component Structure
**Pattern frequency: 5/5 files**

Standard component organization:
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ... } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ComponentName({ navigation }) {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  return (
    <AnimatedScreen>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="Name" />}
      <ScrollView style={styles.container}>
        {/* Content */}
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  // Styles
});
```

### Responsive Design Pattern
**Pattern frequency: 5/5 files**

Consistent approach to desktop/mobile layouts:
```javascript
const { width } = Dimensions.get('window');
const isDesktop = width > 768;

// In component
{isDesktop && <DesktopNav />}
style={[styles.base, isDesktop && styles.baseDesktop]}

// In StyleSheet
content: {
  padding: isDesktop ? 40 : 20,
},
contentDesktop: {
  paddingTop: 70,
},
```

### Data Filtering & Search
**Pattern frequency: 3/5 files**

Standard filtering pattern with multiple criteria:
```javascript
const filtered = DATA.filter(item => {
  const matchesSearch = !search || 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase());
  
  const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
  const matchesRarity = selectedRarity === 'All' || item.rarity === selectedRarity;
  
  return matchesSearch && matchesCategory && matchesRarity;
});
```

### Caching Strategy
**Pattern frequency: 2/5 files**

Dual-storage approach for web and native:
```javascript
const storage = Platform.OS === 'web' ? {
  getItem: async (key) => localStorage.getItem(key),
  setItem: async (key, value) => localStorage.setItem(key, value),
  // ...
} : {
  // In-memory fallback for native
  data: {},
  getItem: async (key) => storage.data[key] || null,
  // ...
};
```

### Modal Patterns
**Pattern frequency: 2/5 files**

Consistent modal implementation:
```javascript
const [selectedItem, setSelectedItem] = useState(null);

<Modal
  visible={selectedItem !== null}
  animationType="fade"
  transparent={true}
  onRequestClose={() => setSelectedItem(null)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      {/* Modal content */}
    </View>
  </View>
</Modal>
```

### Error Handling
**Pattern frequency: 4/5 files**

Try-catch with console logging and graceful fallbacks:
```javascript
try {
  const data = await fetchData();
  return data;
} catch (error) {
  console.error(`[Context] Error message:`, error);
  return fallbackValue;
}
```

## Internal API Usage

### AsyncStorage for Persistence
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
await AsyncStorage.setItem(KEY, JSON.stringify(data));

// Load data
const stored = await AsyncStorage.getItem(KEY);
const data = stored ? JSON.parse(stored) : defaultValue;
```

### Navigation
```javascript
// Navigate to screen
navigation.navigate('ScreenName');

// Go back
navigation.goBack();

// Listen for focus events
const unsubscribe = navigation.addListener('focus', () => {
  // Refresh data
});
return unsubscribe;
```

### Expo Vector Icons
```javascript
import { Ionicons } from '@expo/vector-icons';

<Ionicons name="icon-name" size={24} color="#ff8c00" />
```

### React Native SVG
```javascript
import Svg, { Defs, LinearGradient, Stop, G, Path, Text as SvgText } from 'react-native-svg';

<Svg viewBox="0 0 800 300">
  <Defs>
    <LinearGradient id="gradient">
      <Stop offset="0%" stopColor="#ff3300" />
    </LinearGradient>
  </Defs>
  <G>
    <Path d="M 50 50 L 150 50" stroke="#444" />
  </G>
</Svg>
```

### Platform-Specific Code
```javascript
import { Platform } from 'react-native';

// Conditional execution
if (Platform.OS === 'web') {
  // Web-specific code
}

// Conditional styling
fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace'
```

## Frequently Used Idioms

### Conditional Rendering
```javascript
{condition && <Component />}
{items.length > 0 ? <List /> : <EmptyState />}
```

### Array Mapping with Keys
```javascript
{items.map((item, index) => (
  <View key={item.id || index}>
    {/* Content */}
  </View>
))}
```

### Number Padding
```javascript
count.toString().padStart(3, '0')  // "042"
```

### String Truncation
```javascript
<Text numberOfLines={1}>{longText}</Text>
```

### Rarity Color Mapping
```javascript
const getTierColor = (tier) => {
  const tierMap = {
    'Common': { color: '#9ca3af', letter: 'D', bg: 'rgba(156, 163, 175, 0.1)' },
    'Uncommon': { color: '#22c55e', letter: 'C', bg: 'rgba(34, 197, 94, 0.1)' },
    'Rare': { color: '#3b82f6', letter: 'B', bg: 'rgba(59, 130, 246, 0.1)' },
    'Epic': { color: '#a855f7', letter: 'A', bg: 'rgba(168, 85, 247, 0.1)' },
    'Legendary': { color: '#FFD700', letter: 'S', bg: 'rgba(255, 215, 0, 0.1)' }
  };
  return tierMap[tier] || tierMap['Common'];
};
```

### Image Loading with Fallback
```javascript
{item.icon ? (
  <Image 
    source={{ uri: item.icon }} 
    style={styles.icon} 
    resizeMode="contain"
    onError={() => {}}
  />
) : (
  <Ionicons name="cube" size={24} color={color} />
)}
```

## Popular Annotations

### Component Props
```javascript
export default function ScreenName({ navigation }) {
  // navigation prop from React Navigation
}
```

### State Management
```javascript
const [state, setState] = useState(initialValue);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
```

### Effect Dependencies
```javascript
useEffect(() => {
  // Effect code
}, [dependency1, dependency2]);  // Re-run when dependencies change

useEffect(() => {
  // Mount only
}, []);  // Empty array = run once on mount
```

### Async Operations
```javascript
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
```

## Best Practices

### Performance
- Use `numberOfLines` prop to truncate text instead of JavaScript string manipulation
- Implement responsive design with `Dimensions.get('window')` checked once at module level
- Cache API responses with timestamps to reduce network calls
- Use `useRef` for animated values to avoid re-renders

### Accessibility
- Provide meaningful icon names from Ionicons
- Use semantic color names in constants file
- Ensure touch targets are at least 44x44 pixels

### Maintainability
- Keep data separate from components in dedicated data files
- Use constants for repeated values (colors, durations, keys)
- Implement consistent error handling patterns
- Add descriptive console logs for debugging

### Security
- Never commit API keys or sensitive data
- Use environment variables for configuration
- Validate and sanitize user input before storage

### Code Organization
- Group related styles together in StyleSheet
- Keep component files under 1000 lines
- Extract reusable components to separate files
- Use barrel exports for cleaner imports
