import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

export default function DesktopNav({ navigation, currentRoute }) {
  const navItems = [
    { name: 'Home', icon: 'home', route: 'Home' },
    { name: 'Weapons', icon: 'hammer', route: 'Weapons' },
    { name: 'Enemies', icon: 'skull', route: 'Enemies' },
    { name: 'Quests', icon: 'newspaper', route: 'Quests' },
    { name: 'Loot', icon: 'cube', route: 'Loot' },
    { name: 'Traders', icon: 'people', route: 'Traders' },
    { name: 'Patch Notes', icon: 'document-text', route: 'PatchNotes' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        {/* Logo/Brand */}
        {currentRoute !== 'Home' && (
          <View style={styles.brand}>
            <Ionicons name="radio" size={20} color="#ff8c00" />
            <Text style={styles.brandText}>RAIDERS DIGEST</Text>
          </View>
        )}
        {currentRoute === 'Home' && <View style={styles.brand} />}

        {/* Navigation Items */}
        <View style={styles.navItems}>
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <TouchableOpacity
                key={item.route}
                style={[styles.navItem, isActive && styles.navItemActive]}
                onPress={() => {
                  navigation.dispatch(
                    CommonActions.navigate({
                      name: item.route,
                    })
                  );
                }}
              >
                <Ionicons 
                  name={item.icon} 
                  size={18} 
                  color={isActive ? '#ff8c00' : '#737373'} 
                />
                <Text style={[styles.navText, isActive && styles.navTextActive]}>
                  {item.name.toUpperCase()}
                </Text>
                {isActive && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
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
    gap: 12,
  },
  brandText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 2,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  navItems: {
    flexDirection: 'row',
    gap: 8,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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
    fontWeight: '700',
    color: '#737373',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
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
