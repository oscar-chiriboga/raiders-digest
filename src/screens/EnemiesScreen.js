import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ENEMIES_DATA, ENEMY_CATEGORIES } from '../data-generated-enemies';
import AnimatedScreen from '../components/AnimatedScreen';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

export default function EnemiesScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEnemies = selectedCategory === 'All' 
    ? ENEMIES_DATA 
    : ENEMIES_DATA.filter(e => e.category === selectedCategory);

  const getThreatColor = (threat) => {
    switch(threat.toUpperCase()) {
      case 'EXTREME': 
        return { color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)', border: '#ef4444' };
      case 'HIGH': 
        return { color: '#ff3e00', bg: 'rgba(255, 62, 0, 0.1)', border: '#ff3e00' };
      case 'MEDIUM': 
        return { color: '#eab308', bg: 'rgba(234, 179, 8, 0.1)', border: '#eab308' };
      default: 
        return { color: '#9ca3af', bg: 'rgba(156, 163, 175, 0.1)', border: '#52525b' };
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Flying': return 'airplane';
      case 'Heavy': return 'warning';
      case 'Turret': return 'locate';
      case 'Ground': return 'flash';
      default: return 'radio';
    }
  };

  return (
    <AnimatedScreen>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="alert-circle-outline" size={16} color="#ff3e00" />
            <Text style={styles.title}>ENEMY INTEL // ARC</Text>
          </View>
          
          {/* Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>TOTAL THREATS</Text>
              <Text style={styles.statValue}>{ENEMIES_DATA.length.toString().padStart(2, '0')}</Text>
            </View>
            <View style={styles.statBoxSecondary}>
              <Text style={styles.statLabelSecondary}>VISIBLE UNITS</Text>
              <Text style={styles.statValueSecondary}>{filteredEnemies.length.toString().padStart(2, '0')}</Text>
            </View>
          </View>
        </View>

        {/* Category Filter */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterContainer}
          contentContainerStyle={styles.filterContent}
        >
          {ENEMY_CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.filterBtn,
                selectedCategory === category && styles.filterBtnActive
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <View style={styles.filterDecor} />
              <Text style={[
                styles.filterText,
                selectedCategory === category && styles.filterTextActive
              ]}>
                {category.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        {/* Enemies Grid */}
        <View style={[styles.enemiesGrid, isDesktop && styles.enemiesGridDesktop]}>
          {filteredEnemies.map((enemy) => {
            const threatColors = getThreatColor(enemy.threat);
            return (
              <View key={enemy.id} style={[styles.enemyCard, isDesktop && styles.enemyCardDesktop]}>
                {/* Corner Decorations */}
                <View style={styles.cornerDecorTR} />
                <View style={styles.cornerDecorBR} />
                
                {/* Top Row: Icon + Name + Category */}
                <View style={styles.cardTop}>
                  <View style={[
                    styles.iconWrapper,
                    enemy.threat === 'Extreme' && styles.iconWrapperExtreme
                  ]}>
                    {enemy.image ? (
                      <Image 
                        source={{ uri: enemy.image }} 
                        style={styles.enemyIcon}
                        resizeMode="contain"
                      />
                    ) : (
                      <Ionicons 
                        name={getCategoryIcon(enemy.category)} 
                        size={28} 
                        color={enemy.threat === 'Extreme' ? '#ef4444' : '#a3a3a3'} 
                      />
                    )}
                  </View>
                  <View style={styles.nameSection}>
                    <Text style={styles.enemyName}>{enemy.name}</Text>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryText}>UNIT_TYPE: {enemy.category.toUpperCase()}</Text>
                    </View>
                  </View>
                </View>

                {/* Middle Row: Threat Assessment */}
                <View style={styles.threatSection}>
                  <Text style={styles.threatLabel}>THREAT_ASSESSMENT</Text>
                  <View style={[
                    styles.threatBadge, 
                    { 
                      borderColor: threatColors.border, 
                      backgroundColor: threatColors.bg 
                    }
                  ]}>
                    <Text style={[styles.threatText, { color: threatColors.color }]}>
                      {enemy.threat.toUpperCase()}
                    </Text>
                  </View>
                </View>

                {/* Description */}
                <View style={styles.descSection}>
                  <Text style={styles.enemyDesc}>{enemy.description}</Text>
                </View>
              </View>
            );
          })}
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
    paddingTop: 80,
    maxWidth: isDesktop ? 1400 : '100%',
    alignSelf: 'center',
    width: '100%',
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: isDesktop ? 24 : 0,
    marginBottom: 24,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: isDesktop ? 32 : 24,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -1,
    textTransform: 'uppercase',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(38, 38, 38, 0.5)',
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
    borderLeftWidth: 2,
    borderLeftColor: '#ef4444',
    padding: 8,
  },
  statLabel: {
    fontSize: 9,
    color: '#ef4444',
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  statValue: {
    fontSize: isDesktop ? 24 : 20,
    color: '#ef4444',
    fontWeight: '900',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  statBoxSecondary: {
    flex: 1,
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderLeftWidth: 2,
    borderLeftColor: '#404040',
    padding: 8,
  },
  statLabelSecondary: {
    fontSize: 9,
    color: '#737373',
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  statValueSecondary: {
    fontSize: isDesktop ? 24 : 20,
    color: '#ffffff',
    fontWeight: '900',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  filterContainer: {
    marginBottom: 24,
  },
  filterContent: {
    gap: 8,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  filterBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#262626',
    position: 'relative',
  },
  filterBtnActive: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: '#ef4444',
  },
  filterDecor: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 4,
    height: 4,
    backgroundColor: '#262626',
  },
  filterText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#737373',
    letterSpacing: 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  filterTextActive: {
    color: '#ef4444',
    fontWeight: '900',
  },
  enemiesGrid: {
    gap: 16,
    paddingHorizontal: isDesktop ? 24 : 0,
  },
  enemiesGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  enemyCard: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#262626',
    marginBottom: 16,
    padding: 16,
    position: 'relative',
  },
  enemyCardDesktop: {
    width: 'calc(33.333% - 11px)',
    marginBottom: 0,
  },
  cornerDecorTR: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 64,
    height: 1,
    backgroundColor: '#262626',
  },
  cornerDecorBR: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#262626',
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
  },
  cardTop: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: '#404040',
    backgroundColor: 'rgba(23, 23, 23, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapperExtreme: {
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  enemyIcon: {
    width: '100%',
    height: '100%',
  },
  nameSection: {
    flex: 1,
    minWidth: 0,
  },
  enemyName: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: isDesktop ? 18 : 16,
    marginBottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  categoryBadge: {
    backgroundColor: '#171717',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#262626',
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  categoryText: {
    fontSize: 9,
    color: '#737373',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  threatSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
    borderStyle: 'dashed',
  },
  threatLabel: {
    fontSize: 9,
    color: '#525252',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  threatBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
  },
  threatText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  descSection: {
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: '#404040',
    position: 'relative',
  },
  enemyDesc: {
    color: '#a3a3a3',
    fontSize: isDesktop ? 11 : 10,
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});
