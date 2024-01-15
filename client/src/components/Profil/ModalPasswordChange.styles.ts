import tw from 'tailwind-styled-components';

export const Modal = tw.div`relative z-10 w-[300px] bg-white p-2 text-[18px] h-[350px] border-[2px] border-mainColor rounded-2xl shadow-xl`;

export const ModalContainer = tw.div`z-0 fixed h-screen w-screen left-0 top-0 backdrop-blur-md flex justify-center items-center`;

export const CloseModalButton = tw.button`absolute top-1 right-3 text-[20px] font-bold hover:rotate-180 hover:text-mainColor transition-all`;
