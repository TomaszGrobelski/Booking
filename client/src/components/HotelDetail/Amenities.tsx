import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';

const Amenities = () => {
  const amenitiesIcons: Record<string, JSX.Element> = {
    'free Wi-Fi': <Icon icon='uil:wifi' color='#116149' />,
    'air conditioning': <Icon icon='ic:baseline-air' color='#116149' />,
    '24-hour reception': <Icon icon='mynaui:reception-bell' color='#116149' />,
    safe: <Icon icon='ri:safe-fill' color='#116149' />,
    'private bathroom': <Icon icon='iconoir:bathroom-solid' color='#116149' />,
    'non-smoking rooms': <Icon icon='tabler:smoking-no' color='#116149' />,
    'daily cleaning': <Icon icon='guidance:cleaning-room' color='#116149' />,
    'pets are allowed': <Icon icon='ic:round-pets' color='#116149' />,
    'airport transfer': <Icon icon='mdi:airport-shuttle' color='#116149' />,
    restaurant: <Icon icon='carbon:restaurant' color='#116149' />,
    bar: <Icon icon='maki:bar' color='#116149' />,
    'fitness center': <Icon icon='ic:outline-fitness-center' color='#116149' />,
    spa: <Icon icon='map:spa' color='#116149' />,
    parking: <Icon icon='ri:parking-box-fill' color='#116149' />,
    'room service': <Icon icon='ic:round-room-service' color='#116149' />,
    
  };
  const hotelDetails = useSelector((state: RootState) => state.hotelDetails);

  return (
    <div className='p-4 shadow-xl mx-4 rounded-lg my-10'>
      <h3 className='my-4'>
        <span className='text-[20px] italic border-mainColor border-b-2'>Amenities</span>
      </h3>
      <div className='flex gap-2 flex-wrap'>
        {hotelDetails.amenities &&
          hotelDetails.amenities.map((amenity) => (
            <div
              key={amenity}
              className='flex items-center gap-2 border-[2px] border-mainColor p-2'
            >
              {amenitiesIcons[amenity] || <Icon icon='icon-name-default' />} <p>{amenity}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Amenities;
