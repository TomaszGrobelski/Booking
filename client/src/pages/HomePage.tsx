import Hotel from '../components/Hotels/Hotel';
import Filter from '../components/Map/Filter';
import Map from '../components/Map/Map';
import Menu from '../components/Menu/Menu';

const Home = () => {
  return (
    <>
      <div>
        <Menu />
        <Filter />
      </div>
      <Map />
      <Hotel />
    </>
  );
};

export default Home;
