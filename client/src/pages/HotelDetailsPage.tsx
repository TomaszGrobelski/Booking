import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DatePicker from '../components/HotelDetail/DatePicker/DatePicker';
import HoteIRoomsPhotos from '../components/HotelDetail/HoteIRoomsPhotos';
import HotelDescriptions from '../components/HotelDetail/HotelDescriptions';
import Menu from '../components/Menu/Menu';
import HotelProps from '../types/hotelProps';
import PersonsPicker from '../components/HotelDetail/PersonsPicker.tsx/PersonsPicker';

const HotelDetailsPage = () => {
  const params = useParams();
  const currentHotelName = params.hotelName;
  const [hotelDetails, setHotelDetails] = useState<HotelProps | null>(null);

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
        {hotelDetails ? <HoteIRoomsPhotos hotelDetails={hotelDetails} /> : <div>Is Loading...</div>}
        <div className="relative p-4 shadow-2xl w-1/3 rounded-lg mx-2 ">
          <HotelDescriptions hotelDetails={hotelDetails} />
          <div>
            <p>Standard room: {hotelDetails?.roomType?.standard} zł</p>
            <p>Delux room: {hotelDetails?.roomType?.delux} zł</p>
          </div>
          <DatePicker />
          <PersonsPicker />
        </div>
      </div>
      <div>
        <h3>Hotel amenities</h3>
      </div>
    </div>
  );
};

export default HotelDetailsPage;
