import { Icon } from '@iconify/react';

import { StarContent } from '../../styles/Hotels/StarRating.styles';
import { StarFlexBox } from '../../styles/Hotels/StarRating.styles';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const totalStars = 10;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      stars.push(<Icon icon='ic:sharp-star' key={i} color='white' width={30} />);
    } else {
      stars.push(<Icon icon='ph:star' key={i} width={30} />);
    }
  }
  return (
    <StarFlexBox>
      <StarContent>{stars}</StarContent>
    </StarFlexBox>
  );
};

export default StarRating;
