import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import fetchBookedHotels from '../../API/fetchBookedHotels';
import { RootState } from '../../state/store';

const BookedHotels = () => {
  const dispatch = useDispatch();
  const bookedHotels = useSelector((state: RootState) => state.user.bookedHotels);

  useEffect(() => {
    fetchBookedHotels(dispatch);
  }, [dispatch]);

  return (
    <div className='p-4'>
      <h2 className='my-4'>
        <span className='text-[20px] italic border-mainColor border-b-2'>Booked hotels:</span>
      </h2>
      <div className=' grid grid-cols-4 gap-6 '>
        {bookedHotels.map((hotel,index) => {
          return (
            <div key={index} className='border-[2px]  shadow-xl border-mainColor rounded-lg'>
              <img
                src={hotel.imgUrl}
                loading='lazy'
                alt={hotel.name}
                className='w-[310px] h-[200px]'
              />
              <div className='p-2'>
                <p className='font-bold'>{hotel.name}</p>
                <p>Date: </p>
                {hotel.roomStandard ? <p>Rooms Standard: {hotel.roomStandard}</p> : null}
                {hotel.roomDelux ? <p>Rooms Delux: {hotel.roomDelux}</p> : null}
                <span>Total Price: {hotel.totalPrice}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookedHotels;
