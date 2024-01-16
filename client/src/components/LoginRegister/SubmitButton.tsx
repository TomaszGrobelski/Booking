import {
  ButtonContainer,
  SubmitButtonStyle,
} from '../../styles/Login&Register/SubmitButton.styles';

interface SubmitRegisterButtonProps {
  label: string;
  disabled?: boolean;
}

const SubmitButton = ({ disabled, label }: SubmitRegisterButtonProps) => {
  return (
    <ButtonContainer>
      <SubmitButtonStyle type='submit' disabled={disabled}>
        {label}
      </SubmitButtonStyle>
    </ButtonContainer>
  );
};

export default SubmitButton;
