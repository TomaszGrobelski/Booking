import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setDate } from '../../../../features/booking/bookingSlice';
import ButtonSubmit from '../ButtonSubmit';

interface CalenderDatePickerProps {
  setVisibleDatePicker: (value: boolean) => void;
}
const CalenderDatePicker = ({ setVisibleDatePicker }: CalenderDatePickerProps) => {
  const dispatch = useDispatch();
  const [selectedStartDate, setSelectedStartDate] = useState<number | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<number | null>(null);
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('en-GB', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };
  const numberOfDays = daysInMonth(currentYear, currentDate.getMonth() + 1);

  const isPastDay = (day: number) => {
    const dateToCheck = new Date(currentYear, currentMonthIndex, day);
    const today = new Date();
    return dateToCheck.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
  };

  const selectDate = (day: number) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(day);
      setSelectedEndDate(null);
    } else if (day < selectedStartDate) {
      setSelectedStartDate(day);
    } else {
      setSelectedEndDate(day);
    }
  };

  const isDaySelected = (day: number) => {
    if (
      day >= (selectedStartDate ?? -Infinity) &&
      day <= (selectedEndDate! || selectedStartDate!)
    ) {
      return true;
    }
    return false;
  };

  const getFirstDayOfMonth = () => {
    const firstDay = new Date(currentYear, currentMonthIndex, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Przesunięcie, aby poniedziałek był pierwszym dniem
  };

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const firstDayOfMonth = getFirstDayOfMonth();
  const paddedDays = Array(firstDayOfMonth).fill(null);

  const isStartDate = (day: number) => day === selectedStartDate;
  const isEndDate = (day: number) => day === selectedEndDate;

  const handleDateSubmit = () => {
    const startDate = [selectedStartDate, currentMonth.slice(0, 3), currentYear];
    const endDate = [selectedEndDate, currentMonth.slice(0, 3), currentYear];
    dispatch(setDate({ startDate, endDate }));
    setVisibleDatePicker(false);
  };
  return (
    <div className="absolute z-10 top-9 flex flex-col bg-white shadow-xl border-mainColor border-x-[2px] border-b-[2px] rounded-b-md p-4 text-[18px] w-[310px] ">
      <p className="text-center font-bold">{`${currentMonth} ${currentYear}`}</p>
      <div className="grid grid-cols-7 ">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
        {paddedDays.map((_, index) => (
          <div key={`pad-${index}`} className="text-center"></div>
        ))}
        {[...Array(numberOfDays)].map((_, index) => {
          const day = index + 1;
          const isPast = isPastDay(day);
          let borderRadiusClass = '';
          if (isDaySelected(day)) {
            if (isStartDate(day)) {
              borderRadiusClass = 'rounded-l-full';
            } else if (isEndDate(day)) {
              borderRadiusClass = 'rounded-r-full';
            }
          }
          return (
            <div
              key={day}
              className={`text-center py-1 cursor-pointer ${isPast ? 'text-gray-500' : ''} ${
                isDaySelected(day) ? 'bg-mainColor text-white' : 'bg-none'
              } ${borderRadiusClass} `}
              onClick={() => !isPast && selectDate(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
      <ButtonSubmit onClick={handleDateSubmit} />
    </div>
  );
};

export default CalenderDatePicker;
