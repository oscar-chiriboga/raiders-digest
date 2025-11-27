import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Defs, Filter, FeGaussianBlur, FeMerge, FeMergeNode, LinearGradient, Stop, G, Line, Text as SvgText, Path } from 'react-native-svg';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import { PATCH_NOTES_DATA } from '../data';
import { QUESTS_DATA } from '../data-quests';
import { LOOT_CHEATSHEET } from '../data-loot-cheatsheet';

const TRACKED_QUESTS_KEY = '@tracked_quests';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

const TIPS_DATA = [
  { title: 'SOUND DISCIPLINE', text: 'Sprinting alerts nearby Drones. Use crouch-walk near POIs to avoid detection.' },
  { title: 'EXTRACTION PROTOCOL', text: 'Secure rare blueprints immediately. Greed kills. Extract before the storm circle closes.' },
  { title: 'TRUST ISSUES', text: 'All unknown signals are hostile until proven otherwise. Watch your six.' },
];

// SVG Logo Component with Animation
const RaidersLogo = ({ style }) => {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const glowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.8],
  });

  return (
    <Animated.View style={[style, { opacity: glowOpacity }]}>
  <Svg viewBox="0 0 800 300" style={style}>
    <Defs>
      <LinearGradient id="arcOrange" x1="0" y1="0" x2="1" y2="0">
        <Stop offset="0%" stopColor="#ff3300" />
        <Stop offset="50%" stopColor="#ff6600" />
        <Stop offset="100%" stopColor="#ff3300" />
      </LinearGradient>
      <LinearGradient id="metalGrad" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0%" stopColor="#ffffff" />
        <Stop offset="45%" stopColor="#cccccc" />
        <Stop offset="50%" stopColor="#999999" />
        <Stop offset="55%" stopColor="#cccccc" />
        <Stop offset="100%" stopColor="#eeeeee" />
      </LinearGradient>
    </Defs>

    <G>
      <Path d="M 50 50 L 150 50 L 170 30" fill="none" stroke="#444" strokeWidth="2" />
      <Path d="M 750 50 L 650 50 L 630 30" fill="none" stroke="#444" strokeWidth="2" />
      <Path d="M 50 250 L 150 250 L 170 270" fill="none" stroke="#444" strokeWidth="2" />
      <Path d="M 750 250 L 650 250 L 630 270" fill="none" stroke="#444" strokeWidth="2" />

      <Line x1="40" y1="60" x2="40" y2="240" stroke="#ff4500" strokeWidth="4" opacity="0.8" />
      <Line x1="760" y1="60" x2="760" y2="240" stroke="#ff4500" strokeWidth="4" opacity="0.8" />
      
      <Line x1="180" y1="150" x2="620" y2="150" stroke="#ff4500" strokeWidth="1" opacity="0.2" />

      <SvgText
        x="400"
        y="160"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="110"
        letterSpacing="8"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#ffffff"
        stroke="#1a1a1a"
        strokeWidth="3"
      >
        RAIDERS
      </SvgText>
      <SvgText
        x="400"
        y="160"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="110"
        letterSpacing="8"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#metalGrad)"
      >
        RAIDERS
      </SvgText>
      
      <G transform="translate(400, 205)">
        <Path d="M -150 0 L 150 0 L 160 35 L -160 35 Z" fill="#ff4500" opacity="0.9" />
        <SvgText
          x="0"
          y="26"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="bold"
          fontSize="24"
          letterSpacing="12"
          textAnchor="middle"
          fill="#0a0a0a"
          stroke="#000"
          strokeWidth="1"
          paintOrder="stroke"
        >
          DIGEST
        </SvgText>
      </G>

      <SvgText
        x="400"
        y="45"
        fontFamily="monospace"
        fontSize="12"
        fill="#888"
        letterSpacing="4"
        textAnchor="middle"
      >
        // SYSTEM_OVERRIDE // ARC_NET_V2.4
      </SvgText>

      <SvgText
        x="400"
        y="265"
        fontFamily="monospace"
        fontSize="10"
        fill="#888"
        letterSpacing="2"
        textAnchor="middle"
      >
        EST. 2025 • RESISTANCE BROADCAST
      </SvgText>
    </G>
  </Svg>
    </Animated.View>
  );
};

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
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="Home" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        {/* Background Grid */}
        <View style={styles.backgroundGrid} />

        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.heroAccent} />
          
          {/* SVG Logo */}
          <RaidersLogo style={styles.logo} />
          
          <View style={styles.heroStatusBadge}>
            <Ionicons name="terminal" size={14} color="#ff8c00" />
            <Text style={styles.heroStatusText}>Status: Online</Text>
          </View>
          
          <Text style={styles.heroDesc}>
            <Text style={styles.heroDescBold}>ARC RAIDERS COMPANION</Text> // OPERATIONAL.{'\n'}
            Your tactical database for weapons, enemies, quests, and loot. Survive the ARC invasion.
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
              onPress={() => navigation.navigate('SurvivalGuide')}
            >
              <View style={styles.accessIcon}>
                <Ionicons name="shield-checkmark" size={24} color="#ff8c00" />
              </View>
              <View style={styles.accessInfo}>
                <Text style={styles.accessTitle}>SURVIVAL_GUIDE</Text>
                <Text style={styles.accessSubtitle}>First 10 hours survival protocol</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#404040" />
            </TouchableOpacity>

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
            
            <TouchableOpacity 
              style={styles.accessCard}
              onPress={() => navigation.navigate('LootCheatSheet')}
            >
              <View style={styles.accessIcon}>
                <Ionicons name="bookmark" size={24} color="#eab308" />
              </View>
              <View style={styles.accessInfo}>
                <Text style={styles.accessTitle}>LOOT_CHEAT_SHEET</Text>
                <Text style={styles.accessSubtitle}>Essential items to keep or recycle</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#404040" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.accessCard}
              onPress={() => navigation.navigate('Crafting')}
            >
              <View style={styles.accessIcon}>
                <Ionicons name="construct" size={24} color="#ff8c00" />
              </View>
              <View style={styles.accessInfo}>
                <Text style={styles.accessTitle}>CRAFTING_RECIPES</Text>
                <Text style={styles.accessSubtitle}>All craftable items and materials</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#404040" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tracked Quests - Only show if there are tracked quests */}
        {trackedQuests.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionAccent} />
              <Text style={styles.sectionTitle}>STARRED_QUESTS</Text>
              <TouchableOpacity           onPress={() => navigation.navigate('Quests')}
                style={styles.manageButton}
              >
                <Text style={styles.manageButtonText}>MANAGE</Text>
                <Ionicons name="chevron-forward" size={12} color="#ff8c00" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.questsGrid}>
              {trackedQuests.map((quest) => (
                <View key={quest.id} style={styles.questCard}>
                  <View style={styles.questHeader}>
                    <Ionicons name="newspaper" size={16} color="#ff8c00" />
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
                            legendary: '#FFD700',
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
          </View>
        )}

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
            
            <View style={styles.patchCardsContainer}>
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
              
              {PATCH_NOTES_DATA[1] && (
                <View style={styles.patchCard}>
                  <View style={styles.patchInfo}>
                    <Text style={styles.patchVersion}>{PATCH_NOTES_DATA[1].title}</Text>
                    <Text style={styles.patchDate}>{PATCH_NOTES_DATA[1].date}</Text>
                  </View>
                  <Text style={styles.patchNumber}>V.{PATCH_NOTES_DATA[1].id}</Text>
                  <View style={styles.patchSummaryContainer}>
                    <Text style={styles.patchSummary}>{PATCH_NOTES_DATA[1].summary}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>

          {/* Field Notes */}
          <View style={[styles.tipsSection, isDesktop && styles.tipsSectionDesktop, !isDesktop && styles.tipsSectionMobile]}>
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

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerDivider} />
          <Text style={styles.footerText}>RAIDERS DIGEST v1.0 // RESISTANCE NETWORK</Text>
          <Text style={styles.footerSubtext}>Made with 💚 for ARC Raiders players</Text>
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
    paddingTop: isDesktop ? 20 : 10,
    paddingBottom: 100,
    maxWidth: isDesktop ? 1200 : '100%',
    alignSelf: 'center',
    width: '100%',
  },
  contentDesktop: {
    paddingTop: 70,
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

  logo: {
    width: '100%',
    maxWidth: isDesktop ? 600 : 400,
    height: isDesktop ? 180 : 120,
    marginBottom: 24,
  },
  heroStatusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 140, 0, 0.3)',
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  heroStatusText: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
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
    backgroundColor: '#ff8c00',
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
    backgroundColor: '#ff8c00',
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
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ff8c00',
  },
  manageButtonText: {
    fontSize: 9,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
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
    backgroundColor: 'rgba(255, 140, 0, 0.05)',
    borderWidth: 1,
    borderColor: '#262626',
    borderLeftWidth: 3,
    borderLeftColor: '#ff8c00',
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
    backgroundColor: '#ff8c00',
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
    flexDirection: 'column',
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
    color: '#ff8c00',
    letterSpacing: 1,
  },
  patchCardsContainer: {
    gap: 16,
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
    color: '#ff8c00',
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
  tipsSectionMobile: {
    marginTop: 64,
  },
  tipsContainer: {
    gap: 12,
  },
  tipCard: {
    backgroundColor: 'rgba(234, 179, 8, 0.08)',
    borderLeftWidth: 3,
    borderLeftColor: '#eab308',
    borderWidth: 1,
    borderColor: 'rgba(234, 179, 8, 0.2)',
    padding: 16,
  },
  tipTitle: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontWeight: '900',
    color: '#eab308',
    marginBottom: 8,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  tipText: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#d4d4d4',
    lineHeight: 18,
  },
  
  // Footer
  footer: {
    marginTop: 64,
    paddingTop: 32,
    alignItems: 'center',
    gap: 12,
  },
  footerDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#262626',
    marginBottom: 16,
  },
  footerText: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#525252',
    letterSpacing: 2,
  },
  footerSubtext: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
  },
});
