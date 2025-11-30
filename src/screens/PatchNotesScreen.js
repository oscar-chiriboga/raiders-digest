import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PATCH_NOTES_DATA } from '../data';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import MobileTabBar from '../components/MobileTabBar';

export default function PatchNotesScreen({ navigation }) {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="PatchNotes" />}

      <AnimatedScreen style={styles.animatedContent}>
        <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
          {!isDesktop && (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
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

      {!isDesktop && <MobileTabBar navigation={navigation} />}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0a0e14',
  },
  animatedContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    padding: 20,
    paddingTop: 10,
    maxWidth: '100%',
    alignSelf: 'center',
    width: '100%',
    paddingBottom: 100,
  },
  contentDesktop: {
    paddingTop: 70,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#262626',
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
  },
  backText: {
    color: '#ff8c00',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  header: {
    paddingHorizontal: 0,
    marginBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -1,
    textTransform: 'uppercase',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  statsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#262626',
    gap: 4,
  },
  statText: {
    fontSize: 10,
    color: '#737373',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1.5,
  },
  statTextActive: {
    fontSize: 10,
    color: '#ff8c00',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1.5,
  },
  statDivider: {
    color: '#262626',
    marginHorizontal: 4,
  },
  notesGrid: {
    gap: 16,
    paddingHorizontal: 0,
  },
  noteCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 20,
    marginBottom: 16,
  },
  noteCardDesktop: {
    padding: 24,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  versionBadge: {
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ff8c00',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  version: {
    color: '#ff8c00',
    fontSize: 11,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
  date: {
    color: '#737373',
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
  noteTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 12,
  },
  summary: {
    color: '#9ca3af',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#404040',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#ff8c00',
    letterSpacing: 1.5,
    marginBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  changesList: {
    gap: 8,
  },
  changeItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  subChangeItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  bullet: {
    width: 4,
    height: 4,
    backgroundColor: '#ff8c00',
    marginTop: 6,
  },
  subBullet: {
    width: 3,
    height: 3,
    backgroundColor: '#737373',
    marginTop: 7,
  },
  changeText: {
    flex: 1,
    color: '#d4d4d8',
    fontSize: 12,
    lineHeight: 20,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
