import { useState } from 'react';

const UserPhoto = () => {
  const [image, setImage] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.substr(0, 5) === 'image') {
      const imageUrl = URL.createObjectURL(file) as string;
      setImage(imageUrl);
    } else {
      setImage("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <img className="rounded-full border-[2px] bg-gray-300 border-mainColor w-[200px] h-[200px] mb-4" src={image} alt="User" />
      <label className="w-[200px] h-[40px] border-[2px] flex justify-center items-center mb-4  border-mainColor cursor-pointer font-bold text-mainColor">
        <input
          className="opacity-0 absolute w-[200px] h-[40px]  cursor-pointer"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        Change your photo
      </label>
    </div>
  );
};

export default UserPhoto