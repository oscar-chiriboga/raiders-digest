import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
          borderTopWidth: 1,
          borderTopColor: '#262626',
          height: Platform.OS === 'ios' ? 88 : 70,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
          paddingTop: 8,
          position: 'absolute',
          elevation: 0,
        },
        tabBarActiveTintColor: '#ff8c00',
        tabBarInactiveTintColor: '#525252',
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
            <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
              <Ionicons 
                name={iconName} 
                size={20} 
                color={iconColor}
              />
            </View>
          );
        },
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: '700',
          letterSpacing: 0.5,
          fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
          marginTop: 4,
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
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: 36,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  iconContainerActive: {
    backgroundColor: 'rgba(255, 140, 0, 0.15)',
  },
});
