import { ButtonSubmitStyle } from '../../../styles/HotelDetails/BookingDetails/ButtonSubmit.styles';

interface ButtonSubmitProps {
  onClick: () => void;
}
const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ onClick }) => {
  return <ButtonSubmitStyle onClick={onClick}>Submit</ButtonSubmitStyle>;
};

export default ButtonSubmit;
