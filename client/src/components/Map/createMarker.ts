import * as maptilersdk from '@maptiler/sdk';

const createMarker = (
  lng: number,
  lat: number,
  price: number,
  map: React.RefObject<maptilersdk.Map | null>,
) => {
  const markerElement = document.createElement('div');
  markerElement.className = 'custom-marker';
  markerElement.innerHTML = `<div class=' text-[18px] bg-mainColor opacity-40 rounded-3xl p-2 text-white hover:opacity-100'>${price}</div>`;
  if (map.current) {
    new maptilersdk.Marker({ element: markerElement }).setLngLat([lng, lat]).addTo(map.current);
  }
};

export default createMarker;
