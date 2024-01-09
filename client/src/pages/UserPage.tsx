
import Menu from '../components/Menu/Menu';


const UserPage = () => {
    
  return (
    <>
      <Menu />
      <div className="mx-auto max-w-[1300px]">
        <div>
          <div>zdj</div>
          <div>
            <p>username:</p>
            <p>mail:</p>
            <button>change your password</button>
          </div>
        </div>
        <div>Booked</div>
        <div>Favorite</div>
      </div>
    </>
  );
};

export default UserPage;
