import { Link } from 'react-router-dom';

const RegisterNowButton = () => {
  return (
    <Link className='flex justify-center' to='/register'>
      <button className=' border-[2px] border-mainColor my-4 w-full mx-4 h-12 text-mainColor font-bold text-[18px] hover:bg-mainColor hover:text-white'>
        {' '}
        Register Now
      </button>
    </Link>
  );
};

export default RegisterNowButton;
