import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BaseRequest, requestHandler } from '../../API/requestHandler';
import { RootState } from '../../state/store';
import {
  DescriptionBox,
  HotelAddress,
  HotelGridContainer,
  HotelName,
  HotelPrice,
  HotelsContainer,
  OuterBox,
} from '../../styles/Hotels/Hotel.styles';
import HotelProps from '../../types/hotelProps';
import Filter from './Filter/Filter';
import IsLoading from './IsLoading';
import MainHeader from './MainHeader';
import StarRating from './StarRating';

type HotelData = Array<HotelProps>;
function Hotel() {
  const [allHotels, setAllHotels] = useState<HotelProps[]>([]);
  const [hotels, setHotels] = useState<HotelProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const city = useSelector((state: RootState) => state.hotels.city);

  const fetchHotels: BaseRequest<void, HotelData> = () => {
    return axios.get('http://localhost:3000/Hotel');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await requestHandler(fetchHotels)();
        if (response.code === 'success') {
          setAllHotels(response.data);
          setHotels(response.data);
        } else {
          setError('Failed to fetch data');
        }
      } catch (err) {
        setError('An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (city) {
      const cityPrefix = city.toLowerCase();
      const filteredHotels = allHotels.filter(
        (hotel: HotelProps) => hotel.address?.city.toLowerCase().startsWith(cityPrefix),
      );
      setHotels(filteredHotels);
    } else {
      setHotels(allHotels);
    }
  }, [city, allHotels]);

  return (
    <HotelsContainer className=' hover:shadow-blue-500'>
      <MainHeader />
      <p>{error}</p>
      <Filter />
      {isLoading ? (
        <IsLoading />
      ) : (
        <HotelGridContainer>
          {hotels.map((hotel) => (
            <Link to={`/hotel/${encodeURIComponent(hotel.name)}`} key={hotel._id}>
              <OuterBox>
                <DescriptionBox>
                  <HotelName>{hotel.name}</HotelName>
                  <HotelAddress>
                    <Icon icon='game-icons:position-marker' color='#116149' width={25} />
                    {hotel.address?.city}
                  </HotelAddress>
                  <HotelPrice>Price from {hotel.roomType?.standard} zł</HotelPrice>
                </DescriptionBox>
                <img
                  loading='lazy'
                  className=' rounded-tr-lg rounded-tl-lg shadow-lg h-[300px] '
                  src={hotel.pages?.[0]}
                  alt={hotel.name}
                />
                <StarRating rating={hotel.rating || 0} />
              </OuterBox>
            </Link>
          ))}
        </HotelGridContainer>
      )}
    </HotelsContainer>
  );
}

export default Hotel;
