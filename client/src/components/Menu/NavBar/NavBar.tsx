import navList from './navList';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-10 font-bold ">
        {navList.map((nav) => (
          <li key={nav}>{nav}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
