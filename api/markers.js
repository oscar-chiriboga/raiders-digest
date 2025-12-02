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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Prevent caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const client = await getRedisClient();
    
    if (req.method === 'GET') {
      // Get all markers
      const data = await client.get(MARKERS_KEY);
      const markers = data ? JSON.parse(data) : [];
      return res.status(200).json(markers);
    }

    if (req.method === 'POST') {
      // Add new marker
      const newMarker = req.body;
      
      // Generate ID
      newMarker.id = `marker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      newMarker.upvotes = 0;
      newMarker.downvotes = 0;
      newMarker.createdAt = new Date().toISOString();
      
      // Get existing markers
      const data = await client.get(MARKERS_KEY);
      const markers = data ? JSON.parse(data) : [];
      
      // Add new marker
      markers.push(newMarker);
      
      // Save back to Redis
      await client.set(MARKERS_KEY, JSON.stringify(markers));
      
      return res.status(201).json(newMarker);
    }

    if (req.method === 'DELETE') {
      // Delete marker by ID (from query param)
      const { id } = req.query;
      
      const data = await client.get(MARKERS_KEY);
      const markers = data ? JSON.parse(data) : [];
      const filteredMarkers = markers.filter(m => m.id !== id);
      
      await client.set(MARKERS_KEY, JSON.stringify(filteredMarkers));
      
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
