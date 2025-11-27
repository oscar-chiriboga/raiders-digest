import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../components/AnimatedScreen';
import DesktopNav from '../components/DesktopNav';
import MobileTabBar from '../components/MobileTabBar';

const { width } = Dimensions.get('window');
const isDesktop = width > 768;

export default function SurvivalGuideScreen({ navigation }) {
  return (
    <AnimatedScreen>
      {isDesktop && <DesktopNav navigation={navigation} currentRoute="SurvivalGuide" />}
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>STEP 3: THE WORKSHOP & "SCRAPPY"</Text>
          <Text style={styles.text}>Your Workshop is your passive income.</Text>
          
          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Upgrade Scrappy:</Text>
            <Text style={styles.text}>Your robot pet finds materials while you are offline.</Text>
            <View style={styles.checkpoint}>
              <Text style={styles.checkpointTitle}>⚡ CHECKPOINT:</Text>
              <Text style={styles.text}>You will get stuck at Level 3. You need Lemons and Olives. You must go to the Blue Gate Map (Olive Grove) to find these. It's dangerous; run in, grab fruit, and extract.</Text>
            </View>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>Workbench Priority:</Text>
            <View style={styles.priorityItem}>
              <Text style={styles.priorityNumber}>1.</Text>
              <View>
                <Text style={styles.priorityName}>Medical Lab</Text>
                <Text style={styles.text}>To craft full stacks of meds.</Text>
              </View>
            </View>
            <View style={styles.priorityItem}>
              <Text style={styles.priorityNumber}>2.</Text>
              <View>
                <Text style={styles.priorityName}>Gunsmith</Text>
                <Text style={styles.text}>To add sights and grips (recoil control).</Text>
              </View>
            </View>
            <View style={styles.priorityItem}>
              <Text style={styles.priorityNumber}>3.</Text>
              <View>
                <Text style={styles.priorityName}>Utility Station</Text>
                <Text style={styles.text}>To craft your own Hatch Keys.</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>STEP 4: COMBAT "CHEAT SHEET"</Text>
          <Text style={styles.text}>Don't fight unless you have to. If you must fight, use the right tactic:</Text>
          
          <View style={styles.enemyTable}>
            <View style={styles.enemyRow}>
              <Text style={styles.enemyName}>Ticks (Spiders)</Text>
              <Text style={styles.enemyTactic}>Don't Shoot. They explode. Melee them to knock them back.</Text>
            </View>
            <View style={styles.enemyRow}>
              <Text style={styles.enemyName}>Wasps (Drones)</Text>
              <Text style={styles.enemyTactic}>Shoot the Rotors/Thrusters. Body shots bounce off armor.</Text>
            </View>
            <View style={styles.enemyRow}>
              <Text style={styles.enemyName}>Snitch (Scanner)</Text>
              <Text style={styles.enemyTactic}>Kill on Sight. If it spots you, it calls a dropship. Shoot the eye.</Text>
            </View>
            <View style={styles.enemyRow}>
              <Text style={styles.enemyName}>Leaper (Jumping Tank)</Text>
              <Text style={styles.enemyTactic}>Fire. Use Blaze Grenades or shoot red barrels to overheat it.</Text>
            </View>
            <View style={styles.enemyRow}>
              <Text style={styles.enemyName}>Bastion (Big Shield Bot)</Text>
              <Text style={styles.enemyTactic}>The Back. Distract it and shoot the yellow canisters on its rear.</Text>
            </View>
          </View>

          <View style={styles.weaponTip}>
            <Text style={styles.weaponTipTitle}>🎯 Best Starter Weapons:</Text>
            <Text style={styles.text}>Use the Ferro (Assault Rifle) or Anvil (Heavy Rifle). Avoid shotguns early on.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>STEP 5: HOW TO EXTRACT (AND KEEP YOUR LOOT)</Text>
          <Text style={styles.text}>There are two ways out. Choose wisely.</Text>
          
          <View style={styles.extractMethod}>
            <Text style={styles.extractTitle}>A. Cargo Elevators (The "Loud" Way)</Text>
            <Text style={styles.extractRisk}>Risk: High. Everyone on the map hears the alarm.</Text>
            <Text style={styles.extractStrategy}>Strategy: Trigger the button, then hide 50 meters away. Do not stand on the platform. Wait for the doors to open, check for campers, then sprint inside at the last second.</Text>
          </View>

          <View style={styles.extractMethod}>
            <Text style={styles.extractTitle}>B. Raider Hatches (The "Pro" Way)</Text>
            <Text style={styles.extractRisk}>Risk: Low. Silent and instant.</Text>
            <Text style={styles.extractCost}>Cost: Requires a Raider Hatch Key.</Text>
            <Text style={styles.extractStrategy}>Strategy: Always keep a key in your Safe Pocket. If you find rare Blueprints, use the key immediately. It's worth the cost.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎒 INVENTORY MANAGEMENT RULES</Text>
          
          <View style={styles.inventoryRule}>
            <Text style={styles.inventoryTitle}>The Safe Pocket:</Text>
            <Text style={styles.text}>Items here are saved even if you die.</Text>
            <View style={styles.inventoryList}>
              <Text style={styles.inventoryAlways}>ALWAYS put here:</Text>
              <Text style={styles.text}>Hatch Keys, Blueprints, Rare Mats (ARC Powercells).</Text>
              <Text style={styles.inventoryNever}>NEVER put here:</Text>
              <Text style={styles.text}>Ammo or Meds.</Text>
            </View>
          </View>

          <View style={styles.inventoryRule}>
            <Text style={styles.inventoryTitle}>Trash Guns:</Text>
            <Text style={styles.text}>If you extract with a bad gun (like the "Stitcher"), dismantle it. The weapon parts are more valuable for repairing your good gun than the cash you get for selling it.</Text>
          </View>
        </View>
      </ScrollView>
      {!isDesktop && <MobileTabBar navigation={navigation} />}
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingTop: isDesktop ? 90 : 80,
    paddingBottom: 100,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    letterSpacing: 3,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
    letterSpacing: 2,
    marginTop: 8,
  },
  goldenRule: {
    backgroundColor: 'rgba(255, 68, 0, 0.1)',
    borderWidth: 2,
    borderColor: '#ff4400',
    padding: 20,
    marginBottom: 32,
  },
  goldenRuleTitle: {
    fontSize: 16,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff4400',
    letterSpacing: 2,
    marginBottom: 12,
  },
  goldenRuleText: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    lineHeight: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
    letterSpacing: 2,
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#262626',
  },
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#d4d4d8',
    lineHeight: 22,
    marginBottom: 14,
  },
  vendor: {
    backgroundColor: 'rgba(234, 179, 8, 0.05)',
    borderLeftWidth: 3,
    borderLeftColor: '#eab308',
    padding: 16,
    marginBottom: 12,
  },
  vendorName: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#eab308',
    marginBottom: 10,
  },
  skillItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  bullet: {
    width: 6,
    height: 6,
    backgroundColor: '#ff8c00',
    marginTop: 6,
  },
  skillContent: {
    flex: 1,
  },
  skillName: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 8,
  },
  subsection: {
    marginTop: 16,
  },
  subsectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 14,
  },
  checkpoint: {
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: '#ff8c00',
    padding: 12,
    marginTop: 12,
  },
  checkpointTitle: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
    marginBottom: 8,
  },
  priorityItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    paddingLeft: 8,
  },
  priorityNumber: {
    fontSize: 14,
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
  },
  priorityName: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 4,
  },
  enemyTable: {
    marginTop: 16,
    marginBottom: 16,
  },
  enemyRow: {
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 12,
    marginBottom: 8,
  },
  enemyName: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
    marginBottom: 8,
  },
  enemyTactic: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#d4d4d8',
    lineHeight: 20,
  },
  weaponTip: {
    backgroundColor: 'rgba(255, 140, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#ff8c00',
    padding: 16,
    marginTop: 8,
  },
  weaponTipTitle: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff8c00',
    marginBottom: 8,
  },
  extractMethod: {
    backgroundColor: 'rgba(23, 23, 23, 0.5)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 16,
    marginBottom: 16,
  },
  extractTitle: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 10,
  },
  extractRisk: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff4400',
    marginBottom: 8,
  },
  extractCost: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#eab308',
    marginBottom: 8,
  },
  extractStrategy: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#d4d4d8',
    lineHeight: 20,
  },
  inventoryRule: {
    marginBottom: 20,
  },
  inventoryTitle: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ffffff',
    marginBottom: 10,
  },
  inventoryList: {
    paddingLeft: 12,
  },
  inventoryAlways: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#22c55e',
    marginTop: 8,
    marginBottom: 4,
  },
  inventoryNever: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    color: '#ff4400',
    marginTop: 8,
    marginBottom: 4,
  },
});
