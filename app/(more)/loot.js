import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Dimensions, TouchableOpacity, Platform, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LOOT_DATA, LOOT_CATEGORIES, LOOT_RARITIES } from '../../src/data-generated-loot';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import DesktopNav from '../../src/components/DesktopNav';
import Footer from '../../src/components/Footer';
import SEO from '../../src/components/SEO';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../src/styles/colors';

const { width } = Dimensions.get('window');

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

export default function LootScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRarity, setSelectedRarity] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  const getAvailableRarities = () => {
    if (selectedCategory === 'All') return LOOT_RARITIES;
    const availableRarities = new Set();
    LOOT_DATA.forEach(item => {
      if (item.category === selectedCategory) availableRarities.add(item.rarity);
    });
    return LOOT_RARITIES.filter(rarity => availableRarities.has(rarity));
  };
  
  const availableRarities = getAvailableRarities();
  
  useEffect(() => {
    if (selectedRarity !== 'All' && !availableRarities.includes(selectedRarity)) {
      setSelectedRarity('All');
    }
  }, [selectedCategory, availableRarities, selectedRarity]);
  
  const rarityOrder = { 'Common': 1, 'Uncommon': 2, 'Rare': 3, 'Epic': 4, 'Legendary': 5 };
  
  const filtered = LOOT_DATA.filter(item => {
    const matchesSearch = !search || item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesRarity = selectedRarity === 'All' || item.rarity === selectedRarity;
    return matchesSearch && matchesCategory && matchesRarity;
  }).sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);

  const getRarityShort = (rarity) => {
    const shorts = { 'Uncommon': 'UNCMN', 'Legendary': 'LGND' };
    return shorts[rarity] || rarity.toUpperCase();
  };

  return (
    <AnimatedScreen>
      <SEO 
        title="Loot Database"
        description="Complete Arc Raiders loot database. Browse all items by category and rarity. Find weapons, armor, consumables, materials, and more."
        path="/loot"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="Loot" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="cube" size={16} color="#ff8c00" />
            <Text style={styles.title}>CACHE // DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>TOTAL: {LOOT_DATA.length.toString().padStart(3, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>FILTER: {selectedCategory.toUpperCase()}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>FOUND: {filtered.length.toString().padStart(3, '0')}</Text>
          </View>
        </View>
        
        <View style={styles.searchBar}>
          <Ionicons name="search" size={14} color="#a8a8a8" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="SEARCH_DATABASE..."
            placeholderTextColor="#707070"
            value={search}
            onChangeText={setSearch}
          />
          {search ? (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close" size={18} color="#a8a8a8" />
            </TouchableOpacity>
          ) : (
            <View style={styles.cursor} />
          )}
        </View>
        
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
            <Text style={[styles.filterText, selectedCategory === 'All' && styles.filterTextActive]}>ALL</Text>
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
            <Text style={[styles.rarityText, selectedRarity === 'All' && styles.rarityTextActive]}>ALL RARITIES</Text>
          </TouchableOpacity>
          {availableRarities.map((rarity) => {
            const tierInfo = getTierColor(rarity);
            return (
              <TouchableOpacity
                key={rarity}
                style={[styles.rarityBtn, selectedRarity === rarity && styles.rarityBtnActive, { borderColor: selectedRarity === rarity ? tierInfo.color : '#262626' }]}
                onPress={() => setSelectedRarity(rarity)}
              >
                <Text style={[styles.rarityText, { color: selectedRarity === rarity ? tierInfo.color : '#a8a8a8' }]}>
                  {rarity.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        
        <View style={[styles.lootGrid, isDesktop && styles.lootGridDesktop]}>
          {filtered.map((item) => {
            const tierInfo = getTierColor(item.rarity);
            return (
              <TouchableOpacity 
                key={item.id} 
                style={[styles.lootCard, isDesktop && styles.lootCardDesktop]}
                onPress={() => setSelectedItem(item)}
              >
                <View style={styles.cardContent}>
                  <View style={[styles.iconContainer, { borderColor: tierInfo.color }]}>
                    {item.icon ? (
                      <Image source={{ uri: item.icon }} style={styles.itemIcon} resizeMode="contain" />
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
          })}
        </View>
        
        <Footer />
      </ScrollView>
      
      {selectedItem && (
        <Modal
          visible={selectedItem !== null}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setSelectedItem(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={[styles.modalHeader, { borderColor: getTierColor(selectedItem.rarity).color }]}>
                <View style={styles.modalHeaderLeft}>
                  <View style={[styles.modalHeaderAccent, { backgroundColor: getTierColor(selectedItem.rarity).color }]} />
                  <Ionicons name="cube" size={16} color={getTierColor(selectedItem.rarity).color} />
                  <Text style={styles.modalTitle}>ITEM_INTEL // {selectedItem.id.toString().padStart(3, '0')}</Text>
                </View>
                <TouchableOpacity onPress={() => setSelectedItem(null)} style={styles.closeButton}>
                  <Ionicons name="close" size={24} color="#ffffff" />
                </TouchableOpacity>
              </View>
              
              <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
                <View style={styles.modalItemHeader}>
                  <View style={[styles.modalIconContainer, { borderColor: getTierColor(selectedItem.rarity).color, backgroundColor: '#0a0a0a' }]}>
                    {selectedItem.icon ? (
                      <Image source={{ uri: selectedItem.icon }} style={styles.modalItemIcon} resizeMode="contain" />
                    ) : (
                      <Ionicons name="cube" size={56} color={getTierColor(selectedItem.rarity).color} />
                    )}
                    <View style={[styles.iconRarityBadge, { backgroundColor: getTierColor(selectedItem.rarity).color }]}>
                      <Text style={styles.iconRarityText}>{getRarityShort(selectedItem.rarity)}</Text>
                    </View>
                  </View>
                  <View style={styles.modalItemInfo}>
                    <Text style={styles.modalItemName}>{selectedItem.name}</Text>
                    <Text style={styles.modalSubcategory}>
                      <Ionicons name="folder" size={10} color="#a8a8a8" /> {selectedItem.category} / {selectedItem.subcategory}
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
                    <Ionicons name="barbell" size={16} color="#a8a8a8" />
                    <Text style={styles.statCardLabel}>WEIGHT</Text>
                    <Text style={styles.statCardValue}>{selectedItem.weight}kg</Text>
                  </View>
                  {selectedItem.stackSize > 1 && (
                    <View style={styles.statCard}>
                      <Ionicons name="layers" size={16} color="#a8a8a8" />
                      <Text style={styles.statCardLabel}>STACK</Text>
                      <Text style={styles.statCardValue}>×{selectedItem.stackSize}</Text>
                    </View>
                  )}
                </View>

                {selectedItem.lootArea && selectedItem.lootArea !== 'Unknown' && (
                  <View style={styles.modalSection}>
                    <View style={styles.sectionHeaderWithIcon}>
                      <Ionicons name="location" size={14} color="#ff8c00" />
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

                {selectedItem.workbench && (
                  <View style={styles.modalSection}>
                    <View style={styles.sectionHeaderWithIcon}>
                      <Ionicons name="construct" size={14} color="#22c55e" />
                      <Text style={styles.modalSectionTitle}>CRAFTING</Text>
                    </View>
                    <View style={styles.modalWorkbench}>
                      <Text style={styles.modalWorkbenchText}>{selectedItem.workbench}</Text>
                    </View>
                  </View>
                )}

                {selectedItem.recycleComponents && selectedItem.recycleComponents.length > 0 && (
                  <View style={styles.modalSection}>
                    <View style={styles.sectionHeaderWithIcon}>
                      <Ionicons name="trash" size={14} color="#ff8c00" />
                      <Text style={styles.modalSectionTitle}>RECYCLE BREAKDOWN</Text>
                    </View>
                    <View style={styles.recycleGrid}>
                      {selectedItem.recycleComponents.map((comp, index) => (
                        <View key={index} style={styles.recycleCard}>
                          <View style={[styles.recycleIconBox, { borderColor: getTierColor(comp.component.rarity || 'Common').color, backgroundColor: getTierColor(comp.component.rarity || 'Common').bg }]}>
                            {comp.component.icon ? (
                              <Image source={{ uri: comp.component.icon }} style={styles.recycleIcon} resizeMode="contain" />
                            ) : (
                              <Ionicons name="cube" size={24} color={getTierColor(comp.component.rarity || 'Common').color} />
                            )}
                          </View>
                          <View style={styles.recycleCardInfo}>
                            <Text style={styles.recycleCardName} numberOfLines={1}>{comp.component.name}</Text>
                            <Text style={styles.recycleCardQty}>QTY: {comp.quantity}</Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 20, paddingTop: 10, maxWidth: 1200, alignSelf: 'center', width: '100%', paddingBottom: 100 },
  contentDesktop: { paddingTop: 70 },
  header: { marginBottom: 24 },
  headerTop: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '900', color: '#ffffff', letterSpacing: -1, fontFamily: 'monospace' },
  statsBar: { flexDirection: 'row', alignItems: 'center', paddingTop: 12, borderTopWidth: 1, borderTopColor: '#262626' },
  statText: { fontSize: 10, color: '#a8a8a8', fontFamily: 'monospace', letterSpacing: 1.5 },
  statTextActive: { fontSize: 10, color: '#ff8c00', fontFamily: 'monospace', letterSpacing: 1.5 },
  statDivider: { color: '#262626', marginHorizontal: 8 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(23, 23, 23, 0.3)', borderWidth: 1, borderColor: '#262626', paddingHorizontal: 16, paddingVertical: 12, marginBottom: 16 },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, color: '#ffffff', fontSize: 13, fontFamily: 'monospace' },
  cursor: { width: 8, height: 14, backgroundColor: '#ff8c00', opacity: 0.6 },
  filterContainer: { marginBottom: 16 },
  filterContent: { gap: 8 },
  filterBtn: { paddingVertical: 8, paddingHorizontal: 16, backgroundColor: 'rgba(23, 23, 23, 0.5)', borderWidth: 2, borderColor: '#707070' },
  filterBtnActive: { backgroundColor: '#ff8c00', borderColor: '#ff8c00' },
  filterText: { fontSize: 10, fontWeight: '700', color: '#a3a3a3', letterSpacing: 1.5, fontFamily: 'monospace' },
  filterTextActive: { color: '#000000', fontWeight: '900' },
  rarityContainer: { marginBottom: 24 },
  rarityBtn: { paddingVertical: 8, paddingHorizontal: 14, backgroundColor: 'rgba(23, 23, 23, 0.5)', borderWidth: 2, borderColor: '#262626' },
  rarityBtnActive: { backgroundColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 2 },
  rarityText: { fontSize: 9, fontWeight: '700', letterSpacing: 1.5, fontFamily: 'monospace' },
  rarityTextActive: { fontWeight: '900' },
  lootGrid: { gap: 16 },
  lootGridDesktop: { flexDirection: 'row', flexWrap: 'wrap' },
  lootCard: { backgroundColor: 'rgba(23, 23, 23, 0.3)', borderWidth: 1, borderColor: '#262626', marginBottom: 16 },
  lootCardDesktop: { width: 'calc(25% - 12px)', marginBottom: 0 },
  cardContent: { flexDirection: 'row', gap: 12, padding: 12 },
  iconContainer: { width: 48, height: 48, backgroundColor: '#0a0a0a', borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  itemIcon: { width: 40, height: 40 },
  cardInfo: { flex: 1, minWidth: 0, justifyContent: 'center' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 4 },
  itemName: { color: '#ffffff', fontSize: 14, fontWeight: '700', fontFamily: 'monospace', flex: 1 },
  tierBadge: { paddingHorizontal: 6, paddingVertical: 2, borderWidth: 1 },
  tierText: { fontSize: 8, fontWeight: '900', fontFamily: 'monospace', letterSpacing: 1 },
  subcategoryText: { color: '#a8a8a8', fontSize: 10, fontFamily: 'monospace', textTransform: 'uppercase' },
  cardStats: { flexDirection: 'row', gap: 12, paddingTop: 8, borderTopWidth: 1, borderTopColor: '#262626', padding: 12, backgroundColor: 'rgba(0,0,0,0.2)' },
  statItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  statLabel: { fontSize: 10, color: '#707070', fontFamily: 'monospace' },
  statValue: { fontSize: 11, color: '#22c55e', fontWeight: '700', fontFamily: 'monospace' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.9)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalContent: { backgroundColor: '#0a0a0a', borderWidth: 1, borderColor: '#262626', width: '100%', maxWidth: 700, maxHeight: '90%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 2, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 },
  modalHeaderAccent: { width: 3, height: 20 },
  modalTitle: { fontSize: 14, fontWeight: '900', color: '#ffffff', fontFamily: 'monospace', letterSpacing: 1, flex: 1 },
  closeButton: { padding: 4, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: 4 },
  modalBody: { padding: 20 },
  modalItemHeader: { flexDirection: 'row', gap: 16, marginBottom: 24, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#262626' },
  modalIconContainer: { width: 80, height: 80, borderWidth: 2, justifyContent: 'center', alignItems: 'center', position: 'relative' },
  modalItemIcon: { width: 70, height: 70 },
  iconRarityBadge: { position: 'absolute', bottom: -1, left: -1, right: -1, paddingVertical: 2, alignItems: 'center' },
  iconRarityText: { fontSize: 8, fontWeight: '900', color: '#000000', letterSpacing: 1, fontFamily: 'monospace' },
  modalItemInfo: { flex: 1 },
  modalItemName: { fontSize: 18, fontWeight: '900', color: '#ffffff', fontFamily: 'monospace', marginBottom: 8, letterSpacing: 0.5 },
  modalSubcategory: { fontSize: 10, color: '#a8a8a8', fontFamily: 'monospace', letterSpacing: 1, marginBottom: 10 },
  modalDescription: { fontSize: 12, color: '#c0c0c0', lineHeight: 18, fontFamily: 'monospace' },
  statsGrid: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statCard: { flex: 1, backgroundColor: 'rgba(23, 23, 23, 0.5)', borderWidth: 1, borderColor: '#262626', padding: 12, alignItems: 'center', gap: 6 },
  statCardPrimary: { borderColor: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.05)' },
  statCardLabel: { fontSize: 8, color: '#a8a8a8', fontFamily: 'monospace', letterSpacing: 1.5, fontWeight: '700' },
  statCardValue: { fontSize: 16, color: '#ffffff', fontWeight: '900', fontFamily: 'monospace' },
  modalSection: { marginBottom: 20 },
  sectionHeaderWithIcon: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: '#262626' },
  modalSectionTitle: { fontSize: 10, fontWeight: '900', color: '#ff8c00', letterSpacing: 1.5, fontFamily: 'monospace' },
  modalLootAreas: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  modalLootAreaChip: { paddingVertical: 8, paddingHorizontal: 12, backgroundColor: 'rgba(255, 140, 0, 0.1)', borderWidth: 1, borderColor: '#ff8c00', borderLeftWidth: 3 },
  modalLootAreaText: { fontSize: 10, color: '#ff8c00', fontWeight: '700', fontFamily: 'monospace', letterSpacing: 1 },
  modalWorkbench: { paddingVertical: 12, paddingHorizontal: 16, backgroundColor: 'rgba(34, 197, 94, 0.1)', borderWidth: 1, borderColor: '#22c55e', borderLeftWidth: 3 },
  modalWorkbenchText: { fontSize: 12, color: '#22c55e', fontWeight: '700', fontFamily: 'monospace' },
  recycleGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  recycleCard: { width: '100%', backgroundColor: 'rgba(23, 23, 23, 0.3)', borderWidth: 1, borderColor: '#262626', padding: 12, flexDirection: 'row', gap: 12, alignItems: 'center' },
  recycleIconBox: { width: 40, height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  recycleIcon: { width: 32, height: 32 },
  recycleCardInfo: { flex: 1 },
  recycleCardName: { fontSize: 11, color: '#ffffff', fontWeight: '600', fontFamily: 'monospace', marginBottom: 4 },
  recycleCardQty: { fontSize: 10, color: '#22c55e', fontWeight: '700', fontFamily: 'monospace' },
});
