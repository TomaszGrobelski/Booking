import { Icon } from '@iconify/react';

const IsLoading = () => {
  return (
    <div className='flex justify-center m-2  text-mainColor text-center text-[22px] font-bold italic'>
      Data is loading... <Icon icon='eos-icons:bubble-loading' color='#116149' />
    </div>
  );
};

export default IsLoading;
