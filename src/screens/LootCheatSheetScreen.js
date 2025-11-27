import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Platform, TouchableOpacity, TextInput, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LOOT_DATA, LOOT_RARITIES } from '../data-generated-loot';
import { LOOT_CHEATSHEET } from '../data-loot-cheatsheet';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import { COLORS } from '../styles/colors';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

const getTierColor = (tier) => {
  const tierMap = {
    'Common': { color: '#9ca3af', letter: 'D', bg: 'rgba(156, 163, 175, 0.1)' },
    'Uncommon': { color: '#22c55e', letter: 'C', bg: 'rgba(34, 197, 94, 0.1)' },
    'Rare': { color: '#3b82f6', letter: 'B', bg: 'rgba(59, 130, 246, 0.1)' },
    'Epic': { color: '#a855f7', letter: 'A', bg: 'rgba(168, 85, 247, 0.1)' },
    'Legendary': { color: '#FFD700', letter: 'S', bg: 'rgba(255, 215, 0, 0.1)' }
  };
  return tierMap[tier] || tierMap['Common'];
};

const getRarityShort = (rarity) => {
  const shorts = {
    'Uncommon': 'UNCMN',
    'Legendary': 'LGND',
  };
  return shorts[rarity] || rarity.toUpperCase();
};

export default function LootCheatSheetScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('quests');
  const [search, setSearch] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('All');

  useEffect(() => {
    const availableRarities = getAvailableRarities();
    if (selectedRarity !== 'All' && !availableRarities.includes(selectedRarity)) {
      setSelectedRarity('All');
    }
  }, [activeTab]);
  const [selectedItem, setSelectedItem] = useState(null);

  const rarityOrder = { 'Common': 1, 'Uncommon': 2, 'Rare': 3, 'Epic': 4, 'Legendary': 5 };
  
  const questItems = LOOT_DATA.filter(item => 
    LOOT_CHEATSHEET.quests.some(q => q.name.toLowerCase() === item.name.toLowerCase())
  ).sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);
  
  const progressionItems = LOOT_DATA.filter(item => 
    LOOT_CHEATSHEET.progression.some(p => p.name.toLowerCase() === item.name.toLowerCase())
  ).sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);
  
  const recycleItems = LOOT_DATA.filter(item => 
    LOOT_CHEATSHEET.recycle.some(r => r.toLowerCase() === item.name.toLowerCase())
  ).sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);

  const getCurrentItems = () => {
    if (activeTab === 'quests') return questItems;
    if (activeTab === 'progression') return progressionItems;
    return recycleItems;
  };

  const filtered = getCurrentItems().filter(item => {
    const matchesSearch = !search || 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.subcategory.toLowerCase().includes(search.toLowerCase());
    const matchesRarity = selectedRarity === 'All' || item.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  const getAvailableRarities = () => {
    const currentItems = getCurrentItems();
    const availableRarities = new Set();
    currentItems.forEach(item => {
      availableRarities.add(item.rarity);
    });
    return LOOT_RARITIES.filter(rarity => availableRarities.has(rarity));
  };

  const availableRarities = getAvailableRarities();

  return (
    <AnimatedScreen>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="LootCheatSheet" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={20} color="#ff8c00" />
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="bookmark" size={16} color="#ff8c00" />
            <Text style={styles.title}>LOOT CHEAT SHEET // DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>TOTAL: {getCurrentItems().length.toString().padStart(3, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>TAB: {activeTab.toUpperCase()}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>FOUND: {filtered.length.toString().padStart(3, '0')}</Text>
          </View>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={14} color={COLORS.textMuted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="SEARCH_DATABASE..."
            placeholderTextColor={COLORS.textDark}
            value={search}
            onChangeText={setSearch}
          />
          {search ? (
            <TouchableOpacity onPress={() => setSearch('')} style={styles.clearButton}>
              <Ionicons name="close" size={18} color={COLORS.textMuted} />
            </TouchableOpacity>
          ) : (
            <View style={styles.cursor} />
          )}
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'quests' && styles.tabActive]}
            onPress={() => setActiveTab('quests')}
          >
            <Ionicons name="flag" size={14} color={activeTab === 'quests' ? '#000000' : '#737373'} />
            <Text style={[styles.tabText, activeTab === 'quests' && styles.tabTextActive]}>QUESTS</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'progression' && styles.tabActive]}
            onPress={() => setActiveTab('progression')}
          >
            <Ionicons name="trending-up" size={14} color={activeTab === 'progression' ? '#000000' : '#737373'} />
            <Text style={[styles.tabText, activeTab === 'progression' && styles.tabTextActive]}>PROGRESSION</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'recycle' && styles.tabActive]}
            onPress={() => setActiveTab('recycle')}
          >
            <Ionicons name="trash" size={14} color={activeTab === 'recycle' ? '#000000' : '#737373'} />
            <Text style={[styles.tabText, activeTab === 'recycle' && styles.tabTextActive]}>RECYCLE</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.rarityContainer}
          contentContainerStyle={styles.filterContent}
        >
          <TouchableOpacity
            style={[styles.rarityBtn, selectedRarity === 'All' && styles.rarityBtnActive]}
            onPress={() => setSelectedRarity('All')}
          >
            <Text style={[styles.rarityText, selectedRarity === 'All' && styles.rarityTextActive]}>
              ALL RARITIES
            </Text>
          </TouchableOpacity>
          {LOOT_RARITIES.map((rarity) => {
            const tierInfo = getTierColor(rarity);
            const isAvailable = availableRarities.includes(rarity);
            const isDisabled = !isAvailable;
            return (
              <TouchableOpacity
                key={rarity}
                style={[
                  styles.rarityBtn,
                  selectedRarity === rarity && styles.rarityBtnActive,
                  isDisabled && styles.rarityBtnDisabled,
                  { borderColor: selectedRarity === rarity ? tierInfo.color : COLORS.border }
                ]}
                onPress={() => isDisabled ? null : setSelectedRarity(rarity)}
                disabled={isDisabled}
              >
                <Text style={[
                  styles.rarityText,
                  { color: selectedRarity === rarity ? tierInfo.color : (isDisabled ? COLORS.textDark : COLORS.textMuted) }
                ]}>
                  {rarity.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={[styles.lootGrid, isDesktop && styles.lootGridDesktop]}>
          {filtered.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="server-outline" size={48} color={COLORS.textDark} />
              <Text style={styles.emptyText}>NO_DATA_FOUND</Text>
            </View>
          ) : (
            filtered.map((item) => {
              const tierInfo = getTierColor(item.rarity);
              return (
                <TouchableOpacity 
                  key={item.id} 
                  style={[styles.lootCard, isDesktop && styles.lootCardDesktop]}
                  onPress={() => setSelectedItem(item)}
                  activeOpacity={0.8}
                >
                  <View style={styles.cardContent}>
                    <View style={[styles.iconContainer, { borderColor: tierInfo.color, backgroundColor: COLORS.background }]}>
                      {item.icon ? (
                        <Image 
                          source={{ uri: item.icon }} 
                          style={styles.itemIcon} 
                          resizeMode="contain"
                        />
                      ) : (
                        <Ionicons name="cube" size={20} color={tierInfo.color} />
                      )}
                    </View>
                    <View style={styles.cardInfo}>
                      <View style={styles.cardHeader}>
                        <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                        <View style={[styles.tierBadge, { borderColor: tierInfo.color }]}>
                          <Text style={[styles.tierText, { color: tierInfo.color }]}>
                            {getRarityShort(item.rarity)}
                          </Text>
                        </View>
                      </View>
                      <Text style={styles.subcategoryText} numberOfLines={1}>{item.subcategory}</Text>
                    </View>
                  </View>
                  <View style={styles.cardStats}>
                    <View style={styles.statItem}>
                      <Text style={styles.statLabel}>$</Text>
                      <Text style={styles.statValue}>{item.value}</Text>
                    </View>
                    <View style={styles.statItem}>
                      <Text style={styles.statLabel}>WT:</Text>
                      <Text style={styles.statValue}>{item.weight}</Text>
                    </View>
                    {item.recycleComponents && item.recycleComponents.length > 0 && (
                      <View style={styles.statItem}>
                        <Ionicons name="trash" size={10} color="#22c55e" />
                        <Text style={styles.statValue}>{item.recycleComponents.length}</Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>

      <Modal
        visible={selectedItem !== null}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setSelectedItem(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <View style={[styles.modalHeader, { borderColor: getTierColor(selectedItem.rarity).color }]}>
                  <View style={styles.modalHeaderLeft}>
                    <View style={[styles.modalHeaderAccent, { backgroundColor: getTierColor(selectedItem.rarity).color }]} />
                    <Ionicons name="cube" size={16} color={getTierColor(selectedItem.rarity).color} />
                    <Text style={styles.modalTitle}>ITEM_INTEL // {selectedItem.id.toString().padStart(3, '0')}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setSelectedItem(null)} style={styles.closeButton}>
                    <Ionicons name="close" size={24} color={COLORS.text} />
                  </TouchableOpacity>
                </View>
                
                <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
                  <View style={styles.modalItemHeader}>
                    <View style={[styles.modalIconContainer, { 
                      borderColor: getTierColor(selectedItem.rarity).color,
                      backgroundColor: COLORS.background
                    }]}>
                      {selectedItem.icon ? (
                        <Image 
                          source={{ uri: selectedItem.icon }} 
                          style={styles.modalItemIcon} 
                          resizeMode="contain"
                        />
                      ) : (
                        <Ionicons name="cube" size={56} color={getTierColor(selectedItem.rarity).color} />
                      )}
                      <View style={[styles.iconRarityBadge, { 
                        backgroundColor: getTierColor(selectedItem.rarity).color
                      }]}>
                        <Text style={styles.iconRarityText}>{getRarityShort(selectedItem.rarity)}</Text>
                      </View>
                    </View>
                    <View style={styles.modalItemInfo}>
                      <Text style={styles.modalItemName}>{selectedItem.name}</Text>
                      <Text style={styles.modalSubcategory}>
                        <Ionicons name="folder" size={10} color={COLORS.textMuted} /> {selectedItem.category} / {selectedItem.subcategory}
                      </Text>
                      <Text style={styles.modalDescription}>{selectedItem.description}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.statsGrid}>
                    <View style={[styles.statCard, styles.statCardPrimary]}>
                      <Ionicons name="cash" size={16} color="#22c55e" />
                      <Text style={styles.statCardLabel}>VALUE</Text>
                      <Text style={[styles.statCardValue, { color: '#22c55e' }]}>${selectedItem.value}</Text>
                    </View>
                    <View style={styles.statCard}>
                      <Ionicons name="barbell" size={16} color={COLORS.textMuted} />
                      <Text style={styles.statCardLabel}>WEIGHT</Text>
                      <Text style={styles.statCardValue}>{selectedItem.weight}kg</Text>
                    </View>
                    {selectedItem.stackSize > 1 && (
                      <View style={styles.statCard}>
                        <Ionicons name="layers" size={16} color={COLORS.textMuted} />
                        <Text style={styles.statCardLabel}>STACK</Text>
                        <Text style={styles.statCardValue}>×{selectedItem.stackSize}</Text>
                      </View>
                    )}
                  </View>

                  {selectedItem.recycleComponents && selectedItem.recycleComponents.length > 0 && (
                    <View style={styles.modalSection}>
                      <View style={styles.sectionHeaderWithIcon}>
                        <Ionicons name="trash" size={14} color={COLORS.primary} />
                        <Text style={styles.modalSectionTitle}>RECYCLE BREAKDOWN</Text>
                      </View>
                      <View style={styles.recycleGrid}>
                        {selectedItem.recycleComponents.map((comp, index) => (
                          <View key={index} style={styles.recycleCard}>
                            <View style={[styles.recycleIconBox, {
                              borderColor: getTierColor(comp.component.rarity || 'Common').color,
                              backgroundColor: getTierColor(comp.component.rarity || 'Common').bg
                            }]}>
                              {comp.component.icon ? (
                                <Image 
                                  source={{ uri: comp.component.icon }} 
                                  style={styles.recycleIcon} 
                                  resizeMode="contain"
                                />
                              ) : (
                                <Ionicons name="cube" size={24} color={getTierColor(comp.component.rarity || 'Common').color} />
                              )}
                            </View>
                            <View style={styles.recycleCardInfo}>
                              <Text style={styles.recycleCardName} numberOfLines={1}>
                                {comp.component.name}
                              </Text>
                              <Text style={styles.recycleCardQty}>QTY: {comp.quantity}</Text>
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    paddingTop: isDesktop ? 20 : 10,
    maxWidth: isDesktop ? 1200 : '100%',
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
    paddingHorizontal: isDesktop ? 24 : 0,
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
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  statText: {
    fontSize: 10,
    color: COLORS.textMuted,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1.5,
  },
  statTextActive: {
    fontSize: 10,
    color: COLORS.primary,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1.5,
  },
  statDivider: {
    color: COLORS.border,
    marginHorizontal: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    paddingHorizontal: isDesktop ? 24 : 16,
    paddingVertical: 12,
    marginBottom: 16,
    marginHorizontal: isDesktop ? 24 : 0,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: isDesktop ? 14 : 13,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  cursor: {
    width: 8,
    height: 14,
    backgroundColor: COLORS.primary,
    opacity: 0.6,
  },
  clearButton: {
    padding: 4,
  },
  tabs: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#262626',
  },
  tabActive: {
    backgroundColor: '#ff8c00',
    borderColor: '#ff8c00',
  },
  tabText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#737373',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  tabTextActive: {
    color: '#000000',
    fontWeight: '900',
  },
  rarityContainer: {
    marginBottom: 24,
  },
  filterContent: {
    gap: 8,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  rarityBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  rarityBtnActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 2,
  },
  rarityBtnDisabled: {
    opacity: 0.3,
  },
  rarityText: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  rarityTextActive: {
    fontWeight: '900',
  },
  lootGrid: {
    gap: 16,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  lootGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lootCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
    overflow: 'hidden',
  },
  lootCardDesktop: {
    width: 'calc(25% - 12px)',
    marginBottom: 0,
  },
  cardContent: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  itemIcon: {
    width: '100%',
    height: '100%',
  },
  cardInfo: {
    flex: 1,
    minWidth: 0,
    justifyContent: 'center',
  },
  itemName: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 4,
  },
  tierBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
  },
  tierText: {
    fontSize: 8,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
  subcategoryText: {
    color: COLORS.textMuted,
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textTransform: 'uppercase',
  },
  cardStats: {
    flexDirection: 'row',
    gap: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statLabel: {
    fontSize: 10,
    color: COLORS.textDark,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  statValue: {
    fontSize: 11,
    color: COLORS.rarity.uncommon,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyText: {
    color: COLORS.textMuted,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isDesktop ? 40 : 20,
  },
  modalContent: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    width: '100%',
    maxWidth: isDesktop ? 700 : '100%',
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    minWidth: 0,
  },
  modalHeaderAccent: {
    width: 3,
    height: 20,
    flexShrink: 0,
  },
  modalTitle: {
    fontSize: isDesktop ? 14 : 12,
    fontWeight: '900',
    color: COLORS.text,
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    flex: 1,
    flexWrap: 'wrap',
  },
  closeButton: {
    padding: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 4,
    flexShrink: 0,
  },
  modalBody: {
    padding: 20,
  },
  modalItemHeader: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  modalIconContainer: {
    width: 80,
    height: 80,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  modalItemIcon: {
    width: 70,
    height: 70,
  },
  iconRarityBadge: {
    position: 'absolute',
    bottom: -1,
    left: -1,
    right: -1,
    paddingVertical: 2,
    alignItems: 'center',
  },
  iconRarityText: {
    fontSize: 8,
    fontWeight: '900',
    color: '#000000',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  modalItemInfo: {
    flex: 1,
  },
  modalItemName: {
    fontSize: isDesktop ? 22 : 18,
    fontWeight: '900',
    color: '#ffffff',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  modalSubcategory: {
    fontSize: 10,
    color: COLORS.textMuted,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 12,
    color: COLORS.textMuted,
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    alignItems: 'center',
    gap: 6,
  },
  statCardPrimary: {
    borderColor: '#22c55e',
    backgroundColor: 'rgba(34, 197, 94, 0.05)',
  },
  statCardLabel: {
    fontSize: 8,
    color: COLORS.textMuted,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1.5,
    fontWeight: '700',
  },
  statCardValue: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  modalSection: {
    marginBottom: 20,
  },
  sectionHeaderWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  modalSectionTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: COLORS.primary,
    letterSpacing: 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  recycleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  recycleCard: {
    width: isDesktop ? 'calc(50% - 6px)' : '100%',
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  recycleIconBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recycleIcon: {
    width: 32,
    height: 32,
  },
  recycleCardInfo: {
    flex: 1,
  },
  recycleCardName: {
    fontSize: 11,
    color: COLORS.text,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 4,
  },
  recycleCardQty: {
    fontSize: 10,
    color: COLORS.rarity.uncommon,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
