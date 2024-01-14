import axios, { AxiosError } from 'axios';
import { useState } from 'react';

import { HeaderForm } from '../../styles/RegisterPage/Singup.styles';
import FormField from '../LoginRegister/FormField';
import { validatePassword } from '../LoginRegister/Register/validation';
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

  const validateNewPassword = () => {
    const isPasswordValid = validatePassword(newPassword);
    if (!isPasswordValid) {
      setMessage(
        'The password must be at least 6 characters, with at least one uppercase letter and a special character: !@#$%^&*.',
      );
    }
    return isPasswordValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const isValid = validateNewPassword();
    if (isValid) {
      try {
        const response = await axios.post(
          'http://localhost:3000/changePassword',
          {
            currentPassword,
            newPassword,
          },
          {
            withCredentials: true,
          },
        );
        setMessage(response.data.message);
        setCurrentPassword('');
        setNewPassword('');
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.data) {
          const responseData = axiosError.response.data as { message?: string };
          setMessage(responseData.message || 'An unknown error occurred');
        } else {
          setMessage('An error occurred');
        }
        setCurrentPassword('');
        setNewPassword('');
      }
    }
  };
  return (
    <ModalContainer onClick={() => setIsModalOpen(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <HeaderForm>Change your Password</HeaderForm>
        <form onSubmit={handleSubmit} action='/changePassword' method='post'>
          <FormField
            label='Current password'
            type='password'
            name='currentPassword'
            id='currentPassword'
            placeholder='Enter current password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <FormField
            label='New password'
            type='password'
            name='newPassword'
            id='newPassword'
            placeholder='Enter new password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <p className='px-4 text-[14px]'>{message && message}</p>
          <SubmitButton label='Change Password' />
        </form>
      </Modal>
    </ModalContainer>
  );
};

export default ModalPasswordChange;
