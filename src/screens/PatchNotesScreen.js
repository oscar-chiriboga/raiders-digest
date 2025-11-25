import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PATCH_NOTES_DATA } from '../data';
import AnimatedScreen from '../components/AnimatedScreen';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

export default function PatchNotesScreen({ navigation }) {
  return (
    <AnimatedScreen>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← BACK TO DASHBOARD</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>DEV LOG</Text>
          <Text style={styles.subtitle}>SYSTEM UPDATES & PATCH NOTES</Text>
        </View>

        <View style={styles.timeline}>
          {PATCH_NOTES_DATA.map((note, idx) => (
            <View key={note.id} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={styles.timelineDot} />
                {idx !== PATCH_NOTES_DATA.length - 1 && <View style={styles.timelineLine} />}
              </View>
              
              <View style={[styles.noteCard, isDesktop && styles.noteCardDesktop]}>
                <View style={styles.noteHeader}>
                  <View>
                    <Text style={styles.version}>v{note.id}</Text>
                    <Text style={styles.noteTitle}>{note.title}</Text>
                  </View>
                  <Text style={styles.date}>{note.date}</Text>
                </View>
                
                <Text style={styles.summary}>{note.summary}</Text>
                
                <View style={styles.changesList}>
                  {note.content.map((change, i) => (
                    <View key={i} style={styles.changeItem}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.changeText}>{change}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    padding: isDesktop ? 40 : 20,
    maxWidth: isDesktop ? 1000 : '100%',
    alignSelf: 'center',
    width: '100%',
    paddingBottom: 100,
  },
  backBtn: {
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#2a3f5f',
    borderRadius: 4,
    backgroundColor: 'rgba(42, 63, 95, 0.3)',
  },
  backText: {
    color: '#64b5f6',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: isDesktop ? 40 : 32,
    fontWeight: '900',
    color: '#00d9ff',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: isDesktop ? 16 : 14,
    color: '#64b5f6',
    letterSpacing: 1,
    marginTop: 4,
    opacity: 0.8,
  },
  timeline: {
    paddingLeft: 10,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  timelineLeft: {
    alignItems: 'center',
    marginRight: 20,
    width: 20,
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#00d9ff',
    borderWidth: 3,
    borderColor: 'rgba(0, 217, 255, 0.3)',
    zIndex: 1,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#2a3f5f',
    marginTop: 4,
  },
  noteCard: {
    flex: 1,
    backgroundColor: '#1a1f2e',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2a3f5f',
  },
  noteCardDesktop: {
    padding: 32,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2a3f5f',
    paddingBottom: 16,
  },
  version: {
    color: '#00d9ff',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
    fontFamily: 'monospace',
  },
  noteTitle: {
    color: '#fff',
    fontSize: isDesktop ? 24 : 20,
    fontWeight: '700',
  },
  date: {
    color: '#64b5f6',
    fontSize: 12,
    opacity: 0.7,
    marginTop: 4,
  },
  summary: {
    color: '#9ea7b8',
    fontSize: isDesktop ? 16 : 14,
    fontStyle: 'italic',
    marginBottom: 20,
    lineHeight: 24,
  },
  changesList: {
    gap: 8,
  },
  changeItem: {
    flexDirection: 'row',
    gap: 10,
  },
  bullet: {
    color: '#00d9ff',
    fontSize: 14,
    marginTop: 2,
  },
  changeText: {
    color: '#fff',
    fontSize: isDesktop ? 15 : 14,
    lineHeight: 22,
    flex: 1,
  },
});
