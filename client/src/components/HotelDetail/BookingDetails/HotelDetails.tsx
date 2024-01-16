import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addFavoriteHotel, removeFavoriteHotel } from '../../../features/user/userSlice';
import { RootState } from '../../../state/store';
import {
  FavoriteButton,
  HotelDetailsHeader,
} from '../../../styles/HotelDetails/BookingDetails/HotelDetails.styles';
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
      <HotelDetailsHeader>
        {hotelDetails?.name}
        <FavoriteButton onClick={handleFavoriteHotels}>
          {isFavorite ? (
            <Icon icon='tdesign:heart-filled' width={30} color='#116149' />
          ) : (
            <Icon icon='tdesign:heart' width={30} color='#116149' />
          )}
        </FavoriteButton>
      </HotelDetailsHeader>
      <p>
        {hotelDetails?.address?.city},{hotelDetails?.address?.street}{' '}
      </p>
      <p>Contact: {hotelDetails?.contact}</p>
    </div>
  );
};

export default HotelDetails;
