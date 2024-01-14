import { useState } from 'react';

import ButtonPersonsPicker from './ButtonPersonsPicker';
import GuestRoomSelector from './GuestRoomSelector';

const PersonsPicker = () => {
  const [visibleGuestSelector, setVisibleGuestSelector] = useState<boolean>(false);
  return (
    <div className='relative my-2'>
      <ButtonPersonsPicker
        visibleGuestSelector={visibleGuestSelector}
        setVisibleGuestSelector={setVisibleGuestSelector}
      />
      {visibleGuestSelector && (
        <GuestRoomSelector setVisibleGuestSelector={setVisibleGuestSelector} />
      )}
    </div>
  );
};

export default PersonsPicker;
