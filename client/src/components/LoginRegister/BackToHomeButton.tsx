import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const BackToHomeButton = () => {
  return (
    <Link to="/">
      <button className="flex items-center mx-4 text-[18px]">
        <Icon icon="lets-icons:back" color="#116149" width="30" />
        Back to home page
      </button>
    </Link>
  );
};

export default BackToHomeButton;
