import { fetchWithCache } from './apiCache';

// Use local proxy in development, Vercel API proxy in production
const IS_DEV = typeof window !== 'undefined' && window.location.hostname === 'localhost';
const API_BASE_URL = IS_DEV 
  ? 'http://localhost:3001/api/arc-raiders'
  : '/api';

/**
 * Fetch weapons data from API with caching
 */
export const fetchWeapons = async (forceRefresh = false) => {
  const fetchFunction = async () => {
    const response = await fetch(`${API_BASE_URL}/weapons`);
    if (!response.ok) {
      throw new Error(`Failed to fetch weapons: ${response.statusText}`);
    }
    return await response.json();
  };

  return await fetchWithCache('weapons', fetchFunction, forceRefresh);
};

/**
 * Fetch enemies data from API with caching
 */
export const fetchEnemies = async (forceRefresh = false) => {
  const fetchFunction = async () => {
    const response = await fetch(`${API_BASE_URL}/arcs`);
    if (!response.ok) {
      throw new Error(`Failed to fetch enemies: ${response.statusText}`);
    }
    return await response.json();
  };

  return await fetchWithCache('enemies', fetchFunction, forceRefresh);
};

/**
 * Fetch loot items data from API with caching (includes components)
 */
export const fetchLoot = async (forceRefresh = false) => {
  const fetchFunction = async () => {
    const response = await fetch(`${API_BASE_URL}/items?includeComponents=true`);
    if (!response.ok) {
      throw new Error(`Failed to fetch loot: ${response.statusText}`);
    }
    return await response.json();
  };

  return await fetchWithCache('loot', fetchFunction, forceRefresh);
};

/**
 * Fetch maps data from API with caching
 */
export const fetchMaps = async (forceRefresh = false) => {
  const fetchFunction = async () => {
    const response = await fetch(`${API_BASE_URL}/maps`);
    if (!response.ok) {
      throw new Error(`Failed to fetch maps: ${response.statusText}`);
    }
    return await response.json();
  };

  return await fetchWithCache('maps', fetchFunction, forceRefresh);
};

/**
 * Fetch quests data from API with caching
 */
export const fetchQuests = async (forceRefresh = false) => {
  const fetchFunction = async () => {
    const response = await fetch(`${API_BASE_URL}/quests?limit=100&sortBy=name&sortOrder=asc`);
    if (!response.ok) {
      throw new Error(`Failed to fetch quests: ${response.statusText}`);
    }
    const result = await response.json();
    return result.data || [];
  };

  return await fetchWithCache('quests', fetchFunction, forceRefresh);
};

/**
 * Fetch traders data from API with caching
 */
export const fetchTraders = async (forceRefresh = false) => {
  const fetchFunction = async () => {
    const response = await fetch(`${API_BASE_URL}/traders`);
    if (!response.ok) {
      throw new Error(`Failed to fetch traders: ${response.statusText}`);
    }
    const result = await response.json();
    // The traders endpoint returns { data: { Apollo: [...], Celeste: [...], ... } }
    return result.data || result || {};
  };

  return await fetchWithCache('traders', fetchFunction, forceRefresh);
};

/**
 * Prefetch all data on app startup
 */
export const prefetchAllData = async () => {
  try {
    console.log('[API] Prefetching all data...');
    const [weapons, enemies, loot, quests, traders] = await Promise.all([
      fetchWeapons(),
      fetchEnemies(),
      fetchLoot(),
      fetchQuests(),
      fetchTraders(),
    ]);
    
    console.log('[API] Prefetch complete:', {
      weapons: weapons.length,
      enemies: enemies.length,
      loot: loot.length,
      quests: quests.length,
      traders: traders.length
    });
    
    return { weapons, enemies, loot, quests, traders };
  } catch (error) {
    console.error('[API] Prefetch failed:', error);
    throw error;
  }
};
