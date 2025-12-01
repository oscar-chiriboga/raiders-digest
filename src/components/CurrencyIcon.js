import React from 'react';
import { View } from 'react-native';

export default function CurrencyIcon({ size = 16, color = '#E5B558' }) {
  const stripeWidth = size * 0.18;
  const stripeHeight = size * 2.5;
  
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        overflow: 'hidden',
        marginRight: 6,
        marginLeft: 2,
        position: 'relative',
      }}
    >
      {/* Diagonal stripes */}
      <View style={{
        position: 'absolute',
        width: stripeWidth,
        height: stripeHeight,
        backgroundColor: '#FFFFFF',
        transform: [{ rotate: '-25deg' }],
        left: -size * 0.2,
        top: -size * 0.8,
      }} />
      <View style={{
        position: 'absolute',
        width: stripeWidth,
        height: stripeHeight,
        backgroundColor: '#FFFFFF',
        transform: [{ rotate: '-25deg' }],
        left: size * 0.05,
        top: -size * 0.8,
      }} />
      <View style={{
        position: 'absolute',
        width: stripeWidth,
        height: stripeHeight,
        backgroundColor: '#FFFFFF',
        transform: [{ rotate: '-25deg' }],
        left: size * 0.3,
        top: -size * 0.8,
      }} />
      <View style={{
        position: 'absolute',
        width: stripeWidth,
        height: stripeHeight,
        backgroundColor: '#FFFFFF',
        transform: [{ rotate: '-25deg' }],
        left: size * 0.55,
        top: -size * 0.8,
      }} />
      <View style={{
        position: 'absolute',
        width: stripeWidth,
        height: stripeHeight,
        backgroundColor: '#FFFFFF',
        transform: [{ rotate: '-25deg' }],
        left: size * 0.8,
        top: -size * 0.8,
      }} />
    </View>
  );
}
