import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import MainContainer from '../components/Containers/MainContainer';
import Footer from '../components/Footer/Footer';
import Amenities from '../components/HotelDetail/Amenities/Amenities';
import BookButton from '../components/HotelDetail/BookingDetails/BookButton';
import DatePicker from '../components/HotelDetail/BookingDetails/DatePicker/DatePicker';
import HotelDetails from '../components/HotelDetail/BookingDetails/HotelDetails';
import PersonsPicker from '../components/HotelDetail/BookingDetails/PersonsPicker.tsx/PersonsPicker';
import TotalPrice from '../components/HotelDetail/BookingDetails/TotalPrice';
import HoteIRoomsPhotos from '../components/HotelDetail/HoteIRoomsPhotos';
import HotelDescription from '../components/HotelDetail/HotelDescription';
import HotelOpinions from '../components/HotelDetail/Opinions/HotelOpinions';
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
    <MainContainer>
      <div className='realative z-20 bg-white '>
        <Menu />
        <div className='flex flex-col gap-4 lg:flex-row p-4 bg-gray-100'>
          {hotelDetails ? (
            <HoteIRoomsPhotos hotelDetails={hotelDetails} />
          ) : (
            <div>Is Loading...</div>
          )}
          <div className='relative p-4 shadow-xl lg:w-1/3 w-full rounded-lg mx-2 flex flex-col gap-3 md:flex-row lg:flex-col md:gap-20 lg:gap-4 '>
            <div>
              <HotelDetails hotelDetails={hotelDetails} />
              <p>Standard room: {hotelDetails?.roomType?.standard} zł</p>
              <p>Delux room: {hotelDetails?.roomType?.delux} zł</p>
            </div>
            <div className='flex flex-col items-start md:items-center'>
              <DatePicker />
              <PersonsPicker />
              <div className='px-16'>
                <TotalPrice />
                <BookButton />
              </div>
            </div>
          </div>
        </div>
        <HotelDescription />
        <Amenities />
        <HotelOpinions />
        <Footer />
      </div>
    </MainContainer>
  );
};

export default HotelDetailsPage;
