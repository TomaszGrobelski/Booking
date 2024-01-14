interface FilterInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput = ({ onChange }: FilterInputProps) => {
  return (
    <input
      className='h-[95%] ml-2 outline-none w-[300px]'
      type='text'
      id='city-search'
      name='city'
      placeholder='Enter the city for your accommodation'
      onChange={onChange}
    />
  );
};

export default FilterInput;
