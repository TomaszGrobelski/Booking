import { useState } from 'react';

import { UserImage, UserInput, UserLabel, UserPhotoGrid } from '../../styles/Profil/UserPhoto.styles';

const UserPhoto = () => {
  const [image, setImage] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.substr(0, 5) === 'image') {
      const imageUrl = URL.createObjectURL(file) as string;
      setImage(imageUrl);
    } else {
      setImage('');
    }
  };

  return (
    <UserPhotoGrid>
      <UserImage src={image} alt='User' loading='lazy' />
      <UserLabel htmlFor='fileInput'>
        <UserInput id='fileInput' type='file' accept='image/*' onChange={handleImageChange} />
        Change your photo
      </UserLabel>
    </UserPhotoGrid>
  );
};

export default UserPhoto;
