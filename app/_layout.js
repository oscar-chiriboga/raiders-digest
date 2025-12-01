import React, { useState, useEffect, createContext, useContext } from 'react';
import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Platform, Dimensions, Modal, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const MoreModalContext = createContext();

export function useMoreModal() {
  return useContext(MoreModalContext);
}

const MORE_ITEMS = [
  { name: 'Enemies', icon: 'skull', route: '/enemies', category: 'Database' },
  { name: 'Loot', icon: 'cube', route: '/loot', category: 'Database' },
  { name: 'Traders', icon: 'people', route: '/traders', category: 'Database' },
  { name: 'Maps', icon: 'map', route: '/maps', category: 'Database' },
  { name: 'Crafting', icon: 'construct', route: '/crafting', category: 'Guides' },
  { name: 'Cheat Sheet', icon: 'bookmark', route: '/loot-cheatsheet', category: 'Guides' },
  { name: 'Survival Guide', icon: 'shield-checkmark', route: '/survival-guide', category: 'Guides' },
  { name: 'Patch Notes', icon: 'document-text', route: '/patch-notes', category: 'Info' },
];

function MoreModal({ visible, onClose }) {
  const router = useRouter();

  const handleItemPress = (route) => {
    onClose();
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
            style={styles.itemCard} 
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

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Pressable style={styles.backdrop} onPress={onClose}>
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
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
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
    </Modal>
  );
}

function AppTabs() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const insets = useSafeAreaInsets();
  const tabBarHeight = Platform.OS === 'ios' ? 70 : 65;
  const bottomPadding = insets.bottom > 0 ? insets.bottom : 10;
  const [moreModalVisible, setMoreModalVisible] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = Dimensions.get('window').width;
      setIsDesktop(width > 768);
    };
    
    updateLayout(); // Set initial value
    
    const subscription = Dimensions.addEventListener('change', updateLayout);
    return () => subscription?.remove();
  }, []);

  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: isDesktop ? { display: 'none' } : {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#000000',
            borderTopWidth: 1,
            borderTopColor: '#1a1a1a',
            height: tabBarHeight + bottomPadding,
            paddingBottom: bottomPadding,
            paddingTop: 8,
            elevation: 0,
            zIndex: 100,
          },
          tabBarActiveTintColor: '#ff8c00',
          tabBarInactiveTintColor: '#666666',
          tabBarShowLabel: true,
          tabBarButton: route.name === '(more)' ? (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => setMoreModalVisible(!moreModalVisible)}
            />
          ) : undefined,
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'index') iconName = 'home';
            else if (route.name === 'weapons') iconName = 'hammer';
            else if (route.name === 'quests') iconName = 'newspaper';
            else if (route.name === 'events') iconName = 'calendar';
            else if (route.name === '(more)') iconName = 'apps';
            
            return (
              <View style={styles.iconContainer}>
                {((route.name === '(more)' && moreModalVisible) || (route.name !== '(more)' && focused)) && <View style={styles.activeIndicator} />}
                <Ionicons name={iconName} size={24} color={color} />
              </View>
            );
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            fontFamily: 'monospace',
            marginTop: 4,
            marginBottom: 0,
          },
        })}
      >
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="weapons" options={{ title: 'Weapons' }} />
        <Tabs.Screen name="quests" options={{ title: 'Quests' }} />
        <Tabs.Screen name="events" options={{ title: 'Events' }} />
        <Tabs.Screen 
          name="(more)" 
          options={{ 
            title: 'More',
          }} 
        />
      </Tabs>
      
      <MoreModal visible={moreModalVisible} onClose={() => setMoreModalVisible(false)} />
    </>
  );
}

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <AppTabs />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: -8,
    width: 32,
    height: 2,
    backgroundColor: '#ff8c00',
  },
  // Modal styles
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
    paddingBottom: 100,
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
});
