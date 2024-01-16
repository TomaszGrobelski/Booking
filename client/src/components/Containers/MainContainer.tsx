interface MainContainerProps {
  children: React.ReactNode;
}
const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className=' bg-mainColor'>
      <div className='mx-auto max-w-[1300px] '>{children}</div>
    </div>
  );
};

export default MainContainer;
