/**
 * Get Map Dimensions from Metaforge
 * 
 * Run this in the browser console on https://metaforge.app/arc-raiders/map/dam
 * This will extract the Leaflet map bounds and coordinate system
 */

(function() {
  console.log('📐 Map Dimensions Finder');
  console.log('========================\n');
  
  // Try to find the Leaflet map instance
  let mapInstance = null;
  
  // Method 1: Check window._leaflet_map (common pattern)
  if (window._leaflet_map) {
    mapInstance = window._leaflet_map;
    console.log('✅ Found map via window._leaflet_map');
  }
  
  // Method 2: Check for map in common variable names
  if (!mapInstance && window.map) {
    mapInstance = window.map;
    console.log('✅ Found map via window.map');
  }
  
  // Method 3: Search through all elements with leaflet class
  if (!mapInstance) {
    const mapElements = document.querySelectorAll('[id*="leaflet"], [class*="leaflet"]');
    mapElements.forEach(el => {
      for (let key in el) {
        if (key.startsWith('_leaflet')) {
          const potentialMap = el[key];
          if (potentialMap && potentialMap.getBounds) {
            mapInstance = potentialMap;
            console.log('✅ Found map via DOM element search');
            return;
          }
        }
      }
    });
  }
  
  // Method 4: Check global L namespace
  if (!mapInstance && window.L) {
    // Try to find map through L._mapInstances
    if (window.L._mapInstances) {
      const instances = Object.values(window.L._mapInstances);
      if (instances.length > 0) {
        mapInstance = instances[0];
        console.log('✅ Found map via L._mapInstances');
      }
    }
  }
  
  if (!mapInstance) {
    console.error('❌ Could not find Leaflet map instance');
    console.log('\n💡 Try these alternatives:');
    console.log('1. Open DevTools Elements tab');
    console.log('2. Find the map container div');
    console.log('3. Right-click > Store as global variable (e.g., temp1)');
    console.log('4. Run: temp1._leaflet_map\n');
    return null;
  }
  
  console.log('\n📊 Map Information:');
  console.log('==================\n');
  
  // Get CRS info
  const crs = mapInstance.options.crs;
  console.log('📐 Coordinate System:', crs.code || 'Custom CRS.Simple');
  
  // Get bounds
  const bounds = mapInstance.getBounds();
  console.log('\n🗺️ Current View Bounds:');
  console.log(`   Southwest: [${bounds.getSouthWest().lat}, ${bounds.getSouthWest().lng}]`);
  console.log(`   Northeast: [${bounds.getNorthEast().lat}, ${bounds.getNorthEast().lng}]`);
  
  // Get max bounds if set
  if (mapInstance.options.maxBounds) {
    const maxBounds = mapInstance.options.maxBounds;
    console.log('\n📏 Max Bounds (Map Limits):');
    console.log(`   Southwest: [${maxBounds.getSouthWest().lat}, ${maxBounds.getSouthWest().lng}]`);
    console.log(`   Northeast: [${maxBounds.getNorthEast().lat}, ${maxBounds.getNorthEast().lng}]`);
    console.log(`   Width: ${maxBounds.getNorthEast().lng - maxBounds.getSouthWest().lng}`);
    console.log(`   Height: ${maxBounds.getNorthEast().lat - maxBounds.getSouthWest().lat}`);
  }
  
  // Get zoom levels
  console.log('\n🔍 Zoom Configuration:');
  console.log(`   Current Zoom: ${mapInstance.getZoom()}`);
  console.log(`   Min Zoom: ${mapInstance.getMinZoom()}`);
  console.log(`   Max Zoom: ${mapInstance.getMaxZoom()}`);
  
  // Get center
  const center = mapInstance.getCenter();
  console.log('\n🎯 Map Center:');
  console.log(`   [${center.lat}, ${center.lng}]`);
  
  // Check for image overlays
  console.log('\n🖼️ Image Overlays:');
  let imageOverlayFound = false;
  mapInstance.eachLayer((layer) => {
    if (layer instanceof L.ImageOverlay) {
      imageOverlayFound = true;
      const overlayBounds = layer.getBounds();
      console.log(`   Image Bounds:`);
      console.log(`   Southwest: [${overlayBounds.getSouthWest().lat}, ${overlayBounds.getSouthWest().lng}]`);
      console.log(`   Northeast: [${overlayBounds.getNorthEast().lat}, ${overlayBounds.getNorthEast().lng}]`);
      console.log(`   Width: ${overlayBounds.getNorthEast().lng - overlayBounds.getSouthWest().lng}`);
      console.log(`   Height: ${overlayBounds.getNorthEast().lat - overlayBounds.getSouthWest().lat}`);
      console.log(`   Image URL: ${layer._url}`);
    }
  });
  
  if (!imageOverlayFound) {
    console.log('   No image overlay found');
  }
  
  // Count markers
  let markerCount = 0;
  mapInstance.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      markerCount++;
    }
  });
  console.log(`\n📍 Markers on Map: ${markerCount}`);
  
  // Sample marker coordinates
  if (markerCount > 0) {
    console.log('\n📌 Sample Marker Coordinates:');
    let sampleCount = 0;
    mapInstance.eachLayer((layer) => {
      if (layer instanceof L.Marker && sampleCount < 5) {
        const pos = layer.getLatLng();
        console.log(`   Marker ${sampleCount + 1}: [${pos.lat}, ${pos.lng}]`);
        sampleCount++;
      }
    });
  }
  
  // Summary
  console.log('\n\n🎯 SUMMARY FOR RAIDERS DIGEST:');
  console.log('================================\n');
  
  if (mapInstance.options.maxBounds) {
    const mb = mapInstance.options.maxBounds;
    const width = mb.getNorthEast().lng - mb.getSouthWest().lng;
    const height = mb.getNorthEast().lat - mb.getSouthWest().lat;
    console.log(`Map Bounds: [[${mb.getSouthWest().lat}, ${mb.getSouthWest().lng}], [${mb.getNorthEast().lat}, ${mb.getNorthEast().lng}]]`);
    console.log(`Dimensions: ${width} x ${height}`);
  } else if (imageOverlayFound) {
    console.log('Use the Image Overlay bounds listed above');
  } else {
    console.log('⚠️ Could not determine exact map bounds');
    console.log('Current view bounds:', bounds);
  }
  
  // Return data object
  return {
    crs: crs.code || 'CRS.Simple',
    bounds: {
      sw: [bounds.getSouthWest().lat, bounds.getSouthWest().lng],
      ne: [bounds.getNorthEast().lat, bounds.getNorthEast().lng]
    },
    maxBounds: mapInstance.options.maxBounds ? {
      sw: [mapInstance.options.maxBounds.getSouthWest().lat, mapInstance.options.maxBounds.getSouthWest().lng],
      ne: [mapInstance.options.maxBounds.getNorthEast().lat, mapInstance.options.maxBounds.getNorthEast().lng]
    } : null,
    center: [center.lat, center.lng],
    zoom: {
      current: mapInstance.getZoom(),
      min: mapInstance.getMinZoom(),
      max: mapInstance.getMaxZoom()
    },
    markerCount
  };
})();
