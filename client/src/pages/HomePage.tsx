import MainContainer from '../components/Containers/MainContainer';
import Footer from '../components/Footer/Footer';
import Hotel from '../components/Hotels/Hotel';
import Filter from '../components/Map/Filter/Filter';
import Map from '../components/Map/Map';
import Menu from '../components/Menu/Menu';

const Home = () => {
  return (
    <>
      <MainContainer>
        <Menu />
        <Map />
        <Filter />
        <Hotel />
        <Footer />
      </MainContainer>
    </>
  );
};

export default Home;
