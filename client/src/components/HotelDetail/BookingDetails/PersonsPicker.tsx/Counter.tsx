import { CounterValue } from '../../../../styles/HotelDetails/BookingDetails/PersonsPicker/Counter.styles';
import {
  CounterDecrementButton,
  CounterFlexBox,
  CounterIncrementButton,
} from '../../../../styles/HotelDetails/BookingDetails/PersonsPicker/Counter.styles';

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
