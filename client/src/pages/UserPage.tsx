import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Menu from '../components/Menu/Menu';
import BookedHotels from '../components/Profil/BookedHotels';
import ModalPasswordChange from '../components/Profil/ModalPasswordChange';
import UserPhoto from '../components/Profil/UserPhoto';
import { RootState } from '../state/store';
import UserFavoriteHotels from '../components/Profil/UserFavoriteHotels';
import Footer from '../components/Footer/Footer';

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const name = useSelector((state: RootState) => state.user.name);
  const email = useSelector((state: RootState) => state.user.email);

  return (
    <>
      <Menu />
      <div className='mx-auto max-w-[1300px]'>
        <div className='grid grid-cols-2 my-10'>
          <UserPhoto />
          <div className='mt-20 text-[20px] flex flex-col gap-4'>
            <div className='flex items-center'>
              <Icon icon='ph:user-fill' color='#116149' />
              Username: <p className='font-bold'>{name}</p>
            </div>
            <div className='flex items-center'>
              <Icon icon='ic:round-mail' color='#116149' />
              Mail: <p className='font-bold'>{email}</p>
            </div>
            <button
              className='self-start border-[2px] py-1 px-3 rounded-2xl font-bold text-mainColor border-mainColor hover:bg-mainColor hover:text-white'
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Change your password
            </button>
            {isModalOpen && <ModalPasswordChange setIsModalOpen={setIsModalOpen} />}
          </div>
        </div>
        <BookedHotels />
        <UserFavoriteHotels />
        <Footer />
      </div>
    </>
  );
};

export default UserPage;
