import { useSelector } from 'react-redux';

import { RootState } from '../../../state/store';
import { SpanTotalPrice } from '../../../styles/HotelDetails/BookingDetails/TotalPrice.styles';

const TotalPrice = () => {
  const totalPrice = useSelector((state: RootState) => state.booking.totalPrice);

  return <SpanTotalPrice>TotalPrice: {totalPrice} zł</SpanTotalPrice>;
};

export default TotalPrice;
