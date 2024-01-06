interface FormFieldProps {
  label: React.ReactNode;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}
export default FormFieldProps;
