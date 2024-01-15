import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFavoriteHotel } from '../../features/user/userSlice';
import { RootState } from '../../state/store';

const UserFavoriteHotels = () => {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector((state: RootState) => state.user.favoriteHotels);

  const changeFavoriteHotel = (hotelName: string) => {
    dispatch(removeFavoriteHotel(hotelName));
  };
  return (
    <div className='p-4'>
      <h2 className='my-4'>
        <span className='text-[20px] italic border-mainColor border-b-2'>Favorite hotels:</span>
      </h2>
      <div className=' flex flex-wrap gap-4'>
        {favoriteHotels.length > 0 ? (
          favoriteHotels.map((hotel, index) => {
            return (
              <div className='relative'>
                <Link to={`/hotel/${encodeURIComponent(hotel.name)}`} key={index}>
                  <div className='h-[250px] rounded-b-2xl shadow-xl border-[2px] border-gray-300 '>
                    <img
                      src={hotel.imgUrl}
                      alt={hotel.name}
                      loading='lazy'
                      className='w-[250px] h-[200px]'
                    />

                    <p className='p-1 font-bold px-2 italic mt-1'>{hotel.name}</p>
                  </div>
                </Link>
                <button
                  className='absolute z-40 right-4 bottom-3'
                  onClick={() => changeFavoriteHotel(hotel.name)}
                >
                  <Icon icon='tdesign:heart-filled' width={30} color='#116149' />
                </button>
              </div>
            );
          })
        ) : (
          <p className='text-[20px] font-ProximaVara flex items-center gap-2'>
            There is no favorite hotel yet <Icon icon='lets-icons:sad' color='green' width={30} />
          </p>
        )}
      </div>
    </div>
  );
};

export default UserFavoriteHotels;
