import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import SEO from '../../src/components/SEO';

export default function MapsScreen() {
  return (
    <AnimatedScreen>
      <SEO 
        title="Maps Database"
        description="Arc Raiders maps database. Browse all playable maps, locations, and points of interest. Plan your raids with detailed map information."
        path="/maps"
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Ionicons name="map" size={24} color="#ff8c00" />
          <Text style={styles.title}>MAPS // COMING SOON</Text>
          <Text style={styles.subtitle}>Tactical map data will be available soon.</Text>
        </View>
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 20, paddingTop: 80, alignItems: 'center', justifyContent: 'center' },
  header: { alignItems: 'center', gap: 12 },
  title: { fontSize: 24, fontWeight: '900', color: '#ffffff', fontFamily: 'monospace' },
  subtitle: { fontSize: 14, color: '#a8a8a8', fontFamily: 'monospace', textAlign: 'center' },
});
