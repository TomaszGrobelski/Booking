

const AmenitiesHeader = ({title}:{title:string}) => {
  return (
    <h3 className='my-4'>
      <span className='text-[20px] italic border-mainColor border-b-2'>{title}</span>
    </h3>
  );
};

export default AmenitiesHeader;
