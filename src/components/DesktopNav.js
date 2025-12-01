import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';

const navItems = [
  { name: 'Home', icon: 'home', href: '/' },
  { name: 'Weapons', icon: 'hammer', href: '/weapons' },
  { name: 'Quests', icon: 'newspaper', href: '/quests' },
  { name: 'Events', icon: 'calendar', href: '/events' },
  { name: 'Enemies', icon: 'skull', href: '/enemies' },
  { name: 'Loot', icon: 'cube', href: '/loot' },
  { name: 'Traders', icon: 'people', href: '/traders' },
  { name: 'More', icon: 'apps', href: '/more' },
];

export default function DesktopNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.brand}>
          <Ionicons name="radio" size={20} color="#ff8c00" />
          <Text style={styles.brandText}>RAIDERS DIGEST</Text>
        </View>

        <View style={styles.navItems}>
          {navItems.map((item, index) => {
            // Check if the current path is the item's href. For home, it's a direct match.
            // For others, check if the path starts with the href (e.g., /loot/item-1 matches /loot)
            // but isn't just the root path if the href is not just "/"
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            
            return (
              <Pressable 
                key={item.href}
                onPress={() => router.push(item.href)}
                style={[
                  styles.navItem,
                  isActive && styles.navItemActive,
                  index < navItems.length - 1 && { marginRight: 8 }
                ]}
              >
                <Ionicons 
                  name={item.icon} 
                  size={18} 
                  color={isActive ? '#ff8c00' : '#a8a8a8'} 
                />
                <Text style={[styles.navText, isActive && styles.navTextActive]}>
                  {item.name.toUpperCase()}
                </Text>
                {isActive && <View style={styles.activeIndicator} />}
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 12,
    maxWidth: 1600,
    alignSelf: 'center',
    width: '100%',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 2,
    fontFamily: 'monospace',
    marginLeft: 12,
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#262626',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  navItemActive: {
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderColor: '#ff8c00',
  },
  navText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#a8a8a8',
    letterSpacing: 1,
    fontFamily: 'monospace',
    marginLeft: 6,
  },
  navTextActive: {
    color: '#ff8c00',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#ff8c00',
  },
});