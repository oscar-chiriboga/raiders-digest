import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerBox}>
        <Text style={styles.title}>ARC RAIDERS</Text>
        <Text style={styles.subtitle}>TACTICAL FIELD GUIDE // SPERANZA TERMINAL</Text>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeTitle}>WELCOME RAIDER.</Text>
          <Text style={styles.welcomeText}>
            The surface is hostile. Use this guide to identify threats, locate high-value loot, and extract safely. Connect to Gemini Tactical AI for real-time assistance.
          </Text>
        </View>
      </View>
      <View style={styles.tipsBox}>
        <Text style={styles.tipsTitle}>SURVIVAL TIPS</Text>
        <Text style={styles.tip}>• Sound is Key: Running alerts Wasps. Crouch-walk near POIs.</Text>
        <Text style={styles.tip}>• Extraction: Don't get greedy. If you find a rare blueprint, extract immediately.</Text>
        <Text style={styles.tip}>• PvP: Trust no one. Even "friendly" raiders might shoot you for your loot.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 20 },
  headerBox: { backgroundColor: '#f59e42', borderRadius: 16, padding: 20, marginBottom: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  subtitle: { color: '#fde68a', fontFamily: 'monospace', fontSize: 14, marginBottom: 12 },
  welcomeBox: { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: 12 },
  welcomeTitle: { fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  welcomeText: { color: '#fff', fontSize: 14 },
  tipsBox: { backgroundColor: '#1e293b', borderRadius: 8, padding: 16 },
  tipsTitle: { color: '#f59e42', fontWeight: 'bold', marginBottom: 8 },
  tip: { color: '#cbd5e1', fontSize: 14, marginBottom: 4 },
});
