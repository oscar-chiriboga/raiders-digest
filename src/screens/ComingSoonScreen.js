import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, Platform, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PASSWORD = 'raiders2024'; // Change this to your desired password
const AUTH_KEY = 'RAIDERS_AUTH';

export default function ComingSoonScreen({ navigation }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [glowAnim] = useState(new Animated.Value(0));
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    // Start countdown immediately
    checkLaunchTime();
    
    // Check if device is already authenticated or if launch time has passed
    checkAuthentication();

    // Set up countdown timer
    const timer = setInterval(() => {
      checkLaunchTime();
    }, 1000);

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

    return () => clearInterval(timer);
  }, []);

  const checkLaunchTime = () => {
    const now = new Date();
    // Friday, November 28, 2025 at 12:00 AM
    const launchDate = new Date('2025-11-28T00:00:00');

    const diff = launchDate - now;

    if (diff <= 0) {
      // Launch time has passed, navigate to main
      navigation.replace('Main');
    } else {
      // Calculate time remaining
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      if (days > 0) {
        setTimeRemaining(`${days}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M ${seconds.toString().padStart(2, '0')}S`);
      } else {
        setTimeRemaining(`${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M ${seconds.toString().padStart(2, '0')}S`);
      }
    }
  };

  const checkAuthentication = async () => {
    try {
      const auth = await AsyncStorage.getItem(AUTH_KEY);
      if (auth === 'true') {
        // Device already authenticated, navigate to main
        navigation.replace('Main');
        return;
      }
      // Also check if launch time has passed
      checkLaunchTime();
    } catch (error) {
      console.warn('Error checking authentication:', error);
    }
  };

  const handleSubmit = async () => {
    if (password === PASSWORD) {
      try {
        // Save authentication to device
        await AsyncStorage.setItem(AUTH_KEY, 'true');
        setIsAuthenticated(true);
        // Navigate to main app
        navigation.replace('Main');
      } catch (error) {
        console.warn('Error saving authentication:', error);
        setError('Authentication failed. Please try again.');
      }
    } else {
      setError('Invalid password. Access denied.');
      setPassword('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scanlines} pointerEvents="none" />
      <View style={styles.vignette} pointerEvents="none" />
      <Animated.View style={[styles.inner, { opacity: fadeAnim }]}>
        {timeRemaining && (
          <View style={styles.countdownBox}>
            <Text style={styles.countdownLabel}>{'>'} LAUNCH COUNTDOWN:</Text>
            <Text style={styles.countdownTime}>{timeRemaining}</Text>
          </View>
        )}
        
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
        
        <View style={styles.accessControl}>
          <Text style={styles.accessLabel}>{'>'} ACCESS CODE REQUIRED:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setError('');
            }}
            onSubmitEditing={handleSubmit}
            placeholder="Enter access code..."
            placeholderTextColor="#00663355"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>{'>'} AUTHENTICATE</Text>
          </TouchableOpacity>
          {error ? (
            <Text style={styles.errorText}>{'>'} {error}</Text>
          ) : null}
        </View>

        <View style={styles.statusBar}>
          <Text style={styles.status}>STATUS: <Text style={styles.statusInit}>AWAITING AUTH...</Text></Text>
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
    ...Platform.select({
      web: {
        backgroundRepeat: 'repeat',
        backgroundImage: 'repeating-linear-gradient(180deg, rgba(0,255,128,0.08) 0px, rgba(0,255,128,0.08) 1px, transparent 2px, transparent 4px)',
      },
    }),
    pointerEvents: 'none',
  },
  vignette: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    opacity: 0.7,
    ...Platform.select({
      web: {
        background: 'radial-gradient(circle, transparent 30%, rgba(0,10,5,0.9) 100%)',
      },
    }),
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
    ...Platform.select({
      web: {
        boxShadow: '0 0 30px rgba(0,255,153,0.3), inset 0 0 20px rgba(0,255,153,0.05)',
      },
    }),
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
    fontFamily: 'monospace',
    ...Platform.select({
      web: {
        textShadow: '0 0 12px #00ff99',
      },
    }),
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
    fontFamily: 'monospace',
    ...Platform.select({
      web: {
        textShadow: '0 0 10px #00ff99',
      },
    }),
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
  accessControl: {
    width: '100%',
    marginVertical: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#00ff9933',
  },
  accessLabel: {
    color: '#00ff99',
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    backgroundColor: 'rgba(0,255,153,0.05)',
    borderWidth: 1,
    borderColor: '#00ff9955',
    borderRadius: 4,
    padding: 12,
    color: '#00ff99',
    fontFamily: 'monospace',
    fontSize: 14,
    marginBottom: 12,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
  },
  submitButton: {
    backgroundColor: 'rgba(0,255,153,0.1)',
    borderWidth: 1,
    borderColor: '#00ff99',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  submitText: {
    color: '#00ff99',
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff4444',
    fontFamily: 'monospace',
    fontSize: 12,
    marginTop: 8,
    ...Platform.select({
      web: {
        textShadow: '0 0 8px #ff4444',
      },
    }),
  },
  countdownBox: {
    width: '100%',
    backgroundColor: 'rgba(0,255,153,0.05)',
    borderWidth: 1,
    borderColor: '#00ff9955',
    borderRadius: 4,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  countdownLabel: {
    color: '#8affcd',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 8,
  },
  countdownTime: {
    color: '#00ff99',
    fontSize: 24,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    letterSpacing: 2,
    ...Platform.select({
      web: {
        textShadow: '0 0 12px #00ff99',
      },
    }),
  },
});
