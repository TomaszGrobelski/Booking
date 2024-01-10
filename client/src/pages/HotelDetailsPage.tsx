import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StarRating from '../components/Hotels/StarRating';
import Menu from '../components/Menu/Menu';
import HotelProps from '../types/hotelProps';

const HotelDetailsPage = () => {
  const params = useParams();
  const currentHotelName = params.hotelName;
  const [hotelDetails, setHotelDetails] = useState<HotelProps | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3000/Hotel')
      .then((response) => response.json())
      .then((data) => {
        const matchingHotel = data.find((hotel: HotelProps) => hotel.name === currentHotelName);
        if (matchingHotel) {
          setHotelDetails(matchingHotel);
        } else return;
      })
      .catch((error) => console.error('Error:', error));
  }, [currentHotelName]);

  return (
    <div>
      <Menu />
      <div className="flex p-4 bg-gray-100">
        <div className="grid grid-cols-2 w-1/2 gap-2 rounded-lg shadow-xl">
          {hotelDetails ? (
            hotelDetails.pages?.map((foto) => {
              return <img src={foto} alt="" />;
            })
          ) : (
            <div>Is loading ...</div>
          )}
        </div>
        <div className="relative p-4 shadow-2xl w-1/2 rounded-lg mx-2 ">
          <h2 className="font-bold text-[20px]">{hotelDetails?.name}</h2>
          <p>
            {hotelDetails?.address?.city},{hotelDetails?.address?.street}{' '}
          </p>
          <StarRating rating={hotelDetails?.rating || 0} />
          <p>Contact: {hotelDetails?.contact}</p>

          <button className="absolute top-4 right-4" onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
              <Icon icon="tdesign:heart-filled" width={30} color="#116149" />
            ) : (
              <Icon icon="tdesign:heart" width={30} color="#116149" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
