const MainContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='mx-auto max-w-[1300px]'>{children}</div>;
};

export default MainContainer;
