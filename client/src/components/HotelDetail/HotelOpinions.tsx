import { useSelector } from 'react-redux';

import { RootState } from '../../state/store';

const HotelOpinions = () => {
  const hotelDetails = useSelector((state: RootState) => state.hotelDetails);

  return (
    <div className="p-4 shadow-xl mx-4 rounded-lg my-10">
      <h3 className="my-4">
        <span className="text-[20px] italic border-mainColor border-b-2">Opinions</span>
      </h3>
      {hotelDetails.opinion?.map((opin) => {
        return (
          <div className="my-4 shadow-xl rounded-xl p-2">
            <div className='flex items-center gap-2'>
              <div className=" rounded-full bg-gray-400 w-6 h-6"></div>
              <span>Anonymous user</span>
            </div>
            <p>{opin}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HotelOpinions;
