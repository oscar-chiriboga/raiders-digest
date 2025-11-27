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
    <View style={styles.tabBarContainer}>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Raiders Digest© // Unofficial companion app. Not affiliated with Embark Studios.{' \n'}
          All game assets property of their respective owners.
        </Text>
        <View style={styles.footerBottom}>
          <TouchableOpacity 
            style={styles.socialLink}
            onPress={() => Linking.openURL('https://instagram.com/raiders.digest')}
          >
            <Ionicons name="logo-instagram" size={16} color="#ff8c00" />
            <Text style={styles.socialText}>@raiders.digest</Text>
          </TouchableOpacity>
          <Text style={styles.transmission}>// END OF TRANSMISSION_</Text>
        </View>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000',
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: '#262626',
    backgroundColor: '#0a0a0a',
  },
  footerText: {
    fontSize: 9,
    color: '#525252',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    lineHeight: 14,
    marginBottom: 8,
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  socialLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
  },
  socialText: {
    fontSize: 10,
    color: '#ff8c00',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontWeight: '700',
  },
  transmission: {
    fontSize: 9,
    color: '#404040',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
  tabBar: {
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
