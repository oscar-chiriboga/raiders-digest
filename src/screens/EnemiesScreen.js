import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ENEMIES_DATA } from '../data';

export default function EnemiesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>ARC THREATS</Text>
        <Text style={styles.count}>HOSTILES: {ENEMIES_DATA.length}</Text>
      </View>
      {ENEMIES_DATA.map((enemy, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.enemyName}>{enemy.name}</Text>
            <Text style={[styles.threat, styles[`threat${enemy.threat.replace(/[^A-Za-z]/g, '')}`]]}>{enemy.threat.toUpperCase()}</Text>
          </View>
          <Text style={styles.type}>{enemy.type} UNIT</Text>
          <Text style={styles.desc}>{enemy.desc}</Text>
          <Text style={styles.weak}>Weak Point: {enemy.weakPoint}</Text>
          <Text style={styles.drops}>Drops: {enemy.drops}</Text>
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
  count: { color: '#ef4444', fontFamily: 'monospace', fontSize: 12 },
  card: { backgroundColor: '#1e293b', borderRadius: 10, padding: 16, marginBottom: 14 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  enemyName: { color: '#f87171', fontWeight: 'bold', fontSize: 16 },
  threat: { fontWeight: 'bold', fontSize: 12, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  threatExtreme: { backgroundColor: '#b91c1c', color: '#fff' },
  threatLegendary: { backgroundColor: '#7c3aed', color: '#fff' },
  threatHigh: { backgroundColor: '#f59e42', color: '#000' },
  threatMedium: { backgroundColor: '#fbbf24', color: '#000' },
  threatLow: { backgroundColor: '#64748b', color: '#fff' },
  type: { color: '#fbbf24', fontSize: 12, marginBottom: 2 },
  desc: { color: '#cbd5e1', fontSize: 13, marginBottom: 4 },
  weak: { color: '#f59e42', fontSize: 12 },
  drops: { color: '#a3e635', fontSize: 12 },
});
