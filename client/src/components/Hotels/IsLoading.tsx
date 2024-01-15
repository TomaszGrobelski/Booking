import { Icon } from '@iconify/react';

import { LoadingFlexBox } from '../../styles/Hotels/IsLoading.styles';

const IsLoading = () => {
  return (
    <LoadingFlexBox>
      Data is loading... <Icon icon='eos-icons:bubble-loading' color='#116149' />
    </LoadingFlexBox>
  );
};

export default IsLoading;
