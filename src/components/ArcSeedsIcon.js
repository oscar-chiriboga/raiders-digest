import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Rect, G } from 'react-native-svg';

export default function ArcSeedsIcon({ size = 16, color = '#E5B558' }) {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Background circle with darker shade for seeds */}
        <Circle cx="50" cy="50" r="48" fill="#8B6914" />
        
        {/* More stripes for seed pattern - thinner and more numerous */}
        <G rotation="-25" origin="50, 50">
          <Rect x="25" y="-10" width="5" height="120" fill="#E5B558" />
          <Rect x="33" y="-10" width="5" height="120" fill="#E5B558" />
          <Rect x="41" y="-10" width="5" height="120" fill="#E5B558" />
          <Rect x="49" y="-10" width="5" height="120" fill="#E5B558" />
          <Rect x="57" y="-10" width="5" height="120" fill="#E5B558" />
          <Rect x="65" y="-10" width="5" height="120" fill="#E5B558" />
          <Rect x="73" y="-10" width="5" height="120" fill="#E5B558" />
          <Rect x="81" y="-10" width="5" height="120" fill="#E5B558" />
        </G>
      </Svg>
    </View>
  );
}
