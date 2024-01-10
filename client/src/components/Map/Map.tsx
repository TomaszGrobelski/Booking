import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';
import HotelProps from '../../types/hotelProps';
import createMarker from './createMarker';

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
  }, [warsaw.lng, warsaw.lat, zoom]);

  // const markersRef = useRef([]);
  const city = useSelector((state: RootState) => state.hotels.city);
  useEffect(() => {
    fetch('http://localhost:3000/Hotel')
      .then((response) => response.json())
      .then((data) => {
        const filteredHotels = city
          ? data.filter(
              (hotel: HotelProps) =>
                hotel.address?.city.toLowerCase().startsWith(city.toLowerCase()),
            )
          : data;
        if (map.current) {
          filteredHotels.forEach((hotel: HotelProps) => {
            if (
              hotel.lat !== undefined &&
              hotel.lng !== undefined &&
              hotel.roomType?.standard !== undefined
            ) {
              createMarker(hotel.lat, hotel.lng, hotel.roomType.standard, map);
              // markersRef.current.push(marker);
            }
          });
        }
      })
      .catch((error) => console.error('Error:', error));
  }, [city]);

  return (
    <div className="relative h-[60vh]">
      <div ref={mapContainer} className="h-full" />
    </div>
  );
};

export default Map;
