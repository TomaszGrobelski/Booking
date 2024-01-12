import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Amenities from '../components/HotelDetail/Amenities';
import DatePicker from '../components/HotelDetail/DatePicker/DatePicker';
import HoteIRoomsPhotos from '../components/HotelDetail/HoteIRoomsPhotos';
import HotelDescription from '../components/HotelDetail/HotelDescription';
import HotelDetails from '../components/HotelDetail/HotelDetails';
import HotelOpinions from '../components/HotelDetail/HotelOpinions';
import PersonsPicker from '../components/HotelDetail/PersonsPicker.tsx/PersonsPicker';
import Menu from '../components/Menu/Menu';
import { setHotelData } from '../features/hotelDescription/hotelDataSlice';
import HotelProps from '../types/hotelProps';

const HotelDetailsPage = () => {
  const dispatch = useDispatch();
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
          dispatch(setHotelData(matchingHotel));
        } else return;
      })
      .catch((error) => console.error('Error:', error));
  }, [currentHotelName, dispatch]);

  return (
    <div className=' bg-mainColor'>
      <div className="realative z-20 max-w-[1300px] bg-white mx-auto">
        <Menu />
        <div className="flex flex-col gap-4 lg:flex-row p-4 bg-gray-100">
          {hotelDetails ? (
            <HoteIRoomsPhotos hotelDetails={hotelDetails} />
          ) : (
            <div>Is Loading...</div>
          )}
          <div className="relative p-4 shadow-xl lg:w-1/3 w-full rounded-lg mx-2 ">
            <HotelDetails hotelDetails={hotelDetails} />
            <div>
              <p>Standard room: {hotelDetails?.roomType?.standard} zł</p>
              <p>Delux room: {hotelDetails?.roomType?.delux} zł</p>
            </div>
            <DatePicker />
            <PersonsPicker />
          </div>
        </div>
        <HotelDescription />
        <Amenities />
        <HotelOpinions />
      </div>
    </div>
  );
};

export default HotelDetailsPage;
