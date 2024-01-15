import { CounterValue } from '../../../../styles/HotelDetails/BookingDetails/PersonsPicker/Counter.styles';
import { CounterIncrementButton } from '../../../../styles/HotelDetails/BookingDetails/PersonsPicker/Counter.styles';
import { CounterDecrementButton } from '../../../../styles/HotelDetails/BookingDetails/PersonsPicker/Counter.styles';
import { CounterFlexBox } from '../../../../styles/HotelDetails/BookingDetails/PersonsPicker/Counter.styles';

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => {
  return (
    <CounterFlexBox>
      <CounterDecrementButton onClick={onDecrement}>-</CounterDecrementButton>
      <CounterValue>{value}</CounterValue>
      <CounterIncrementButton onClick={onIncrement}>+</CounterIncrementButton>
    </CounterFlexBox>
  );
};

export default Counter;
