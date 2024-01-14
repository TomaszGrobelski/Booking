import LogoImage from '../../../assets/Logo/booking-high-resolution-logo-white-transparent.png';

const Logo = () => {
  return (
    <div>
      <img className='object-contain w-20' loading='lazy' src={LogoImage} alt='Logo' />
    </div>
  );
};

export default Logo;
