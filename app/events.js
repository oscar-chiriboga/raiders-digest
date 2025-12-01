import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Platform, ActivityIndicator, RefreshControl, UIManager, LayoutAnimation } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedScreen from '../src/components/AnimatedScreen';
import DesktopNav from '../src/components/DesktopNav';
import Footer from '../src/components/Footer';
import SEO from '../src/components/SEO';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Determine API URL based on environment
// In production (deployed), use the Vercel serverless function
// In local development, use CORS proxy to bypass CORS restrictions
const getApiUrl = () => {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    // If running locally, use CORS proxy
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'https://corsproxy.io/?https://metaforge.app/api/arc-raiders/event-timers';
    }
  }
  // In production or on mobile, use the serverless function
  return '/api/event-timers';
};

const API_URL = getApiUrl();

const getEventDateTime = (timeStr, now, isEndTime = false) => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const eventTime = new Date(now);
  eventTime.setUTCHours(hours, minutes, 0, 0);
  
  // For end times that are earlier in the day than start time, they wrap to next day
  // For start/end times that have passed today, move to next occurrence
  if (eventTime.getTime() < now.getTime() && !isEndTime) {
    eventTime.setUTCDate(eventTime.getUTCDate() + 1);
  }
  
  return eventTime.getTime();
};

const processEventData = (apiData) => {
  if (!apiData || !apiData.data) return [];
  const now = new Date();
  const allEvents = [];

  apiData.data.forEach(eventType => {
    if (eventType.times && eventType.times.length > 0) {
      eventType.times.forEach(timeSlot => {
        const startTime = getEventDateTime(timeSlot.start, now);
        let endTime = getEventDateTime(timeSlot.end, now, true);
        
        // If end time is before start time, the event spans across midnight
        if (endTime < startTime) {
          endTime += 24 * 60 * 60 * 1000; // Add 24 hours
        }
        
        // Check if event is currently active (started but not ended)
        const eventStartTime = new Date(now);
        eventStartTime.setUTCHours(...timeSlot.start.split(':').map(Number), 0, 0);
        const eventEndTime = new Date(now);
        eventEndTime.setUTCHours(...timeSlot.end.split(':').map(Number), 0, 0);
        
        // If end time is earlier than start time in UTC, it wraps to next day
        if (eventEndTime.getTime() < eventStartTime.getTime()) {
          eventEndTime.setUTCDate(eventEndTime.getUTCDate() + 1);
        }
        
        // Check if we're currently in the event window
        const isActive = now.getTime() >= eventStartTime.getTime() && now.getTime() <= eventEndTime.getTime();
        
        if (isActive) {
          // Use today's times for active events
          allEvents.push({ 
            ...eventType, 
            startTime: eventStartTime.getTime(), 
            endTime: eventEndTime.getTime() 
          });
        } else if (now.getTime() < eventStartTime.getTime()) {
          // Event hasn't started yet today
          allEvents.push({ 
            ...eventType, 
            startTime: eventStartTime.getTime(), 
            endTime: eventEndTime.getTime() 
          });
        } else {
          // Event already passed today, schedule for tomorrow
          eventStartTime.setUTCDate(eventStartTime.getUTCDate() + 1);
          eventEndTime.setUTCDate(eventEndTime.getUTCDate() + 1);
          allEvents.push({ 
            ...eventType, 
            startTime: eventStartTime.getTime(), 
            endTime: eventEndTime.getTime() 
          });
        }
      });
    }
  });

  // Keep events that haven't ended yet
  return allEvents
    .filter(event => event.endTime > now.getTime())
    .sort((a, b) => a.startTime - b.startTime)
    .reduce((acc, current) => {
      if (!acc.find(item => item.name === current.name && item.map === current.map && item.startTime === current.startTime)) {
        acc.push(current);
      }
      return acc;
    }, []);
};

export default function EventsScreen() {
  const [isDesktop, setIsDesktop] = useState(Dimensions.get('window').width > 768);
  const [processedEvents, setProcessedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const previousEventsRef = useRef([]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsDesktop(window.width > 768);
    });
    return () => subscription?.remove();
  }, []);

  const fetchEvents = useCallback(async (isRefresh = false) => {
    if (!isRefresh) setLoading(true);
    try {
      setError(null);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      const data = await response.json();
      // Store the raw API data and process it with current time on each render
      setProcessedEvents(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => setIsDesktop(window.width > 768));
    return () => subscription?.remove();
  }, []);

  useEffect(() => {
    fetchEvents();
    const dataInterval = setInterval(() => fetchEvents(true), 300000);
    const timeInterval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => {
      clearInterval(dataInterval);
      clearInterval(timeInterval);
    };
  }, [fetchEvents]);

  // Process events with current time to keep them updated
  const processedEventsData = processedEvents && processedEvents.data ? processEventData(processedEvents) : [];
  
  const activeEvents = processedEventsData.filter(e => currentTime >= e.startTime && currentTime <= e.endTime);
  const upcomingEvents = processedEventsData.filter(e => currentTime < e.startTime).slice(0, 15);

  useEffect(() => {
    const currentEventIds = new Set([...activeEvents, ...upcomingEvents].map(e => e.startTime + e.name));
    const previousEventIds = new Set(previousEventsRef.current.map(e => e.startTime + e.name));
    if (currentEventIds.size !== previousEventIds.size) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    previousEventsRef.current = [...activeEvents, ...upcomingEvents];
  }, [activeEvents, upcomingEvents]);

  const formatTimeRemaining = (timestamp) => {
    const diff = timestamp - currentTime;
    if (diff <= 0) return '00:00:00';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const renderEventCard = (event, index, isActive) => (
    <View key={event.startTime + event.name + event.map} style={[styles.eventCard, isDesktop && styles.eventCardDesktop]}>
      <View style={styles.cornerTL} />
      <View style={styles.cornerTR} />
      <View style={styles.cornerBL} />
      <View style={styles.cornerBR} />
      
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          <Ionicons name={isActive ? "radio-button-on" : "time-outline"} size={14} color={isActive ? "#22c55e" : "#ff8c00"}/>
          <Text style={styles.eventTitle}>{event.name || 'Unknown Event'}</Text>
        </View>
        <View style={styles.mapBadge}>
          <Ionicons name="map-outline" size={12} color="#a3a3a3" />
          <Text style={styles.mapText}>{event.map?.toUpperCase() || 'UNKNOWN MAP'}</Text>
        </View>
      </View>

      <View style={styles.timerContainer}>
        <Text style={[styles.timerValue, { color: isActive ? "#22c55e" : "#ff8c00" }]}>
          {formatTimeRemaining(isActive ? event.endTime : event.startTime)}
        </Text>
        <Text style={styles.timerLabel}>{isActive ? 'REMAINING' : 'UNTIL EVENT'}</Text>
      </View>
    </View>
  );

  return (
    <AnimatedScreen>
      <SEO 
        title="Event Timers"
        description="Live Arc Raiders event timers. Track ARC Drops, Supply Crashes, Dusk/Dawn cycles, and more. Never miss an event with real-time countdowns."
        path="/events"
      />
      {isDesktop && <DesktopNav navigation={{}} currentRoute="Events" />}
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.content, isDesktop && styles.contentDesktop]}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => fetchEvents(true)} tintColor="#ff8c00" />}
      >
        <View style={styles.header}>
            <View style={styles.headerTop}>
              <Ionicons name="calendar-outline" size={16} color="#ff8c00" />
              <Text style={styles.title}>EVENTS</Text>
            </View>
            <View style={styles.statsBar}>
              <Text style={styles.statText}>ACTIVE: {activeEvents.length}</Text>
              <Text style={styles.statDivider}>|</Text>
              <Text style={styles.statText}>UPCOMING: {upcomingEvents.length}</Text>
            </View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#ff8c00" style={{marginTop: 50}}/>
        ) : error ? (
          <View style={styles.errorContainer}><Text style={styles.errorText}>{error}</Text></View>
        ) : (
          <>
            {activeEvents.length > 0 && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>ACTIVE NOW</Text>
                <View style={[styles.eventsGrid, isDesktop && styles.eventsGridDesktop]}>
                  {activeEvents.map((event, index) => renderEventCard(event, index, true))}
                </View>
              </View>
            )}
            {upcomingEvents.length > 0 && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>UPCOMING EVENTS</Text>
                <View style={[styles.eventsGrid, isDesktop && styles.eventsGridDesktop]}>
                  {upcomingEvents.map((event, index) => renderEventCard(event, index, false))}
                </View>
              </View>
            )}
          </>
        )}
        <Footer />
      </ScrollView>
    </AnimatedScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 20, paddingTop: 10, maxWidth: 1400, alignSelf: 'center', width: '100%', paddingBottom: 100 },
  contentDesktop: { paddingTop: 70 },
  header: { paddingHorizontal: 0, marginBottom: 24 },
  headerTop: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: '900', color: '#ffffff', textTransform: 'uppercase', fontFamily: 'monospace' },
  statsBar: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', paddingTop: 12, borderTopWidth: 1, borderTopColor: '#262626', gap: 4, },
  statText: { fontSize: 10, color: '#a8a8a8', fontFamily: 'monospace', letterSpacing: 1.5 },
  statDivider: { color: '#262626', marginHorizontal: 4 },
  errorContainer: { padding: 20, alignItems: 'center' },
  errorText: { color: '#ff3e00' },
  sectionContainer: { marginBottom: 24 },
  sectionTitle: { color: '#a3a3a3', fontSize: 12, fontWeight: '700', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#262626', paddingBottom: 8, fontFamily: 'monospace' },
  eventsGrid: { gap: 16 },
  eventsGridDesktop: { flexDirection: 'row', flexWrap: 'wrap' },
  eventCard: {
    backgroundColor: 'rgba(23, 23, 23, 0.3)',
    borderWidth: 1,
    borderColor: '#262626',
    padding: 16,
    position: 'relative',
  },
  eventCardDesktop: { width: 'calc(33.333% - 11px)' },
  cornerTL: { position: 'absolute', top: -1, left: -1, width: 8, height: 8, borderLeftWidth: 1, borderTopWidth: 1, borderColor: '#ff8c00' },
  cornerTR: { position: 'absolute', top: -1, right: -1, width: 8, height: 8, borderRightWidth: 1, borderTopWidth: 1, borderColor: '#ff8c00' },
  cornerBL: { position: 'absolute', bottom: -1, left: -1, width: 8, height: 8, borderLeftWidth: 1, borderBottomWidth: 1, borderColor: '#ff8c00' },
  cornerBR: { position: 'absolute', bottom: -1, right: -1, width: 8, height: 8, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#ff8c00' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: '#262626' },
  titleContainer: { flexDirection: 'row', alignItems: 'center', gap: 8, flexShrink: 1 },
  eventTitle: { color: '#ffffff', fontSize: 16, fontWeight: '700', fontFamily: 'monospace' },
  mapBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: 'rgba(0,0,0,0.3)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, borderWidth: 1, borderColor: '#707070' },
  mapText: { color: '#a3a3a3', fontSize: 11, fontWeight: 'bold', fontFamily: 'monospace' },
  timerContainer: { alignItems: 'center', paddingVertical: 8 },
  timerLabel: { color: '#a8a8a8', fontSize: 9, fontWeight: '700', letterSpacing: 1.5, fontFamily: 'monospace', marginBottom: 4 },
  timerValue: { fontSize: 32, fontWeight: '900', fontFamily: 'monospace', letterSpacing: 2 },
});
