import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, ActivityIndicator, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import { QUESTS_DATA } from '../data-quests';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

const TRACKED_QUESTS_KEY = '@tracked_quests';

export default function QuestsScreen({ navigation }) {
  const [filteredQuests, setFilteredQuests] = useState(QUESTS_DATA);
  const [trackedQuestIds, setTrackedQuestIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadTrackedQuests();
  }, []);

  useEffect(() => {
    // Filter quests based on search query
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

  const handleSearch = () => {
    // Search is now handled automatically by useEffect
  };

  const loadTrackedQuests = async () => {
    try {
      const stored = await AsyncStorage.getItem(TRACKED_QUESTS_KEY);
      if (stored) {
        setTrackedQuestIds(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading tracked quests:', error);
    }
  };

  const toggleTracked = async (questId) => {
    let newTracked;
    if (trackedQuestIds.includes(questId)) {
      newTracked = trackedQuestIds.filter(id => id !== questId);
    } else {
      newTracked = [...trackedQuestIds, questId];
    }
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
      legendary: '#ff3e00',
      epic: '#a855f7',
      rare: '#3b82f6',
      uncommon: '#22c55e',
      common: '#9ca3af',
    }[rarity] || '#9ca3af';

    return (
      <View key={index} style={styles.rewardItem}>
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
        {/* Header */}
        <View style={styles.questHeader}>
          <View style={styles.questTitleRow}>
            <Ionicons name="newspaper" size={16} color="#00ff41" />
            <Text style={styles.questTitle} numberOfLines={1}>{quest.name}</Text>
          </View>
          <TouchableOpacity 
            onPress={() => toggleTracked(quest.id)}
            style={[styles.trackButton, isTracked && styles.trackButtonActive]}
          >
            <Ionicons 
              name={isTracked ? "star" : "star-outline"} 
              size={20} 
              color={isTracked ? "#ff8c00" : "#737373"} 
            />
          </TouchableOpacity>
        </View>

        {/* Objectives */}
        {quest.objectives && quest.objectives.length > 0 && (
          <View style={styles.objectivesSection}>
            <Text style={styles.sectionLabel}>OBJECTIVES:</Text>
            {quest.objectives.map((objective, idx) => (
              <View key={idx} style={styles.objectiveRow}>
                <View style={styles.objectiveBullet} />
                <Text style={styles.objectiveText}>{objective}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Required Items */}
        {quest.required_items && quest.required_items.length > 0 && (
          <View style={styles.requiredSection}>
            <Text style={styles.sectionLabel}>REQUIRED ITEMS:</Text>
            <View style={styles.rewardsGrid}>
              {quest.required_items.map((item, idx) => (
                <View key={idx} style={styles.rewardItem}>
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

        {/* Rewards */}
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

  const loading = false;
  const quests = filteredQuests;

  return (
    <AnimatedScreen>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="Quests" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.scrollContent, isDesktop && styles.contentDesktop]}>
        {/* Header */}
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

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={14} color="#737373" />
            <TextInput
              style={styles.searchInput}
              placeholder="SEARCH_DATABASE..."
              placeholderTextColor="#404040"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 ? (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close" size={18} color="#737373" />
              </TouchableOpacity>
            ) : (
              <View style={styles.cursor} />
            )}
          </View>
        </View>

        {/* Quests List */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ff3e00" />
            <Text style={styles.loadingText}>LOADING QUESTS...</Text>
          </View>
        ) : quests.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={48} color="#404040" />
            <Text style={styles.emptyStateTitle}>NO QUESTS FOUND</Text>
            <Text style={styles.emptyStateText}>
              {searchQuery ? 'Try a different search term' : 'No quests available'}
            </Text>
          </View>
        ) : (
          <View style={styles.questsList}>
            {quests.map((quest, index) => renderQuest(quest, index))}
          </View>
        )}
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
    padding: isDesktop ? 40 : 20,
    paddingTop: isDesktop ? 20 : 10,
    maxWidth: isDesktop ? 1400 : '100%',
    alignSelf: 'center',
    width: '100%',
    paddingBottom: 100,
  },
  contentDesktop: {
    paddingTop: 70,
  },
  header: {
    paddingHorizontal: isDesktop ? 24 : 0,
    marginBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: isDesktop ? 32 : 24,
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  loadingText: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 2,
  },
  searchSection: {
    marginBottom: 16,
    marginHorizontal: isDesktop ? 24 : 0,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#262626',
    paddingHorizontal: isDesktop ? 24 : 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: isDesktop ? 14 : 13,
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

  questsList: {
    gap: 16,
    paddingHorizontal: isDesktop ? 24 : 0,
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
    fontSize: isDesktop ? 18 : 16,
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
    color: '#737373',
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
    color: '#9ca3af',
    lineHeight: 18,
  },
  rewardsSection: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#262626',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 12,
    gap: 16,
  },
  paginationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 62, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ff3e00',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  paginationButtonDisabled: {
    backgroundColor: 'rgba(64, 64, 64, 0.1)',
    borderColor: '#404040',
  },
  paginationText: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff3e00',
    letterSpacing: 1,
  },
  paginationTextDisabled: {
    color: '#404040',
  },
  paginationInfo: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 1,
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
    minWidth: isDesktop ? 180 : 150,
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
    color: '#737373',
  },
});
