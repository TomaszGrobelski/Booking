import Logo from './Logo';
import { MenuFlexBox } from '../../styles/Menu/Menu.styles';
import NavBar from './NavBar';
import User from './User';

const Menu = () => {
  return (
    <MenuFlexBox>
      <Logo />
      <NavBar />
      <User />
    </MenuFlexBox>
  );
};

export default Menu;
