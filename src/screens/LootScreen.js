import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { LOOT_DATA } from '../data';

export default function LootScreen() {
  const [search, setSearch] = useState('');
  const filtered = LOOT_DATA.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.source.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>LOOT REGISTRY</Text>
      <TextInput
        style={styles.input}
        placeholder="Search items (e.g., 'Alloy', 'Queen')..."
        placeholderTextColor="#64748b"
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.tableHeader}>
        <Text style={styles.th}>Item Name</Text>
        <Text style={styles.th}>Source</Text>
        <Text style={styles.th}>Usage</Text>
      </View>
      {filtered.map((item, idx) => (
        <View key={idx} style={styles.row}>
          <Text style={styles.td}>{item.name}</Text>
          <Text style={styles.td}>{item.source}</Text>
          <Text style={styles.tdUsage}>{item.use}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  input: { backgroundColor: '#1e293b', color: '#fff', borderRadius: 8, padding: 10, marginBottom: 12 },
  tableHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  th: { color: '#f59e42', fontWeight: 'bold', flex: 1, fontSize: 13 },
  row: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1e293b', borderRadius: 6, marginBottom: 4, padding: 8 },
  td: { color: '#fff', flex: 1, fontSize: 12 },
  tdUsage: { color: '#f59e42', flex: 1, fontSize: 12 },
});
