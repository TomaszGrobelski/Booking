import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../state/store';

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
  const rooms = useSelector((state: RootState) => state.booking.rooms);

  return (
    <button
      onClick={() => setVisibleGuestSelector(!visibleGuestSelector)}
      className="flex justify-between items-center border-[2px]  border-mainColor py-1 px-2 w-[310px]"
    >
      <Icon icon="ic:sharp-person" color="#116149" />
      <p>
        {adults} adults - {childrens} childrens - {rooms} rooms
      </p>
      <Icon icon="mingcute:down-fill" color="#116149" width={23} />
    </button>
  );
};

export default ButtonPersonsPicker;
