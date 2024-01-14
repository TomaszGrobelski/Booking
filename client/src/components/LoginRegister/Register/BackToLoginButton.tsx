import { Link } from 'react-router-dom';

const BackToLoginButton = () => {
  return (
    <Link className='flex justify-center' to='/login'>
      <button className=' border-[2px] border-mainColor my-4 w-full mx-4 h-12 text-mainColor font-bold text-[18px] hover:bg-mainColor hover:text-white'>
        {' '}
        Back to login
      </button>
    </Link>
  );
};

export default BackToLoginButton;
