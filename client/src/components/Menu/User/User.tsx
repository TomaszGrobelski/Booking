import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LoginRegisterButton from '../../../styles/LoginRegisterButton';

const User = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/check-auth', { withCredentials: true })
      .then((response) => {
        if (response.data.isLoggedIn) {
          setIsLogin(true);
          setUserName(response.data.user.userName);
        }
      })
      .catch((error) => {
        console.error('Authentication check failed', error);
      });
  }, []);

  const handleLogout = () => {
    axios
      .post('http://localhost:3000/logout', {}, { withCredentials: true })
      .then(() => {
        setIsLogin(false);
        navigate("/")
      })
      .catch((err) => {
        console.log('Logout Failed', err);
      });
  };

  return (
    <>
      <div className="flex gap-4">
        {isLogin ? (
          <>
            <Link to="/profile">
              <button className="flex flex-col items-center">
                <Icon icon="ph:user-fill" color="white" />
                <p className="text-[14px]">{userName}</p>
              </button>
            </Link>
            <button onClick={handleLogout}>
              <Icon icon="line-md:log-out" height={30} className=" hover:text-red-500" />
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <LoginRegisterButton children="LogIn" />
            </Link>
            <Link to="/register">
              <LoginRegisterButton children="Register" />
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default User;
