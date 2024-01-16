import MainContainer from '../components/Containers/MainContainer';
import Footer from '../components/Footer/Footer';
import Hotel from '../components/Hotels/Hotel';
import Map from '../components/Map/Map';
import Menu from '../components/Menu/Menu';

const Home = () => {
  return (
    <>
      <MainContainer>
        <Menu />
        <Map />
        <Hotel />
        <Footer />
      </MainContainer>
    </>
  );
};

export default Home;
