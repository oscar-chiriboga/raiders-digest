import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Dimensions, Platform, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import DesktopNav from '../../src/components/DesktopNav';
import Footer from '../../src/components/Footer';
import SEO from '../../src/components/SEO';
import { LOOT_DATA } from '../../src/data-generated-loot';

const { width } = Dimensions.get('window');

const getTierColor = (rarity) => {
  const colors = {
    'Legendary': '#FFD700',
    'Epic': '#a855f7',
    'Rare': '#3b82f6',
    'Uncommon': '#22c55e',
    'Common': '#c0c0c0',
  };
  return colors[rarity] || '#c0c0c0';
};

export default function CraftingScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [sortBy, setSortBy] = useState('rarity');

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

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
    if (sortBy === 'workbench') return (a.workbench || '').localeCompare(b.workbench || '');
    if (sortBy === 'alpha') return a.name.localeCompare(b.name);
    if (sortBy === 'materials') return a.components.length - b.components.length;
    return 0;
  });

  return (
    <AnimatedScreen>
      <SEO 
        title="Crafting Recipes"
        description="Complete Arc Raiders crafting guide. Browse all craftable items, required materials, and recipes. Master crafting to survive."
        path="/crafting"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="Crafting" />}
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
          <Ionicons name="search" size={14} color="#a8a8a8" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="SEARCH_RECIPES..."
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

        <View style={styles.sortButtons}>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'rarity' && styles.sortButtonActive]}
            onPress={() => setSortBy('rarity')}
          >
            <Ionicons name="star" size={12} color={sortBy === 'rarity' ? '#ff8c00' : '#a8a8a8'} />
            <Text style={[styles.sortButtonText, sortBy === 'rarity' && styles.sortButtonTextActive]}>RARITY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortBy === 'workbench' && styles.sortButtonActive]}
            onPress={() => setSortBy('workbench')}
          >
            <Ionicons name="hammer" size={12} color={sortBy === 'workbench' ? '#ff8c00' : '#a8a8a8'} />
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
            <Ionicons name="cube" size={12} color={sortBy === 'materials' ? '#ff8c00' : '#a8a8a8'} />
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
                  <Ionicons name="chevron-forward" size={20} color="#a8a8a8" />
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
              <View style={[styles.modalHeader, { borderColor: getTierColor(selectedItem.rarity) }]}>
                <Text style={styles.modalTitle}>RECIPE // {selectedItem.name.toUpperCase()}</Text>
                <TouchableOpacity onPress={() => setSelectedItem(null)}>
                  <Ionicons name="close" size={24} color="#ffffff" />
                </TouchableOpacity>
              </View>
              
              <ScrollView style={styles.modalBody}>
                <Text style={styles.modalDescription}>{selectedItem.description}</Text>
                
                {selectedItem.components && selectedItem.components.length > 0 && (
                  <View style={styles.componentsSection}>
                    <Text style={styles.componentsSectionTitle}>REQUIRED MATERIALS</Text>
                    {selectedItem.components.map((comp, idx) => (
                      <View key={idx} style={styles.componentCard}>
                        <Text style={styles.componentName}>{comp.component.name}</Text>
                        <Text style={styles.componentQty}>x{comp.quantity}</Text>
                      </View>
                    ))}
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
  content: { padding: 20, paddingTop: 10, paddingBottom: 100, maxWidth: 1200, alignSelf: 'center', width: '100%' },
  contentDesktop: { paddingTop: 70 },
  header: { marginBottom: 24 },
  headerTop: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: '900', color: '#ffffff', letterSpacing: -1, fontFamily: 'monospace' },
  statsBar: { flexDirection: 'row', alignItems: 'center', paddingTop: 12, borderTopWidth: 1, borderTopColor: '#262626' },
  statText: { fontSize: 10, color: '#a8a8a8', fontFamily: 'monospace', letterSpacing: 1.5 },
  statTextActive: { fontSize: 10, color: '#ff8c00', fontFamily: 'monospace', letterSpacing: 1.5 },
  statDivider: { color: '#262626', marginHorizontal: 8 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(23, 23, 23, 0.3)', borderWidth: 1, borderColor: '#262626', paddingHorizontal: 16, paddingVertical: 12, marginBottom: 24 },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, color: '#ffffff', fontSize: 13, fontFamily: 'monospace' },
  cursor: { width: 8, height: 14, backgroundColor: '#ff8c00', opacity: 0.6 },
  sortButtons: { flexDirection: 'row', gap: 8, marginBottom: 24 },
  sortButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, backgroundColor: 'rgba(23, 23, 23, 0.3)', borderWidth: 1, borderColor: '#262626', paddingVertical: 10 },
  sortButtonActive: { backgroundColor: 'rgba(255, 140, 0, 0.1)', borderColor: '#ff8c00' },
  sortButtonText: { fontSize: 10, fontWeight: '700', color: '#a8a8a8', fontFamily: 'monospace', letterSpacing: 1 },
  sortButtonTextActive: { color: '#ff8c00' },
  recipesList: { gap: 16 },
  recipeCard: { backgroundColor: 'rgba(23, 23, 23, 0.3)', borderWidth: 1, borderColor: '#262626', borderLeftWidth: 3, borderLeftColor: '#ff8c00' },
  recipeHeader: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 12 },
  itemIcon: { width: 48, height: 48, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderWidth: 2, justifyContent: 'center', alignItems: 'center' },
  icon: { width: 40, height: 40 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 14, fontWeight: '700', color: '#ffffff', fontFamily: 'monospace', marginBottom: 6 },
  workbenchBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-start' },
  workbenchText: { fontSize: 10, color: '#ff8c00', fontFamily: 'monospace' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.9)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  modalContent: { backgroundColor: '#0a0a0a', borderWidth: 1, borderColor: '#262626', width: '100%', maxWidth: 700, maxHeight: '90%' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 2 },
  modalTitle: { fontSize: 14, fontWeight: '900', color: '#ffffff', fontFamily: 'monospace', flex: 1 },
  modalBody: { padding: 20 },
  modalDescription: { fontSize: 12, color: '#c0c0c0', lineHeight: 18, fontFamily: 'monospace', marginBottom: 20 },
  componentsSection: { marginTop: 10 },
  componentsSectionTitle: { fontSize: 10, fontWeight: '900', color: '#ff8c00', fontFamily: 'monospace', marginBottom: 12 },
  componentCard: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, backgroundColor: 'rgba(23, 23, 23, 0.5)', borderWidth: 1, borderColor: '#262626', marginBottom: 8 },
  componentName: { fontSize: 12, color: '#ffffff', fontFamily: 'monospace' },
  componentQty: { fontSize: 12, color: '#22c55e', fontWeight: '700', fontFamily: 'monospace' },
});
