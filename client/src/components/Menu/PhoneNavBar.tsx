import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';

import { CloseModalButton } from '../../styles/Profil/ModalPasswordChange.styles';
import NavBar from './NavBar';
import User from './User';

const PhoneNavBar = () => {
  const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        document.body.style.overflow = '';
        setMobileNavBarVisible(false);
      } else if (mobileNavBarVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [mobileNavBarVisible]);

  const handleChangeNavBarVisible = () => {
    setMobileNavBarVisible(!mobileNavBarVisible);
  };

  return (
    <>
      {mobileNavBarVisible ? (
        <>
          <div
            className='absolute z-10 top-0 left-0 w-screen h-screen bg-white opacity-70 '
            onClick={handleChangeNavBarVisible}
          ></div>
          <div
            className='absolute flex flex-col gap-4 z-20 top-0 right-0 w-1/3 h-full bg-mainColor pt-10'
            onClick={(e) => e.stopPropagation()}
          >
            <CloseModalButton onClick={() => setMobileNavBarVisible(false)}>X</CloseModalButton>
            <NavBar />
            <User />
          </div>
        </>
      ) : (
        <button className=' sm:hidden' onClick={handleChangeNavBarVisible}>
          <Icon icon='mingcute:menu-fill' color='white' width={28} />
        </button>
      )}
    </>
  );
};

export default PhoneNavBar;
