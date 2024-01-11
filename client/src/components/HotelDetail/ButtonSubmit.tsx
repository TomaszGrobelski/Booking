interface ButtonSubmitProps{
  onClick:()=>void
}
const ButtonSubmit: React.FC<ButtonSubmitProps> = ({onClick}) => {
  return (
    <button onClick={onClick} className="mt-3 self-center border-mainColor border-[2px] rounded-full px-5 py-1 hover:bg-mainColor hover:text-white hover:font-bold">Submit</button>

  )
}

export default ButtonSubmit