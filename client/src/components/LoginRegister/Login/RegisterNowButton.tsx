import { Link } from 'react-router-dom';

import { RegisterNowButtonStyle } from '../../../styles/Login&Register/Login/RegisterNowButton.styles';

const RegisterNowButton = () => {
  return (
    <Link className='flex justify-center' to='/register'>
      <RegisterNowButtonStyle> Register Now</RegisterNowButtonStyle>
    </Link>
  );
};

export default RegisterNowButton;
