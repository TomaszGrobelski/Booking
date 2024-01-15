import { Icon } from '@iconify/react';

import { MainHeaderStyle } from '../../styles/Hotels/MainHeader.styles';

const MainHeader = () => {
  return (
    <MainHeaderStyle>
      <Icon icon='game-icons:liberty-wing' color='#116149' hFlip={true} width='80' height='80' />
      <p className='relative top-4'>Our Hotels</p>
      <Icon icon='game-icons:liberty-wing' color='#116149' width='80' height='80' />
    </MainHeaderStyle>
  );
};

export default MainHeader;
