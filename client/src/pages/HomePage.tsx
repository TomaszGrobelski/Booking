import MainContainer from '../components/Containers/MainContainer';
import Footer from '../components/Footer/Footer';
import Hotel from '../components/Hotels/Hotel';
import Map from '../components/Map/Map';
import Menu from '../components/Menu/Menu';
import { useRef } from 'react';

const Home = () => {
  const footerRef = useRef(null)
  return (
    <>
      <MainContainer>
        <Menu footerRef={footerRef} />
        <Map />
        <Hotel />
        <Footer footerRef={footerRef} />
      </MainContainer>
    </>
  );
};

export default Home;
