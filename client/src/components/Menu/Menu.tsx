import { RefObject } from 'react';

import { MenuFlexBox } from '../../styles/Menu/Menu.styles';
import Logo from './Logo';
import NavBar from './NavBar';
import User from './User';

interface MenuProps {
  footerRef: RefObject<HTMLDivElement>;
}

const Menu = ({ footerRef }:MenuProps) => {
  return (
    <MenuFlexBox>
      <Logo />
      <NavBar footerRef={footerRef} />
      <User />
    </MenuFlexBox>
  );
};

export default Menu;
