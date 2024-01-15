import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';

import { setCity } from '../../../features/hotels/hotelsSlice';
import FilterInput from './FilterInput';

const Filter = () => {
  const dispatch = useDispatch();

  dispatch(setCity(''))

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCity(event.target.value));
  };

  return (
    <div className='flex justify-center mt-10 '>
      <div className='flex  rounded-xl border-mainColor border-[3px] p-4'>
        <div className='flex items-center  w-[300px]'>
          <Icon icon='ion:bed' color='#116149' width={23} />
          <FilterInput onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
