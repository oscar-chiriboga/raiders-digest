import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ComingSoonScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scanlines} pointerEvents="none" />
      <View style={styles.inner}>
        <Text style={styles.signal}>SIGNAL DETECTED...</Text>
        <Text style={styles.decrypt}>Decrypting data packet: <Text style={styles.highlight}>Raiders Digest</Text>.</Text>
        <Text style={styles.intel}>Comprehensive intel on ARC threats, weapon schematics, and loot hotspots is currently compiling.</Text>
        <Text style={styles.status}>STATUS: <Text style={styles.statusInit}>INITIALIZING...</Text></Text>
        <Text style={styles.underground}>Stay underground. Await the signal.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07110e',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    fontFamily: 'monospace',
  },
  scanlines: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    opacity: 0.12,
    backgroundRepeat: 'repeat',
    backgroundImage: 'repeating-linear-gradient(180deg, rgba(0,255,128,0.12) 0px, rgba(0,255,128,0.12) 1px, transparent 2px, transparent 6px)',
    pointerEvents: 'none',
  },
  inner: {
    backgroundColor: 'rgba(10,24,16,0.98)',
    borderRadius: 12,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    maxWidth: 380,
    borderWidth: 2,
    borderColor: '#0f3d2e',
    zIndex: 1,
  },
  signal: {
    color: '#00ff99',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    letterSpacing: 1.5,
    textShadowColor: '#00ff99',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    fontFamily: 'monospace',
  },
  decrypt: {
    color: '#baffd9',
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  highlight: {
    color: '#00ff99',
    fontWeight: 'bold',
    textShadowColor: '#00ff99',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    fontFamily: 'monospace',
  },
  intel: {
    color: '#eafff7',
    fontSize: 15,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  status: {
    color: '#baffd9',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 18,
    fontFamily: 'monospace',
  },
  statusInit: {
    color: '#00ff99',
    fontWeight: 'bold',
    textShadowColor: '#00ff99',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    fontFamily: 'monospace',
  },
  underground: {
    color: '#3fffa8',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'monospace',
    opacity: 0.7,
  },
});
