import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Rect, G } from 'react-native-svg';

export default function ArcSeedsIcon({ size = 16, color = '#E5B558' }) {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Background circle */}
        <Circle cx="50" cy="50" r="48" fill={color} />
        
        {/* Diagonal stripes - rotated rectangles */}
        <G rotation="-25" origin="50, 50">
          <Rect x="35" y="-10" width="8" height="120" fill="#FFFFFF" />
          <Rect x="47" y="-10" width="8" height="120" fill="#FFFFFF" />
          <Rect x="59" y="-10" width="8" height="120" fill="#FFFFFF" />
          <Rect x="71" y="-10" width="8" height="120" fill="#FFFFFF" />
          <Rect x="83" y="-10" width="8" height="120" fill="#FFFFFF" />
        </G>
      </Svg>
    </View>
  );
}
