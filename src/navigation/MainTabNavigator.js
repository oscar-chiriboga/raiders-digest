import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import WeaponsScreen from '../screens/WeaponsScreen';
import EnemiesScreen from '../screens/EnemiesScreen';
import QuestsScreen from '../screens/QuestsScreen';
import LootScreen from '../screens/LootScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  const tabBarHeight = Platform.OS === 'ios' ? 70 : 65;
  const bottomPadding = insets.bottom > 0 ? insets.bottom : 10;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: isDesktop ? { display: 'none' } : {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#000000',
          borderTopWidth: 1,
          borderTopColor: '#1a1a1a',
          height: tabBarHeight + bottomPadding,
          paddingBottom: bottomPadding,
          paddingTop: 8,
          elevation: 0,
        },
        tabBarActiveTintColor: '#ff8c00',
        tabBarInactiveTintColor: '#666666',
        tabBarShowLabel: true,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

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
                color={color}
              />
            </View>
          );
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
          marginTop: 4,
          marginBottom: 0,
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
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: -8,
    width: 32,
    height: 2,
    backgroundColor: '#ff8c00',
  },
});
