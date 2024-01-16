import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import fetchBookedHotels from '../../API/fetchBookedHotels';
import { RootState } from '../../state/store';
import {
  BookedGrid,
  ContainerBookedHotels,
  HotelBox,
  SpanHotelDate,
  SpanHotelName,
} from '../../styles/Profil/BookedHotels.styles';
import UserHeader from './UserHeader';

const BookedHotels = () => {
  const dispatch = useDispatch();
  const bookedHotels = useSelector((state: RootState) => state.user.bookedHotels);
  useEffect(() => {
    fetchBookedHotels(dispatch);
  }, [dispatch]);

  return (
    <ContainerBookedHotels>
      <UserHeader title='Booked hotels:' />
      <BookedGrid>
        {bookedHotels.map((hotel, index) => {
          return (
            <Link to={`/hotel/${encodeURIComponent(hotel.name)}`} key={index} >
              <HotelBox>
                <img
                  src={hotel.imgUrl}
                  loading='lazy'
                  alt={hotel.name}
                  className='w-[310px] h-[200px]'
                />
                <div className='p-2'>
                  <SpanHotelName>{hotel.name}</SpanHotelName>
                  <p>
                    Date: <SpanHotelDate>{hotel.date}</SpanHotelDate>
                  </p>
                  {hotel.roomStandard ? <p>Rooms Standard: {hotel.roomStandard}</p> : null}
                  {hotel.roomDelux ? <p>Rooms Delux: {hotel.roomDelux}</p> : null}
                  <span>Total Price: {hotel.totalPrice}</span>
                </div>
              </HotelBox>
            </Link>
          );
        })}
      </BookedGrid>
    </ContainerBookedHotels>
  );
};

export default BookedHotels;
