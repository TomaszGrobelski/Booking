import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setDate, setPersons, setTotalPrice } from '../../../features/booking/bookingSlice';
import { setBookedHotels } from '../../../features/user/userSlice';
import { RootState } from '../../../state/store';

const BookButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookingDetails = useSelector((state: RootState) => state.booking);
  const userDetails = useSelector((state: RootState) => state.user);
  const currentHotel = useSelector((state: RootState) => state.hotelDetails);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const bookHandler = async () => {
    if (!userDetails.isAuthenticated) {
      setErrorMessage('You are not logged in');
      return;
    }
    if (
      userDetails.isAuthenticated &&
      bookingDetails.adults > 0 &&
      (bookingDetails.roomStandard || bookingDetails.roomDelux) > 0 &&
      Array.isArray(bookingDetails.startDate) &&
      bookingDetails.startDate.every((item) => item != null) &&
      Array.isArray(bookingDetails.endDate) &&
      bookingDetails.endDate.every((item) => item != null)
    ) {
      setErrorMessage('');
      dispatch(setPersons({ adults: 2, childrens: 0, roomStandard: 0, roomDelux: 0 }));
      dispatch(setDate({ startDate: null, endDate: null }));
      dispatch(setTotalPrice(0));
      const currentBookedHotel = {
        name: currentHotel.name,
        roomStandard: bookingDetails.roomStandard,
        roomDelux: bookingDetails.roomDelux,
        totalPrice: bookingDetails.totalPrice,
        imgUrl: currentHotel.pages?.[0] ?? 'Not Founded',
      };
      try {
        const response = await axios.post(
          'http://localhost:3000/update-bookings',
          {
            bookedHotel: currentBookedHotel,
          },
          {
            withCredentials: true,
          },
        );

        if (response.status === 200) {
          dispatch(setBookedHotels([...userDetails.bookedHotels, currentBookedHotel]));
          navigate('/profile');
        } else {
          setErrorMessage('Unable to book the hotel. Please try again.');
        }
      } catch (error) {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='flex flex-col'>
      <span className='text-red-500 font-bold text-justify'>{errorMessage}</span>
      <button
        onClick={bookHandler}
        className={`rounded-full border-[2px] mt-2 border-mainColor py-2  font-bold ${
          userDetails.isAuthenticated ? 'bg-mainColor' : 'bg-gray-500 border-gray-500'
        }  text-white w-[200px] self-center hover:bg-white hover:text-mainColor`}
      >
        {userDetails.isAuthenticated ? 'Book Now !' : 'Please login first'}
      </button>
    </div>
  );
};

export default BookButton;
