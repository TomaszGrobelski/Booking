import { Icon } from '@iconify/react';

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
    <div className='flex w-full bg-mainColor h-14 shadow-lg shadow-mainColor rounded-b-xl'>
      <div className='flex items-center w-full justify-between px-6'>{stars}</div>
    </div>
  );
};

export default StarRating;
