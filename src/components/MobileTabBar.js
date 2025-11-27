import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
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
          <Ionicons name={tab.icon} size={24} color="#404040" />
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
    borderTopWidth: 2,
    borderTopColor: 'rgba(255, 140, 0, 0.3)',
    height: Platform.OS === 'ios' ? 88 : 70,
    paddingBottom: Platform.OS === 'ios' ? 28 : 8,
    paddingTop: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tabText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#404040',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginTop: 4,
  },
});
