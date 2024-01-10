import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';
import HotelProps from '../../types/hotelProps';
import StarRating from './StarRating';

function Hotel() {
  const [hotels, setHotels] = useState<HotelProps[]>([]);
  const city = useSelector((state: RootState) => state.hotels.city);

  useEffect(() => {
    fetch('http://localhost:3000/Hotel')
      .then((response) => response.json())
      .then((data) => {
        console.log(city);
        if (city) {
          const cityPrefix = city.toLowerCase();
          const filteredHotels = data.filter(
            (hotel: HotelProps) => hotel.address?.city.toLowerCase().startsWith(cityPrefix),
          );
          setHotels(filteredHotels);
        } else {
          setHotels(data);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, [city]);

  return (
    <div className="mt-20 max-w-[1300px] mx-auto">
      <h1 className="text-center text-[30px] font-bold my-20 flex justify-center gap-2 items-center italic">
        <Icon icon="game-icons:liberty-wing" color="#116149" hFlip={true} width="80" height="80" />
        <p className="relative top-4">Our Hotels</p>
        <Icon icon="game-icons:liberty-wing" color="#116149" width="80" height="80" />
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-20 mx-6 rounded-lg  ">
          {hotels.map((hotel) => (
            <div className="flex flex-col rounded-xl shadow-2xl cursor-pointer " key={hotel._id}>
              <img
                loading="lazy"
                className=" rounded-tr-lg rounded-tl-lg shadow-lg h-[300px]"
                src={hotel.pages?.[0]}
                alt={hotel.name}
              />
              <div className='px-4 pt-1 pb-4'>
                <p className=" mt-1 text-[22px] font-ProximaVara"> {hotel.name}</p>
                <div className='flex items-center text-[18px]'><Icon icon="game-icons:position-marker" color="#116149" />{hotel.address?.city}</div>
                <div className="flex">
                  Rating: <StarRating rating={hotel.rating || 0} />
                </div>
                <p>Price from {hotel.roomType?.standard} zł</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotel;
