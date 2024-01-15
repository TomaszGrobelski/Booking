import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../state/store';
import { DatePickerButton } from '../../../../styles/HotelDetails/BookingDetails/DatePicker/ButtonDatePicker.styles';

interface ButtonDatePickerProps {
  setVisibleDatePicker: (value: boolean) => void;
  visibleDatePicker: boolean;
}

const ButtonDatePicker = ({ setVisibleDatePicker, visibleDatePicker }: ButtonDatePickerProps) => {
  const checkInDate = useSelector((state: RootState) => state.booking.startDate)?.join('.');
  const checkOutDate = useSelector((state: RootState) => state.booking.endDate)?.join('.');

  const dateText = `${checkInDate ? checkInDate : 'CheckIn'} - ${
    checkOutDate ? checkOutDate : 'CheckOut'
  }`;

  return (
    <DatePickerButton onClick={() => setVisibleDatePicker(!visibleDatePicker)}>
      <Icon icon='material-symbols:date-range' color='#116149' />
      <p>{dateText}</p>
      <Icon className=' self-end' icon='mingcute:down-fill' color='#116149' width={23} />
    </DatePickerButton>
  );
};

export default ButtonDatePicker;
