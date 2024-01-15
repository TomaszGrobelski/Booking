import tw from 'tailwind-styled-components';

export const HotelsContainer = tw.div`pt-4  bg-white pb-10`;

export const HotelGridContainer = tw.div`grid place-items-center grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 mx-2 sm:mx-6 rounded-lg`;

export const HotelPrice = tw.span`border-b-[2px] border-mainColor`;

export const HotelAddress = tw.div`flex gap-1 items-center text-[20px] my-1`;

export const HotelName = tw.p`mt-1 text-[28px] font-ProximaVara text-nowrap italic`;

export const DescriptionBox = tw.div`px-1 md:px-2 pt-1 pb-4`;

export const OuterBox = tw.div`flex flex-col rounded-xl shadow-2xl cursor-pointer my-10 border-[1px] border-gray-400 max-w-[300px]`;
