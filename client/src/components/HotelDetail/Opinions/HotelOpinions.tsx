import { useSelector } from 'react-redux';

import { RootState } from '../../../state/store';
import {
  OpinionBox,
  OpinionUserName,
  OpinionUserPhoto,
  OpinionsContainer,
  OpinionsFlexBox,
} from '../../../styles/HotelDetails/Opinions/HotelOpinions.styles';
import OpinionsHeader from './OpinionsHeader';

const HotelOpinions = () => {
  const hotelDetails = useSelector((state: RootState) => state.hotelDetails);

  return (
    <OpinionsContainer>
      <OpinionsHeader title='Opinions' />
      {hotelDetails.opinion?.map((description, index) => {
        return (
          <OpinionBox key={index}>
            <OpinionsFlexBox>
              <OpinionUserPhoto></OpinionUserPhoto>
              <OpinionUserName>Anonymous user</OpinionUserName>
            </OpinionsFlexBox>
            <p>{description}</p>
          </OpinionBox>
        );
      })}
    </OpinionsContainer>
  );
};

export default HotelOpinions;
