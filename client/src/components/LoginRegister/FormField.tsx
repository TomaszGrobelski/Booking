import FormFieldProps from '../../types/formFieldProps';
import { FormFlexBox } from '../../styles/Login&Register/FormField.styles';

const FormField = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) => {
  const inputClass = `outline-none border-[1px] ${
    error ? 'border-red-500' : 'border-mainColor'
  } h-10 pl-2`;
  return (
    <FormFlexBox>
      <label htmlFor={id}>{label}</label>
      <input
        className={inputClass}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete={type}
        required
        value={value}
        onChange={onChange}
      />
    </FormFlexBox>
  );
};

export default FormField;
