import { Link } from 'react-router-dom';

import { ListFlexBox } from '../../styles/Menu/NavBar.styles';
import navList from './navList';

const NavBar = () => {
  return (
    <nav>
      <ListFlexBox>
        {navList.map((nav) => (
          <Link key={nav.name} to={nav.link}>
            <li>{nav.name}</li>
          </Link>
        ))}
      </ListFlexBox>
    </nav>
  );
};

export default NavBar;
