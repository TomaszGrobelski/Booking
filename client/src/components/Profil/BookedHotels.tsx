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
    <div className="p-4">
      <h2 className="my-4">
        <span className="text-[20px] italic border-mainColor border-b-2">Booked hotels:</span>
      </h2>
      <div className=" shadow-xl flex gap-4 ">
        {bookedHotels.map((hotel) => {
          return (
            <div key={hotel.name} className="border-[2px] border-mainColor rounded-lg">
              <img src={hotel.imgUrl} alt={hotel.name} className="w-[300px] h-[200px]" />
              <div className='p-2'>
                <p className="font-bold">{hotel.name}</p>
                {hotel.roomStandard && <p>Rooms Standard: {hotel.roomStandard}</p>}
                {hotel.roomDelux && <p>Rooms Delux: {hotel.roomDelux}</p>}
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