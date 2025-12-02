/**
 * Extract Map Config from Metaforge DOM
 * 
 * Run this in the browser console on https://metaforge.app/arc-raiders/map/dam
 */

(function() {
  console.log('🔍 Extracting Map Configuration from DOM\n');
  
  // Find the map container
  const mapContainer = document.querySelector('.leaflet-container');
  
  if (!mapContainer) {
    console.error('❌ Could not find .leaflet-container');
    return;
  }
  
  // Get the Leaflet map instance from the DOM element
  let map = null;
  for (let key in mapContainer) {
    if (key.startsWith('_leaflet_') && mapContainer[key] && typeof mapContainer[key].getBounds === 'function') {
      map = mapContainer[key];
      break;
    }
  }
  
  if (!map) {
    console.error('❌ Could not find map instance in DOM element');
    console.log('Trying window.L...');
    
    // Try alternate method
    if (window.L && window.L.Map) {
      const allMaps = [];
      // Search through all possible properties
      for (let key in window) {
        try {
          if (window[key] && window[key] instanceof L.Map) {
            allMaps.push(window[key]);
          }
        } catch (e) {}
      }
      
      if (allMaps.length > 0) {
        map = allMaps[0];
        console.log('✅ Found map via window search');
      }
    }
  }
  
  if (!map) {
    console.error('❌ Could not find map instance');
    console.log('\n💡 Alternative: Check React DevTools or run:');
    console.log('Object.keys(document.querySelector(".leaflet-container")).filter(k => k.startsWith("_leaflet"))');
    return;
  }
  
  console.log('✅ Found Leaflet map instance!\n');
  
  // Get all the info
  const bounds = map.getBounds();
  const center = map.getCenter();
  const zoom = map.getZoom();
  const minZoom = map.getMinZoom();
  const maxZoom = map.getMaxZoom();
  const maxBounds = map.options.maxBounds;
  const crs = map.options.crs;
  
  console.log('📐 COORDINATE SYSTEM:', crs.code || 'CRS.Simple');
  console.log('\n🗺️ CURRENT VIEW:');
  console.log('   Center:', `[${center.lat}, ${center.lng}]`);
  console.log('   Zoom:', zoom);
  console.log('   Bounds:', `[[${bounds.getSouth()}, ${bounds.getWest()}], [${bounds.getNorth()}, ${bounds.getEast()}]]`);
  
  if (maxBounds) {
    console.log('\n📏 MAP LIMITS (maxBounds):');
    console.log('   Southwest:', `[${maxBounds.getSouth()}, ${maxBounds.getWest()}]`);
    console.log('   Northeast:', `[${maxBounds.getNorth()}, ${maxBounds.getEast()}]`);
    console.log('   Width:', maxBounds.getEast() - maxBounds.getWest());
    console.log('   Height:', maxBounds.getNorth() - maxBounds.getSouth());
  }
  
  console.log('\n🔍 ZOOM LEVELS:');
  console.log('   Min:', minZoom);
  console.log('   Max:', maxZoom);
  
  // Check for image overlays
  let imageOverlay = null;
  map.eachLayer(layer => {
    if (layer instanceof L.ImageOverlay) {
      imageOverlay = layer;
    }
  });
  
  if (imageOverlay) {
    const imgBounds = imageOverlay.getBounds();
    console.log('\n🖼️ IMAGE OVERLAY BOUNDS:');
    console.log('   Southwest:', `[${imgBounds.getSouth()}, ${imgBounds.getWest()}]`);
    console.log('   Northeast:', `[${imgBounds.getNorth()}, ${imgBounds.getEast()}]`);
    console.log('   Width:', imgBounds.getEast() - imgBounds.getWest());
    console.log('   Height:', imgBounds.getNorth() - imgBounds.getSouth());
  }
  
  // Sample some markers
  const markers = [];
  map.eachLayer(layer => {
    if (layer instanceof L.Marker && markers.length < 5) {
      const pos = layer.getLatLng();
      markers.push([pos.lat, pos.lng]);
    }
  });
  
  if (markers.length > 0) {
    console.log('\n📍 SAMPLE MARKERS (first 5):');
    markers.forEach((m, i) => {
      console.log(`   ${i + 1}. [${m[0]}, ${m[1]}]`);
    });
  }
  
  console.log('\n\n🎯 COPY THIS FOR RAIDERS DIGEST:');
  console.log('=====================================\n');
  
  const config = {
    crs: crs.code || 'CRS.Simple',
    center: [center.lat, center.lng],
    zoom: {
      default: zoom,
      min: minZoom,
      max: maxZoom
    },
    bounds: imageOverlay ? 
      [[imageOverlay.getBounds().getSouth(), imageOverlay.getBounds().getWest()], 
       [imageOverlay.getBounds().getNorth(), imageOverlay.getBounds().getEast()]] :
      maxBounds ?
      [[maxBounds.getSouth(), maxBounds.getWest()], 
       [maxBounds.getNorth(), maxBounds.getEast()]] :
      [[bounds.getSouth(), bounds.getWest()], 
       [bounds.getNorth(), bounds.getEast()]],
    sampleMarkers: markers
  };
  
  console.log(JSON.stringify(config, null, 2));
  
  return config;
})();
