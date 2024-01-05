import { Icon } from '@iconify/react';

const Filter = () => {
  return (
    <div className="flex justify-center my-4 ">
      <div className="flex  rounded-xl border-mainColor border-[3px]">
        <div className="flex items-center pl-1">
          <Icon icon="ion:bed" color="#116149" />
          <input
            className="h-[95%] ml-2 outline-none"
            type="text"
            id="city-search"
            name="city"
            placeholder="Wpisz nazwę miasta"
          />
        </div>
        <button className="flex gap-1 items-center border-l-[3px] border-mainColor px-2">
          <Icon icon="material-symbols:date-range" color="#116149" />
          <p>Check-in Date — Check-out Date</p>
        </button>
        <button className="border-x-[3px]  border-mainColor p-2">
          <div className="flex items-center gap-1">
            <Icon icon="ic:sharp-person" color="#116149" />
            <p>2 adults - 0 children - 1 room</p>
          </div>
        </button>
        <button className="p-2 m-2 bg-mainColor rounded-2xl text-white px-6 ml-4">Search</button>
      </div>
    </div>
  );
};

export default Filter;
