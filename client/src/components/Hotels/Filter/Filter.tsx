import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCity } from '../../../features/hotels/hotelsSlice';
import { FilterBorderSyle, FilterFlexBox } from '../../../styles/Hotels/Filter.styles';
import FilterInput from './FilterInput';

const Filter = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setCity(''));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch(setCity(event.target.value));
  };

  return (
    <FilterFlexBox>
      <FilterBorderSyle>
        <Icon icon='ion:bed' color='#116149' width={23} />
        <FilterInput onChange={handleInputChange} />
      </FilterBorderSyle>
    </FilterFlexBox>
  );
};

export default Filter;
