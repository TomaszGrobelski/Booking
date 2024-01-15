const UserHeader = ({ title }: { title: string }) => {
  return (
    <h2 className='my-4'>
      <span className='text-[20px] italic border-mainColor border-b-2'>
        {title}
      </span>
    </h2>
  );
};

export default UserHeader;
