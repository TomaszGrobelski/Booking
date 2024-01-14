import { Link } from 'react-router-dom';

import navList from './navList';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex gap-10 font-bold '>
        {navList.map((nav) => (
          <Link key={nav.name} to={nav.link}>
            <li>{nav.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
