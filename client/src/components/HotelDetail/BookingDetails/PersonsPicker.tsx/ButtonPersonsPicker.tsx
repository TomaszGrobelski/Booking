import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../state/store';
import { PersonsPickerButton } from '../../../../styles/HotelDetails/BookingDetails/PersonsPicker/ButtonPersonsPicker.styles';

interface ButtonPersonsPickerProps {
  visibleGuestSelector: boolean;
  setVisibleGuestSelector: (value: boolean) => void;
}
const ButtonPersonsPicker = ({
  setVisibleGuestSelector,
  visibleGuestSelector,
}: ButtonPersonsPickerProps) => {
  const adults = useSelector((state: RootState) => state.booking.adults);
  const childrens = useSelector((state: RootState) => state.booking.childrens);
  const roomStandard = useSelector((state: RootState) => state.booking.roomStandard);
  const roomDelux = useSelector((state: RootState) => state.booking.roomDelux);

  return (
    <PersonsPickerButton onClick={() => setVisibleGuestSelector(!visibleGuestSelector)}>
      <Icon icon='ic:sharp-person' color='#116149' />
      <p>
        {adults} adults - {childrens} childrens - {roomStandard + roomDelux} rooms
      </p>
      <Icon icon='mingcute:down-fill' color='#116149' width={23} />
    </PersonsPickerButton>
  );
};

export default ButtonPersonsPicker;
