import { useState } from 'react';

import ButtonDatePicker from './ButtonDatePicker';
import CalenderDatePicker from './CalenderDatePicker';
import { DatePickerFlexBox } from '../../../../styles/HotelDetails/BookingDetails/DatePicker/DatePicker.styles';

const DatePicker = () => {
  const [visibleDatePicker, setVisibleDatePicker] = useState<boolean>(false);

  return (
    <DatePickerFlexBox>
      <ButtonDatePicker
        visibleDatePicker={visibleDatePicker}
        setVisibleDatePicker={setVisibleDatePicker}
      />
      {visibleDatePicker && <CalenderDatePicker setVisibleDatePicker={setVisibleDatePicker} />}
    </DatePickerFlexBox>
  );
};

export default DatePicker;
