import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';
import { DescriptionContent } from '../../styles/HotelDetails/HotelDescription.styles';
import { DescriptionHeader } from '../../styles/HotelDetails/HotelDescription.styles';
import { HotelDescriptionContainer } from '../../styles/HotelDetails/HotelDescription.styles';

const HotelDescription = () => {
  const hotelDetails = useSelector((state: RootState) => state.hotelDetails);

  return (
    <HotelDescriptionContainer>
      <DescriptionHeader>{hotelDetails.name}</DescriptionHeader>
      <DescriptionContent>{hotelDetails.description}</DescriptionContent>
    </HotelDescriptionContainer>
  );
};

export default HotelDescription;
