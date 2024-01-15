const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=' bg-mainColor'>
      <div className='mx-auto max-w-[1300px] '>{children}</div>;
    </div>
  );
};

export default MainContainer;
