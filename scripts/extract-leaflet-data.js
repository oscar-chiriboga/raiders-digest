/**
 * Leaflet Data Extractor for Metaforge Maps
 * 
 * INSTRUCTIONS:
 * 1. Open https://metaforge.app/arc-raiders/map/dam in your browser
 * 2. Wait for the map to fully load with all markers visible
 * 3. Open DevTools (F12) and go to Console tab
 * 4. Type: allow pasting (and press Enter) - this is a Chrome security feature
 * 5. Copy and paste this ENTIRE script into the console
 * 6. Press Enter to run it
 * 7. A download link will appear - click it to save the data
 * 
 * ALTERNATIVE METHOD (Check Network Tab First):
 * 1. Open DevTools (F12) → Network tab
 * 2. Refresh the page
 * 3. Filter by "Fetch/XHR"
 * 4. Look for API calls containing "map", "marker", "location", or "point"
 * 5. Click on the request and view the Response - it might have all the data!
 */

(function() {
  console.log('🗺️  Metaforge Leaflet Data Extractor');
  console.log('====================================\n');
  
  // Find the Leaflet map instance
  let mapInstance = null;
  
  // Method 1: Check for global L.map instances
  if (window.L) {
    console.log('✅ Leaflet library detected');
    
    // Look for map containers
    const containers = document.querySelectorAll('.leaflet-container');
    console.log(`Found ${containers.length} Leaflet container(s)`);
    
    containers.forEach((container, i) => {
      // Get the map instance from the container
      for (let key in container) {
        if (key.startsWith('_leaflet_id')) {
          const id = container[key];
          // Access the map from Leaflet's internal registry
          if (window.L.Map && window.L.Map.prototype && window.L.Map.prototype._leaflet_id) {
            console.log(`Checking container ${i} with ID: ${id}`);
          }
        }
      }
      
      // Try direct property access
      if (container._leaflet_map) {
        mapInstance = container._leaflet_map;
        console.log(`✅ Found map instance on container ${i}`);
      }
    });
  }
  
  // Method 2: Search for map in React components
  if (!mapInstance) {
    console.log('Searching React component tree...');
    const findReactProps = (element) => {
      for (let key in element) {
        if (key.startsWith('__reactProps') || key.startsWith('__reactFiber') || key.startsWith('__reactInternalInstance')) {
          return element[key];
        }
      }
      return null;
    };
    
    const containers = document.querySelectorAll('.leaflet-container');
    containers.forEach((container, i) => {
      const props = findReactProps(container);
      if (props) {
        console.log(`Found React props on container ${i}:`, props);
      }
    });
  }
  
  // Method 3: Extract data from visible markers
  console.log('\n📍 Extracting marker data...');
  const markers = document.querySelectorAll('.leaflet-marker-icon, [class*="marker"], [class*="Marker"]');
  console.log(`Found ${markers.length} marker elements`);
  
  const extractedMarkers = [];
  markers.forEach((marker, index) => {
    const style = window.getComputedStyle(marker);
    const transform = style.transform || style.webkitTransform;
    
    // Parse transform matrix to get position
    let x = 0, y = 0;
    if (transform && transform !== 'none') {
      const matrix = transform.match(/matrix.*\((.+)\)/);
      if (matrix) {
        const values = matrix[1].split(', ');
        x = parseFloat(values[4]) || 0;
        y = parseFloat(values[5]) || 0;
      }
    }
    
    // Try to get data attributes
    const dataAttrs = {};
    Array.from(marker.attributes).forEach(attr => {
      if (attr.name.startsWith('data-')) {
        dataAttrs[attr.name] = attr.value;
      }
    });
    
    // Get React props if available
    let reactData = null;
    for (let key in marker) {
      if (key.startsWith('__react')) {
        reactData = marker[key];
        break;
      }
    }
    
    // Get classes
    const classes = Array.from(marker.classList);
    
    // Get popup content if it exists
    let popupContent = null;
    const popup = marker.querySelector('.leaflet-popup-content');
    if (popup) {
      popupContent = popup.innerHTML;
    }
    
    extractedMarkers.push({
      index,
      position: { x, y },
      classes,
      dataAttributes: dataAttrs,
      innerHTML: marker.innerHTML,
      title: marker.title,
      alt: marker.alt,
      reactData: reactData ? 'Found (check console)' : null
    });
    
    if (reactData) {
      console.log(`Marker ${index} React data:`, reactData);
    }
  });
  
  // Method 4: Check for data in script tags or global variables
  console.log('\n🔍 Searching for data in page...');
  
  // Check Next.js data
  let nextData = null;
  const nextDataScript = document.querySelector('#__NEXT_DATA__');
  if (nextDataScript) {
    try {
      nextData = JSON.parse(nextDataScript.textContent);
      console.log('✅ Found Next.js data');
    } catch (e) {
      console.error('Error parsing Next.js data:', e);
    }
  }
  
  // Check for common variable names
  const possibleDataVars = [
    'mapData', 'markers', 'points', 'locations', 'mapMarkers', 'mapPoints',
    'markerData', 'locationData', 'pointsData', 'pois'
  ];
  
  const foundVars = {};
  possibleDataVars.forEach(varName => {
    if (window[varName]) {
      foundVars[varName] = window[varName];
      console.log(`✅ Found window.${varName}`);
    }
  });
  
  // Method 5: Intercept API calls
  console.log('\n🌐 Network interception setup (refresh page to capture API calls)');
  console.log('Run this command to see recent network requests:');
  console.log('performance.getEntriesByType("resource").filter(r => r.name.includes("map") || r.name.includes("marker")).map(r => r.name)');
  
  // Compile all extracted data
  const extractedData = {
    timestamp: new Date().toISOString(),
    mapUrl: window.location.href,
    leafletVersion: window.L ? window.L.version : 'Not found',
    markers: extractedMarkers,
    nextData: nextData ? {
      props: nextData.props,
      query: nextData.query
    } : null,
    windowVariables: foundVars,
    mapBounds: null,
    mapCenter: null,
    mapZoom: null
  };
  
  // Try to get map bounds, center, zoom if we found the instance
  if (mapInstance) {
    try {
      extractedData.mapBounds = mapInstance.getBounds();
      extractedData.mapCenter = mapInstance.getCenter();
      extractedData.mapZoom = mapInstance.getZoom();
      console.log('✅ Extracted map bounds, center, and zoom');
    } catch (e) {
      console.log('Could not extract map properties:', e.message);
    }
  }
  
  // Display results
  console.log('\n\n📊 EXTRACTION COMPLETE');
  console.log('======================');
  console.log(`Markers found: ${extractedMarkers.length}`);
  console.log(`Next.js data: ${nextData ? 'Yes' : 'No'}`);
  console.log(`Window variables: ${Object.keys(foundVars).length}`);
  
  // Create downloadable file
  const dataStr = JSON.stringify(extractedData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  // Create download link
  const link = document.createElement('a');
  link.href = url;
  link.download = `metaforge-${window.location.pathname.split('/').pop()}-extracted.json`;
  link.innerHTML = '💾 DOWNLOAD EXTRACTED DATA';
  link.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999999;
    padding: 20px 30px;
    background: #ff8c00;
    color: #000;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    cursor: pointer;
    font-family: 'Courier New', monospace;
  `;
  
  document.body.appendChild(link);
  
  // Also log the data to console for copying
  console.log('\n📋 Full extracted data (you can also copy from here):');
  console.log(extractedData);
  
  // Provide tips
  console.log('\n💡 TIPS:');
  console.log('1. Click the orange download button in the top-right corner');
  console.log('2. If marker data looks incomplete, try:');
  console.log('   - Zooming in/out on the map');
  console.log('   - Clicking on some markers to load their data');
  console.log('   - Checking the Network tab for API calls');
  console.log('3. Look for API endpoints in Network tab that contain map/marker data');
  
  return extractedData;
})();
