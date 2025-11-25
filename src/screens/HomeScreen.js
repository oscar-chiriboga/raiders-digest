import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Defs, Filter, FeGaussianBlur, FeMerge, FeMergeNode, LinearGradient, Stop, G, Line, Text as SvgText, Path } from 'react-native-svg';
import AnimatedScreen from '../components/AnimatedScreen';
import { PATCH_NOTES_DATA } from '../data';
import { QUESTS_DATA } from '../data-quests';

const TRACKED_QUESTS_KEY = '@tracked_quests';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

const TIPS_DATA = [
  { title: 'SOUND DISCIPLINE', text: 'Sprinting alerts nearby Drones. Use crouch-walk near POIs to avoid detection.' },
  { title: 'EXTRACTION PROTOCOL', text: 'Secure rare blueprints immediately. Greed kills. Extract before the storm circle closes.' },
  { title: 'TRUST ISSUES', text: 'All unknown signals are hostile until proven otherwise. Watch your six.' },
];

// SVG Logo Component
const RaidersLogo = ({ style }) => (
  <Svg viewBox="0 0 600 300" style={style}>
    <Defs>
      {/* Glow Filter */}
      <Filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <FeGaussianBlur stdDeviation="3" result="coloredBlur" />
        <FeMerge>
          <FeMergeNode in="coloredBlur" />
          <FeMergeNode in="SourceGraphic" />
        </FeMerge>
      </Filter>
      {/* Text Gradient */}
      <LinearGradient id="textGrad" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#fff" />
        <Stop offset="100%" stopColor="#ccc" />
      </LinearGradient>
    </Defs>

    {/* Diagonal Retro Stripes */}
    <G transform="translate(300, 150) rotate(-25) translate(-300, -150)" opacity="0.9" filter="url(#glow)">
      <Line x1="380" y1="-50" x2="380" y2="400" stroke="#00d9ff" strokeWidth="4" />
      <Line x1="400" y1="-50" x2="400" y2="400" stroke="#fbbf24" strokeWidth="4" />
      <Line x1="420" y1="-50" x2="420" y2="400" stroke="#ef4444" strokeWidth="4" />
    </G>

    {/* Main Title */}
    <G transform="translate(300, 100)">
      {/* RAIDERS */}
      <SvgText
        y="0"
        fontFamily="monospace"
        fontWeight="900"
        fontSize="84"
        fill="white"
        letterSpacing="4"
        stroke="black"
        strokeWidth="6"
        textAnchor="middle"
      >
        RAIDERS
      </SvgText>
      
      {/* DIGEST */}
      <SvgText
        y="70"
        fontFamily="monospace"
        fontWeight="900"
        fontSize="84"
        fill="white"
        letterSpacing="4"
        stroke="black"
        strokeWidth="6"
        textAnchor="middle"
      >
        DIGEST
      </SvgText>
    </G>

    {/* Geometric Emblem */}
    <G transform="translate(300, 240) scale(1.3)" stroke="white" strokeWidth="4" fill="none" strokeLinejoin="round" filter="url(#glow)">
      {/* Main 'W' Shape */}
      <Path d="M-60 -20 L -30 20 L 0 -10 L 30 20 L 60 -20" strokeLinecap="square" />
      {/* Lower V shape */}
      <Path d="M-45 0 L 0 45 L 45 0" strokeWidth="2" opacity="0.8" />
      
      {/* Signal Arcs - Orange */}
      <Path d="M-15 -35 A 20 20 0 0 1 15 -35" strokeWidth="4" stroke="#ff3e00" strokeLinecap="round" />
      <Path d="M-28 -48 A 36 36 0 0 1 28 -48" strokeWidth="3" stroke="#ff3e00" opacity="0.6" strokeLinecap="round" />
      
      {/* Center vertical line */}
      <Line x1="0" y1="-10" x2="0" y2="45" strokeWidth="2" opacity="0.5" />
    </G>
  </Svg>
);

export default function HomeScreen({ navigation }) {
  const [trackedQuests, setTrackedQuests] = useState([]);

  useEffect(() => {
    loadTrackedQuests();
    
    // Set up listener for when screen comes into focus
    const unsubscribe = navigation.addListener('focus', () => {
      loadTrackedQuests();
    });

    return unsubscribe;
  }, [navigation]);

  const loadTrackedQuests = async () => {
    try {
      // Use static quest data
      const storedIds = await AsyncStorage.getItem(TRACKED_QUESTS_KEY);
      if (storedIds) {
        const questIds = JSON.parse(storedIds);
        if (questIds.length > 0) {
          // Get tracked quests and sort them - starred ones first
          const tracked = QUESTS_DATA.filter(q => questIds.includes(q.id));
          setTrackedQuests(tracked);
        } else {
          setTrackedQuests([]);
        }
      } else {
        // No tracked quests yet
        setTrackedQuests([]);
      }
    } catch (error) {
      console.error('Error loading tracked quests:', error);
      setTrackedQuests([]);
    }
  };

  return (
    <AnimatedScreen>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* Background Grid */}
        <View style={styles.backgroundGrid} />

        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.heroAccent} />
          
          {/* SVG Logo */}
          <RaidersLogo style={styles.logo} />
          
          <View style={styles.heroStatusBadge}>
            <Ionicons name="terminal" size={14} color="#ff3e00" />
            <Text style={styles.heroStatusText}>Status: Online</Text>
          </View>
          
          <Text style={styles.heroDesc}>
            <Text style={styles.heroDescBold}>ARC RAIDERS COMPANION</Text> // OPERATIONAL.{'\n'}
            Access real-time intel on threats, loadouts, and orbital drops. Stay alert.
          </Text>
          
          <View style={styles.heroDivider} />
        </View>

        {/* Database Access */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccentYellow} />
            <Text style={styles.sectionTitle}>DATABASE_ACCESS</Text>
          </View>
          
          <View style={styles.accessGrid}>
            <TouchableOpacity 
              style={styles.accessCard}
              onPress={() => navigation.navigate('Traders')}
            >
              <View style={styles.accessIcon}>
                <Ionicons name="people" size={24} color="#eab308" />
              </View>
              <View style={styles.accessInfo}>
                <Text style={styles.accessTitle}>TRADERS_NETWORK</Text>
                <Text style={styles.accessSubtitle}>View authorized vendors & inventory</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#404040" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tracked Quests */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>STARRED_QUESTS</Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Quests')}
              style={styles.manageButton}
            >
              <Text style={styles.manageButtonText}>MANAGE</Text>
              <Ionicons name="chevron-forward" size={12} color="#ff3e00" />
            </TouchableOpacity>
          </View>
          
          {trackedQuests.length === 0 ? (
            <TouchableOpacity 
              onPress={() => navigation.navigate('Quests')}
              style={styles.emptyState}
            >
              <Ionicons name="star-outline" size={48} color="#404040" />
              <Text style={styles.emptyStateTitle}>NO STARRED QUESTS</Text>
              <Text style={styles.emptyStateText}>
                Tap here to browse quests and star your favorites to track them
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.questsGrid}>
              {trackedQuests.map((quest) => (
                <View key={quest.id} style={styles.questCard}>
                  <View style={styles.questHeader}>
                    <Ionicons name="newspaper" size={16} color="#ff3e00" />
                    <Text style={styles.questTitle} numberOfLines={1}>{quest.name}</Text>
                  </View>
                  
                  {quest.objectives && quest.objectives.length > 0 && (
                    <View style={styles.objectivesPreview}>
                      {quest.objectives.slice(0, 2).map((objective, idx) => (
                        <View key={idx} style={styles.objectiveRow}>
                          <View style={styles.objectiveBullet} />
                          <Text style={styles.objectiveText} numberOfLines={1}>{objective}</Text>
                        </View>
                      ))}
                      {quest.objectives.length > 2 && (
                        <Text style={styles.moreObjectives}>
                          +{quest.objectives.length - 2} more objectives
                        </Text>
                      )}
                    </View>
                  )}
                  
                  {quest.rewards && quest.rewards.length > 0 && (
                    <View style={styles.rewardsPreview}>
                      <Text style={styles.rewardsLabel}>REWARDS:</Text>
                      <View style={styles.rewardsList}>
                        {quest.rewards.slice(0, 3).map((reward, idx) => {
                          const rarity = reward.item?.rarity?.toLowerCase() || 'common';
                          const rarityColor = {
                            legendary: '#ff3e00',
                            epic: '#a855f7',
                            rare: '#3b82f6',
                            uncommon: '#22c55e',
                            common: '#9ca3af',
                          }[rarity] || '#9ca3af';
                          
                          return (
                            <View key={idx} style={styles.rewardBadge}>
                              <Ionicons name="cube" size={10} color={rarityColor} />
                              <Text style={styles.rewardBadgeText} numberOfLines={1}>
                                {reward.item?.name}
                              </Text>
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Patch Notes & Tips Row */}
        <View style={[styles.bottomRow, isDesktop && styles.bottomRowDesktop]}>
          {/* Dev Log */}
          <View style={[styles.patchSection, isDesktop && styles.patchSectionDesktop]}>
            <View style={styles.patchHeader}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionAccentGrey} />
                <Text style={styles.sectionTitle}>DEV_LOG</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('PatchNotes')}>
                <View style={styles.viewAllContainer}>
                  <Text style={styles.viewAllText}>VIEW_ARCHIVE</Text>
                  <Ionicons name="chevron-forward" size={10} color="#ff3e00" />
                </View>
              </TouchableOpacity>
            </View>
            
            <View style={styles.patchCard}>
              <View style={styles.patchInfo}>
                <Text style={styles.patchVersion}>{PATCH_NOTES_DATA[0].title}</Text>
                <Text style={styles.patchDate}>{PATCH_NOTES_DATA[0].date}</Text>
              </View>
              <Text style={styles.patchNumber}>V.{PATCH_NOTES_DATA[0].id}</Text>
              <View style={styles.patchSummaryContainer}>
                <Text style={styles.patchSummary}>{PATCH_NOTES_DATA[0].summary}</Text>
              </View>
            </View>
          </View>

          {/* Field Notes */}
          <View style={[styles.tipsSection, isDesktop && styles.tipsSectionDesktop]}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionAccentYellow} />
              <Text style={styles.sectionTitle}>FIELD_NOTES</Text>
            </View>
            
            <View style={styles.tipsContainer}>
              {TIPS_DATA.map((tip, idx) => (
                <View key={idx} style={styles.tipCard}>
                  <Text style={styles.tipTitle}>{tip.title}</Text>
                  <Text style={styles.tipText}>{tip.text}</Text>
                </View>
              ))}
            </View>
          </View>
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
    padding: isDesktop ? 40 : 24,
    paddingTop: 80,
    paddingBottom: 100,
    maxWidth: isDesktop ? 1200 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  backgroundGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: 'transparent',
  },
  
  // Hero Section
  hero: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 32,
    marginBottom: 32,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
  },
  heroAccent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 96,
    height: 96,
    opacity: 0.1,
    backgroundColor: '#ff3e00',
  },
  logo: {
    width: '100%',
    maxWidth: isDesktop ? 500 : 320,
    height: isDesktop ? 150 : 100,
    marginBottom: 32,
  },
  heroStatusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 62, 0, 0.3)',
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  heroStatusText: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff3e00',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  heroDesc: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#9ca3af',
    lineHeight: 21,
    marginBottom: 24,
    textAlign: 'center',
    maxWidth: 600,
  },
  heroDescBold: {
    color: '#ffffff',
    fontWeight: '700',
  },
  heroDivider: {
    width: '100%',
    height: 1,
    opacity: 0.5,
    // Create gradient effect manually with multiple views if needed
    backgroundColor: '#ff3e00',
  },
  
  // Section Headers
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionAccent: {
    width: 4,
    height: 16,
    backgroundColor: '#ff3e00',
  },
  sectionAccentGrey: {
    width: 4,
    height: 16,
    backgroundColor: '#525252',
  },
  sectionAccentYellow: {
    width: 4,
    height: 16,
    backgroundColor: '#eab308',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#d4d4d8',
    letterSpacing: 2,
  },
  
  // Database Access
  accessGrid: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  accessCard: {
    flex: 1,
    minWidth: 280,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(234, 179, 8, 0.05)',
    borderWidth: 1,
    borderColor: '#262626',
    borderLeftWidth: 3,
    borderLeftColor: '#eab308',
    padding: 16,
  },
  accessIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(234, 179, 8, 0.3)',
  },
  accessInfo: {
    flex: 1,
  },
  accessTitle: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 4,
    letterSpacing: 1,
  },
  accessSubtitle: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
  },

  // Tracked Quests
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginLeft: 'auto',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(255, 62, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ff3e00',
  },
  manageButtonText: {
    fontSize: 9,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff3e00',
    fontWeight: '700',
    letterSpacing: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    borderStyle: 'dashed',
  },
  emptyStateTitle: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 2,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#525252',
    textAlign: 'center',
    lineHeight: 18,
  },
  questsGrid: {
    gap: 16,
  },
  questCard: {
    backgroundColor: 'rgba(255, 62, 0, 0.05)',
    borderWidth: 1,
    borderColor: '#262626',
    borderLeftWidth: 3,
    borderLeftColor: '#ff3e00',
    padding: 16,
  },
  questHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  questTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
  },
  objectivesPreview: {
    marginBottom: 12,
  },
  objectiveRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 6,
  },
  objectiveBullet: {
    width: 4,
    height: 4,
    backgroundColor: '#ff3e00',
    marginTop: 6,
  },
  objectiveText: {
    flex: 1,
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#9ca3af',
    lineHeight: 16,
  },
  moreObjectives: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#525252',
    fontStyle: 'italic',
    marginTop: 4,
    marginLeft: 14,
  },
  rewardsPreview: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#262626',
  },
  rewardsLabel: {
    fontSize: 9,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 1,
    marginBottom: 8,
  },
  rewardsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  rewardBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 1,
    borderColor: '#262626',
    paddingHorizontal: 8,
    paddingVertical: 4,
    maxWidth: 150,
  },
  rewardBadgeText: {
    flex: 1,
    fontSize: 9,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#d4d4d8',
  },
  
  // Bottom Row
  bottomRow: {
    gap: 24,
  },
  bottomRowDesktop: {
    flexDirection: 'row',
  },
  
  // Patch Notes
  patchSection: {
    flex: 1,
  },
  patchSectionDesktop: {
    flex: 2,
  },
  patchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff3e00',
    letterSpacing: 1,
  },
  patchCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.2)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 20,
  },
  patchInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  patchVersion: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff3e00',
    fontWeight: '700',
  },
  patchDate: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
  },
  patchNumber: {
    fontSize: 24,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 12,
  },
  patchSummaryContainer: {
    borderLeftWidth: 2,
    borderLeftColor: '#404040',
    paddingLeft: 12,
  },
  patchSummary: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#9ca3af',
    lineHeight: 21,
  },
  
  // Tips Section
  tipsSection: {
    flex: 1,
  },
  tipsSectionDesktop: {
    flex: 1,
  },
  tipsContainer: {
    gap: 12,
  },
  tipCard: {
    backgroundColor: 'rgba(234, 179, 8, 0.05)',
    borderLeftWidth: 2,
    borderLeftColor: '#eab308',
    padding: 12,
  },
  tipTitle: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontWeight: '700',
    color: '#eab308',
    marginBottom: 4,
    letterSpacing: 1,
  },
  tipText: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#9ca3af',
    lineHeight: 16,
  },
});
