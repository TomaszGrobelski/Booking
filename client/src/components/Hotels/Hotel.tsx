import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

import HotelProps from '../../types/hotelProps';
import StarRating from './StarRating';

function Hotel() {
  const [hotels, setHotels] = useState<HotelProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/Hotel')
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="mt-20 max-w-[1300px] mx-auto">
      <h1 className="text-center text-[30px] font-bold my-20 flex justify-center gap-2 items-center italic">
        <Icon icon="game-icons:liberty-wing" color="#116149" hFlip={true} width="80" height="80" />
        <p className='relative top-4'>Our Hotels</p> 
        <Icon icon="game-icons:liberty-wing" color="#116149" width="80" height="80" />
      </h1>
      <div>
        <div className="grid grid-cols-4 gap-20 mx-6 bg-slate-300">
          {hotels.map((hotel) => (
            <div className="flex flex-col " key={hotel._id}>
              <img className=" rounded-lg shadow-lg h-60" src={hotel.pages?.[0]} alt={hotel.name} />
              <p>{hotel.address?.city}</p>
              <p className="font-bold my-1"> {hotel.name}</p>
              <div className="flex">
                Rating: <StarRating rating={hotel.rating || 0} />
              </div>
              <p>Price from {hotel.roomType?.standard} zł</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotel;
