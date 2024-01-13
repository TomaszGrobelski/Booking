interface FilterInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput = ({ onChange }: FilterInputProps) => {
  return (
    <input
      className="h-[95%] ml-2 outline-none"
      type="text"
      id="city-search"
      name="city"
      placeholder="Entry City Name"
      onChange={onChange}
    />
  );
};

export default FilterInput;
