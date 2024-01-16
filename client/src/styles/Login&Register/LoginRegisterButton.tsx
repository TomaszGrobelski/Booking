import ButtonProps from '../../types/buttonProps';

const LoginRegisterButton = ({ children }: ButtonProps) => {
  return (
    <button className='w-[120px] bg-white text-mainColor rounded-sm font-bold p-1 px-6 hover:rounded-3xl transition-all'>
      {children}
    </button>
  );
};

export default LoginRegisterButton;
