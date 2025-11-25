import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

export default function RainbowDecoration({ style, size = 'large', opacity = 0.15 }) {
  const sizes = {
    small: { width: 100, height: 100, stripeWidth: 8 },
    medium: { width: 200, height: 200, stripeWidth: 12 },
    large: { width: 400, height: 400, stripeWidth: 16 },
  };

  const dimensions = sizes[size] || sizes.large;
  
  if (Platform.OS === 'web') {
    return (
      <div style={{
        position: 'absolute',
        width: dimensions.width,
        height: dimensions.height,
        opacity,
        backgroundImage: `repeating-linear-gradient(45deg, #00d9ff 0px, #00d9ff ${dimensions.stripeWidth/2}px, transparent ${dimensions.stripeWidth/2}px, transparent ${dimensions.stripeWidth}px, #4ade80 ${dimensions.stripeWidth}px, #4ade80 ${dimensions.stripeWidth * 1.5}px, transparent ${dimensions.stripeWidth * 1.5}px, transparent ${dimensions.stripeWidth * 2}px, #fbbf24 ${dimensions.stripeWidth * 2}px, #fbbf24 ${dimensions.stripeWidth * 2.5}px, transparent ${dimensions.stripeWidth * 2.5}px, transparent ${dimensions.stripeWidth * 3}px, #ef4444 ${dimensions.stripeWidth * 3}px, #ef4444 ${dimensions.stripeWidth * 3.5}px, transparent ${dimensions.stripeWidth * 3.5}px, transparent ${dimensions.stripeWidth * 4}px)`,
        ...StyleSheet.flatten(style),
      }} />
    );
  }

  return <View style={[{ width: dimensions.width, height: dimensions.height, opacity }, style]} />;
}
