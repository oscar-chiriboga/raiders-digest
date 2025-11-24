import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MAPS_DATA } from '../data';

export default function MapsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>REGIONAL MAPS</Text>
        <Text style={styles.count}>SECTORS: {MAPS_DATA.length}</Text>
      </View>
      {MAPS_DATA.map((map, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.mapName}>{map.name}</Text>
          <Text style={styles.difficulty}>Threat: {map.difficulty}</Text>
          <Text style={styles.grid}>Sector: {map.grid}</Text>
          <Text style={styles.desc}>{map.desc}</Text>
          <Text style={styles.poiTitle}>Key Locations & Intel:</Text>
          {map.pois.map((poi, i) => (
            <Text key={i} style={styles.poi}>• {poi.name} ({poi.type}) - {poi.loot}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  count: { color: '#f59e42', fontFamily: 'monospace', fontSize: 12 },
  card: { backgroundColor: '#1e293b', borderRadius: 10, padding: 16, marginBottom: 14 },
  mapName: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  difficulty: { color: '#ef4444', fontSize: 12 },
  grid: { color: '#fbbf24', fontSize: 12 },
  desc: { color: '#cbd5e1', fontSize: 13, marginBottom: 4 },
  poiTitle: { color: '#f59e42', fontWeight: 'bold', marginTop: 6 },
  poi: { color: '#a3e635', fontSize: 12 },
});
