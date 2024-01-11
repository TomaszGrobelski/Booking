import HotelProps from '../../types/hotelProps';

interface HoteIRoomsPhotosProps {
  hotelDetails: HotelProps | null;
}

const HoteIRoomsPhotos: React.FC<HoteIRoomsPhotosProps> = ({ hotelDetails }) => {
  return (
    <div className="grid grid-cols-3 w-2/3 gap-2 rounded-lg shadow-xl">
      {hotelDetails ? (
        hotelDetails.pages?.map((foto: string) => {
          return <img src={foto} alt="" />;
        })
      ) : (
        <div>Is loading ...</div>
      )}
    </div>
  );
};

export default HoteIRoomsPhotos;
