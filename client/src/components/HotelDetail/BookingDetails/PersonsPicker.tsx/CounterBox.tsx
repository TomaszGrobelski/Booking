interface CounterBoxProps {
  children: React.ReactNode;
}
export const CounterBox = ({ children }: CounterBoxProps) => {
  return (
    <div className='flex gap-2'>
      <p className='w-1/2'>Adults</p>
      {children}
    </div>
  );
};
