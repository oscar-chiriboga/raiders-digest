import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WEAPONS_DATA } from '../data-generated';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import { COLORS } from '../styles/colors';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

const FILTERS = ['All', 'Assault Rifle', 'Rifle', 'Shotgun', 'Sniper', 'SMG', 'Heavy', 'Pistol'];

const getTierColor = (tier) => {
  const tierMap = {
    'D': { color: '#9ca3af', name: 'Common' },
    'C': { color: '#22c55e', name: 'Uncommon' },
    'B': { color: '#3b82f6', name: 'Rare' },
    'A': { color: '#a855f7', name: 'Epic' },
    'S': { color: '#ff8c00', name: 'Legendary' }
  };
  return tierMap[tier] || tierMap['D'];
};

export default function WeaponsScreen({ navigation }) {
  const [filter, setFilter] = useState('All');
  
  const tierOrder = { 'D': 1, 'C': 2, 'B': 3, 'A': 4, 'S': 5 };
  const filtered = (filter === 'All' ? WEAPONS_DATA : WEAPONS_DATA.filter(w => w.type === filter))
    .sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

  const StatBar = ({ label, value, max }) => {
    const percentage = Math.min((value / max) * 100, 100);
    return (
      <View style={styles.statBarContainer}>
        <Text style={styles.statBarLabel}>{label}</Text>
        <View style={styles.statBarTrack}>
          <View style={[styles.statBarFill, { width: `${percentage}%` }]} />
        </View>
        <Text style={styles.statBarValue}>{value}</Text>
      </View>
    );
  };

  return (
    <AnimatedScreen>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="Weapons" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="radio-outline" size={16} color="#ff8c00" />
            <Text style={styles.title}>ARSENAL // DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>TOTAL_UNITS: {WEAPONS_DATA.length.toString().padStart(2, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>ACTIVE_FILTER: {filter.toUpperCase()}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>RESULTS: {filtered.length.toString().padStart(2, '0')}</Text>
          </View>
        </View>
        
        {/* Filter Row */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.filterRow}
          contentContainerStyle={styles.filterContent}
        >
          {FILTERS.map(f => (
            <TouchableOpacity 
              key={f} 
              onPress={() => setFilter(f)} 
              style={[styles.filterBtn, filter === f && styles.filterBtnActive]}
              activeOpacity={0.7}
            >
              <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>{f.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Weapons Grid */}
        <View style={[styles.weaponsGrid, isDesktop && styles.weaponsGridDesktop]}>
          {filtered.map((weapon, idx) => (
            <View key={idx} style={[styles.weaponCard, isDesktop && styles.weaponCardDesktop]}>
              {/* Corner Accents */}
              <View style={styles.cornerTL} />
              <View style={styles.cornerTR} />
              <View style={styles.cornerBL} />
              <View style={styles.cornerBR} />
              
              {/* Image Area */}
              <View style={styles.imageContainer}>
                <View style={styles.gridBackground} />
                {weapon.image ? (
                  <Image 
                    source={{ uri: weapon.image }}
                    style={styles.weaponImage}
                    resizeMode="contain"
                  />
                ) : (
                  <Ionicons name="flash" size={48} color="#404040" style={styles.placeholderIcon} />
                )}
                {/* Tier Badge */}
                <View style={[styles.tierBadge, { borderColor: getTierColor(weapon.tier).color }]}>
                  <Text style={[styles.tierText, { color: getTierColor(weapon.tier).color }]}>{getTierColor(weapon.tier).name.toUpperCase()}</Text>
                </View>
              </View>
              
              {/* Card Content */}
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={styles.weaponName} numberOfLines={1}>{weapon.name}</Text>
                  <View style={styles.typeBadge}>
                    <Text style={styles.typeText}>{weapon.type}</Text>
                  </View>
                </View>
                
                <Text style={styles.weaponDesc} numberOfLines={2}>{weapon.desc}</Text>
                
                {/* Stats Section */}
                <View style={styles.statsSection}>
                  <StatBar label="DMG" value={weapon.stats.damage} max={150} />
                  <StatBar label="RPM" value={weapon.stats.fireRate} max={1200} />
                  <StatBar label="RNG" value={weapon.stats.range || 50} max={100} />
                </View>
                
                {/* Crafting Cost */}
                <View style={styles.craftSection}>
                  <Text style={styles.craftLabel}>CRAFT_COST</Text>
                  <Text style={styles.craftValue}>{weapon.craft || '1,200 SCRAP'}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  filterRow: {
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
    borderColor: '#404040',
  },
  filterBtnActive: {
    backgroundColor: '#ff8c00',
    borderColor: '#ff8c00',
  },
  filterText: {
    color: '#a3a3a3',
    fontWeight: '700',
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1.5,
  },
  filterTextActive: {
    color: '#000000',
    fontWeight: '900',
  },
  weaponsGrid: {
    gap: 24,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  weaponsGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  weaponCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    marginBottom: 24,
    overflow: 'visible',
    position: 'relative',
  },
  weaponCardDesktop: {
    width: 'calc(25% - 18px)',
    marginBottom: 0,
  },
  cornerTL: {
    position: 'absolute',
    top: -1,
    left: -1,
    width: 8,
    height: 8,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ff8c00',
    opacity: 1,
    zIndex: 10,
  },
  cornerTR: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 8,
    height: 8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ff8c00',
    opacity: 1,
    zIndex: 10,
  },
  cornerBL: {
    position: 'absolute',
    bottom: -1,
    left: -1,
    width: 8,
    height: 8,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ff8c00',
    opacity: 1,
    zIndex: 10,
  },
  cornerBR: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 8,
    height: 8,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ff8c00',
    opacity: 1,
    zIndex: 10,
  },
  imageContainer: {
    height: isDesktop ? 150 : 120,
    backgroundColor: '#000000',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: 'transparent',
  },
  weaponImage: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  placeholderIcon: {
    opacity: 0.3,
  },
  tierBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
  },
  tierText: {
    fontSize: 9,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
  cardContent: {
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  weaponName: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: isDesktop ? 20 : 18,
    flex: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  typeBadge: {
    borderWidth: 1,
    borderColor: '#262626',
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginLeft: 8,
  },
  typeText: {
    fontSize: 9,
    color: '#737373',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  weaponDesc: {
    color: '#a3a3a3',
    fontSize: isDesktop ? 12 : 11,
    lineHeight: 20,
    marginBottom: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    height: 36,
  },
  statsSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 12,
    borderWidth: 1,
    borderColor: '#262626',
    marginBottom: 12,
  },
  statBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 4,
  },
  statBarLabel: {
    width: 48,
    fontSize: 9,
    color: '#737373',
    textAlign: 'right',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    textTransform: 'uppercase',
  },
  statBarTrack: {
    flex: 1,
    height: 4,
    backgroundColor: '#171717',
    position: 'relative',
  },
  statBarFill: {
    height: '100%',
    backgroundColor: '#ff8c00',
  },
  statBarValue: {
    width: 32,
    fontSize: 9,
    color: '#ff8c00',
    textAlign: 'right',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  craftSection: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#262626',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  craftLabel: {
    fontSize: 9,
    color: '#737373',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  craftValue: {
    fontSize: 9,
    color: '#ff8c00',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
