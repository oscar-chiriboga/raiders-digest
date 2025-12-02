import { kv } from '@vercel/kv';

const MARKERS_KEY = 'dam-battlegrounds-markers';

export default async function handler(req, res) {
  // Log environment variables for debugging
  console.log('KV_REST_API_URL exists:', !!process.env.KV_REST_API_URL);
  console.log('KV_REST_API_TOKEN exists:', !!process.env.KV_REST_API_TOKEN);
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // Get all markers
      const markers = await kv.get(MARKERS_KEY) || [];
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
      const markers = await kv.get(MARKERS_KEY) || [];
      
      // Add new marker
      markers.push(newMarker);
      
      // Save back to KV
      await kv.set(MARKERS_KEY, markers);
      
      return res.status(201).json(newMarker);
    }

    if (req.method === 'DELETE') {
      // Delete marker by ID (from query param)
      const { id } = req.query;
      
      const markers = await kv.get(MARKERS_KEY) || [];
      const filteredMarkers = markers.filter(m => m.id !== id);
      
      await kv.set(MARKERS_KEY, filteredMarkers);
      
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
