import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, ActivityIndicator, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';

import AnimatedScreen from '../src/components/AnimatedScreen';
import DesktopNav from '../src/components/DesktopNav';
import Footer from '../src/components/Footer';
import SEO from '../src/components/SEO';
import { QUESTS_DATA } from '../src/data-quests';

const TRACKED_QUESTS_KEY = '@tracked_quests';

export default function QuestsScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const [filteredQuests, setFilteredQuests] = useState(QUESTS_DATA);
  const [trackedQuestIds, setTrackedQuestIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTrackedQuests();
    }, [])
  );

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const filtered = QUESTS_DATA.filter(quest => 
        quest.name.toLowerCase().includes(query) ||
        quest.objectives?.some(obj => obj.toLowerCase().includes(query)) ||
        quest.description?.toLowerCase().includes(query)
      );
      setFilteredQuests(filtered);
    } else {
      setFilteredQuests(QUESTS_DATA);
    }
  }, [searchQuery]);

  const loadTrackedQuests = async () => {
    try {
      const stored = await AsyncStorage.getItem(TRACKED_QUESTS_KEY);
      if (stored) setTrackedQuestIds(JSON.parse(stored));
    } catch (error) {
      console.error('Error loading tracked quests:', error);
    }
  };

  const toggleTracked = async (questId) => {
    const newTracked = trackedQuestIds.includes(questId)
      ? trackedQuestIds.filter(id => id !== questId)
      : [...trackedQuestIds, questId];
    setTrackedQuestIds(newTracked);
    try {
      await AsyncStorage.setItem(TRACKED_QUESTS_KEY, JSON.stringify(newTracked));
    } catch (error) {
      console.error('Error saving tracked quests:', error);
    }
  };

  const renderReward = (reward, index) => {
    const rarity = reward.item?.rarity?.toLowerCase() || 'common';
    const rarityColor = {
      legendary: '#ff3e00', epic: '#a855f7', rare: '#3b82f6',
      uncommon: '#22c55e', common: '#c0c0c0',
    }[rarity] || '#c0c0c0';

    return (
      <View key={index} style={[styles.rewardItem, isDesktop && styles.rewardItemDesktop]}>
        <View style={[styles.rewardIcon, { borderColor: rarityColor }]}>
          <Ionicons name="cube" size={14} color={rarityColor} />
        </View>
        <View style={styles.rewardInfo}>
          <Text style={styles.rewardName} numberOfLines={1}>{reward.item?.name}</Text>
          <Text style={styles.rewardQuantity}>×{reward.quantity}</Text>
        </View>
      </View>
    );
  };

  const renderQuest = (quest, index) => {
    const isTracked = trackedQuestIds.includes(quest.id);
    const hasRewards = quest.rewards && quest.rewards.length > 0;
    
    return (
      <View key={`${quest.id}-${index}`} style={[styles.questCard, isTracked && styles.questCardTracked]}>
        <View style={styles.questHeader}>
          <View style={styles.questTitleRow}>
            <Ionicons name="newspaper" size={16} color="#00ff41" />
            <Text style={styles.questTitle} numberOfLines={1}>{quest.name}</Text>
          </View>
          <TouchableOpacity onPress={() => toggleTracked(quest.id)} style={[styles.trackButton, isTracked && styles.trackButtonActive]}>
            <Ionicons name={isTracked ? "star" : "star-outline"} size={20} color={isTracked ? "#ff8c00" : "#a8a8a8"} />
          </TouchableOpacity>
        </View>
        
        {quest.objectives && quest.objectives.length > 0 && (
          <View style={styles.objectivesSection}>
            <Text style={styles.sectionLabel}>OBJECTIVES:</Text>
            {quest.objectives.map((obj, idx) => (
              <View key={idx} style={styles.objectiveRow}>
                <View style={styles.objectiveBullet} />
                <Text style={styles.objectiveText}>{obj}</Text>
              </View>
            ))}
          </View>
        )}
        
        {quest.required_items && quest.required_items.length > 0 && (
          <View style={styles.requiredSection}>
            <Text style={styles.sectionLabel}>REQUIRED ITEMS:</Text>
            <View style={styles.rewardsGrid}>
              {quest.required_items.map((item, idx) => (
                <View key={idx} style={[styles.rewardItem, isDesktop && styles.rewardItemDesktop]}>
                  <View style={[styles.rewardIcon, { borderColor: '#eab308' }]}>
                    <Ionicons name="alert-circle" size={14} color="#eab308" />
                  </View>
                  <View style={styles.rewardInfo}>
                    <Text style={styles.rewardName} numberOfLines={1}>{item.item?.name}</Text>
                    <Text style={styles.rewardQuantity}>×{item.quantity}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
        
        {hasRewards && (
          <View style={styles.rewardsSection}>
            <Text style={styles.sectionLabel}>REWARDS:</Text>
            <View style={styles.rewardsGrid}>
              {quest.rewards.slice(0, 6).map((reward, idx) => renderReward(reward, idx))}
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <AnimatedScreen>
      <SEO 
        title="Quests Database"
        description="Complete Arc Raiders quests database. Browse all quests, track your progress, view objectives and rewards. Stay on top of your missions."
        path="/quests"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="Quests" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.scrollContent, isDesktop && styles.contentDesktop]}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="newspaper" size={16} color="#ff8c00" />
            <Text style={styles.headerTitle}>QUESTS // DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>TOTAL: {QUESTS_DATA.length.toString().padStart(2, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>TRACKED: {trackedQuestIds.length.toString().padStart(2, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>FOUND: {filteredQuests.length.toString().padStart(2, '0')}</Text>
          </View>
        </View>
        
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={14} color="#a8a8a8" />
            <TextInput 
              style={styles.searchInput} 
              placeholder="SEARCH_DATABASE..." 
              placeholderTextColor="#707070" 
              value={searchQuery} 
              onChangeText={setSearchQuery} 
            />
            {searchQuery.length > 0 ? (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close" size={18} color="#a8a8a8" />
              </TouchableOpacity>
            ) : (
              <View style={styles.cursor} />
            )}
          </View>
        </View>
        
        {filteredQuests.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={48} color="#707070" />
            <Text style={styles.emptyStateTitle}>NO QUESTS FOUND</Text>
            <Text style={styles.emptyStateText}>{searchQuery ? 'Try a different search term' : 'No quests available'}</Text>
          </View>
        ) : (
          <View style={styles.questsList}>
            {filteredQuests.map((q, i) => renderQuest(q, i))}
          </View>
        )}
        
        <Footer />
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 10,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
    paddingBottom: 100,
  },
  contentDesktop: {
    padding: 40,
    paddingTop: 70,
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
  headerTitle: {
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
    color: '#a8a8a8',
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
  searchSection: {
    marginBottom: 16,
    marginHorizontal: 0,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#262626',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  cursor: {
    width: 8,
    height: 14,
    backgroundColor: '#ff8c00',
    opacity: 0.6,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
    margin: 20,
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
  },
  emptyStateTitle: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
    letterSpacing: 2,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#909090',
    textAlign: 'center',
    lineHeight: 18,
  },
  questsList: {
    gap: 16,
    paddingHorizontal: 0,
  },
  questCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 16,
    marginBottom: 16,
  },
  questCardTracked: {
    borderColor: '#ff8c00',
    backgroundColor: 'rgba(255, 140, 0, 0.05)',
  },
  questHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  questTitleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  questTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
  },
  trackButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#262626',
  },
  trackButtonActive: {
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderColor: '#ff8c00',
  },
  objectivesSection: {
    marginBottom: 16,
  },
  requiredSection: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 9,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  objectiveRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  objectiveBullet: {
    width: 4,
    height: 4,
    backgroundColor: '#ff8c00',
    marginTop: 6,
  },
  objectiveText: {
    flex: 1,
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#c0c0c0',
    lineHeight: 18,
  },
  rewardsSection: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#262626',
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 8,
    minWidth: 150,
  },
  rewardItemDesktop: {
    minWidth: 180,
  },
  rewardIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717',
    borderWidth: 2,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardName: {
    fontSize: 11,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 2,
  },
  rewardQuantity: {
    fontSize: 9,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
  },
});
