// Vercel Serverless Function to proxy MetaForge API
// This bypasses CORS issues by making the request server-side

export default async function handler(req, res) {
  // Set CORS headers to allow requests from your frontend
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Build query parameters from request
    const { map, name } = req.query;
    const params = new URLSearchParams();
    
    if (map) params.append('map', map);
    if (name) params.append('name', name);
    
    const queryString = params.toString();
    const apiUrl = `https://metaforge.app/api/arc-raiders/event-timers${queryString ? '?' + queryString : ''}`;
    
    // Fetch data from MetaForge API
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'RaidersDigest/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`MetaForge API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Return the data with appropriate caching headers
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching from MetaForge API:', error);
    res.status(500).json({ 
      error: 'Failed to fetch event timers',
      message: error.message 
    });
  }
}
