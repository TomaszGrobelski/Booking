import { Icon } from '@iconify/react';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainContainer from '../components/Containers/MainContainer';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import BookedHotels from '../components/Profil/BookedHotels';
import ModalPasswordChange from '../components/Profil/ModalPasswordChange';
import UserFavoriteHotels from '../components/Profil/UserFavoriteHotels';
import UserPhoto from '../components/Profil/UserPhoto';
import { setData } from '../features/user/userSlice';
import { RootState } from '../state/store';


const UserPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const name = useSelector((state: RootState) => state.user.name);
  const email = useSelector((state: RootState) => state.user.email);

  const fetchUserInfo = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3000/user-info', {
        withCredentials: true,
      });
      const userInfo = response.data;
      dispatch(setData({ name: userInfo.userName, email: userInfo.email }));
    } catch (error) {
      dispatch(setData({ name: 'Could not fetch name', email: 'Could not fetch email' }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!name || !email) {
      fetchUserInfo();
    }
  }, [name, email, fetchUserInfo]);

  return (
    <>
      <MainContainer>
        <Menu />
        <div className='grid grid-cols-2 py-10 bg-white'>
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
      </MainContainer>
    </>
  );
};

export default UserPage;
