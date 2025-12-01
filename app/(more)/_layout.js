import React from 'react';
import { Stack } from 'expo-router';

export default function MoreLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="more" options={{ title: 'More' }}/>
      <Stack.Screen name="enemies" options={{ title: 'Enemies' }}/>
      <Stack.Screen name="loot" options={{ title: 'Loot' }}/>
      <Stack.Screen name="traders" options={{ title: 'Traders' }}/>
      <Stack.Screen name="maps" options={{ title: 'Maps' }}/>
      <Stack.Screen name="crafting" options={{ title: 'Crafting' }}/>
      <Stack.Screen name="loot-cheatsheet" options={{ title: 'Loot Cheat Sheet' }}/>
      <Stack.Screen name="survival-guide" options={{ title: 'Survival Guide' }}/>
      <Stack.Screen name="patch-notes" options={{ title: 'Patch Notes' }}/>
    </Stack>
  );
}