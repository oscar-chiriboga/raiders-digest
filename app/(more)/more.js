import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import DesktopNav from '../../src/components/DesktopNav';

const MORE_ITEMS = [
  { name: 'Enemies', icon: 'skull', route: '/enemies', category: 'Database' },
  { name: 'Loot', icon: 'cube', route: '/loot', category: 'Database' },
  { name: 'Traders', icon: 'people', route: '/traders', category: 'Database' },
  { name: 'Maps (Coming Soon)', icon: 'map', route: '/maps', category: 'Database' },
  { name: 'Crafting', icon: 'construct', route: '/crafting', category: 'Guides' },
  { name: 'Cheat Sheet', icon: 'bookmark', route: '/loot-cheatsheet', category: 'Guides' },
  { name: 'Survival Guide', icon: 'shield-checkmark', route: '/survival-guide', category: 'Guides' },
  { name: 'Patch Notes', icon: 'document-text', route: '/patch-notes', category: 'Info' },
];

export default function MoreScreen() {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  const handleItemPress = (route) => {
    router.push(route);
  };

  const groupedItems = MORE_ITEMS.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const renderSection = (category, items) => (
    <View key={category} style={styles.section}>
      <View style={styles.categoryHeader}>
        <View style={styles.categoryAccent} />
        <Text style={styles.categoryTitle}>{category.toUpperCase()}</Text>
      </View>
      <View style={styles.itemsGrid}>
        {items.map((item) => (
          <TouchableOpacity 
            key={item.route}
            style={[styles.itemCard, isDesktop && styles.itemCardDesktop]} 
            activeOpacity={0.8}
            onPress={() => handleItemPress(item.route)}
          >
            <View style={styles.itemCardContent}>
              <View style={styles.iconBox}>
                <Ionicons name={item.icon} size={24} color="#ff8c00" />
              </View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Ionicons name="arrow-forward" size={16} color="#a8a8a8" style={styles.itemArrow} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  if (isDesktop) {
    return (
      <AnimatedScreen>
        <DesktopNav navigation={{}} currentRoute="More" />
        <ScrollView style={styles.container} contentContainerStyle={[styles.content, styles.contentDesktop]}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Ionicons name="apps-outline" size={16} color="#ff8c00" />
              <Text style={styles.title}>MORE // RESOURCES</Text>
            </View>
            <Text style={styles.subtitle}>Additional data, guides, and information.</Text>
          </View>
          
          {Object.entries(groupedItems).map(([category, items]) => renderSection(category, items))}
        </ScrollView>
      </AnimatedScreen>
    );
  }

  // Mobile: Show as bottom sheet overlay
  return (
    <View style={styles.modalContainer}>
      <Pressable style={styles.backdrop} onPress={() => router.back()}>
        <View />
      </Pressable>
      
      <View style={styles.bottomSheet}>
        <View style={styles.sheetHeader}>
          <View style={styles.sheetHandle} />
          <View style={styles.headerRow}>
            <View style={styles.headerLeft}>
              <Ionicons name="apps" size={20} color="#ff8c00" />
              <Text style={styles.sheetTitle}>MORE</Text>
            </View>
            <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#a8a8a8" />
            </TouchableOpacity>
          </View>
        </View>
        
        <ScrollView 
          style={styles.sheetContent}
          contentContainerStyle={styles.sheetContentContainer}
          showsVerticalScrollIndicator={false}
        >
          {Object.entries(groupedItems).map(([category, items]) => renderSection(category, items))}
        </ScrollView>
      </View>
    </View>
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
    paddingBottom: 100,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  contentDesktop: {
    paddingTop: 70,
  },
  header: {
    paddingHorizontal: 0,
    marginBottom: 32,
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
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  subtitle: {
    fontSize: 14,
    color: '#a8a8a8',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  section: {
    marginBottom: 32,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  categoryAccent: {
    width: 3,
    height: 16,
    backgroundColor: '#ff8c00',
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#ff8c00',
    letterSpacing: 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  itemCard: {
    width: '100%',
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    borderLeftWidth: 3,
    borderLeftColor: '#ff8c00',
  },
  itemCardDesktop: {
    width: 'calc(33.333% - 8px)',
  },
  itemCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#707070',
  },
  itemName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    flex: 1,
  },
  itemArrow: {
    opacity: 0.5,
  },
  // Mobile modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0a0a0a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#1a1a1a',
    height: '95%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  sheetHeader: {
    padding: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#262626',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d0d0d0',
    fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' }),
  },
  closeButton: {
    padding: 4,
  },
  sheetContent: {
    flex: 1,
  },
  sheetContentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
});
