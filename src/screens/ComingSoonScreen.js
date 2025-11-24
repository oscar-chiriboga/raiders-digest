import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated } from 'react-native';

export default function ComingSoonScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [glowAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Glow pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scanlines} pointerEvents="none" />
      <View style={styles.vignette} pointerEvents="none" />
      <Animated.View style={[styles.inner, { opacity: fadeAnim }]}>
        <View style={styles.glowBox}>
          <Animated.Text style={[styles.signal, { opacity: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.7, 1] }) }]}>
            ▓▓▓ SIGNAL DETECTED...
          </Animated.Text>
        </View>
        <Text style={styles.decrypt}>
          {'>'} Decrypting data packet: <Text style={styles.highlight}>Raiders Digest</Text>.
        </Text>
        <Text style={styles.intel}>
          {'>'} Comprehensive intel on ARC threats, weapon schematics, and loot hotspots is currently compiling.
        </Text>
        <View style={styles.statusBar}>
          <Text style={styles.status}>STATUS: <Text style={styles.statusInit}>INITIALIZING...</Text></Text>
          <Animated.Text style={[styles.cursor, { opacity: glowAnim }]}>█</Animated.Text>
        </View>
        <Text style={styles.underground}>{'>'} Stay underground. Await the signal.</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000a05',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    fontFamily: 'monospace',
  },
  scanlines: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    opacity: 0.15,
    backgroundRepeat: 'repeat',
    backgroundImage: 'repeating-linear-gradient(180deg, rgba(0,255,128,0.08) 0px, rgba(0,255,128,0.08) 1px, transparent 2px, transparent 4px)',
    pointerEvents: 'none',
  },
  vignette: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    opacity: 0.7,
    background: 'radial-gradient(circle, transparent 30%, rgba(0,10,5,0.9) 100%)',
    pointerEvents: 'none',
  },
  inner: {
    backgroundColor: 'rgba(5,18,10,0.95)',
    borderRadius: 8,
    padding: 32,
    alignItems: 'flex-start',
    shadowColor: '#00ff99',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    elevation: 12,
    maxWidth: 500,
    borderWidth: 1,
    borderColor: '#00ff99',
    boxShadow: '0 0 30px rgba(0,255,153,0.3), inset 0 0 20px rgba(0,255,153,0.05)',
    zIndex: 1,
  },
  glowBox: {
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  signal: {
    color: '#00ff99',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
    textShadowColor: '#00ff99',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    fontFamily: 'monospace',
  },
  decrypt: {
    color: '#8affcd',
    fontSize: 15,
    marginBottom: 12,
    fontFamily: 'monospace',
    lineHeight: 22,
  },
  highlight: {
    color: '#00ff99',
    fontWeight: 'bold',
    textShadowColor: '#00ff99',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontFamily: 'monospace',
  },
  intel: {
    color: '#c0ffe5',
    fontSize: 15,
    marginBottom: 20,
    fontFamily: 'monospace',
    lineHeight: 22,
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  status: {
    color: '#8affcd',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'monospace',
  },
  statusInit: {
    color: '#00ff99',
    fontWeight: 'bold',
    textShadowColor: '#00ff99',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontFamily: 'monospace',
  },
  cursor: {
    color: '#00ff99',
    fontSize: 15,
    fontFamily: 'monospace',
    marginLeft: 4,
  },
  underground: {
    color: '#5affb3',
    fontSize: 14,
    fontStyle: 'italic',
    fontFamily: 'monospace',
    opacity: 0.8,
  },
});
