import { createClient } from 'redis';

const MARKERS_KEY = 'dam-battlegrounds-markers';

// Create Redis client using REDIS_URL
let redis = null;
async function getRedisClient() {
  if (!redis) {
    redis = createClient({
      url: process.env.REDIS_URL
    });
    await redis.connect();
  }
  return redis;
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Prevent caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const client = await getRedisClient();
    const { id } = req.query;
    const { vote } = req.body; // 'up' or 'down'
    
    // Get all markers
    const data = await client.get(MARKERS_KEY);
    const markers = data ? JSON.parse(data) : [];
    
    // Find and update the marker
    const markerIndex = markers.findIndex(m => m.id === id);
    
    if (markerIndex === -1) {
      return res.status(404).json({ error: 'Marker not found' });
    }
    
    const marker = markers[markerIndex];
    
    // Update votes
    if (vote === 'up') {
      marker.upvotes = (marker.upvotes || 0) + 1;
    } else if (vote === 'down') {
      marker.downvotes = (marker.downvotes || 0) + 1;
    }
    
    // Check if marker should be auto-deleted (too many downvotes)
    const netVotes = (marker.upvotes || 0) - (marker.downvotes || 0);
    if (netVotes <= -5) {
      // Remove marker
      markers.splice(markerIndex, 1);
    } else {
      // Update marker
      markers[markerIndex] = marker;
    }
    
    // Save back
    await client.set(MARKERS_KEY, JSON.stringify(markers));
    
    return res.status(200).json(marker);
  } catch (error) {
    console.error('Vote Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message
    });
  }
}
