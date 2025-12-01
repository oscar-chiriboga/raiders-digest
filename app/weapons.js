import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WEAPONS_DATA } from '../src/data-generated';
import AnimatedScreen from '../src/components/AnimatedScreen';
import DesktopNav from '../src/components/DesktopNav';
import Footer from '../src/components/Footer';
import SEO from '../src/components/SEO';
import { COLORS } from '../src/styles/colors';

const { width } = Dimensions.get('window');

const FILTERS = ['All', 'Assault Rifle', 'Rifle', 'Shotgun', 'Sniper', 'SMG', 'Heavy', 'Pistol'];

const getTierColor = (tier) => {
  const tierMap = {
    'D': { color: '#c0c0c0', name: 'Common' },
    'C': { color: '#22c55e', name: 'Uncommon' },
    'B': { color: '#3b82f6', name: 'Rare' },
    'A': { color: '#a855f7', name: 'Epic' },
    'S': { color: '#ff8c00', name: 'Legendary' }
  };
  return tierMap[tier] || tierMap['D'];
};

export default function WeaponsScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);
  
  const tierOrder = { 'D': 1, 'C': 2, 'B': 3, 'A': 4, 'S': 5 };
  const filtered = (filter === 'All' ? WEAPONS_DATA : WEAPONS_DATA.filter(w => w.type === filter))
    .sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

  const StatBar = ({ label, value, max }) => {
    const percentage = Math.min((value / max) * 100, 100);
    const widthPercent = percentage + '%';
    return (
      <View style={styles.statBarContainer}>
        <Text style={styles.statBarLabel}>{label}</Text>
        <View style={styles.statBarTrack}>
          <View style={[styles.statBarFill, { width: widthPercent }]} />
        </View>
        <Text style={styles.statBarValue}>{value}</Text>
      </View>
    );
  };

  return (
    <AnimatedScreen>
      <SEO 
        title="Weapons Database"
        description="Complete Arc Raiders weapons database. Browse all weapons by type: Assault Rifles, SMGs, Shotguns, Snipers, Heavy weapons. View stats, damage, and tier ratings."
        path="/weapons"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="Weapons" />}
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
                            <View style={styles.cornerTL} />
              <View style={styles.cornerTR} />
              <View style={styles.cornerBL} />
              <View style={styles.cornerBR} />
              
              {/* Image Area */}
              <View style={styles.imageContainer}>
                {weapon.image ? (
                  <Image 
                    source={{ uri: weapon.image }}
                    style={styles.weaponImage}
                    resizeMode="contain"
                  />
                ) : (
                  <Ionicons name="flash" size={48} color="#707070" />
                )}
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
  content: {
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
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -1,
    textTransform: 'uppercase',
    fontFamily: 'monospace',
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
    fontFamily: 'monospace',
    letterSpacing: 1.5,
  },
  statTextActive: {
    fontSize: 10,
    color: '#ff8c00',
    fontFamily: 'monospace',
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
    paddingHorizontal: 0,
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
    color: '#a3a3a3',
    fontWeight: '700',
    fontSize: 10,
    fontFamily: 'monospace',
    letterSpacing: 1.5,
  },
  filterTextActive: {
    color: '#000000',
    fontWeight: '900',
  },
  weaponsGrid: {
    gap: 24,
    paddingHorizontal: 0,
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
    marginBottom: 24,
  },
  cornerTL: {
    position: 'absolute', top: -1, left: -1, width: 8, height: 8,
    borderLeftWidth: 1, borderTopWidth: 1, borderColor: '#ff8c00',
  },
  cornerTR: {
    position: 'absolute', top: -1, right: -1, width: 8, height: 8,
    borderRightWidth: 1, borderTopWidth: 1, borderColor: '#ff8c00',
  },
  cornerBL: {
    position: 'absolute', bottom: -1, left: -1, width: 8, height: 8,
    borderLeftWidth: 1, borderBottomWidth: 1, borderColor: '#ff8c00',
  },
  cornerBR: {
    position: 'absolute', bottom: -1, right: -1, width: 8, height: 8,
    borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#ff8c00',
  },
  imageContainer: {
    height: 150,
    backgroundColor: '#000000',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weaponImage: {
    width: '100%',
    height: '100%',
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
    fontFamily: 'monospace',
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
    fontSize: 18,
    flex: 1,
    fontFamily: 'monospace',
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
    color: '#a8a8a8',
    fontFamily: 'monospace',
  },
  weaponDesc: {
    color: '#a3a3a3',
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 16,
    fontFamily: 'monospace',
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
    color: '#a8a8a8',
    textAlign: 'right',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
  },
  statBarTrack: {
    flex: 1,
    height: 4,
    backgroundColor: '#171717',
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
    fontFamily: 'monospace',
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
    color: '#a8a8a8',
    fontFamily: 'monospace',
  },
  craftValue: {
    fontSize: 9,
    color: '#ff8c00',
    fontFamily: 'monospace',
  },
});
