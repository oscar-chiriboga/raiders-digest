import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, ActivityIndicator, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import { TRADERS_DATA } from '../data-traders';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

export default function TradersScreen({ navigation }) {
  const traders = TRADERS_DATA;
  const loading = false;
  const error = null;
  const [expandedTraderId, setExpandedTraderId] = useState(null);

  const toggleTrader = (id) => {
    setExpandedTraderId(expandedTraderId === id ? null : id);
  };

  const renderCost = (cost) => {
    // Assuming cost structure, adjust as needed based on API response
    // Example: { item: { name: 'Cash' }, quantity: 1000 }
    return (
      <View style={styles.costBadge}>
        <Text style={styles.costText}>{cost.quantity} {cost.item?.name || 'Credits'}</Text>
      </View>
    );
  };

  const renderInventoryItem = (item, index) => {
    const rarity = item.item?.rarity?.toLowerCase() || 'common';
    const rarityColor = {
      legendary: '#ff3e00',
      epic: '#a855f7',
      rare: '#3b82f6',
      uncommon: '#22c55e',
      common: '#9ca3af',
    }[rarity] || '#9ca3af';

    return (
      <View key={index} style={styles.inventoryItem}>
        <View style={[styles.itemIcon, { borderColor: rarityColor }]}>
          <Ionicons name="cube" size={16} color={rarityColor} />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.item?.name || 'Unknown Item'}</Text>
          <Text style={styles.itemType}>{item.item?.type || 'Item'}</Text>
        </View>
        {/* Render costs if available */}
        {item.costs && (
          <View style={styles.itemCosts}>
            {item.costs.map((cost, idx) => (
              <View key={idx} style={styles.costBadge}>
                 <Text style={styles.costText}>{cost.quantity} x {cost.item?.name || 'Credits'}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <AnimatedScreen>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="Traders" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.scrollContent, isDesktop && styles.contentDesktop]}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="people" size={16} color="#ff8c00" />
            <Text style={styles.headerTitle}>TRADERS // DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>TOTAL: {traders.length.toString().padStart(2, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>STATUS: ONLINE</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>NETWORK: ACTIVE</Text>
          </View>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ff8c00" />
            <Text style={styles.loadingText}>ESTABLISHING CONNECTION...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Ionicons name="alert-circle" size={48} color="#ef4444" />
            <Text style={styles.errorText}>CONNECTION FAILED</Text>
            <Text style={styles.errorSubtext}>Unable to reach trader network</Text>
          </View>
        ) : (
          <View style={styles.tradersList}>
            {traders && traders.map((trader) => (
              <View key={trader.id} style={styles.traderCard}>
                <TouchableOpacity 
                  style={styles.traderHeader}
                  onPress={() => toggleTrader(trader.id)}
                >
                  <View style={styles.traderIcon}>
                    <Ionicons name="person" size={24} color="#ff8c00" />
                  </View>
                  <View style={styles.traderInfo}>
                    <Text style={styles.traderName}>{trader.name}</Text>
                    <Text style={styles.traderLocation}>{trader.location || 'Unknown Location'}</Text>
                  </View>
                  <Ionicons 
                    name={expandedTraderId === trader.id ? "chevron-up" : "chevron-down"} 
                    size={24} 
                    color="#737373" 
                  />
                </TouchableOpacity>

                {expandedTraderId === trader.id && (
                  <View style={styles.traderContent}>
                    <Text style={styles.traderDescription}>{trader.description}</Text>
                    
                    <View style={styles.inventorySection}>
                      <View style={styles.sectionHeader}>
                        <Ionicons name="cart" size={14} color="#ff8c00" />
                        <Text style={styles.sectionTitle}>INVENTORY</Text>
                      </View>
                      
                      <View style={styles.inventoryGrid}>
                        {trader.inventory && trader.inventory.length > 0 ? (
                          trader.inventory.map((item, idx) => renderInventoryItem(item, idx))
                        ) : (
                          <Text style={styles.emptyInventory}>No items currently available</Text>
                        )}
                      </View>
                    </View>
                  </View>
                )}
              </View>
            ))}
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
    padding: 40,
    gap: 16,
  },
  loadingText: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 2,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    gap: 16,
  },
  errorText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ef4444',
    letterSpacing: 2,
  },
  errorSubtext: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
  },
  tradersList: {
    gap: 16,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  traderCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    overflow: 'hidden',
    marginBottom: 16,
  },
  traderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 16,
    backgroundColor: 'transparent',
  },
  traderIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff8c00',
  },
  traderInfo: {
    flex: 1,
  },
  traderName: {
    fontSize: isDesktop ? 18 : 16,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 4,
  },
  traderLocation: {
    fontSize: 9,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  traderContent: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#262626',
  },
  traderDescription: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#9ca3af',
    lineHeight: 18,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
    letterSpacing: 1.5,
  },
  inventoryGrid: {
    gap: 8,
  },
  inventoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 12,
  },
  itemIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717',
    borderWidth: 2,
  },
  itemInfo: {
    flex: 1,
    minWidth: 0,
  },
  itemName: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 2,
    flexWrap: 'wrap',
  },
  itemType: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#525252',
  },
  itemCosts: {
    flexDirection: 'row',
    gap: 8,
  },
  costBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  costText: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#d4d4d8',
  },
  emptyInventory: {
    fontSize: 12,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#525252',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 20,
  },
});
