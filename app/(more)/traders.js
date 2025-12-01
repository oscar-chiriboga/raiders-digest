import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Platform, ActivityIndicator, RefreshControl, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import DesktopNav from '../../src/components/DesktopNav';
import Footer from '../../src/components/Footer';
import CurrencyIcon from '../../src/components/CurrencyIcon';
import ArcSeedsIcon from '../../src/components/ArcSeedsIcon';
import SEO from '../../src/components/SEO';
import { TRADERS_DATA } from '../../src/data-traders';

// Transform static data to match the component's expected structure
const TRADERS_TRANSFORMED = TRADERS_DATA.reduce((acc, trader) => {
  acc[trader.name] = trader.inventory.map(invEntry => ({
    ...invEntry.item,
    item_type: invEntry.item.type,
    trader_price: invEntry.costs.map(c => `${c.quantity} ${c.item.name}`).join(', '),
  }));
  return acc;
}, {});

export default function TradersScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);

  const traders = TRADERS_TRANSFORMED;
  const loading = false;
  const error = null;
  const refresh = () => {};

  const [refreshing, setRefreshing] = useState(false);
  const [selectedTrader, setSelectedTrader] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const renderItemCard = (item, traderName) => {
    const rarity = item.rarity?.toLowerCase() || 'common';
    const rarityColor = {
      legendary: '#ff3e00',
      epic: '#a855f7',
      rare: '#3b82f6',
      uncommon: '#22c55e',
      common: '#c0c0c0',
    }[rarity] || '#c0c0c0';

    return (
      <View style={styles.itemCard}>
        <View style={[styles.itemCardHeader, { borderBottomColor: rarityColor }]}>
          <View style={[styles.itemCardIcon, { borderColor: rarityColor }]}>
            {item.icon ? (
              <Image 
                source={{ uri: item.icon }} 
                style={styles.itemCardImage}
                resizeMode="contain"
              />
            ) : (
              <Ionicons name="cube" size={24} color={rarityColor} />
            )}
          </View>
        </View>
        <View style={styles.itemCardBody}>
          <Text style={styles.itemCardName} numberOfLines={2}>{item.name}</Text>
          <Text style={styles.itemCardType}>{item.item_type}</Text>
          <View style={styles.itemCardFooter}>
            <View style={[styles.rarityBadge, { backgroundColor: `${rarityColor}20`, borderColor: rarityColor }]}>
              <Text style={[styles.rarityText, { color: rarityColor }]}>{item.rarity}</Text>
            </View>
          </View>
          {item.trader_price && (
            <View style={styles.itemCardPrice}>
              {traderName === 'Celeste' ? (
                <ArcSeedsIcon size={12} color="#E5B558" />
              ) : (
                <CurrencyIcon size={12} color="#E5B558" />
              )}
              <Text style={styles.priceText}>{item.trader_price}</Text>
            </View>
          )}
          <Text style={styles.traderLabel}>{traderName}</Text>
        </View>
      </View>
    );
  };

  if (loading && !traders) {
    return (
      <AnimatedScreen>
        {isDesktop && <DesktopNav navigation={{}} currentRoute="Traders" />}
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ff8c00" />
          <Text style={styles.loadingText}>Loading traders data...</Text>
        </View>
      </AnimatedScreen>
    );
  }

  if (error) {
    return (
      <AnimatedScreen>
        {isDesktop && <DesktopNav navigation={{}} currentRoute="Traders" />}
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={48} color="#ef4444" />
          <Text style={styles.errorText}>Failed to load traders</Text>
          <Text style={styles.errorSubtext}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={refresh}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </AnimatedScreen>
    );
  }

  // Transform API data and flatten all items
  const tradersData = traders ? Object.keys(traders) : [];
  const allItems = traders ? tradersData.flatMap(traderName => 
    traders[traderName].map(item => ({ ...item, trader: traderName }))
  ) : [];

  // Filter items based on selected filters
  const filteredItems = allItems.filter(item => {
    const matchesTrader = selectedTrader === 'all' || item.trader === selectedTrader;
    const matchesRarity = selectedRarity === 'all' || item.rarity?.toLowerCase() === selectedRarity;
    const matchesSearch = searchQuery === '' || 
      item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.item_type?.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTrader && matchesRarity && matchesSearch;
  });

  const rarities = ['all', 'common', 'uncommon', 'rare', 'epic', 'legendary'];

  return (
    <AnimatedScreen>
      <SEO 
        title="Traders Network"
        description="Browse all Arc Raiders traders and their inventory. Find items from Apollo, Celeste, Lance, Shani, and TianWen. Filter by rarity and search for specific items."
        path="/traders"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="Traders" />}
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={[styles.scrollContent, isDesktop && styles.contentDesktop]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor="#ff8c00"
            colors={["#ff8c00"]}
          />
        }
      >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="people" size={16} color="#ff8c00" />
            <Text style={styles.headerTitle}>TRADERS // DB</Text>
            <TouchableOpacity onPress={refresh} style={styles.refreshButton}>
              <Ionicons name="refresh" size={16} color="#ff8c00" />
            </TouchableOpacity>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>ITEMS: {filteredItems.length} / {allItems.length}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>STATUS: {loading ? 'SYNCING' : 'ONLINE'}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>TRADERS: {tradersData.length}</Text>
          </View>
        </View>

        {/* Filters Section */}
        <View style={styles.filtersContainer}>
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>TRADER:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
              <TouchableOpacity
                style={[styles.filterChip, selectedTrader === 'all' && styles.filterChipActive]}
                onPress={() => setSelectedTrader('all')}
              >
                <Text style={[styles.filterChipText, selectedTrader === 'all' && styles.filterChipTextActive]}>
                  ALL
                </Text>
              </TouchableOpacity>
              {tradersData.map(trader => (
                <TouchableOpacity
                  key={trader}
                  style={[styles.filterChip, selectedTrader === trader && styles.filterChipActive]}
                  onPress={() => setSelectedTrader(trader)}
                >
                  <Text style={[styles.filterChipText, selectedTrader === trader && styles.filterChipTextActive]}>
                    {trader.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>RARITY:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
              {rarities.map(rarity => (
                <TouchableOpacity
                  key={rarity}
                  style={[styles.filterChip, selectedRarity === rarity && styles.filterChipActive]}
                  onPress={() => setSelectedRarity(rarity)}
                >
                  <Text style={[styles.filterChipText, selectedRarity === rarity && styles.filterChipTextActive]}>
                    {rarity.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Items Grid */}
        <View style={[styles.itemsGrid, isDesktop && styles.itemsGridDesktop]}>
          {filteredItems.map((item) => (
            <View key={item.id} style={[styles.itemCardWrapper, isDesktop && styles.itemCardWrapperDesktop]}>
              {renderItemCard(item, item.trader)}
            </View>
          ))}
        </View>

        {filteredItems.length === 0 && !loading && (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={48} color="#a8a8a8" />
            <Text style={styles.emptyText}>No items found</Text>
            <Text style={styles.emptySubtext}>Try adjusting your filters</Text>
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
  filtersContainer: {
    marginBottom: 24,
    gap: 12,
  },
  filterRow: {
    gap: 8,
  },
  filterLabel: {
    fontSize: 9,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  filterScroll: {
    flexGrow: 0,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    marginRight: 8,
  },
  filterChipActive: {
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderColor: '#ff8c00',
  },
  filterChipText: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
    fontWeight: '700',
  },
  filterChipTextActive: {
    color: '#ff8c00',
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
    marginBottom: 24,
  },
  itemsGridDesktop: {
    marginHorizontal: -10,
  },
  itemCardWrapper: {
    width: '50%',
    padding: 8,
  },
  itemCardWrapperDesktop: {
    width: '25%',
    padding: 10,
  },
  itemCard: {
    width: '100%',
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    overflow: 'hidden',
  },
  itemCardHeader: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 2,
  },
  itemCardIcon: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717',
    borderWidth: 2,
  },
  itemCardImage: {
    width: 56,
    height: 56,
  },
  itemCardBody: {
    padding: 12,
    gap: 6,
  },
  itemCardName: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    minHeight: 32,
  },
  itemCardType: {
    fontSize: 9,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
    textTransform: 'uppercase',
  },
  itemCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  rarityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
  },
  rarityText: {
    fontSize: 8,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  itemCardPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#262626',
  },
  priceText: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
    fontWeight: '700',
  },
  traderLabel: {
    fontSize: 8,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
    marginTop: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
    fontWeight: '700',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#a8a8a8',
    marginTop: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 14,
    color: '#a8a8a8',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  errorText: {
    marginTop: 16,
    fontSize: 16,
    color: '#ef4444',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontWeight: '700',
  },
  errorSubtext: {
    marginTop: 8,
    fontSize: 12,
    color: '#a8a8a8',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ff8c00',
  },
  retryButtonText: {
    fontSize: 12,
    color: '#ff8c00',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontWeight: '700',
  },
  refreshButton: {
    marginLeft: 8,
    padding: 4,
  },
});
