import Logo from '../../assets/Logo/booking-high-resolution-logo-white-transparent.png';
import { BGWhite, CenterContent, FooterFlexBox } from '../../styles/Footer/Footer.styles';
import ContactFooter from './ContactFooter';
import { RefObject } from 'react';

interface FooterProps {
  footerRef: RefObject<HTMLDivElement>;
}
const Footer = ({footerRef}:FooterProps) => {
  
  return (
    <BGWhite>
      <FooterFlexBox ref={footerRef}>
        <CenterContent>
          <img loading='lazy' className='w-20 h-20' src={Logo} alt='Logo' />
        </CenterContent>
        <ContactFooter />
      </FooterFlexBox>
    </BGWhite>
  );
};

export default Footer;
