import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFavoriteHotel } from '../../features/user/userSlice';
import { RootState } from '../../state/store';
import { HotelBox } from '../../styles/Profil/BookedHotels.styles';
import {
  FavoriteFlexBox,
  FavoriteHeartButton,
  HotelName,
  NoFavoriteMessage,
  UserFavoriteContainer,
} from '../../styles/Profil/UserFavoriteHotels.styles';
import UserHeader from './UserHeader';

const UserFavoriteHotels = () => {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector((state: RootState) => state.user.favoriteHotels);

  const changeFavoriteHotel = (hotelName: string) => {
    dispatch(removeFavoriteHotel(hotelName));
  };
  return (
    <UserFavoriteContainer>
      <UserHeader title='Favorite hotels:' />
      <FavoriteFlexBox>
        {favoriteHotels.length > 0 ? (
          favoriteHotels.map((hotel, index) => {
            return (
              <div key={index} className='relative'>
                <Link to={`/hotel/${encodeURIComponent(hotel.name)}`} className='relative'>
                  <HotelBox>
                    <img
                      src={hotel.imgUrl}
                      alt={hotel.name}
                      loading='lazy'
                      className='w-[250px] h-[200px]'
                    />
                    <HotelName>{hotel.name}</HotelName>
                  </HotelBox>
                </Link>
                <FavoriteHeartButton onClick={() => changeFavoriteHotel(hotel.name)}>
                  <Icon icon='tdesign:heart-filled' width={30} color='#116149' />
                </FavoriteHeartButton>
              </div>
            );
          })
        ) : (
          <NoFavoriteMessage>
            There is no favorite hotel yet <Icon icon='lets-icons:sad' color='green' width={30} />
          </NoFavoriteMessage>
        )}
      </FavoriteFlexBox>
    </UserFavoriteContainer>
  );
};

export default UserFavoriteHotels;
