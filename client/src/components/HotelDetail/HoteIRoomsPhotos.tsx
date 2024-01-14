import HotelProps from '../../types/hotelProps';

interface HoteIRoomsPhotosProps {
  hotelDetails: HotelProps | null;
}

const HoteIRoomsPhotos: React.FC<HoteIRoomsPhotosProps> = ({ hotelDetails }) => {
  return (
    <div className='grid grid-cols-4 p-4 lg:grid-cols-3 lg:w-2/3 w-full gap-2 rounded-lg shadow-xl'>
      {hotelDetails ? (
        hotelDetails.pages?.map((foto: string) => {
          return <img loading='lazy' key={foto} src={foto} alt={foto} />;
        })
      ) : (
        <div>Is loading ...</div>
      )}
    </div>
  );
};

export default HoteIRoomsPhotos;
