import tw from 'tailwind-styled-components';

export const UserPhotoGrid = tw.div`grid place-items-center items-center my-20`;

export const UserImage = tw.img`rounded-full border-[2px] bg-gray-300 border-mainColor w-[200px] h-[200px] mb-4`;

export const UserLabel = tw.label`w-[200px] h-[40px] border-[2px] flex justify-center items-center mb-4  border-mainColor cursor-pointer font-bold text-mainColor hover:bg-mainColor hover:text-white text-[18px]`;

export const UserInput = tw.input`absolute opacity-0 -z-10`;
