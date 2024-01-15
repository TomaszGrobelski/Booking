import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { requestHandler } from '../../API/requestHandler';
import { BaseRequest } from '../../API/requestHandler';
import { RootState } from '../../state/store';
import { HotelsContainer } from '../../styles/Hotels/Hotel.styles';
import HotelProps from '../../types/hotelProps';
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
    <HotelsContainer>
      <MainHeader />
      <div>
        <p>{error}</p>
        {isLoading ? (
          <IsLoading />
        ) : (
          <div className='grid place-items-center grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 mx-2 sm:mx-6 rounded-lg  '>
            {hotels.map((hotel) => (
              <Link to={`/hotel/${encodeURIComponent(hotel.name)}`} key={hotel._id}>
                <div className='flex flex-col rounded-xl shadow-2xl cursor-pointer my-10 border-[1px] border-gray-400 max-w-[300px] '>
                  <div className='px-1 md:px-2 pt-1 pb-4'>
                    <div className='flex items-center gap-3'>
                      <p className=' mt-1 text-[28px] font-ProximaVara text-nowrap italic '>
                        {' '}
                        {hotel.name}
                      </p>
                    </div>
                    <div className='flex gap-1 items-center text-[20px] my-1'>
                      <Icon icon='game-icons:position-marker' color='#116149' width={25} />
                      {hotel.address?.city}
                    </div>
                    <span className=' border-b-[2px] border-mainColor'>
                      Price from {hotel.roomType?.standard} zł
                    </span>
                  </div>
                  <img
                    loading='lazy'
                    className=' rounded-tr-lg rounded-tl-lg shadow-lg h-[300px] '
                    src={hotel.pages?.[0]}
                    alt={hotel.name}
                  />
                  <StarRating rating={hotel.rating || 0} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </HotelsContainer>
  );
}

export default Hotel;
