import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import HomeScreen from '../screens/HomeScreen';
import WeaponsScreen from '../screens/WeaponsScreen';
import EnemiesScreen from '../screens/EnemiesScreen';
import QuestsScreen from '../screens/QuestsScreen';
import LootScreen from '../screens/LootScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: isDesktop ? { display: 'none' } : {
          backgroundColor: '#000000',
          borderTopWidth: 2,
          borderTopColor: 'rgba(255, 140, 0, 0.3)',
          height: Platform.OS === 'ios' ? 88 : 70,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
          paddingTop: 4,
          position: 'absolute',
          elevation: 0,
          shadowColor: '#ff8c00',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.2,
          shadowRadius: 12,
        },
        tabBarActiveTintColor: '#ff8c00',
        tabBarInactiveTintColor: '#404040',
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: '700',
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
          marginTop: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 2,
        },
        tabBarBackground: () => (
          <View style={styles.tabBarBackground}>
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.95)', '#000000']}
              style={styles.gradient}
            />
          </View>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? '#ff8c00' : '#404040';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Weapons') {
            iconName = 'hammer';
          } else if (route.name === 'Enemies') {
            iconName = 'skull';
          } else if (route.name === 'Quests') {
            iconName = 'newspaper';
          } else if (route.name === 'Loot') {
            iconName = 'cube';
          }

          return (
            <View style={styles.iconContainer}>
              {focused && <View style={styles.activeIndicator} />}
              <Ionicons 
                name={iconName} 
                size={24} 
                color={iconColor}
                style={focused && styles.iconGlow}
              />
            </View>
          );
        },
        tabBarLabel: ({ focused, color }) => {
          let label = route.name;
          return (
            <Text
              style={[
                styles.tabLabel,
                { color: focused ? '#ffffff' : '#404040' },
              ]}
              numberOfLines={1}
            >
              {focused ? `[ ${label.toUpperCase()} ]` : label.toUpperCase()}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Weapons" component={WeaponsScreen} />
      <Tab.Screen name="Enemies" component={EnemiesScreen} />
      <Tab.Screen name="Quests" component={QuestsScreen} />
      <Tab.Screen name="Loot" component={LootScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarBackground: {
    flex: 1,
    backgroundColor: '#000000',
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: -4,
    width: 32,
    height: 2,
    backgroundColor: '#ff8c00',
    shadowColor: '#ff8c00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  iconGlow: {
    shadowColor: '#ff8c00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
  },
  tabLabel: {
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginTop: 2,
  },
});
