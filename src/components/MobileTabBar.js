import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MobileTabBar({ navigation }) {
  const tabs = [
    { name: 'Home', icon: 'home', route: 'Main', params: { screen: 'Home' } },
    { name: 'Weapons', icon: 'hammer', route: 'Main', params: { screen: 'Weapons' } },
    { name: 'Enemies', icon: 'skull', route: 'Main', params: { screen: 'Enemies' } },
    { name: 'Quests', icon: 'newspaper', route: 'Main', params: { screen: 'Quests' } },
    { name: 'Loot', icon: 'cube', route: 'Main', params: { screen: 'Loot' } },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => navigation.navigate(tab.route, tab.params)}
        >
          <View style={styles.tabIconContainer}>
            <Ionicons name={tab.icon} size={22} color="#737373" />
          </View>
          <Text style={styles.tabText}>{tab.name.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
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
  },
  tabIconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'rgba(115, 115, 115, 0.1)',
  },
  tabText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#737373',
    letterSpacing: 0.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
