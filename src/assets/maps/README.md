# Maps Assets Organization

This directory contains map images for all Arc Raiders maps. Each map has its own folder with high and low resolution versions.

## Directory Structure

```
maps/
├── dam-battlegrounds/
│   ├── map-2k.webp (mobile/low-res version)
│   └── map-4k.webp (desktop/high-res version)
├── buried-city/
│   ├── map-2k.webp
│   └── map-4k.webp
├── spaceport/
│   ├── map-2k.webp
│   └── map-4k.webp
├── the-blue-gate/
│   ├── map-2k.webp
│   └── map-4k.webp
└── stella-montis/
    ├── map-2k.webp
    └── map-4k.webp
```

## Map List

1. **Dam Battlegrounds** ✅ (Assets added)
2. **Buried City** (Awaiting assets)
3. **Spaceport** (Awaiting assets)
4. **The Blue Gate** (Awaiting assets)
5. **Stella Montis** (Awaiting assets)

## Image Requirements

- **Format**: WebP (for better compression and performance)
- **Low-res (2k)**: ~2048px width - for mobile devices
- **High-res (4k)**: ~4096px width - for desktop displays
- **Coordinate System**: 7000x7000 pixels
- **Origin**: Top-left (will be transformed to bottom-left for Leaflet)

## How to Add New Maps

1. Export your map images in both 2k and 4k resolutions
2. Convert to WebP format
3. Place them in the appropriate folder
4. Name them `map-2k.webp` and `map-4k.webp`
5. Update `GameMap.js` to support the new map selection
