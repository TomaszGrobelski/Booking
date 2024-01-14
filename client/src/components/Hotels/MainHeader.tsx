import { Icon } from '@iconify/react';

const MainHeader = () => {
  return (
    <h1 className='text-center text-[30px] font-bold my-20 flex justify-center gap-2 items-center italic'>
      <Icon icon='game-icons:liberty-wing' color='#116149' hFlip={true} width='80' height='80' />
      <p className='relative top-4'>Our Hotels</p>
      <Icon icon='game-icons:liberty-wing' color='#116149' width='80' height='80' />
    </h1>
  );
};

export default MainHeader;
