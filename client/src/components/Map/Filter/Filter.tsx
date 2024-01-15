import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';

import { setCity } from '../../../features/hotels/hotelsSlice';
import { FilterBorderSyle } from '../../../styles/Map/Filter.styles';
import { FilterFlexBox } from '../../../styles/Map/Filter.styles';
import FilterInput from './FilterInput';

const Filter = () => {
  const dispatch = useDispatch();

  dispatch(setCity(''));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
