import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ENEMIES_DATA, ENEMY_CATEGORIES } from '../../src/data-generated-enemies';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import DesktopNav from '../../src/components/DesktopNav';
import Footer from '../../src/components/Footer';
import SEO from '../../src/components/SEO';

const { width } = Dimensions.get('window');

export default function EnemiesScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  const threatOrder = { 'Low': 1, 'Medium': 2, 'High': 3, 'Extreme': 4 };
  
  const filteredEnemies = (selectedCategory === 'All' 
    ? ENEMIES_DATA 
    : ENEMIES_DATA.filter(e => e.category === selectedCategory))
    .sort((a, b) => threatOrder[a.threat] - threatOrder[b.threat]);

  const getThreatColor = (threat) => {
    switch(threat.toUpperCase()) {
      case 'EXTREME': return { color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)', border: '#ef4444' };
      case 'HIGH': return { color: '#ff8c00', bg: 'rgba(255, 140, 0, 0.1)', border: '#ff8c00' };
      case 'MEDIUM': return { color: '#eab308', bg: 'rgba(234, 179, 8, 0.1)', border: '#eab308' };
      default: return { color: '#c0c0c0', bg: 'rgba(156, 163, 175, 0.1)', border: '#52525b' };
    }
  };

  return (
    <AnimatedScreen>
      <SEO 
        title="Enemies Database"
        description="Complete Arc Raiders enemies database. Browse all hostile units including Drones, Walkers, Heavy Units, and more. View stats, abilities, and weaknesses."
        path="/enemies"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="Enemies" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="alert-circle-outline" size={16} color="#ff8c00" />
            <Text style={styles.title}>ENEMIES // DB</Text>
          </View>
          <View style={styles.statsBar}>
            <Text style={styles.statText}>TOTAL: {ENEMIES_DATA.length.toString().padStart(2, '0')}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statTextActive}>FILTER: {selectedCategory.toUpperCase()}</Text>
            <Text style={styles.statDivider}>|</Text>
            <Text style={styles.statText}>FOUND: {filteredEnemies.length.toString().padStart(2, '0')}</Text>
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
              style={[ styles.filterBtn, selectedCategory === category && styles.filterBtnActive ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[ styles.filterText, selectedCategory === category && styles.filterTextActive ]}>
                {category.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <View style={[styles.enemiesGrid, isDesktop && styles.enemiesGridDesktop]}>
          {filteredEnemies.map((enemy) => {
            const threatColors = getThreatColor(enemy.threat);
            return (
              <View key={enemy.id} style={[styles.enemyCard, isDesktop && styles.enemyCardDesktop]}>
                <View style={styles.cardTop}>
                  <View style={[styles.iconWrapper, enemy.threat === 'Extreme' && styles.iconWrapperExtreme]}>
                    {enemy.image ? (
                      <Image 
                        source={{ uri: enemy.image }} 
                        style={styles.enemyIcon}
                        resizeMode="contain"
                      />
                    ) : (
                      <Ionicons 
                        name="alert-circle-outline" 
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

                <View style={styles.threatSection}>
                  <Text style={styles.threatLabel}>THREAT_ASSESSMENT</Text>
                  <View style={[styles.threatBadge, { borderColor: threatColors.border, backgroundColor: threatColors.bg }]}>
                    <Text style={[styles.threatText, { color: threatColors.color }]}>
                      {enemy.threat.toUpperCase()}
                    </Text>
                  </View>
                </View>

                <View style={styles.descSection}>
                  <Text style={styles.enemyDesc}>{enemy.description}</Text>
                </View>
              </View>
            );
          })}
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
    marginBottom: 16,
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
  filterContainer: {
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
    fontSize: 10,
    fontWeight: '700',
    color: '#a3a3a3',
    letterSpacing: 1.5,
    fontFamily: 'monospace',
  },
  filterTextActive: {
    color: '#000000',
    fontWeight: '900',
  },
  enemiesGrid: {
    gap: 16,
    paddingHorizontal: 0,
  },
  enemiesGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  enemyCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
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
    gap: 12,
    marginBottom: 16,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: '#707070',
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
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'monospace',
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
    color: '#a8a8a8',
    fontFamily: 'monospace',
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
    color: '#909090',
    fontFamily: 'monospace',
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
    fontFamily: 'monospace',
  },
  descSection: {
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: '#707070',
    position: 'relative',
  },
  enemyDesc: {
    color: '#a3a3a3',
    fontSize: 10,
    lineHeight: 18,
    fontFamily: 'monospace',
  },
});
