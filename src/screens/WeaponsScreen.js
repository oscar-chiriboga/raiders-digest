import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { WEAPONS_DATA } from '../data';

const FILTERS = ['All', 'Assault Rifle', 'Rifle', 'Shotgun', 'Sniper', 'SMG', 'Heavy', 'Pistol'];

export default function WeaponsScreen() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? WEAPONS_DATA : WEAPONS_DATA.filter(w => w.type === filter);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>WEAPON DATABASE</Text>
        <Text style={styles.count}>RECORDS: {filtered.length}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
        {FILTERS.map(f => (
          <TouchableOpacity key={f} onPress={() => setFilter(f)} style={[styles.filterBtn, filter === f && styles.filterBtnActive]}>
            <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {filtered.map((weapon, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.weaponName}>{weapon.name}</Text>
            <Text style={[styles.tier, styles[`tier${weapon.tier}`]]}>TIER {weapon.tier}</Text>
          </View>
          <Text style={styles.type}>{weapon.type}</Text>
          <Text style={styles.desc}>{weapon.desc}</Text>
          <Text style={styles.craft}>Craft: {weapon.craft}</Text>
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
  filterRow: { flexDirection: 'row', marginBottom: 16 },
  filterBtn: { backgroundColor: '#1e293b', borderRadius: 16, paddingVertical: 6, paddingHorizontal: 14, marginRight: 8 },
  filterBtnActive: { backgroundColor: '#f59e42' },
  filterText: { color: '#cbd5e1', fontWeight: 'bold', fontSize: 13 },
  filterTextActive: { color: '#000' },
  card: { backgroundColor: '#1e293b', borderRadius: 10, padding: 16, marginBottom: 14 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  weaponName: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  tier: { fontWeight: 'bold', fontSize: 12, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  tierS: { backgroundColor: '#f59e42', color: '#000' },
  tierA: { backgroundColor: '#e5e7eb', color: '#000' },
  tierB: { backgroundColor: '#64748b', color: '#fff' },
  tierC: { backgroundColor: '#334155', color: '#fff' },
  tierD: { backgroundColor: '#334155', color: '#fff' },
  type: { color: '#fbbf24', fontSize: 12, marginBottom: 2 },
  desc: { color: '#cbd5e1', fontSize: 13, marginBottom: 4 },
  craft: { color: '#f59e42', fontSize: 12 },
});
