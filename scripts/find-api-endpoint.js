/**
 * Find Metaforge API Endpoints
 * 
 * Run this in the browser console on https://metaforge.app/arc-raiders/map/dam
 * This will intercept fetch/XHR calls and show you the API endpoints
 */

(function() {
  console.log('🔍 API Endpoint Finder');
  console.log('======================\n');
  
  // Check recent network requests
  console.log('📡 Checking recent network requests...\n');
  
  const resources = performance.getEntriesByType("resource");
  const apiCalls = resources.filter(r => {
    const name = r.name.toLowerCase();
    return name.includes('api') || 
           name.includes('map') || 
           name.includes('marker') || 
           name.includes('location') || 
           name.includes('point') ||
           name.includes('dam') ||
           name.includes('.json');
  });
  
  if (apiCalls.length > 0) {
    console.log(`✅ Found ${apiCalls.length} potential API calls:`);
    apiCalls.forEach((call, i) => {
      console.log(`\n${i + 1}. ${call.name}`);
      console.log(`   Type: ${call.initiatorType}`);
      console.log(`   Duration: ${call.duration.toFixed(2)}ms`);
    });
  } else {
    console.log('❌ No obvious API calls found in recent requests');
  }
  
  // Set up interceptors for future calls
  console.log('\n\n🎣 Setting up request interceptors...');
  console.log('(Refresh the page or interact with the map to capture API calls)\n');
  
  const interceptedCalls = [];
  
  // Intercept fetch
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0];
    console.log('🌐 FETCH intercepted:', url);
    interceptedCalls.push({ type: 'fetch', url, timestamp: new Date().toISOString() });
    
    return originalFetch.apply(this, args).then(response => {
      // Clone the response so we can read it
      const clonedResponse = response.clone();
      
      // Try to read as JSON
      clonedResponse.json().then(data => {
        console.log('📦 FETCH Response data:', data);
        console.log('💾 Copy this data:', JSON.stringify(data, null, 2));
      }).catch(() => {
        // Not JSON, ignore
      });
      
      return response;
    });
  };
  
  // Intercept XMLHttpRequest
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;
  
  XMLHttpRequest.prototype.open = function(method, url) {
    this._url = url;
    this._method = method;
    return originalOpen.apply(this, arguments);
  };
  
  XMLHttpRequest.prototype.send = function() {
    console.log('🌐 XHR intercepted:', this._method, this._url);
    interceptedCalls.push({ type: 'xhr', method: this._method, url: this._url, timestamp: new Date().toISOString() });
    
    this.addEventListener('load', function() {
      if (this.responseType === '' || this.responseType === 'text') {
        try {
          const data = JSON.parse(this.responseText);
          console.log('📦 XHR Response data:', data);
          console.log('💾 Copy this data:', JSON.stringify(data, null, 2));
        } catch (e) {
          // Not JSON
        }
      }
    });
    
    return originalSend.apply(this, arguments);
  };
  
  console.log('✅ Interceptors installed!');
  console.log('\n💡 Now:');
  console.log('1. Refresh the page (Ctrl+R or F5)');
  console.log('2. Wait for the map to load');
  console.log('3. Check console for intercepted API calls');
  console.log('4. The data will be logged automatically\n');
  
  // Store intercepted calls on window for later access
  window.interceptedAPICalls = interceptedCalls;
  
  return {
    recentAPICalls: apiCalls.map(c => c.name),
    interceptorsActive: true,
    message: 'Refresh the page to capture API calls'
  };
})();
