import axios from 'axios';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

import BackToHomeButton from '../components/LoginRegister/BackToHomeButton';
import FormField from '../components/LoginRegister/FormField';
import BackToLoginButton from '../components/LoginRegister/Register/BackToLoginButton';
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from '../components/LoginRegister/Register/validation';
import SubmitButton from '../components/LoginRegister/SubmitButton';
import {
  HeaderForm,
  RegisterPageStyle,
  RegistrationContainer,
} from '../styles/Login&Register/RegisterPage/Singup.styles';

const Singup = () => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userNameValidateError, setUserNameError] = useState<boolean>(false);
  const [emailValidateError, setEmailError] = useState<boolean>(false);
  const [passwordValidateError, setPasswordError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [captchaDone, setCaptchaDone] = useState<boolean>(false);
  const captchaKey = import.meta.env.VITE_CAPTCHA_KEY;
  const onChange = () => {
    setCaptchaDone(true);
  };

  const validateAllFields = () => {
    const isUserNameValid = validateUserName(userName);
    setUserNameError(!isUserNameValid);

    const isEmailValid = validateEmail(email);
    setEmailError(!isEmailValid);

    const isPasswordValid = validatePassword(password);
    setPasswordError(!isPasswordValid);

    return isUserNameValid && isEmailValid && isPasswordValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateAllFields();
    if (isValid && captchaDone) {
      setIsButtonDisabled(true);
      setTimeout(() => setIsButtonDisabled(false), 1000);

      axios
        .post('http://localhost:3000/register', { userName, email, password })
        .then(() => {
          navigate('/login');
        })
        .catch((err) => {
          if (err.response && err.response.status === 409) {
            setErrorMessage(err.response.data.message);
          } else {
            setErrorMessage('An error occurred. Please try again later.');
          }
        });
    }
  };

  return (
    <RegisterPageStyle>
      <RegistrationContainer>
        <HeaderForm>Register</HeaderForm>
        <form
          onSubmit={handleSubmit}
          action='/register'
          method='POST'
          className='flex flex-col items-center'
        >
          <FormField
            label='Username'
            type='text'
            name='userName'
            id='userName'
            placeholder='Enter username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            error={userNameValidateError}
          />
          {userNameValidateError ? (
            <p className=' self-start pl-4 text-red-500'>Username need atleast 4 character</p>
          ) : null}
          <FormField
            label='Email'
            type='email'
            name='email'
            id='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailValidateError}
          />
          {emailValidateError ? (
            <p className=' self-start pl-4 text-red-500'>Email is incorrect</p>
          ) : null}
          <FormField
            label='Password'
            type='password'
            name='password'
            id='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordValidateError}
          />
          {passwordValidateError ? (
            <p className=' self-start pl-4 text-red-500'>
              The password must be at least 6 characters, with at least one uppercase letter and a
              special character: !@#$%^&*.
            </p>
          ) : null}
          {<p className='text-red-600'>{errorMessage}</p>}
          <ReCAPTCHA className='my-4' sitekey={captchaKey} onChange={onChange} />
          <SubmitButton disabled={isButtonDisabled} label='Register' />
        </form>
        <BackToLoginButton />
        <BackToHomeButton />
      </RegistrationContainer>
    </RegisterPageStyle>
  );
};

export default Singup;
