import { useState, useEffect } from 'react';
import { fetchWeapons, fetchEnemies, fetchLoot, fetchQuests, fetchTraders } from './apiService';

/**
 * Hook to fetch and cache API data
 * Falls back to static data if API fails
 * @param {string} dataType - Type of data to fetch ('weapons', 'enemies', 'loot', 'quests', 'traders')
 * @param {Function|any} fetchFunctionOrStaticData - Fetch function or static fallback data
 * @returns {Object} - { data, loading, error, refresh }
 */
export const useApiData = (dataType, fetchFunctionOrStaticData) => {
  const [data, setData] = useState(typeof fetchFunctionOrStaticData === 'function' ? null : fetchFunctionOrStaticData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      let result;
      
      // If a custom fetch function is provided, use it
      if (typeof fetchFunctionOrStaticData === 'function') {
        result = await fetchFunctionOrStaticData(forceRefresh);
      } else {
        // Otherwise use the legacy switch statement for backwards compatibility
        switch (dataType) {
          case 'weapons':
            result = await fetchWeapons(forceRefresh);
            break;
          case 'enemies':
            result = await fetchEnemies(forceRefresh);
            break;
          case 'loot':
            result = await fetchLoot(forceRefresh);
            break;
          case 'quests':
            result = await fetchQuests(forceRefresh);
            break;
          case 'traders':
            result = await fetchTraders(forceRefresh);
            break;
          default:
            throw new Error(`Unknown data type: ${dataType}`);
        }
      }

      setData(result);
    } catch (err) {
      console.warn(`Failed to fetch ${dataType}:`, err);
      setError(err.message || 'Failed to fetch data');
      // Keep using static data on error if provided
      if (typeof fetchFunctionOrStaticData !== 'function') {
        setData(fetchFunctionOrStaticData);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Try to fetch cached/fresh data on mount
    fetchData();
  }, []);

  const refresh = () => fetchData(true);

  return { data, loading, error, refresh };
};
