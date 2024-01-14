interface SubmitRegisterButtonProps{
  label:string;
  disabled?:boolean;
}

const SubmitButton = ({disabled, label}:SubmitRegisterButtonProps) => {
  return (
    <div className="w-full px-4">
      <button
        className=" bg-mainColor w-full h-12 text-white font-bold text-[18px] hover:opacity-90"
        type="submit"
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
