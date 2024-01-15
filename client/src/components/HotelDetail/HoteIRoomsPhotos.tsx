import HotelProps from '../../types/hotelProps';
import IsLoading from '../Hotels/IsLoading';
import { RoomsPhotosGrid } from '../../styles/HotelDetails/HoteIRoomsPhotos.styles';

interface HoteIRoomsPhotosProps {
  hotelDetails: HotelProps | null;
}

const HoteIRoomsPhotos: React.FC<HoteIRoomsPhotosProps> = ({ hotelDetails }) => {
  return (
    <RoomsPhotosGrid>
      {hotelDetails ? (
        hotelDetails.pages?.map((foto: string) => {
          return (
            <img
              className='h-[200px] w-full object-cover'
              loading='lazy'
              key={foto}
              src={foto}
              alt={foto}
            />
          );
        })
      ) : (
        <IsLoading />
      )}
    </RoomsPhotosGrid>
  );
};

export default HoteIRoomsPhotos;
