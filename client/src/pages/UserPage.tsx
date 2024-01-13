import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Menu from '../components/Menu/Menu';
import ModalPasswordChange from '../components/Profil/ModalPasswordChange';
import { RootState } from '../state/store';
import BookedHotels from '../components/Profil/BookedHotels';
import UserPhoto from '../components/Profil/UserPhoto';

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const name = useSelector((state: RootState) => state.user.name);
  const email = useSelector((state: RootState) => state.user.email);

  return (
    <>
      <Menu />
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-2 my-10">
          <UserPhoto />
          <div>
            <div className="flex items-center">
              <Icon icon="ph:user-fill" color="#116149" />
              Username: <p className="font-bold">{name}</p>
            </div>
            <div className="flex items-center">
              <Icon icon="ic:round-mail" color="#116149" />
              Mail: <p className="font-bold">{email}</p>
            </div>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>Change your password</button>
            {isModalOpen && <ModalPasswordChange setIsModalOpen={setIsModalOpen} />}
          </div>
        </div>
        <BookedHotels />
        <div>Favorite</div>
      </div>
    </>
  );
};

export default UserPage;
