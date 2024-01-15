import Logo from '../../assets/Logo/booking-high-resolution-logo-white-transparent.png';
import MainContainer from '../Containers/MainContainer';
import ContactFooter from './ContactFooter';

const Footer = () => {
  return (
    <MainContainer>
      <div className='flex gap-4 mt-20 p-6 bg-mainColor min-h-[300px] text-white rounded-t-3xl'>
        <div className='flex items-center'>
          <img loading='lazy' className='w-20 h-20' src={Logo} alt='Logo' />
        </div>
        <div></div>
        <ContactFooter />
        <div></div>
      </div>
    </MainContainer>
  );
};

export default Footer;
