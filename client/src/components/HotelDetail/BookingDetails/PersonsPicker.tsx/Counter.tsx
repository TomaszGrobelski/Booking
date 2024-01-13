

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => {

  return (
    <div className="flex border-[2px] text-[20px]">
      <button onClick={onDecrement} className="w-10">
        -
      </button>
      <p className="w-5">{value}</p>
      <button onClick={onIncrement} className="w-10">
        +
      </button>
    </div>
  );
};

export default Counter;
