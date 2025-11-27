import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Raiders Digest© // Unofficial companion app. Not affiliated with Embark Studios.{'\n'}
        All game assets property of their respective owners.
      </Text>
      <View style={styles.footerBottom}>
        <TouchableOpacity 
          style={styles.socialLink}
          onPress={() => Linking.openURL('https://instagram.com/raiders.digest')}
        >
          <Ionicons name="logo-instagram" size={16} color="#ff8c00" />
          <Text style={styles.socialText}>@raiders.digest</Text>
        </TouchableOpacity>
        <Text style={styles.transmission}>// END OF TRANSMISSION_</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#262626',
    backgroundColor: '#0a0a0a',
    marginTop: 40,
  },
  footerText: {
    fontSize: 9,
    color: '#525252',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    lineHeight: 14,
    marginBottom: 12,
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
  },
  socialText: {
    fontSize: 10,
    color: '#ff8c00',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    fontWeight: '700',
  },
  transmission: {
    fontSize: 9,
    color: '#404040',
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
    letterSpacing: 1,
  },
});
