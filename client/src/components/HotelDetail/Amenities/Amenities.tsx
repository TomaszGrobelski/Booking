import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../state/store';
import {
  AmenitiesContainer,
  AmenitiesContent,
  AmenitiesFlexBox,
} from '../../../styles/HotelDetails/Amenities/Amenities.styles';
import AmenitiesHeader from './AmenitiesHeader';
import AmenitiesIcons from './AmenitiesIconslist';

const Amenities = () => {
  const amenitiesIcons: Record<string, JSX.Element> = AmenitiesIcons;
  const hotelDetails = useSelector((state: RootState) => state.hotelDetails);

  return (
    <AmenitiesContainer>
      <AmenitiesHeader title='Amenities' />
      <AmenitiesFlexBox>
        {hotelDetails.amenities &&
          hotelDetails.amenities.map((amenity) => (
            <AmenitiesContent key={amenity}>
              {amenitiesIcons[amenity] || <Icon icon='icon-name-default' />} <p>{amenity}</p>
            </AmenitiesContent>
          ))}
      </AmenitiesFlexBox>
    </AmenitiesContainer>
  );
};

export default Amenities;
