import { kv } from '@vercel/kv';

const MARKERS_KEY = 'dam-battlegrounds-markers';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    const { vote } = req.body; // 'up' or 'down'
    
    // Get all markers
    const markers = await kv.get(MARKERS_KEY) || [];
    
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
    await kv.set(MARKERS_KEY, markers);
    
    return res.status(200).json(marker);
  } catch (error) {
    console.error('Vote Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
