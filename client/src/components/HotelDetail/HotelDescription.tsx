import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';

const HotelDescription = () => {
  const hotelDetails = useSelector((state: RootState) => state.hotelDetails);

  return (
    <div className='p-4 shadow-xl mx-4 rounded-lg mt-6'>
      <span className='text-[20px] italic border-mainColor border-b-2'>{hotelDetails.name}</span>
      <p className='my-4'>{hotelDetails.description}</p>
    </div>
  );
};

export default HotelDescription;
