import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from './navigation/MainTabNavigator';
import ComingSoonScreen from './screens/ComingSoonScreen';
import PatchNotesScreen from './screens/PatchNotesScreen';
import TradersScreen from './screens/TradersScreen';
import MapsScreen from './screens/MapsScreen';
import LootCheatSheetScreen from './screens/LootCheatSheetScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="ComingSoon" 
          screenOptions={{ 
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' }
          }}
        >
          <Stack.Screen name="ComingSoon" component={ComingSoonScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="PatchNotes" component={PatchNotesScreen} />
          <Stack.Screen name="Traders" component={TradersScreen} />
          <Stack.Screen name="Maps" component={MapsScreen} />
          <Stack.Screen name="LootCheatSheet" component={LootCheatSheetScreen} />
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
