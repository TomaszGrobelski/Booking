import { useSelector } from 'react-redux';

import { RootState } from '../../../state/store';

const TotalPrice = () => {
  const totalPrice = useSelector((state: RootState) => state.booking.totalPrice);

  return (
    <span className='border-b-[2px] border-mainColor py-1 px-10 font-bold italic text-nowrap '>
      TotalPrice: {totalPrice} zł
    </span>
  );
};

export default TotalPrice;
