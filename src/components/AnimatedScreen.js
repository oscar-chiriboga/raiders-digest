import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Platform } from 'react-native';

export default function AnimatedScreen({ children, style }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.scanlines} />
      <Animated.View 
        style={[
          styles.content, 
          style, 
          { 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e14',
  },
  scanlines: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    opacity: 0.03,
    backgroundColor: 'transparent',
    ...Platform.select({
      web: {
        backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        backgroundSize: '100% 2px, 3px 100%',
      },
    }),
    pointerEvents: 'none',
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
});
