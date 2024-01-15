import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setPersons, setTotalPrice } from '../../../../features/booking/bookingSlice';
import { RootState } from '../../../../state/store';
import ButtonSubmit from '../ButtonSubmit';
import Counter from './Counter';
import { CounterBox } from './CounterBox';
import { GuestRoomFlexBox } from '../../../../styles/HotelDetails/BookingDetails/PersonsPicker/GuestRoomSelector.styles';

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
    <GuestRoomFlexBox>
      <CounterBox>
        <Counter
          value={adults}
          onIncrement={() => setAdults(adults + 1)}
          onDecrement={() => setAdults(adults > 0 ? adults - 1 : 0)}
        />
      </CounterBox>
      <CounterBox>
        <Counter
          value={childrens}
          onIncrement={() => setChildrens(childrens + 1)}
          onDecrement={() => setChildrens(childrens > 0 ? childrens - 1 : 0)}
        />
      </CounterBox>
      <CounterBox>
        <Counter
          value={roomStandard}
          onIncrement={() => setRoomStandard(roomStandard + 1)}
          onDecrement={() => setRoomStandard(roomStandard > 0 ? roomStandard - 1 : 0)}
        />
      </CounterBox>
      <CounterBox>
        <Counter
          value={roomDelux}
          onIncrement={() => setRoomDelux(roomDelux + 1)}
          onDecrement={() => setRoomDelux(roomDelux > 0 ? roomDelux - 1 : 0)}
        />
      </CounterBox>
      <ButtonSubmit onClick={handlePersonsSubmit} />
    </GuestRoomFlexBox>
  );
};

export default GuestRoomSelector;
