import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setPersons } from '../../../features/booking/bookingSlice';
import ButtonSubmit from '../ButtonSubmit';
import Counter from './Counter';

interface GuestRoomSelectorProps {
  setVisibleGuestSelector: (value: boolean) => void;
}
const GuestRoomSelector = ({ setVisibleGuestSelector }: GuestRoomSelectorProps) => {
  const dispatch = useDispatch();

  const [adults, setAdults] = useState<number>(0);
  const [childrens, setChildrens] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(0);

  const handlePersonsSubmit = () => {
    dispatch(setPersons({ adults, childrens, rooms }));
    setVisibleGuestSelector(false);
  };
  return (
    <div className="absolute top-9 flex flex-col gap-2 px-10 py-4 shadow-2xl border-mainColor border-x-[2px] border-b-[2px] w-[310px]">
      <div className="flex gap-2">
        <p className="w-1/2">Adults</p>
        <Counter
          value={adults}
          onIncrement={() => setAdults(adults + 1)}
          onDecrement={() => setAdults(adults - 1)}
        />
      </div>
      <div className="flex gap-2">
        <p className="w-1/2">Childrens</p>
        <Counter
          value={childrens}
          onIncrement={() => setChildrens(childrens + 1)}
          onDecrement={() => setChildrens(childrens - 1)}
        />
      </div>
      <div className="flex gap-2">
        <p className="w-1/2">Rooms</p>
        <Counter
          value={rooms}
          onIncrement={() => setRooms(rooms + 1)}
          onDecrement={() => setRooms(rooms - 1)}
        />
      </div>
      <ButtonSubmit onClick={handlePersonsSubmit} />
    </div>
  );
};

export default GuestRoomSelector;
