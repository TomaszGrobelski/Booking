import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
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
import IsLoading from '../components/Hotels/IsLoading';
import Menu from '../components/Menu/Menu';
import { setHotelData } from '../features/hotelDescription/hotelDataSlice';
import HotelProps from '../types/hotelProps';
import { PickerFlexBox } from '../styles/pages/HotelDetailsPage.styles';
import { HotelDetailsFlexBox } from '../styles/pages/HotelDetailsPage.styles';
import { HotelDetailPhotoFlexBox } from '../styles/pages/HotelDetailsPage.styles';

const HotelDetailsPage = () => {
  const footerRef = useRef(null);
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
        <Menu footerRef={footerRef} />
        <HotelDetailPhotoFlexBox>
          {hotelDetails ? <HoteIRoomsPhotos hotelDetails={hotelDetails} /> : <IsLoading />}
          <HotelDetailsFlexBox>
            <div>
              <HotelDetails hotelDetails={hotelDetails} />
              <p>Standard room: {hotelDetails?.roomType?.standard} zł</p>
              <p>Delux room: {hotelDetails?.roomType?.delux} zł</p>
            </div>
            <PickerFlexBox>
              <DatePicker />
              <PersonsPicker />
              <div className='px-16'>
                <TotalPrice />
                <BookButton />
              </div>
            </PickerFlexBox>
          </HotelDetailsFlexBox>
        </HotelDetailPhotoFlexBox>
        <HotelDescription />
        <Amenities />
        <HotelOpinions />
        <Footer footerRef={footerRef} />
      </div>
    </MainContainer>
  );
};

export default HotelDetailsPage;
