import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions, Platform, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import MobileTabBar from '../components/MobileTabBar';
import Footer from '../components/Footer';
import { LOOT_DATA } from '../data-generated-loot';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

const getTierColor = (rarity) => {
  const colors = {
    'Legendary': '#FFD700',
    'Epic': '#a855f7',
    'Rare': '#3b82f6',
    'Uncommon': '#22c55e',
    'Common': '#9ca3af',
  };
  return colors[rarity] || '#9ca3af';
};

export default function CraftingScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [sortBy, setSortBy] = useState('rarity');

  const craftableItems = LOOT_DATA.filter(item => item.components && item.components.length > 0);

  const filtered = craftableItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.workbench?.toLowerCase().includes(search.toLowerCase())
  );

  const rarityOrder = { 'Legendary': 0, 'Epic': 1, 'Rare': 2, 'Uncommon': 3, 'Common': 4 };

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'rarity') {
      const rarityDiff = rarityOrder[a.rarity] - rarityOrder[b.rarity];
      return rarityDiff !== 0 ? rarityDiff : a.name.localeCompare(b.name);
    }
    if (sortBy === 'workbench') {
      return (a.workbench || '').localeCompare(b.workbench || '');
    }
    if (sortBy === 'alpha') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'materials') {
      return a.components.length - b.components.length;
    }
    return 0;
  });

  return (
    <AnimatedScreen>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="Crafting" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="construct" size={16} color="#ff8c00" />
            <Text style={styles.title}>CRAFTING RECIPES // DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>RECIPES: {craftableItems.length.toString().padStart(3, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>CRAFTABLE</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>FOUND: {filtered.length.toString().padStart(3, '0')}</Text>
          </View>
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search" size={14} color="#737373" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="SEARCH_RECIPES..."
            placeholderTextColor="#404040"
            value={search}
            onChangeText={setSearch}
          />
          {search ? (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close" size={18} color="#737373" />
            </TouchableOpacity>
          ) : (
            <View style={styles.cursor} />
          )}
        </View>

        <View style={styles.sortButtons}>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'rarity' && styles.sortButtonActive]}
            onPress={() => setSortBy('rarity')}
          >
            <Ionicons name="star" size={12} color={sortBy === 'rarity' ? '#ff8c00' : '#737373'} />
            <Text style={[styles.sortButtonText, sortBy === 'rarity' && styles.sortButtonTextActive]}>RARITY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'workbench' && styles.sortButtonActive]}
            onPress={() => setSortBy('workbench')}
          >
            <Ionicons name="hammer" size={12} color={sortBy === 'workbench' ? '#ff8c00' : '#737373'} />
            <Text style={[styles.sortButtonText, sortBy === 'workbench' && styles.sortButtonTextActive]}>STATION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'alpha' && styles.sortButtonActive]}
            onPress={() => setSortBy('alpha')}
          >
            <Text style={[styles.sortButtonText, sortBy === 'alpha' && styles.sortButtonTextActive]}>A-Z</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'materials' && styles.sortButtonActive]}
            onPress={() => setSortBy('materials')}
          >
            <Ionicons name="cube" size={12} color={sortBy === 'materials' ? '#ff8c00' : '#737373'} />
            <Text style={[styles.sortButtonText, sortBy === 'materials' && styles.sortButtonTextActive]}>MATS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recipesList}>
          {sorted.map((item) => {
            const tierColor = getTierColor(item.rarity);
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.recipeCard}
                onPress={() => setSelectedItem(item)}
              >
                <View style={styles.recipeHeader}>
                  <View style={[styles.itemIcon, { borderColor: tierColor }]}>
                    {item.icon ? (
                      <Image source={{ uri: item.icon }} style={styles.icon} resizeMode="contain" />
                    ) : (
                      <Ionicons name="cube" size={20} color={tierColor} />
                    )}
                  </View>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    {item.workbench && (
                      <View style={styles.workbenchBadge}>
                        <Ionicons name="hammer" size={10} color="#ff8c00" />
                        <Text style={styles.workbenchText}>{item.workbench}</Text>
                      </View>
                    )}
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#737373" />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <Footer />`r`n      </ScrollView>

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
                <View style={[styles.modalHeader, { borderColor: getTierColor(selectedItem.rarity) }]}>
                  <View style={styles.modalHeaderLeft}>
                    <View style={[styles.modalHeaderAccent, { backgroundColor: getTierColor(selectedItem.rarity) }]} />
                    <Ionicons name="construct" size={16} color={getTierColor(selectedItem.rarity)} />
                    <Text style={styles.modalTitle}>RECIPE // {selectedItem.name.toUpperCase()}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setSelectedItem(null)} style={styles.closeButton}>
                    <Ionicons name="close" size={24} color="#ffffff" />
                  </TouchableOpacity>
                </View>
                
                <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
                  <View style={styles.modalItemHeader}>
                    <View style={[styles.modalIconContainer, { borderColor: getTierColor(selectedItem.rarity) }]}>
                      {selectedItem.icon ? (
                        <Image source={{ uri: selectedItem.icon }} style={styles.modalItemIcon} resizeMode="contain" />
                      ) : (
                        <Ionicons name="cube" size={56} color={getTierColor(selectedItem.rarity)} />
                      )}
                    </View>
                    <View style={styles.modalItemInfo}>
                      <Text style={styles.modalItemName}>{selectedItem.name}</Text>
                      <Text style={styles.modalSubcategory}>
                        <Ionicons name="folder" size={10} color="#737373" /> {selectedItem.category} / {selectedItem.subcategory}
                      </Text>
                      {selectedItem.workbench && (
                        <View style={styles.workbenchBadgeLarge}>
                          <Ionicons name="hammer" size={12} color="#ff8c00" />
                          <Text style={styles.workbenchTextLarge}>{selectedItem.workbench}</Text>
                        </View>
                      )}
                      <Text style={styles.modalDescription}>{selectedItem.description}</Text>
                    </View>
                  </View>

                  <View style={styles.modalSection}>
                    <View style={styles.sectionHeaderWithIcon}>
                      <Ionicons name="cube" size={14} color="#ff8c00" />
                      <Text style={styles.modalSectionTitle}>REQUIRED MATERIALS</Text>
                    </View>
                    <View style={styles.componentsGrid}>
                      {selectedItem.components.map((comp, idx) => (
                        <View key={idx} style={styles.componentCard}>
                          <View style={[styles.componentIconBox, { borderColor: getTierColor(comp.component.rarity) }]}>
                            {comp.component.icon ? (
                              <Image source={{ uri: comp.component.icon }} style={styles.componentIcon} resizeMode="contain" />
                            ) : (
                              <Ionicons name="cube" size={24} color={getTierColor(comp.component.rarity)} />
                            )}
                          </View>
                          <View style={styles.componentCardInfo}>
                            <Text style={styles.componentCardName} numberOfLines={1}>{comp.component.name}</Text>
                            <Text style={styles.componentCardQty}>QTY: {comp.quantity}</Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                  <Footer />`r`n      </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>

      {!isDesktop && <MobileTabBar navigation={navigation} />}
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 100,
    maxWidth: isDesktop ? 1200 : '100%',
    alignSelf: 'center',
    width: '100%',
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
    borderTopColor: '#262626',
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
    marginHorizontal: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
    marginHorizontal: isDesktop ? 24 : 0,
  },
  searchIcon: {
    marginRight: 12,
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
  sortButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
    marginHorizontal: isDesktop ? 24 : 0,
  },
  sortButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    paddingVertical: 10,
  },
  sortButtonActive: {
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderColor: '#ff8c00',
  },
  sortButtonText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#737373',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
  sortButtonTextActive: {
    color: '#ff8c00',
  },
  recipesList: {
    gap: 16,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  recipeCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    borderLeftWidth: 3,
    borderLeftColor: '#ff8c00',
  },
  recipeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  itemIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 6,
  },
  workbenchBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
  },
  workbenchText: {
    fontSize: 10,
    color: '#ff8c00',
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
    backgroundColor: '#0a0a0a',
    borderWidth: 1,
    borderColor: '#262626',
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
  },
  modalHeaderAccent: {
    width: 3,
    height: 20,
  },
  modalTitle: {
    fontSize: isDesktop ? 14 : 12,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    flex: 1,
  },
  closeButton: {
    padding: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 4,
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
    borderBottomColor: '#262626',
  },
  modalIconContainer: {
    width: 80,
    height: 80,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0a',
  },
  modalItemIcon: {
    width: 70,
    height: 70,
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
  },
  modalSubcategory: {
    fontSize: 10,
    color: '#737373',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
    marginBottom: 10,
  },
  workbenchBadgeLarge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ff8c00',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  workbenchTextLarge: {
    fontSize: 10,
    color: '#ff8c00',
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  modalDescription: {
    fontSize: 12,
    color: '#9ca3af',
    lineHeight: 18,
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
    borderBottomColor: '#262626',
  },
  modalSectionTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#ff8c00',
    letterSpacing: 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  componentsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  componentCard: {
    width: isDesktop ? 'calc(50% - 6px)' : '100%',
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  componentIconBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717',
  },
  componentIcon: {
    width: 32,
    height: 32,
  },
  componentCardInfo: {
    flex: 1,
  },
  componentCardName: {
    fontSize: 11,
    color: '#ffffff',
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 4,
  },
  componentCardQty: {
    fontSize: 10,
    color: '#22c55e',
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});

