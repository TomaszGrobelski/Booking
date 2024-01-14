import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { addFavoriteHotel, removeFavoriteHotel } from '../../../features/user/userSlice';
import { RootState } from '../../../state/store';
import HotelProps from '../../../types/hotelProps';
import StarRating from '../../Hotels/StarRating';

interface HoteImagesProps {
  hotelDetails: HotelProps | null;
}

const HotelDetails: React.FC<HoteImagesProps> = ({ hotelDetails }) => {
  const dispatch = useDispatch();
  const userFavoriteHotels = useSelector((state: RootState) => state.user.favoriteHotels);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (hotelDetails) {
      setIsFavorite(userFavoriteHotels.some((hotel) => hotel.name === hotelDetails.name));
    }
  }, [hotelDetails, userFavoriteHotels]);

  const handleFavoriteHotels = () => {
    if (isFavorite) {
      if (hotelDetails) {
        dispatch(removeFavoriteHotel(hotelDetails.name));
      }
    } else {
      if (hotelDetails) {
        const newFavorite = {
          name: hotelDetails.name,
          imgUrl: hotelDetails.pages?.[0] || 'defaultImageUrl',
        };
        dispatch(addFavoriteHotel(newFavorite));
      }
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <StarRating rating={hotelDetails?.rating || 0} />
      <h2 className='relative font-bold text-[20px] mt-6'>
        {hotelDetails?.name}
        <button className='absolute right-4' onClick={handleFavoriteHotels}>
          {isFavorite ? (
            <Icon icon='tdesign:heart-filled' width={30} color='#116149' />
          ) : (
            <Icon icon='tdesign:heart' width={30} color='#116149' />
          )}
        </button>
      </h2>
      <p>
        {hotelDetails?.address?.city},{hotelDetails?.address?.street}{' '}
      </p>
      <p>Contact: {hotelDetails?.contact}</p>
    </div>
  );
};

export default HotelDetails;
