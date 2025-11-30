import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
