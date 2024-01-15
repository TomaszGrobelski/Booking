import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchBookedHotels from '../../API/fetchBookedHotels';
import { RootState } from '../../state/store';

const BookedHotels = () => {
  const dispatch = useDispatch();
  const bookedHotels = useSelector((state: RootState) => state.user.bookedHotels);
  console.log(bookedHotels);
  useEffect(() => {
    fetchBookedHotels(dispatch);
  }, [dispatch]);

  return (
    <div className='p-4'>
      <h2 className='my-4'>
        <span className='text-[20px] italic border-mainColor border-b-2'>Booked hotels:</span>
      </h2>
      <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:place-items-center '>
        {bookedHotels.map((hotel, index) => {
          return (
            <Link to={`/hotel/${encodeURIComponent(hotel.name)}`} key={index}>
              <div
                className='border-[2px]  shadow-xl border-gray-300 rounded-b-lg max-w-[300px] my-4'
              >
                <img
                  src={hotel.imgUrl}
                  loading='lazy'
                  alt={hotel.name}
                  className='w-[310px] h-[200px]'
                />
                <div className='p-2'>
                  <p className='font-bold'>{hotel.name}</p>
                  <p>
                    Date:{' '}
                    <span className='border-b-[2px] text-[14px] md:text-[16px] border-mainColor'>
                      {hotel.date}
                    </span>
                  </p>
                  {hotel.roomStandard ? <p>Rooms Standard: {hotel.roomStandard}</p> : null}
                  {hotel.roomDelux ? <p>Rooms Delux: {hotel.roomDelux}</p> : null}
                  <span>Total Price: {hotel.totalPrice}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BookedHotels;
