import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import { BackToHomeButtonStyle } from '../../styles/Login&Register/BackToHomeButton.styles';

const BackToHomeButton = () => {
  return (
    <Link to='/'>
      <BackToHomeButtonStyle>
        <Icon icon='lets-icons:back' color='#116149' width='30' />
        Back to home page
      </BackToHomeButtonStyle>
    </Link>
  );
};

export default BackToHomeButton;
