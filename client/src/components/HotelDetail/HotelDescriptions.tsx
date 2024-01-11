import { Icon } from '@iconify/react';
import { useState } from 'react';
import HotelProps from '../../types/hotelProps';
import StarRating from '../Hotels/StarRating';

interface HoteImagesProps {
  hotelDetails: HotelProps | null;
}

const HotelDescriptions: React.FC<HoteImagesProps> = ({ hotelDetails }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <div>
      <h2 className="font-bold text-[20px]">{hotelDetails?.name}</h2>
      <p>
        {hotelDetails?.address?.city},{hotelDetails?.address?.street}{' '}
      </p>
      <StarRating rating={hotelDetails?.rating || 0} />
      <p>Contact: {hotelDetails?.contact}</p>

      <button className="absolute top-4 right-4" onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? (
          <Icon icon="tdesign:heart-filled" width={30} color="#116149" />
        ) : (
          <Icon icon="tdesign:heart" width={30} color="#116149" />
        )}
      </button>
    </div>
  );
};

export default HotelDescriptions;
