interface SubmitRegisterButtonProps{
  disabled:boolean;
}

const SubmitRegisterButton = ({disabled}:SubmitRegisterButtonProps) => {
  return (
    <div className="w-full px-4">
      <button
        className=" bg-mainColor w-full h-12 text-white font-bold text-[18px] hover:opacity-90"
        type="submit"
        disabled={disabled}
      >
        Register
      </button>
    </div>
  );
};

export default SubmitRegisterButton;
