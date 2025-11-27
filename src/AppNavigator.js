import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from './navigation/MainTabNavigator';
import PatchNotesScreen from './screens/PatchNotesScreen';
import TradersScreen from './screens/TradersScreen';
import MapsScreen from './screens/MapsScreen';
import LootCheatSheetScreen from './screens/LootCheatSheetScreen';
import SurvivalGuideScreen from './screens/SurvivalGuideScreen';
import CraftingScreen from './screens/CraftingScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Main" 
          screenOptions={{ 
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' }
          }}
        >
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="PatchNotes" component={PatchNotesScreen} />
          <Stack.Screen name="Traders" component={TradersScreen} />
          <Stack.Screen name="Maps" component={MapsScreen} />
          <Stack.Screen name="LootCheatSheet" component={LootCheatSheetScreen} />
          <Stack.Screen name="SurvivalGuide" component={SurvivalGuideScreen} />
          <Stack.Screen name="Crafting" component={CraftingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    position: 'relative',
  },
});
