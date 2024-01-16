import { RefObject } from 'react';

import { MenuFlexBox, PhoneMenuFlexBox } from '../../styles/Menu/Menu.styles';
import Logo from './Logo';
import NavBar from './NavBar';
import PhoneNavBar from './PhoneNavBar';
import User from './User';

interface MenuProps {
  footerRef: RefObject<HTMLDivElement>;
}

const Menu = ({ footerRef }: MenuProps) => {
  return (
    <>
      <MenuFlexBox>
        <Logo />
        <NavBar footerRef={footerRef} />
        <User />
      </MenuFlexBox>
      <PhoneMenuFlexBox>
        <Logo />
        <PhoneNavBar />
      </PhoneMenuFlexBox>
    </>
  );
};

export default Menu;
