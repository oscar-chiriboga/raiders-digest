import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, ActivityIndicator, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedScreen from '../components/AnimatedScreen';
import { QUESTS_DATA } from '../data-quests';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

const TRACKED_QUESTS_KEY = '@tracked_quests';

export default function QuestsScreen() {
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
            <Ionicons name="newspaper" size={16} color="#ff3e00" />
            <Text style={styles.questTitle} numberOfLines={1}>{quest.name}</Text>
          </View>
          <TouchableOpacity 
            onPress={() => toggleTracked(quest.id)}
            style={[styles.trackButton, isTracked && styles.trackButtonActive]}
          >
            <Ionicons 
              name={isTracked ? "star" : "star-outline"} 
              size={20} 
              color={isTracked ? "#ff3e00" : "#737373"} 
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
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerAccent} />
          <Text style={styles.headerTitle}>QUESTS DATABASE</Text>
          <View style={styles.headerStats}>
            <Ionicons name="star" size={14} color="#ff3e00" />
            <Text style={styles.headerStatsText}>{trackedQuestIds.length} TRACKED</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={16} color="#737373" />
            <TextInput
              style={styles.searchInput}
              placeholder="SEARCH QUESTS..."
              placeholderTextColor="#525252"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color="#737373" />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>SEARCH</Text>
          </TouchableOpacity>
        </View>

        {/* Instructions */}
        <View style={styles.infoCard}>
          <Ionicons name="information-circle" size={20} color="#3b82f6" />
          <Text style={styles.infoText}>
            Tap the star icon to track quests on your home screen
          </Text>
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
    backgroundColor: '#050505',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    borderBottomWidth: 2,
    borderBottomColor: '#262626',
    backgroundColor: '#000000',
  },
  headerAccent: {
    width: 60,
    height: 4,
    backgroundColor: '#ff3e00',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    letterSpacing: 2,
    marginBottom: 8,
  },
  headerStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerStatsText: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 1,
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
    padding: 20,
    paddingBottom: 12,
    gap: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 12,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
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
  searchButton: {
    backgroundColor: 'rgba(255, 62, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ff3e00',
    padding: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff3e00',
    letterSpacing: 2,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderWidth: 1,
    borderColor: '#3b82f6',
    borderLeftWidth: 3,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#9ca3af',
    lineHeight: 18,
  },
  questsList: {
    padding: 20,
    paddingTop: 8,
    gap: 16,
  },
  questCard: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#262626',
    borderLeftWidth: 3,
    borderLeftColor: '#404040',
    padding: 16,
  },
  questCardTracked: {
    borderLeftColor: '#ff3e00',
    backgroundColor: 'rgba(255, 62, 0, 0.03)',
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
    backgroundColor: 'rgba(115, 115, 115, 0.1)',
    borderWidth: 1,
    borderColor: '#262626',
  },
  trackButtonActive: {
    backgroundColor: 'rgba(255, 62, 0, 0.1)',
    borderColor: '#ff3e00',
  },
  objectivesSection: {
    marginBottom: 16,
  },
  requiredSection: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 2,
    marginBottom: 12,
  },
  objectiveRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  objectiveBullet: {
    width: 6,
    height: 6,
    backgroundColor: '#ff3e00',
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
