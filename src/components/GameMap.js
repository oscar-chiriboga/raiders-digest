import React, { useState, useEffect } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { damBattlegroundsPoints } from '../data/damBattlegroundsData';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom marker icons for different types
const getMarkerIcon = (category, type) => {
  // Color scheme by category
  const categoryColors = {
    // Locations - Green shades
    locations: '#22c55e',
    spawn: '#10b981',
    extraction: '#059669',
    depot: '#34d399',
    
    // Containers - Orange/Yellow shades
    containers: '#f59e0b',
    container: '#f59e0b',
    breach: '#fb923c',
    'utility-crate': '#fbbf24',
    'weapon-case': '#f97316',
    
    // ARCs (enemies) - Red shades
    arc: '#ef4444',
    tick: '#f87171',
    sentinel: '#dc2626',
    pop: '#fca5a5',
    bison: '#991b1b',
    baron: '#7f1d1d',
    rocketeer: '#b91c1c',
    
    // Nature - Green/Earth tones
    nature: '#84cc16',
    
    // Events - Purple
    events: '#a855f7',
    
    // Default
    default: '#3b82f6',
  };

  const color = categoryColors[category] || categoryColors[type] || categoryColors.default;

  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 20px;
      height: 20px;
      border-radius: 50% 50% 50% 0;
      border: 2px solid #ffffff;
      transform: rotate(-45deg);
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 20],
  });
};

// DEV MODE - Set to true to enable click logging for gathering coordinates
const DEV_MODE = true;

// Map click logger for development - logs coordinates to console
function MapLogger() {
  useMapEvents({
    click(e) {
      const lat = Math.round(e.latlng.lat);
      const lng = Math.round(e.latlng.lng);
      console.log(`{ id: "${Date.now()}", name: "RENAME_ME", pos: [${lat}, ${lng}], type: "poi" },`);
      console.log(`Clicked coordinates: [${lat}, ${lng}]`);
    },
  });
  return null;
}

// Component to handle responsive image loading
function ResponsiveImageOverlay() {
  const [imageUrl, setImageUrl] = useState(null);
  const map = useMap();

  useEffect(() => {
    // Use require to get the image modules
    const map7kModule = require('../assets/maps/dam-battlegrounds/map-7k.webp');
    const map4kModule = require('../assets/maps/dam-battlegrounds/map-4k.webp');
    const map2kModule = require('../assets/maps/dam-battlegrounds/map-2k.webp');
    
    // Extract the actual URL from the module (could be .default, .uri, or direct string)
    const map7kUrl = typeof map7kModule === 'string' ? map7kModule : (map7kModule.default || map7kModule.uri || map7kModule);
    const map4kUrl = typeof map4kModule === 'string' ? map4kModule : (map4kModule.default || map4kModule.uri || map4kModule);
    const map2kUrl = typeof map2kModule === 'string' ? map2kModule : (map2kModule.default || map2kModule.uri || map2kModule);
    
    const updateImage = () => {
      const width = window.innerWidth;
      // Use 7k for ultra-wide/high-res displays, 4k for desktop, 2k for smaller screens
      if (width > 2560) {
        setImageUrl(map7kUrl);
      } else if (width > 1024) {
        setImageUrl(map4kUrl);
      } else {
        setImageUrl(map2kUrl);
      }
    };

    updateImage(); // Initial load

    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  // CRITICAL: Bounds always remain [[0,0], [7000, 7000]] regardless of image resolution
  // This ensures markers stay in correct position even when lower-res image is scaled up
  const bounds = [[0, 0], [7000, 7000]];

  if (!imageUrl) return null; // Wait for image to load

  return <ImageOverlay url={imageUrl} bounds={bounds} />;
}

export default function GameMap({ markers = damBattlegroundsPoints }) {
  // Map bounds in game coordinates (7000 x 7000)
  // Metaforge uses same coordinate system - markers range roughly from [1000, 2500] to [4300, 5500]
  const mapBounds = [[0, 0], [7000, 7000]];

  return (
    <div style={{ 
      width: '100%', 
      height: '80vh', 
      backgroundColor: '#1a1a1a',
      position: 'relative',
    }}>
      <MapContainer
        center={[2650, 4000]} // Center on the marker cluster area
        zoom={-2}
        minZoom={-4}
        maxZoom={2}
        crs={L.CRS.Simple}
        style={{ 
          width: '100%', 
          height: '100%',
          backgroundColor: '#0a0a0a',
        }}
        maxBounds={[[-1000, -1000], [8000, 8000]]}
        maxBoundsViscosity={0.5}
      >
        {/* Responsive image overlay - always uses 7000x7000 bounds */}
        <ResponsiveImageOverlay />

        {/* DEV MODE: Click logger for gathering POI coordinates */}
        {DEV_MODE && <MapLogger />}

        {/* Render markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[7000 - marker.pos[0], marker.pos[1]]} // Invert Y-axis (top-left vs bottom-left origin)
            icon={getMarkerIcon(marker.category, marker.type)}
          >
            <Popup>
              <div style={{ 
                fontFamily: 'monospace', 
                color: '#ffffff',
                backgroundColor: '#1a1a1a',
                padding: '8px',
              }}>
                <strong>{marker.name}</strong>
                <br />
                <small style={{ color: '#a8a8a8' }}>
                  Category: {marker.category}
                  <br />
                  Type: {marker.type}
                  <br />
                  Coords: [{Math.round(marker.pos[0])}, {Math.round(marker.pos[1])}]
                </small>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ff8c00',
        color: '#ffffff',
        fontFamily: 'monospace',
        fontSize: '11px',
        zIndex: 1000,
        maxHeight: '400px',
        overflowY: 'auto',
      }}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold', color: '#ff8c00', fontSize: '13px' }}>
          LEGEND ({markers.length} markers)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#22c55e', marginRight: '8px', borderRadius: '50%' }}></div>
          <span>Locations</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#f59e0b', marginRight: '8px', borderRadius: '50%' }}></div>
          <span>Containers</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#ef4444', marginRight: '8px', borderRadius: '50%' }}></div>
          <span>ARCs (Enemies)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#84cc16', marginRight: '8px', borderRadius: '50%' }}></div>
          <span>Nature</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#a855f7', marginRight: '8px', borderRadius: '50%' }}></div>
          <span>Events</span>
        </div>
      </div>
    </div>
  );
}
