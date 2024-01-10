
import Menu from '../components/Menu/Menu';
import { Skeleton } from "@/components/ui/skeleton"


const UserPage = () => {
    
  return (
    <>
      <Menu />
      <div className="mx-auto max-w-[1300px]">
        <div className='grid grid-cols-2 my-10'>
          <div className='flex justify-center items-center'>
            <img className=' rounded-full w-[200px] h-[200px]' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div>
            <p>username:</p>
            <p>mail:</p>
            <button>Change your password</button>
          </div>
        </div>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <div>Booked</div>
        <div>Favorite</div>
      </div>
    </>
  );
};

export default UserPage;
