import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

export default function ArcSeedsIcon({ size = 16, color = '#E5B558' }) {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <G>
          {/* Leaf/Seed shape - outer outline */}
          <Path
            d="M 50 10 Q 70 30 70 50 Q 70 70 50 90 Q 30 70 30 50 Q 30 30 50 10 Z"
            fill={color}
            stroke="#000"
            strokeWidth="2"
          />
          
          {/* Center vein */}
          <Path
            d="M 50 15 L 50 85"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          
          {/* Left curved veins */}
          <Path
            d="M 50 30 Q 40 35 35 45"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <Path
            d="M 50 50 Q 38 52 33 58"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Right curved veins */}
          <Path
            d="M 50 30 Q 60 35 65 45"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <Path
            d="M 50 50 Q 62 52 67 58"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </G>
      </Svg>
    </View>
  );
}
