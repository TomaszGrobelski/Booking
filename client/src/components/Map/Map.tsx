import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { useEffect, useRef, useState } from 'react';

const Map = () => {
  const mapKey = import.meta.env.VITE_MAP_KEY;
  const mapContainer = useRef(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const warsaw = { lng: 19.5, lat: 51.7 };
  const [zoom] = useState(6.3);
  maptilersdk.config.apiKey = mapKey;

  useEffect(() => {
    const bounds: [number, number, number, number] = [14.07, 49.0, 24.15, 54.9];
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current || '',
      style: maptilersdk.MapStyle.STREETS.PASTEL,
      center: [warsaw.lng, warsaw.lat],
      zoom: zoom,
      maxBounds: bounds,
    });

    const createMarker = (lng, lat, text) => {
      const markerElement = document.createElement('div');
      markerElement.className = 'custom-marker';
      markerElement.innerHTML = `<div class='marker-number text-[18px] bg-mainColor rounded-3xl p-2 text-white hover:bg-orange-500'>${text}</div>`;

      new maptilersdk.Marker({ element: markerElement }).setLngLat([lng, lat]).addTo(map.current);
    };

    // Tworzenie różnych markerów
    createMarker(20.23, 51.2, '453zł');
    createMarker(20.9, 50.3, '500zł');
    createMarker(20.3, 51.1, '350zł');
  }, [warsaw.lng, warsaw.lat, zoom]);

  return (
    <div className="relative h-[80vh]">
      <div ref={mapContainer} className="h-full" />
    </div>
  );
};

export default Map;
