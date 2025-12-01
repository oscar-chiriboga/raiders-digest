import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { PATCH_NOTES_DATA } from '../../src/data';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import DesktopNav from '../../src/components/DesktopNav';
import SEO from '../../src/components/SEO';

export default function PatchNotesScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const router = useRouter();

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <AnimatedScreen>
      <SEO 
        title="Patch Notes"
        description="Latest Arc Raiders patch notes and updates. Stay informed about game changes, new features, balance updates, and bug fixes."
        path="/patch-notes"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="PatchNotes" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        {!isDesktop && (
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={20} color="#ff8c00" />
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        )}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="document-text" size={16} color="#ff8c00" />
            <Text style={styles.title}>PATCH NOTES // DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>TOTAL: {PATCH_NOTES_DATA.length.toString().padStart(2, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>LATEST: v{PATCH_NOTES_DATA[0].id}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>STATUS: UPDATED</Text>
          </View>
        </View>

        <View style={styles.notesGrid}>
          {PATCH_NOTES_DATA.map((note) => (
            <View key={note.id} style={[styles.noteCard, isDesktop && styles.noteCardDesktop]}>
              <View style={styles.noteHeader}>
                <View style={styles.versionBadge}>
                  <Text style={styles.version}>v{note.id}</Text>
                </View>
                <Text style={styles.date}>{note.date}</Text>
              </View>
              
              <Text style={styles.noteTitle}>{note.title}</Text>
              <Text style={styles.summary}>{note.summary}</Text>
              
              {note.sections && note.sections.map((section, sIdx) => (
                <View key={sIdx} style={styles.section}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  <View style={styles.changesList}>
                    {section.items.map((item, i) => {
                      if (typeof item === 'string') {
                        return (
                          <View key={i} style={styles.changeItem}>
                            <View style={styles.bullet} />
                            <Text style={styles.changeText}>{item}</Text>
                          </View>
                        );
                      } else {
                        return (
                          <View key={i}>
                            <View style={styles.changeItem}>
                              <View style={styles.bullet} />
                              <Text style={styles.changeText}>{item.text}</Text>
                            </View>
                            {item.subitems && item.subitems.map((subitem, j) => (
                              <View key={j} style={styles.subChangeItem}>
                                <View style={styles.subBullet} />
                                <Text style={styles.changeText}>{subitem}</Text>
                              </View>
                            ))}
                          </View>
                        );
                      }
                    })}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 20, paddingTop: 10, maxWidth: '100%', alignSelf: 'center', width: '100%', paddingBottom: 100 },
  contentDesktop: { paddingTop: 70 },
  backBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 20, paddingVertical: 8, paddingHorizontal: 12, alignSelf: 'flex-start', borderWidth: 1, borderColor: '#262626', backgroundColor: 'rgba(255, 140, 0, 0.1)' },
  backText: { color: '#ff8c00', fontSize: 11, fontWeight: '700', letterSpacing: 1.5, fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace' },
  header: { paddingHorizontal: 0, marginBottom: 24 },
  headerTop: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: '900', color: '#ffffff', letterSpacing: -1, textTransform: 'uppercase', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace' },
  statsBar: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', paddingTop: 12, borderTopWidth: 1, borderTopColor: '#262626', gap: 4 },
  statText: { fontSize: 10, color: '#a8a8a8', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', letterSpacing: 1.5 },
  statTextActive: { fontSize: 10, color: '#ff8c00', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', letterSpacing: 1.5 },
  statDivider: { color: '#262626', marginHorizontal: 4 },
  notesGrid: { gap: 24 },
  noteCard: { backgroundColor: 'rgba(23, 23, 23, 0.3)', borderWidth: 1, borderColor: '#262626', padding: 20 },
  noteCardDesktop: { maxWidth: 900 },
  noteHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  versionBadge: { backgroundColor: '#ff8c00', paddingHorizontal: 12, paddingVertical: 6 },
  version: { fontSize: 14, fontWeight: '900', color: '#000000', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace' },
  date: { fontSize: 11, color: '#a8a8a8', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace' },
  noteTitle: { fontSize: 18, fontWeight: '700', color: '#ffffff', marginBottom: 8, fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace' },
  summary: { fontSize: 14, color: '#c0c0c0', lineHeight: 21, marginBottom: 20, fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace' },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 12, fontWeight: '700', color: '#ff8c00', letterSpacing: 1.5, marginBottom: 12, fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace' },
  changesList: { gap: 8 },
  changeItem: { flexDirection: 'row', gap: 10 },
  subChangeItem: { flexDirection: 'row', gap: 10, marginLeft: 20 },
  bullet: { width: 4, height: 4, backgroundColor: '#ff8c00', marginTop: 8 },
  subBullet: { width: 4, height: 4, backgroundColor: '#a8a8a8', marginTop: 8 },
  changeText: { flex: 1, fontSize: 12, color: '#d4d4d8', lineHeight: 18, fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace' },
});
