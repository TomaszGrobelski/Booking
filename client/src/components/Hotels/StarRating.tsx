import { Icon } from '@iconify/react';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Icon icon="ic:sharp-star" color="green" key={i} />);
  }
  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
