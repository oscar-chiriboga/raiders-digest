import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../../src/components/AnimatedScreen';
import DesktopNav from '../../src/components/DesktopNav';
import Footer from '../../src/components/Footer';
import SEO from '../../src/components/SEO';

const { width } = Dimensions.get('window');

export default function SurvivalGuideScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <AnimatedScreen>
      <SEO 
        title="Survival Guide"
        description="Arc Raiders survival guide for new players. Learn the basics, essential tips, and strategies for your first 10 hours. Start strong, survive longer."
        path="/survival-guide"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="SurvivalGuide" />}
      <ScrollView style={styles.container} contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}>
        <View style={styles.header}>
          <Ionicons name="shield-checkmark" size={32} color="#ff8c00" />
          <Text style={styles.title}>SURVIVAL_GUIDE</Text>
          <Text style={styles.subtitle}>First 10 Hours Protocol</Text>
        </View>

        <View style={styles.goldenRule}>
          <Text style={styles.goldenRuleTitle}>⚠️ THE GOLDEN RULE</Text>
          <Text style={styles.goldenRuleText}>
            This is not a Battle Royale. Your goal is not to kill everyone; it is to extract with loot. 
            If you die, you lose everything not in your Safe Pocket.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>STEP 1: MASTER THE HUB (SPERANZA)</Text>
          <Text style={styles.text}>Don't get lost in the menus. Here are the only three vendors you need:</Text>
          
          <View style={styles.vendor}>
            <Text style={styles.vendorName}>Lance (The Medic)</Text>
            <Text style={styles.text}>Visit him first. You don't regenerate health in combat. Prioritize his quests to unlock better Medkits.</Text>
          </View>

          <View style={styles.vendor}>
            <Text style={styles.vendorName}>Shani (The Gatekeeper)</Text>
            <Text style={styles.text}>Buy Raider Hatch Keys whenever she has them. These are your ticket to instant, silent extractions.</Text>
          </View>

          <View style={styles.vendor}>
            <Text style={styles.vendorName}>Celeste (The Leader)</Text>
            <Text style={styles.text}>Buy basic materials (Plastic/Fabric) from her instead of wasting time scavenging them. Focus on finding rare items in the wild.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>STEP 2: BUILD YOUR OPERATOR (SKILLS)</Text>
          <Text style={styles.text}>You earn skill points by leveling up. Do not spread them out randomly. Build this "Survival Spec" first:</Text>
          
          <View style={styles.skillItem}>
            <View style={styles.bullet} />
            <View style={styles.skillContent}>
              <Text style={styles.skillName}>Marathon Runner (Mobility Tree)</Text>
              <Text style={styles.text}>Max this out immediately (5/5). Running away is your strongest weapon.</Text>
            </View>
          </View>

          <View style={styles.skillItem}>
            <View style={styles.bullet} />
            <View style={styles.skillContent}>
              <Text style={styles.skillName}>In-Round Crafting (Survival Tree)</Text>
              <Text style={styles.text}>Put 1 point here. It lets you craft ammo and bandages during a mission using scavenged parts.</Text>
            </View>
          </View>

          <View style={styles.skillItem}>
            <View style={styles.bullet} />
            <View style={styles.skillContent}>
              <Text style={styles.skillName}>Nimble Climber (Mobility Tree)</Text>
              <Text style={styles.text}>Essential for vaulting fences quickly when escaping ARC patrols.</Text>
            </View>
          </View>
        </View>
        
        <Footer />
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingTop: 20, paddingBottom: 100, maxWidth: 800, alignSelf: 'center', width: '100%' },
  contentDesktop: { padding: 24, paddingTop: 90 },
  header: { alignItems: 'center', marginBottom: 32, paddingBottom: 24, borderBottomWidth: 1, borderBottomColor: '#262626' },
  title: { fontSize: 28, fontWeight: '900', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', color: '#ffffff', letterSpacing: 3, marginTop: 16 },
  subtitle: { fontSize: 14, fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', color: '#ff8c00', letterSpacing: 2, marginTop: 8 },
  goldenRule: { backgroundColor: 'rgba(255, 68, 0, 0.1)', borderWidth: 2, borderColor: '#ff4400', padding: 20, marginBottom: 32 },
  goldenRuleTitle: { fontSize: 16, fontWeight: '900', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', color: '#ff4400', letterSpacing: 2, marginBottom: 12 },
  goldenRuleText: { fontSize: 15, fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', color: '#ffffff', lineHeight: 24 },
  section: { marginBottom: 32 },
  sectionTitle: { fontSize: 16, fontWeight: '900', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', color: '#ff8c00', letterSpacing: 2, marginBottom: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#262626' },
  text: { fontSize: 14, fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', color: '#d4d4d8', lineHeight: 22, marginBottom: 14 },
  vendor: { backgroundColor: 'rgba(234, 179, 8, 0.05)', borderLeftWidth: 3, borderLeftColor: '#eab308', padding: 16, marginBottom: 12 },
  vendorName: { fontSize: 15, fontWeight: '700', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', color: '#eab308', marginBottom: 10 },
  skillItem: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  bullet: { width: 6, height: 6, backgroundColor: '#ff8c00', marginTop: 6 },
  skillContent: { flex: 1 },
  skillName: { fontSize: 15, fontWeight: '700', fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace', color: '#ffffff', marginBottom: 8 },
});
