import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import User from './User/User';

const Menu = () => {
  return (
    <div className='bg-mainColor'>
      <div className=' max-w-[1300px] mx-auto h-20 flex justify-between items-center px-10 text-[1.1rem] text-white '>
        <Logo />
        <NavBar />
        <User />
      </div>
    </div>
  );
};

export default Menu;
