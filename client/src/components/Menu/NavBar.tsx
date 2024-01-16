import { RefObject } from 'react';
import { Link } from 'react-router-dom';

import { ListFlexBox } from '../../styles/Menu/NavBar.styles';
import navList from './navList';

interface NavBarProps {
  footerRef: RefObject<HTMLDivElement>;
}
const NavBar = ({ footerRef }: NavBarProps) => {
  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav>
      <ListFlexBox>
        {navList.map((nav) => (
          <Link key={nav.name} to={nav.link}>
            <li>{nav.name}</li>
          </Link>
        ))}
        <button onClick={scrollToFooter}>Contact</button>
      </ListFlexBox>
    </nav>
  );
};

export default NavBar;
