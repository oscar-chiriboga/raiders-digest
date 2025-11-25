import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, ActivityIndicator, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../components/AnimatedScreen';
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
          <Text style={styles.itemName} numberOfLines={1}>{item.item?.name || 'Unknown Item'}</Text>
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
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#ff3e00" />
          </TouchableOpacity>
          <View>
            <View style={styles.headerAccent} />
            <Text style={styles.headerTitle}>TRADERS NETWORK</Text>
            <Text style={styles.headerSubtitle}>AUTHORIZED VENDORS & BLACK MARKET</Text>
          </View>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ff3e00" />
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
                    <Ionicons name="person" size={24} color="#ffffff" />
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
                        <Ionicons name="cart" size={14} color="#ff3e00" />
                        <Text style={styles.sectionTitle}>CURRENT INVENTORY</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  backButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#262626',
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
  },
  headerAccent: {
    width: 40,
    height: 4,
    backgroundColor: '#ff3e00',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    letterSpacing: 2,
  },
  headerSubtitle: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 1,
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
    padding: 20,
    gap: 16,
  },
  traderCard: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#262626',
    overflow: 'hidden',
  },
  traderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 16,
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
  },
  traderIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#404040',
  },
  traderInfo: {
    flex: 1,
  },
  traderName: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 4,
  },
  traderLocation: {
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#737373',
    letterSpacing: 1,
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
    fontSize: 11,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff3e00',
    letterSpacing: 1,
  },
  inventoryGrid: {
    gap: 8,
  },
  inventoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 12,
  },
  itemIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderWidth: 1,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 2,
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
