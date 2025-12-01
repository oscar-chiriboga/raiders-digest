// Simple local development proxy for MetaForge API
// Run this alongside `npm run web` during development

const http = require('http');
const https = require('https');
const url = require('url');

const PORT = 3001;

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  
  // Handle all /api/* requests
  if (parsedUrl.pathname.startsWith('/api/')) {
    // Extract the path after /api/
    const apiPath = parsedUrl.pathname.substring(5); // Remove '/api/'
    
    // Build query string
    const queryString = parsedUrl.search || '';
    const apiUrl = `https://metaforge.app/api/${apiPath}${queryString}`;
    
    console.log(`[${new Date().toISOString()}] Proxying request to: ${apiUrl}`);
    
    // Proxy the request
    https.get(apiUrl, (apiRes) => {
      let data = '';
      
      apiRes.on('data', (chunk) => {
        data += chunk;
      });
      
      apiRes.on('end', () => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'public, max-age=60');
        res.writeHead(apiRes.statusCode);
        res.end(data);
        console.log(`[${new Date().toISOString()}] Response sent: ${apiRes.statusCode} for ${apiPath}`);
      });
    }).on('error', (error) => {
      console.error(`[${new Date().toISOString()}] Error:`, error.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 
        error: `Failed to fetch ${apiPath}`,
        message: error.message 
      }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`\n🚀 API Proxy server running on http://localhost:${PORT}`);
  console.log(`   Proxying all MetaForge API requests...`);
  console.log(`   Example: http://localhost:${PORT}/api/arc-raiders/traders\n`);
});
