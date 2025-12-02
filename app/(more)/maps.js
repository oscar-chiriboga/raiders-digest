import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import DesktopNav from '../../src/components/DesktopNav';
import SEO from '../../src/components/SEO';

const MAPS = [
  { 
    id: 'dam-battlegrounds', 
    name: 'Dam Battlegrounds', 
    description: 'Large-scale battle zone with dam infrastructure',
    available: true 
  },
  { 
    id: 'buried-city', 
    name: 'Buried City', 
    description: 'Underground urban environment with ruins',
    available: false 
  },
  { 
    id: 'spaceport', 
    name: 'Spaceport', 
    description: 'Industrial launch facility with terminals',
    available: false 
  },
  { 
    id: 'the-blue-gate', 
    name: 'The Blue Gate', 
    description: 'Mysterious portal location with anomalies',
    available: false 
  },
  { 
    id: 'stella-montis', 
    name: 'Stella Montis', 
    description: 'Mountain research facility with labs',
    available: false 
  },
];

export default function MapsScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const [selectedMap, setSelectedMap] = useState(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  // If a map is selected and it's Dam Battlegrounds, show the interactive map
  if (selectedMap?.id === 'dam-battlegrounds' && Platform.OS === 'web') {
    return (
      <AnimatedScreen>
        <SEO 
          title="Dam Battlegrounds - Interactive Map"
          description="Interactive map of Dam Battlegrounds with all locations, loot, and points of interest."
          path="/maps/dam-battlegrounds"
        />
        {isDesktop && <DesktopNav navigation={{}} currentRoute="Maps" />}
        
        <View style={[styles.mapViewContainer, isDesktop && styles.containerDesktop]}>
          <View style={styles.mapViewHeader}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => setSelectedMap(null)}
            >
              <Ionicons name="arrow-back" size={20} color="#ffffff" />
              <Text style={styles.backButtonText}>BACK TO MAPS</Text>
            </TouchableOpacity>
            <Text style={styles.mapViewTitle}>{selectedMap.name}</Text>
          </View>
          <div style={{ flex: 1, width: '100%', height: '100%' }}>
            <iframe
              src="/map.html"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block'
              }}
              title="Dam Battlegrounds Map"
            />
          </div>
        </View>
      </AnimatedScreen>
    );
  }

  return (
    <AnimatedScreen>
      <SEO 
        title="Maps Database"
        description="Arc Raiders interactive maps. Browse Dam Battlegrounds, Buried City, Spaceport, The Blue Gate, and Stella Montis with all points of interest."
        path="/maps"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="Maps" />}
      
      <View style={[styles.container, isDesktop && styles.containerDesktop]}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Ionicons name="map" size={16} color="#ff8c00" />
            <Text style={styles.title}>MAPS DATABASE</Text>
          </View>
          <Text style={styles.subtitle}>Interactive tactical maps with points of interest</Text>
        </View>
        
        <ScrollView style={styles.mapList}>
          <View style={styles.mapGrid}>
            {MAPS.map((map) => (
              <TouchableOpacity
                key={map.id}
                style={[styles.mapCard, !map.available && styles.mapCardDisabled]}
                onPress={() => map.available && setSelectedMap(map)}
                disabled={!map.available}
              >
                <View style={styles.mapCardHeader}>
                  <Ionicons 
                    name={map.available ? "map" : "lock-closed"}
                    size={24} 
                    color={map.available ? "#ff8c00" : "#525252"}
                  />
                  <View style={styles.mapCardTitle}>
                    <Text style={[styles.mapName, !map.available && styles.mapNameDisabled]}>
                      {map.name}
                    </Text>
                    {!map.available && (
                      <Text style={styles.comingSoon}>COMING SOON</Text>
                    )}
                  </View>
                </View>
                <Text style={[styles.mapDescription, !map.available && styles.mapDescriptionDisabled]}>
                  {map.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'transparent',
  },
  containerDesktop: {
    paddingTop: 70,
  },
  content: { 
    padding: 20, 
    paddingTop: 80, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  header: { 
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  title: { 
    fontSize: 20, 
    fontWeight: '900', 
    color: '#ffffff', 
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: -1,
  },
  subtitle: { 
    fontSize: 13, 
    color: '#a8a8a8', 
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  mapList: {
    flex: 1,
  },
  mapGrid: {
    padding: 20,
    gap: 16,
  },
  mapCard: {
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 8,
    padding: 20,
    cursor: 'pointer',
  },
  mapCardDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  mapCardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  mapCardTitle: {
    flex: 1,
  },
  mapName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginBottom: 4,
  },
  mapNameDisabled: {
    color: '#737373',
  },
  comingSoon: {
    fontSize: 11,
    fontWeight: '700',
    color: '#ff8c00',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 0.5,
  },
  mapDescription: {
    fontSize: 14,
    color: '#a8a8a8',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    lineHeight: 20,
  },
  mapDescriptionDisabled: {
    color: '#525252',
  },
  mapViewContainer: {
    flex: 1,
  },
  mapViewHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
    backgroundColor: '#0a0a0a',
  },
  mapViewTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    marginTop: 12,
    letterSpacing: -1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
  },
  backButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 0.5,
  },
});
