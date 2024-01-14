import axios from 'axios';
import { useState } from 'react';

import { HeaderForm } from '../../styles/RegisterPage/Singup.styles';
import FormField from '../LoginRegister/FormField';
import SubmitButton from '../LoginRegister/SubmitButton';
import { ModalContainer } from './ModalPasswordChange.styles';
import { Modal } from './ModalPasswordChange.styles';

interface ModalPasswordChangeProps {
  setIsModalOpen: (value: boolean) => void;
}
const ModalPasswordChange = ({ setIsModalOpen }: ModalPasswordChangeProps) => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000//changePassword',
        {
          currentPassword,
          newPassword,
        },
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage('Błedne hasło');
    }
  };
  return (
    <ModalContainer onClick={() => setIsModalOpen(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <HeaderForm>Change your Password</HeaderForm>
        <form onSubmit={handleSubmit} action="/changePassword" method="post">
          <FormField
            label="Current password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <FormField
            label="New password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {message && message}
          <SubmitButton label="Change Password" />
        </form>
      </Modal>
    </ModalContainer>
  );
};

export default ModalPasswordChange;
