// Vercel Serverless Function to proxy Metaforge enemies API
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const response = await fetch('https://metaforge.app/api/arc-raiders/enemies');
    
    if (!response.ok) {
      throw new Error(`Metaforge API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Cache for 5 minutes
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.status(200).json(data);
  } catch (error) {
    console.error('[Enemies API Error]:', error);
    res.status(500).json({ 
      error: 'Failed to fetch enemies data',
      message: error.message 
    });
  }
}
