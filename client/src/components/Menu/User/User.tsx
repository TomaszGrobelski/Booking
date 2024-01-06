import { Link } from 'react-router-dom';

import LoginRegisterButton from '../../../styles/LoginRegisterButton';

const User = () => {
  return (
    <div className="flex gap-4">
      <Link to="/login">
        <LoginRegisterButton children="LogIn" />
      </Link>
      <Link to="/register">
        <LoginRegisterButton children="Register" />
      </Link>
    </div>
  );
};

export default User;
