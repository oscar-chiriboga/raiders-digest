import React, { useState, useEffect } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapDataImport from '../data/map-data-import.json';

// Ensure this component only runs in browser
if (typeof window === 'undefined') {
  throw new Error('InteractiveMap must only be loaded on the client side');
}

// Custom hook to update the image overlay based on window size
function ImageOverlayResponsive() {
  const map = useMap();
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const updateImage = () => {
      if (typeof window === 'undefined') return;
      
      const width = window.innerWidth;
      // Use the correct path to the dam battlegrounds map assets
      const newSrc = width < 768 
        ? require('../assets/maps/dam-battlegrounds/map-2k.webp')
        : require('../assets/maps/dam-battlegrounds/map-4k.webp');
      
      // Extract the actual URL from the require (could be .default or direct string)
      const imageUrl = typeof newSrc === 'string' ? newSrc : (newSrc.default || newSrc);
      setImageSrc(imageUrl);
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  if (!imageSrc) return null;

  return (
    <ImageOverlay
      url={imageSrc}
      bounds={[[0, 0], [7000, 7000]]}
      opacity={1}
    />
  );
}

// Map click handler component
function MapClickHandler({ onMapClick, addMode }) {
  useMapEvents({
    click: (e) => {
      if (addMode) {
        onMapClick(e.latlng);
      }
    },
  });
  return null;
}

// Create custom marker icons based on category/subcategory
const createMarkerIcon = (category, subcategory) => {
  let color = '#3b82f6'; // default blue
  let icon = '📍';
  
  // Location types
  if (subcategory === 'extraction' || subcategory === 'cargo_elevator') {
    color = '#10b981';
    icon = '🚁';
  } else if (subcategory === 'locked_room') {
    color = '#ef4444';
    icon = '🔒';
  } else if (subcategory === 'field_depot') {
    color = '#f59e0b';
    icon = '📦';
  } else if (subcategory === 'player_spawn') {
    color = '#8b5cf6';
    icon = '🎯';
  } else if (subcategory === 'hatch') {
    color = '#06b6d4';
    icon = '🚪';
  } else if (subcategory === 'raider_camp') {
    color = '#dc2626';
    icon = '⛺';
  } else if (category === 'arc' || category === 'bosses') {
    color = '#ef4444';
    icon = '👾';
  } else if (category === 'containers') {
    color = '#22c55e';
    icon = '📦';
  }

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 32px;
        height: 32px;
        background-color: ${color};
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      ">${icon}</div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

// Transform Y coordinate from top-left origin to bottom-left origin
const transformCoordinates = (lat, lng) => {
  const leafletY = 7000 - lat;
  return [leafletY, lng];
};

const InteractiveMap = () => {
  const bounds = [[0, 0], [7000, 7000]];
  const center = [3500, 3500]; // Center of the 7000x7000 grid

  // Get the marker data from the imported JSON
  const [markers, setMarkers] = useState(mapDataImport.allData || []);
  const [addMode, setAddMode] = useState(null);
  const [newMarkers, setNewMarkers] = useState([]);

  // Location types for adding
  const locationTypes = [
    { label: 'Cargo Elevator', icon: '🚁', subcategory: 'cargo_elevator', category: 'locations', color: '#10b981' },
    { label: 'Locked Door', icon: '🔒', subcategory: 'locked_room', category: 'locations', color: '#ef4444' },
    { label: 'Field Depot', icon: '📦', subcategory: 'field_depot', category: 'locations', color: '#f59e0b' },
    { label: 'Location', icon: '📍', subcategory: 'player_spawn', category: 'locations', color: '#8b5cf6' },
    { label: 'Raider Hatch', icon: '🚪', subcategory: 'hatch', category: 'locations', color: '#06b6d4' },
    { label: 'Raider Camp', icon: '⛺', subcategory: 'raider_camp', category: 'locations', color: '#dc2626' },
  ];

  const handleMapClick = (latlng) => {
    if (!addMode) return;

    // Transform coordinates from leaflet to game coordinates
    const gameLat = 7000 - latlng.lat;
    const gameLng = latlng.lng;

    const newMarker = {
      id: `manual-${Date.now()}`,
      lat: gameLat,
      lng: gameLng,
      category: addMode.category,
      subcategory: addMode.subcategory,
      instanceName: `New ${addMode.subcategory.replace(/_/g, ' ')}`,
      isNew: true,
    };

    setNewMarkers([...newMarkers, newMarker]);
    console.log('Added marker:', newMarker);
  };

  const handleExport = () => {
    const exportData = newMarkers.map(m => ({
      lat: m.lat,
      lng: m.lng,
      category: m.category,
      subcategory: m.subcategory,
      instanceName: m.instanceName,
    }));
    console.log('Export data:', JSON.stringify(exportData, null, 2));
    alert(`${newMarkers.length} markers ready to export. Check console for JSON.`);
  };

  const handleClearNew = () => {
    setNewMarkers([]);
    setAddMode(null);
  };

  const allMarkers = [...markers, ...newMarkers];

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Control Panel */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        padding: '20px',
        borderRadius: '12px',
        border: '2px solid #64b5f6',
        minWidth: '280px',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        <h3 style={{ 
          color: '#64b5f6', 
          margin: '0 0 16px 0', 
          fontSize: '14px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
        }}>
          Add Location
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {locationTypes.map((type) => (
            <button
              key={type.subcategory}
              onClick={() => setAddMode(addMode?.subcategory === type.subcategory ? null : type)}
              style={{
                padding: '12px 14px',
                backgroundColor: addMode?.subcategory === type.subcategory ? type.color : 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
                border: `2px solid ${type.color}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '700',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
              onMouseEnter={(e) => {
                if (addMode?.subcategory !== type.subcategory) {
                  e.currentTarget.style.backgroundColor = `${type.color}33`;
                }
              }}
              onMouseLeave={(e) => {
                if (addMode?.subcategory !== type.subcategory) {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                }
              }}
            >
              <span style={{ fontSize: '16px' }}>{type.icon}</span>
              <span>{type.label}</span>
            </button>
          ))}
        </div>

        {addMode && (
          <div style={{
            padding: '12px',
            backgroundColor: 'rgba(100, 181, 246, 0.15)',
            borderRadius: '8px',
            borderLeft: `4px solid ${addMode.color}`,
            color: '#00d9ff',
            fontSize: '12px',
            marginBottom: '16px',
          }}>
            <strong>Click on map</strong> to add {addMode.label}
          </div>
        )}

        {newMarkers.length > 0 && (
          <div style={{ paddingTop: '16px', borderTop: '2px solid rgba(100, 181, 246, 0.3)' }}>
            <div style={{ color: '#4ade80', fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {newMarkers.length} New Marker{newMarkers.length !== 1 ? 's' : ''}
            </div>
            <button
              onClick={handleExport}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#4ade80',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 'bold',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Export to Console
            </button>
            <button
              onClick={handleClearNew}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                color: '#ef4444',
                border: '2px solid #ef4444',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Map Legend */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        padding: '16px',
        borderRadius: '12px',
        border: '2px solid #64b5f6',
        minWidth: '200px',
      }}>
        <h3 style={{ 
          color: '#64b5f6', 
          margin: '0 0 12px 0', 
          fontSize: '14px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
        }}>
          Map Key
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {locationTypes.map((type) => (
            <div key={type.subcategory} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              fontSize: '12px',
              color: '#cbd5e1',
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: type.color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                border: '2px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
              }}>
                {type.icon}
              </div>
              <span style={{ fontWeight: '600' }}>{type.label}</span>
            </div>
          ))}
        </div>
      </div>

      <MapContainer
        center={center}
        zoom={1}
        minZoom={0}
        maxZoom={4}
        crs={L.CRS.Simple}
        style={{ width: '100%', height: '100%', background: '#1a1a1a', cursor: addMode ? 'crosshair' : 'grab' }}
        bounds={bounds}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        attributionControl={false}
      >
        <ImageOverlayResponsive />
        <MapClickHandler onMapClick={handleMapClick} addMode={addMode} />
        
        {allMarkers.map((marker) => {
          const [transformedLat, transformedLng] = transformCoordinates(
            marker.lat,
            marker.lng
          );

          return (
            <Marker
              key={marker.id}
              position={[transformedLat, transformedLng]}
              icon={createMarkerIcon(marker.category, marker.subcategory)}
            >
              <Popup>
                <div style={{ padding: '8px' }}>
                  {marker.isNew && (
                    <div style={{ 
                      backgroundColor: '#4ade80', 
                      color: '#000', 
                      padding: '2px 6px', 
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      marginBottom: '6px',
                      display: 'inline-block',
                    }}>
                      NEW
                    </div>
                  )}
                  <strong style={{ textTransform: 'capitalize', display: 'block' }}>
                    {marker.instanceName || marker.category}
                  </strong>
                  {marker.subcategory && (
                    <div style={{ fontSize: '12px', marginTop: '4px', color: '#666' }}>
                      {marker.subcategory.replace(/_/g, ' ')}
                    </div>
                  )}
                  <div style={{ fontSize: '11px', marginTop: '6px', color: '#999', fontFamily: 'monospace' }}>
                    ({Math.round(marker.lat)}, {Math.round(marker.lng)})
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <style>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
          background-color: rgba(0, 0, 0, 0.95);
          border: 2px solid #64b5f6;
        }
        
        .leaflet-popup-content {
          margin: 0;
          color: #fff;
        }

        .leaflet-popup-tip {
          background-color: rgba(0, 0, 0, 0.95);
          border: 2px solid #64b5f6;
          border-top: none;
          border-right: none;
        }

        /* Hide Leaflet attribution control */
        .leaflet-control-attribution {
          display: none !important;
        }

        /* Custom scrollbar for control panel */
        div::-webkit-scrollbar {
          width: 8px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(100, 181, 246, 0.1);
          border-radius: 4px;
        }

        div::-webkit-scrollbar-thumb {
          background: #64b5f6;
          border-radius: 4px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: #00d9ff;
        }
      `}</style>
    </div>
  );
};

export default InteractiveMap;
