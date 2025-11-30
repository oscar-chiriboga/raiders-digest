import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';

export default function MobileTabBar() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Home', icon: 'home', route: '/' },
    { name: 'Weapons', icon: 'hammer', route: '/weapons' },
    { name: 'Enemies', icon: 'skull', route: '/enemies' },
    { name: 'Quests', icon: 'newspaper', route: '/quests' },
    { name: 'Loot', icon: 'cube', route: '/loot' },
  ];

  const isActiveRoute = (route) => {
    if (route === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(route);
  };

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => {
        const isActive = isActiveRoute(tab.route);
        return (
          <Link key={tab.name} href={tab.route} asChild>
            <TouchableOpacity style={styles.tab}>
              <View style={[styles.tabIconContainer, isActive && styles.tabIconContainerActive]}>
                <Ionicons
                  name={tab.icon}
                  size={22}
                  color={isActive ? '#ff8c00' : '#737373'}
                />
              </View>
              <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                {tab.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#262626',
    height: Platform.OS === 'ios' ? 72 : 60,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    gap: 4,
    cursor: 'pointer',
  },
  tabIconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'rgba(115, 115, 115, 0.1)',
  },
  tabIconContainerActive: {
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 140, 0, 0.3)',
  },
  tabText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#737373',
    letterSpacing: 0.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  tabTextActive: {
    color: '#ff8c00',
  },
});
