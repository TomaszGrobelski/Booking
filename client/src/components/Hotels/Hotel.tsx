import { useEffect, useState } from 'react';
import HotelType from '../../types/hotel';


function Hotel() {
  const [hotels, setHotels] = useState<HotelType[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/Hotel')
      .then(response => response.json())
      .then(data => setHotels(data))
      .catch(error => console.error('Error:', error));
  }, []);


  return (
    <div>
      <h1>Hotels:</h1>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.age}>{hotel.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hotel;