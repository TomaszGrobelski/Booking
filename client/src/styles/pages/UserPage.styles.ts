import tw from 'tailwind-styled-components';

export const UserDescriptionGrid = tw.div`grid grid-cols-2 py-10 bg-white`;

export const UserInformationFlexBox = tw.div`mt-20 text-[20px] flex flex-col gap-4`;

export const UserLabelInformation = tw.div`flex items-center`;

export const ChangePasswordButton = tw.button`self-start border-[2px] py-1 px-3 rounded-2xl font-bold text-mainColor border-mainColor hover:bg-mainColor hover:text-white`;
