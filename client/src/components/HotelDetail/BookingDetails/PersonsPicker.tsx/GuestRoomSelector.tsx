import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setPersons, setTotalPrice } from '../../../../features/booking/bookingSlice';
import { RootState } from '../../../../state/store';
import ButtonSubmit from '../ButtonSubmit';
import Counter from './Counter';

interface GuestRoomSelectorProps {
  setVisibleGuestSelector: (value: boolean) => void;
}
const GuestRoomSelector = ({ setVisibleGuestSelector }: GuestRoomSelectorProps) => {
  const dispatch = useDispatch();
  const booking = useSelector((state: RootState) => state.booking);
  const hotelDetails = useSelector((state: RootState) => state.hotelDetails);
  const [adults, setAdults] = useState<number>(booking.adults);
  const [childrens, setChildrens] = useState<number>(booking.childrens);
  const [roomStandard, setRoomStandard] = useState<number>(booking.roomStandard);
  const [roomDelux, setRoomDelux] = useState<number>(booking.roomDelux);

  const handlePersonsSubmit = () => {
    dispatch(setPersons({ adults, childrens, roomStandard, roomDelux }));
    const standardPrice = hotelDetails.roomType?.standard ?? 0;
    const deluxPrice = hotelDetails.roomType?.delux ?? 0;
    const totalPrice = roomStandard * standardPrice + roomDelux * deluxPrice;

    dispatch(setTotalPrice(totalPrice));
    setVisibleGuestSelector(false);
  };

  return (
    <div className='absolute top-9 bg-white flex flex-col gap-2 px-10 py-4 shadow-2xl border-mainColor border-x-[2px] border-b-[2px] w-[310px]'>
      <div className='flex gap-2'>
        <p className='w-1/2'>Adults</p>
        <Counter
          value={adults}
          onIncrement={() => setAdults(adults + 1)}
          onDecrement={() => setAdults(adults > 0 ? adults - 1 : 0)}
        />
      </div>
      <div className='flex gap-2'>
        <p className='w-1/2'>Childrens</p>
        <Counter
          value={childrens}
          onIncrement={() => setChildrens(childrens + 1)}
          onDecrement={() => setChildrens(childrens > 0 ? childrens - 1 : 0)}
        />
      </div>
      <div className='flex gap-2'>
        <p className='w-1/2'>RoomStandard</p>
        <Counter
          value={roomStandard}
          onIncrement={() => setRoomStandard(roomStandard + 1)}
          onDecrement={() => setRoomStandard(roomStandard > 0 ? roomStandard - 1 : 0)}
        />
      </div>
      <div className='flex gap-2'>
        <p className='w-1/2'>RoomDelux</p>
        <Counter
          value={roomDelux}
          onIncrement={() => setRoomDelux(roomDelux + 1)}
          onDecrement={() => setRoomDelux(roomDelux > 0 ? roomDelux - 1 : 0)}
        />
      </div>
      <ButtonSubmit onClick={handlePersonsSubmit} />
    </div>
  );
};

export default GuestRoomSelector;
