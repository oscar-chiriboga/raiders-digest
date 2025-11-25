import { Platform } from 'react-native';

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const CACHE_PREFIX = 'arc_raiders_cache_';

// Use localStorage for web, in-memory cache for native (can add AsyncStorage later)
const storage = Platform.OS === 'web' ? {
  getItem: async (key) => localStorage.getItem(key),
  setItem: async (key, value) => localStorage.setItem(key, value),
  removeItem: async (key) => localStorage.removeItem(key),
  getAllKeys: async () => Object.keys(localStorage),
  multiRemove: async (keys) => keys.forEach(key => localStorage.removeItem(key))
} : {
  // In-memory cache for native (fallback)
  data: {},
  getItem: async (key) => storage.data[key] || null,
  setItem: async (key, value) => { storage.data[key] = value; },
  removeItem: async (key) => { delete storage.data[key]; },
  getAllKeys: async () => Object.keys(storage.data),
  multiRemove: async (keys) => keys.forEach(key => delete storage.data[key])
};

/**
 * Get cached data if available and not expired
 * @param {string} key - Cache key
 * @returns {Promise<any|null>} - Cached data or null if expired/not found
 */
export const getCachedData = async (key) => {
  try {
    const cacheKey = CACHE_PREFIX + key;
    const cached = await storage.getItem(cacheKey);
    
    if (!cached) {
      return null;
    }
    
    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is still valid
    if (now - timestamp < CACHE_DURATION) {
      console.log(`[Cache HIT] ${key} - Age: ${Math.round((now - timestamp) / 1000 / 60)}min`);
      return data;
    } else {
      console.log(`[Cache EXPIRED] ${key} - Removing old data`);
      await storage.removeItem(cacheKey);
      return null;
    }
  } catch (error) {
    console.error(`[Cache ERROR] Failed to get ${key}:`, error);
    return null;
  }
};

/**
 * Store data in cache with current timestamp
 * @param {string} key - Cache key
 * @param {any} data - Data to cache
 * @returns {Promise<void>}
 */
export const setCachedData = async (key, data) => {
  try {
    const cacheKey = CACHE_PREFIX + key;
    const cacheData = {
      data,
      timestamp: Date.now(),
    };
    
    await storage.setItem(cacheKey, JSON.stringify(cacheData));
    console.log(`[Cache SET] ${key} - Stored successfully`);
  } catch (error) {
    console.error(`[Cache ERROR] Failed to set ${key}:`, error);
  }
};

/**
 * Clear specific cache entry
 * @param {string} key - Cache key to clear
 * @returns {Promise<void>}
 */
export const clearCache = async (key) => {
  try {
    const cacheKey = CACHE_PREFIX + key;
    await storage.removeItem(cacheKey);
    console.log(`[Cache CLEAR] ${key} - Cleared successfully`);
  } catch (error) {
    console.error(`[Cache ERROR] Failed to clear ${key}:`, error);
  }
};

/**
 * Clear all app caches
 * @returns {Promise<void>}
 */
export const clearAllCaches = async () => {
  try {
    const allKeys = await storage.getAllKeys();
    const cacheKeys = allKeys.filter(key => key.startsWith(CACHE_PREFIX));
    
    if (cacheKeys.length > 0) {
      await storage.multiRemove(cacheKeys);
      console.log(`[Cache CLEAR ALL] Removed ${cacheKeys.length} cache entries`);
    }
  } catch (error) {
    console.error('[Cache ERROR] Failed to clear all caches:', error);
  }
};

/**
 * Fetch data with caching - checks cache first, then fetches from API if needed
 * @param {string} key - Cache key
 * @param {Function} fetchFunction - Async function that fetches fresh data
 * @param {boolean} forceRefresh - Force fetch from API even if cache exists
 * @returns {Promise<any>} - Cached or fresh data
 */
export const fetchWithCache = async (key, fetchFunction, forceRefresh = false) => {
  try {
    // Check cache first unless force refresh
    if (!forceRefresh) {
      const cached = await getCachedData(key);
      if (cached) {
        return cached;
      }
    }
    
    // Fetch fresh data
    console.log(`[Cache FETCH] ${key} - Fetching fresh data from API`);
    const freshData = await fetchFunction();
    
    // Store in cache
    await setCachedData(key, freshData);
    
    return freshData;
  } catch (error) {
    console.error(`[Cache FETCH ERROR] ${key}:`, error);
    
    // Try to return cached data even if expired as fallback
    const cached = await getCachedData(key);
    if (cached) {
      console.log(`[Cache FALLBACK] ${key} - Using expired cache due to fetch error`);
      return cached;
    }
    
    throw error;
  }
};

/**
 * Get cache info for debugging
 * @returns {Promise<Object>} - Cache statistics
 */
export const getCacheInfo = async () => {
  try {
    const allKeys = await storage.getAllKeys();
    const cacheKeys = allKeys.filter(key => key.startsWith(CACHE_PREFIX));
    
    const info = {
      totalCaches: cacheKeys.length,
      caches: []
    };
    
    for (const cacheKey of cacheKeys) {
      const cached = await storage.getItem(cacheKey);
      if (cached) {
        const { timestamp } = JSON.parse(cached);
        const age = Math.round((Date.now() - timestamp) / 1000 / 60); // minutes
        const key = cacheKey.replace(CACHE_PREFIX, '');
        
        info.caches.push({
          key,
          age: `${age}min`,
          expires: `${Math.round((CACHE_DURATION - (Date.now() - timestamp)) / 1000 / 60)}min`
        });
      }
    }
    
    return info;
  } catch (error) {
    console.error('[Cache INFO ERROR]:', error);
    return { totalCaches: 0, caches: [] };
  }
};
