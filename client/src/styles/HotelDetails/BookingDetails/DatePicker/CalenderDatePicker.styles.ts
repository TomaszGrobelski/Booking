import tw from 'tailwind-styled-components';

export const DatePickerFlexBox = tw.div`absolute z-10 top-9 flex flex-col bg-white shadow-xl border-mainColor border-x-[2px] border-b-[2px] rounded-b-md p-4 text-[18px] w-[310px]`;

export const CurrentMonthAndYear = tw.p`text-center font-bold`;

export const CalendarDaysGrid = tw.div`grid grid-cols-7`;

export const CalendarDay = tw.div`text-center`;
