import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BackToHomeButton from '../components/LoginRegister/BackToHomeButton';
import FormField from '../components/LoginRegister/FormField';
import RegisterNowButton from '../components/LoginRegister/Login/RegisterNowButton';
import SubmitLoginButton from '../components/LoginRegister/Login/SubmitLoginButton';
import {
  HeaderForm,
  RegisterPageStyle,
  RegistrationContainer,
} from '../styles/RegisterPage/Singup.styles';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post('http://localhost:3000/login', { email, password })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => {
        if (err.response && err.response.status == 401) {
          setErrorMessage(err.response.data.message);
        }
      });
  };

  return (
    <>
      <RegisterPageStyle>
        <RegistrationContainer>
          <HeaderForm>Login</HeaderForm>
          <form onSubmit={handleSubmit} action="/login">
            <FormField
              label="Email"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage('');
              }}
            />
            <FormField
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrorMessage('');
              }}
            />
            <p className="pl-4 text-red-600 my-2">{errorMessage}</p>
            <SubmitLoginButton />
          </form>
          <RegisterNowButton />
          <BackToHomeButton />
        </RegistrationContainer>
      </RegisterPageStyle>
    </>
  );
};

export default Login;
