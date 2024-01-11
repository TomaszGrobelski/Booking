import { Icon } from '@iconify/react';
import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

interface ButtonDatePickerProps {
  setVisibleDatePicker: (value: boolean) => void;
  visibleDatePicker: boolean;
}

const ButtonDatePicker = ({ setVisibleDatePicker, visibleDatePicker }: ButtonDatePickerProps) => {
  const checkInDate = useSelector((state:RootState)=>state.booking.startDate)
  const checkOutDate = useSelector((state:RootState)=>state.booking.startDate)
  console.log(checkInDate);
  console.log(checkOutDate);


  return (
    <button
      onClick={() => setVisibleDatePicker(!visibleDatePicker)}
      className="flex gap-1 items-center border-[2px] border-mainColor py-1 px-2 w-[310px] justify-between"
    >
      <Icon icon="material-symbols:date-range" color="#116149" />
      <p>Check-in Date — Check-out Date</p>
      <p>{checkInDate} - {checkOutDate}</p>
      <Icon className=" self-end" icon="mingcute:down-fill" color="#116149" width={23} />
    </button>
  );
};

export default ButtonDatePicker;
