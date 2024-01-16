import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { setAuthentication } from '../../features/user/userSlice';
import LoginRegisterButton from '../../styles/Login&Register/LoginRegisterButton';
import { ProfileButton, UserFlexBox, UserName } from '../../styles/Menu/User.styles';

const User = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:3000/check-auth', { withCredentials: true }).then((response) => {
      if (response.data.isLoggedIn) {
        setIsLogin(true);
        setUserName(response.data.user.userName);
      }
    });
  }, []);

  const handleLogout = () => {
    axios
      .post('http://localhost:3000/logout', {}, { withCredentials: true })
      .then(() => {
        setIsLogin(false);
        dispatch(setAuthentication(false));
        navigate('/');
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  };

  useEffect(() => {
    if (isLogin) {
      dispatch(setAuthentication(true));
    }
  }, [dispatch, isLogin]);

  return (
    <>
      <UserFlexBox>
        {isLogin ? (
          <>
            <Link to='/profile'>
              <ProfileButton>
                <Icon icon='ph:user-fill' color='white' />
                <UserName>{userName}</UserName>
              </ProfileButton>
            </Link>
            <button onClick={handleLogout}>
              <Icon icon='line-md:log-out' height={30} className=' hover:text-red-600' />
            </button>
            <p>{errorMessage}</p>
          </>
        ) : (
          <>
            <Link to='/login'>
              <LoginRegisterButton children='LogIn' />
            </Link>
            <Link to='/register'>
              <LoginRegisterButton children='Register' />
            </Link>
          </>
        )}
      </UserFlexBox>
    </>
  );
};

export default User;
