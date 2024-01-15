import { Link } from 'react-router-dom';

import { BackToLoginButtonStyle } from '../../../styles/Login&Register/RegisterPage/BackToLoginButton.styles';

const BackToLoginButton = () => {
  return (
    <Link className='flex justify-center' to='/login'>
      <BackToLoginButtonStyle> Back to login</BackToLoginButtonStyle>
    </Link>
  );
};

export default BackToLoginButton;
