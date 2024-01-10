import Hotel from '../components/Hotels/Hotel';
import Filter from '../components/Map/Filter';
import Map from '../components/Map/Map';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <div>
        <Menu />
      </div>
      <Map />
      <Filter />
      <Hotel />
      <Footer />
    </>
  );
};

export default Home;
