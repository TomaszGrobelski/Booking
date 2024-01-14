import { useState } from 'react';

import ButtonDatePicker from './ButtonDatePicker';
import CalenderDatePicker from './CalenderDatePicker';

const DatePicker = () => {
  const [visibleDatePicker, setVisibleDatePicker] = useState<boolean>(false);

  return (
    <div className='relative flex flex-col '>
      <ButtonDatePicker
        visibleDatePicker={visibleDatePicker}
        setVisibleDatePicker={setVisibleDatePicker}
      />
      {visibleDatePicker && <CalenderDatePicker setVisibleDatePicker={setVisibleDatePicker} />}
    </div>
  );
};

export default DatePicker;
