import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Dimensions, TouchableOpacity, Platform, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LOOT_DATA, LOOT_CATEGORIES, LOOT_RARITIES } from '../data-generated-loot';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import Footer from '../components/Footer';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

// Tier to rarity color mapping
const getTierColor = (tier) => {
  const tierMap = {
    'Common': { color: '#c0c0c0', letter: 'D', bg: 'rgba(156, 163, 175, 0.1)' },
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

export default function LootScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRarity, setSelectedRarity] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Get available rarities for the selected category
  const getAvailableRarities = () => {
    if (selectedCategory === 'All') return LOOT_RARITIES;
    
    const availableRarities = new Set();
    LOOT_DATA.forEach(item => {
      if (item.category === selectedCategory) {
        availableRarities.add(item.rarity);
      }
    });
    return LOOT_RARITIES.filter(rarity => availableRarities.has(rarity));
  };
  
  const availableRarities = getAvailableRarities();
  
  // Auto-reset rarity filter if current selection is not available in the new category
  useEffect(() => {
    if (selectedRarity !== 'All' && !availableRarities.includes(selectedRarity)) {
      setSelectedRarity('All');
    }
  }, [selectedCategory, availableRarities, selectedRarity]);
  
  const rarityOrder = { 'Common': 1, 'Uncommon': 2, 'Rare': 3, 'Epic': 4, 'Legendary': 5 };
  
  const filtered = LOOT_DATA.filter(item => {
    const matchesSearch = !search || 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.subcategory.toLowerCase().includes(search.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesRarity = selectedRarity === 'All' || item.rarity === selectedRarity;
    
    return matchesSearch && matchesCategory && matchesRarity;
  }).sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);

  return (
    <AnimatedScreen>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="Loot" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="cube" size={16} color={COLORS.primary} />
            <Text style={styles.title}>CACHE <Text style={styles.titleSlash}>//</Text> DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>TOTAL: {LOOT_DATA.length.toString().padStart(3, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>FILTER: {selectedCategory.toUpperCase()}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>FOUND: {filtered.length.toString().padStart(3, '0')}</Text>
          </View>
        </View>
        
        {/* Search Bar */}
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
        
        {/* Category Filter */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterContainer}
          contentContainerStyle={styles.filterContent}
        >
          <TouchableOpacity
            style={[styles.filterBtn, selectedCategory === 'All' && styles.filterBtnActive]}
            onPress={() => setSelectedCategory('All')}
          >
            <Text style={[styles.filterText, selectedCategory === 'All' && styles.filterTextActive]}>
              ALL
            </Text>
          </TouchableOpacity>
          {LOOT_CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.filterBtn, selectedCategory === category && styles.filterBtnActive]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[styles.filterText, selectedCategory === category && styles.filterTextActive]}>
                {category.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Rarity Filter */}
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
            const isDisabled = !isAvailable && selectedCategory !== 'All';
            
            return (
              <TouchableOpacity
                key={rarity}
                style={[
                  styles.rarityBtn,
                  selectedRarity === rarity && styles.rarityBtnActive,
                  isDisabled && styles.rarityBtnDisabled,
                  { borderColor: selectedRarity === rarity ? tierInfo.color : (isDisabled ? COLORS.border : COLORS.border) }
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
        
        {/* Loot Grid */}
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
                  {/* Compact Card Layout */}
                  <View style={styles.cardContent}>
                    <View style={[styles.iconContainer, { borderColor: tierInfo.color, backgroundColor: COLORS.background }]}>
                      {item.icon ? (
                        <Image 
                          source={{ uri: item.icon }} 
                          style={styles.itemIcon} 
                          resizeMode="contain"
                          onError={() => {}}
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
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
        
        <Footer />
      </ScrollView>
      
      {/* Item Detail Modal */}
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
                {/* Modal Header */}
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
                  {/* Item Icon & Name */}
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
                          onError={() => {}}
                        />
                      ) : (
                        <Ionicons name="cube" size={56} color={getTierColor(selectedItem.rarity).color} />
                      )}
                      {/* Rarity Badge on Icon */}
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
                  
                  {/* Stats Grid */}
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
                  
                  {/* Loot Area */}
                  {selectedItem.lootArea && selectedItem.lootArea !== 'Unknown' && (
                    <View style={styles.modalSection}>
                      <View style={styles.sectionHeaderWithIcon}>
                        <Ionicons name="location" size={14} color={COLORS.primary} />
                        <Text style={styles.modalSectionTitle}>FOUND IN</Text>
                      </View>
                      <View style={styles.modalLootAreas}>
                        {selectedItem.lootArea.split(',').map((area, index) => (
                          <View key={index} style={styles.modalLootAreaChip}>
                            <Text style={styles.modalLootAreaText}>{area.trim()}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                  
                  {/* Workbench */}
                  {selectedItem.workbench && (
                    <View style={styles.modalSection}>
                      <View style={styles.sectionHeaderWithIcon}>
                        <Ionicons name="construct" size={14} color={COLORS.rarity.uncommon} />
                        <Text style={styles.modalSectionTitle}>CRAFTING</Text>
                      </View>
                      <View style={styles.modalWorkbench}>
                        <Text style={styles.modalWorkbenchText}>{selectedItem.workbench}</Text>
                      </View>
                    </View>
                  )}
                  
                  {/* Needed to Craft */}
                  {selectedItem.components && selectedItem.components.length > 0 && (
                    <View style={styles.modalSection}>
                      <View style={styles.sectionHeaderWithIcon}>
                        <Ionicons name="build" size={14} color={COLORS.primary} />
                        <Text style={styles.modalSectionTitle}>NEEDED TO CRAFT</Text>
                      </View>
                      <View style={styles.recycleGrid}>
                        {selectedItem.components.map((comp, index) => (
                          <View key={index} style={styles.recycleCard}>
                            <View style={[styles.recycleIconBox, {
                              borderColor: getTierColor(comp.component.rarity || 'common').color,
                              backgroundColor: getTierColor(comp.component.rarity || 'common').bg
                            }]}>
                              {comp.component.icon ? (
                                <Image 
                                  source={{ uri: comp.component.icon }} 
                                  style={styles.recycleIcon} 
                                  resizeMode="contain"
                                  onError={() => {}}
                                />
                              ) : (
                                <Ionicons name="cube" size={24} color={getTierColor(comp.component.rarity || 'common').color} />
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
                  
                  {/* Recycling Breakdown */}
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
                              borderColor: getTierColor(comp.component.rarity || 'common').color,
                              backgroundColor: getTierColor(comp.component.rarity || 'common').bg
                            }]}>
                              {comp.component.icon ? (
                                <Image 
                                  source={{ uri: comp.component.icon }} 
                                  style={styles.recycleIcon} 
                                  resizeMode="contain"
                                  onError={() => {}}
                                />
                              ) : (
                                <Ionicons name="cube" size={24} color={getTierColor(comp.component.rarity || 'common').color} />
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
                  
                  {/* Dropped By */}
                  {selectedItem.droppedBy && selectedItem.droppedBy.length > 0 && (
                    <View style={styles.modalSection}>
                      <View style={styles.sectionHeaderWithIcon}>
                        <Ionicons name="skull" size={14} color="#ef4444" />
                        <Text style={styles.modalSectionTitle}>DROPPED BY</Text>
                      </View>
                      <View style={styles.enemyGrid}>
                        {selectedItem.droppedBy.map((drop, index) => (
                          <View key={index} style={styles.enemyCard}>
                            <View style={styles.enemyIconBox}>
                              {drop.arc.icon ? (
                                <Image 
                                  source={{ uri: drop.arc.icon }} 
                                  style={styles.enemyIcon} 
                                  resizeMode="contain"
                                  onError={() => {}}
                                />
                              ) : (
                                <Ionicons name="skull" size={32} color="#ef4444" />
                              )}
                            </View>
                            <Text style={styles.enemyName} numberOfLines={1}>
                              {drop.arc.name}
                            </Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                  
                  {/* Uses/Notes */}
                  {selectedItem.uses && (
                    <View style={styles.modalSection}>
                      <View style={styles.sectionHeaderWithIcon}>
                        <Ionicons name="document-text" size={14} color={COLORS.textMuted} />
                        <Text style={styles.modalSectionTitle}>NOTES</Text>
                      </View>
                      <View style={styles.notesBox}>
                        <Text style={styles.modalNotes}>{selectedItem.uses}</Text>
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
  filterContainer: {
    marginBottom: 16,
  },
  rarityContainer: {
    marginBottom: 24,
  },
  filterContent: {
    gap: 8,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  filterBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 2,
    borderColor: '#707070',
  },
  filterBtnActive: {
    backgroundColor: '#ff8c00',
    borderColor: '#ff8c00',
  },
  filterText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#a3a3a3',
    letterSpacing: 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  filterTextActive: {
    color: '#000000',
    fontWeight: '900',
  },
  rarityBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  rarityBtnActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
  // Modal styles
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
  modalNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 6,
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
  modalLootAreas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  modalLootAreaChip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderLeftWidth: 3,
  },
  modalLootAreaText: {
    fontSize: 10,
    color: COLORS.primary,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
  modalWorkbench: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderWidth: 1,
    borderColor: COLORS.rarity.uncommon,
    borderLeftWidth: 3,
  },
  modalWorkbenchText: {
    fontSize: 12,
    color: COLORS.rarity.uncommon,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  notesBox: {
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.textMuted,
    padding: 12,
  },
  modalNotes: {
    fontSize: 11,
    color: COLORS.textMuted,
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  // Recycling Grid
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
  // Enemy Grid
  enemyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  enemyCard: {
    width: isDesktop ? 'calc(25% - 9px)' : 'calc(33.333% - 8px)',
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    alignItems: 'center',
    gap: 8,
  },
  enemyIconBox: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enemyIcon: {
    width: 40,
    height: 40,
  },
  enemyName: {
    fontSize: 10,
    color: COLORS.text,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },

});
