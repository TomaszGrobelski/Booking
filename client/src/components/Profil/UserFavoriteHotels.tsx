import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';

const UserFavoriteHotels = () => {
  const favoriteHotels = useSelector((state: RootState) => state.user.favoriteHotels);
  return (
    <div className='p-4'>
      <h2 className='my-4'>
        <span className='text-[20px] italic border-mainColor border-b-2'>Favorite hotels:</span>
      </h2>
      <div className=' flex flex-wrap gap-4'>
        {favoriteHotels.length > 0 ? (
          favoriteHotels.map((hotel, index) => {
            return (
              <div key={index} className='h-[250px] rounded-2xl shadow-xl '>
                <img
                  src={hotel.imgUrl}
                  alt={hotel.name}
                  loading='lazy'
                  className='w-[250px] h-[200px]'
                />
                <p className='p-1 font-bold px-2 italic'>{hotel.name}</p>
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
