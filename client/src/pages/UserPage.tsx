import { Icon } from '@iconify/react';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
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
import { ChangePasswordButton } from '../styles/pages/UserPage.styles';
import { UserLabelInformation } from '../styles/pages/UserPage.styles';
import { UserInformationFlexBox } from '../styles/pages/UserPage.styles';
import { UserDescriptionGrid } from '../styles/pages/UserPage.styles';

const UserPage = () => {
  const footerRef = useRef(null);
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
        <Menu footerRef={footerRef} />
        <UserDescriptionGrid>
          <UserPhoto />
          <UserInformationFlexBox>
            <UserLabelInformation>
              <Icon icon='ph:user-fill' color='#116149' />
              Username: <p className='font-bold'>{name}</p>
            </UserLabelInformation>
            <UserLabelInformation className='flex items-center'>
              <Icon icon='ic:round-mail' color='#116149' />
              Email: <p className='font-bold'>{email}</p>
            </UserLabelInformation>
            <ChangePasswordButton onClick={() => setIsModalOpen(!isModalOpen)}>
              Change your password
            </ChangePasswordButton>
            {isModalOpen && <ModalPasswordChange setIsModalOpen={setIsModalOpen} />}
          </UserInformationFlexBox>
        </UserDescriptionGrid>
        <BookedHotels />
        <UserFavoriteHotels />
        <Footer footerRef={footerRef} />
      </MainContainer>
    </>
  );
};

export default UserPage;
