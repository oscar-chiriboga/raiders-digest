import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { MAPS_DATA } from '../data';
import AnimatedScreen from '../components/AnimatedScreen';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

export default function MapsScreen({ navigation }) {
  const [selectedMap, setSelectedMap] = useState(null);

  return (
    <AnimatedScreen>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>🗺️ TACTICAL MAPS</Text>
          <Text style={styles.subtitle}>ZONE NAVIGATION & INTEL</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>MAPPED ZONES</Text>
              <Text style={styles.statValue}>{MAPS_DATA.length}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>VIEWING</Text>
              <Text style={styles.statValue}>{selectedMap ? '1' : 'ALL'}</Text>
            </View>
          </View>
        </View>

        {selectedMap ? (
          // Selected Map View
          <View style={styles.mapViewContainer}>
            <TouchableOpacity 
              style={styles.backBtn}
              onPress={() => setSelectedMap(null)}
            >
              <Text style={styles.backBtnText}>← BACK TO ALL MAPS</Text>
            </TouchableOpacity>

            <View style={styles.selectedMapCard}>
              <View style={styles.selectedMapHeader}>
                <Text style={styles.selectedMapName}>{selectedMap.name}</Text>
                <Text style={styles.selectedMapGrid}>SECTOR {selectedMap.grid}</Text>
              </View>

              {selectedMap.image && (
                <View style={styles.mapImageContainer}>
                  <Image 
                    source={{ uri: selectedMap.image }} 
                    style={styles.mapImage}
                    resizeMode="contain"
                  />
                </View>
              )}

              <View style={styles.selectedMapMeta}>
                <View style={styles.metaChip}>
                  <Text style={styles.metaChipLabel}>THREAT LEVEL</Text>
                  <Text style={styles.metaChipValue}>{selectedMap.difficulty}</Text>
                </View>
              </View>

              <Text style={styles.selectedMapDesc}>{selectedMap.desc}</Text>

              {selectedMap.pois && selectedMap.pois.length > 0 && (
                <View style={styles.poisSection}>
                  <Text style={styles.poisHeader}>📍 POINTS OF INTEREST</Text>
                  {selectedMap.pois.map((poi, idx) => (
                    <View key={idx} style={styles.poiCard}>
                      <View style={styles.poiHeader}>
                        <Text style={styles.poiName}>{poi.name}</Text>
                        <Text style={styles.poiType}>{poi.type}</Text>
                      </View>
                      <Text style={styles.poiLoot}>💎 {poi.loot}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        ) : (
          // Map Grid View
          <View style={[styles.mapsGrid, isDesktop && styles.mapsGridDesktop]}>
            {MAPS_DATA.map((map, idx) => (
              <TouchableOpacity 
                key={idx} 
                style={[styles.mapCard, isDesktop && styles.mapCardDesktop]}
                onPress={() => setSelectedMap(map)}
              >
                {map.image && (
                  <View style={styles.mapThumbnailContainer}>
                    <Image 
                      source={{ uri: map.image }} 
                      style={styles.mapThumbnail}
                      resizeMode="cover"
                    />
                    <View style={styles.thumbnailOverlay} />
                  </View>
                )}
                
                <View style={styles.mapCardContent}>
                  <View style={styles.mapCardHeader}>
                    <Text style={styles.mapName}>{map.name}</Text>
                    <Text style={styles.mapGrid}>SECTOR {map.grid}</Text>
                  </View>
                  
                  <Text style={styles.mapDesc} numberOfLines={2}>{map.desc}</Text>
                  
                  <View style={styles.mapCardFooter}>
                    <View style={styles.threatBadge}>
                      <Text style={styles.threatText}>{map.difficulty}</Text>
                    </View>
                    <Text style={styles.poiCount}>{map.pois?.length || 0} POIs</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
  content: {
    padding: isDesktop ? 40 : 20,
    paddingTop: isDesktop ? 20 : 10,
    maxWidth: isDesktop ? 1400 : '100%',
    alignSelf: 'center',
    width: '100%',
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#000000',
    padding: isDesktop ? 32 : 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#64b5f6',
    marginBottom: 24,
  },
  title: {
    fontSize: isDesktop ? 36 : 28,
    fontWeight: '900',
    color: '#64b5f6',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: isDesktop ? 14 : 12,
    color: '#00d9ff',
    letterSpacing: 2,
    marginTop: 6,
    opacity: 0.9,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: 'rgba(100, 181, 246, 0.3)',
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(100, 181, 246, 0.1)',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#64b5f6',
  },
  statLabel: {
    fontSize: 10,
    color: '#00d9ff',
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  statValue: {
    fontSize: isDesktop ? 24 : 20,
    color: '#64b5f6',
    fontWeight: '900',
    letterSpacing: 1,
  },
  backBtn: {
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(100, 181, 246, 0.1)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#64b5f6',
    alignSelf: 'flex-start',
  },
  backBtnText: {
    color: '#64b5f6',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
  },
  mapViewContainer: {
    flex: 1,
  },
  selectedMapCard: {
    backgroundColor: '#000000',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#64b5f6',
    padding: isDesktop ? 32 : 20,
  },
  selectedMapHeader: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(100, 181, 246, 0.3)',
  },
  selectedMapName: {
    color: '#64b5f6',
    fontSize: isDesktop ? 32 : 24,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 8,
  },
  selectedMapGrid: {
    color: '#ffab00',
    fontSize: isDesktop ? 16 : 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  mapImageContainer: {
    width: '100%',
    height: isDesktop ? 600 : 400,
    backgroundColor: 'rgba(100, 181, 246, 0.05)',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(100, 181, 246, 0.3)',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  selectedMapMeta: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  metaChip: {
    backgroundColor: 'rgba(100, 181, 246, 0.1)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#64b5f6',
  },
  metaChipLabel: {
    color: '#00d9ff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  metaChipValue: {
    color: '#64b5f6',
    fontSize: isDesktop ? 16 : 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  selectedMapDesc: {
    color: '#cbd5e1',
    fontSize: isDesktop ? 15 : 14,
    lineHeight: 24,
    marginBottom: 24,
  },
  poisSection: {
    backgroundColor: 'rgba(100, 181, 246, 0.05)',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#64b5f6',
  },
  poisHeader: {
    color: '#64b5f6',
    fontSize: isDesktop ? 18 : 16,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  poiCard: {
    backgroundColor: 'rgba(0, 217, 255, 0.05)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#00d9ff',
  },
  poiHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  poiName: {
    color: '#fff',
    fontSize: isDesktop ? 16 : 14,
    fontWeight: '700',
    flex: 1,
  },
  poiType: {
    color: '#ffab00',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  poiLoot: {
    color: '#4ade80',
    fontSize: isDesktop ? 14 : 13,
    fontWeight: '600',
  },
  mapsGrid: {
    gap: 16,
  },
  mapsGridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mapCard: {
    backgroundColor: '#000000',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a3f5f',
    overflow: 'hidden',
    marginBottom: 16,
  },
  mapCardDesktop: {
    width: 'calc(33.333% - 11px)',
    marginBottom: 0,
  },
  mapThumbnailContainer: {
    width: '100%',
    height: isDesktop ? 200 : 150,
    position: 'relative',
    backgroundColor: 'rgba(100, 181, 246, 0.1)',
  },
  mapThumbnail: {
    width: '100%',
    height: '100%',
  },
  thumbnailOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  mapCardContent: {
    padding: 16,
  },
  mapCardHeader: {
    marginBottom: 12,
  },
  mapName: {
    color: '#64b5f6',
    fontSize: isDesktop ? 18 : 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  mapGrid: {
    color: '#ffab00',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  mapDesc: {
    color: '#9ea7b8',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  mapCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(100, 181, 246, 0.2)',
  },
  threatBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  threatText: {
    color: '#ef4444',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  poiCount: {
    color: '#00d9ff',
    fontSize: 12,
    fontWeight: '600',
  },
});
