interface ModalPasswordChangeProps {
  setIsModalOpen: (value: boolean) => void;
}
const ModalPasswordChange = ({ setIsModalOpen }: ModalPasswordChangeProps) => {
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className=" z-0 fixed h-screen w-screen left-0 top-0 backdrop-blur-sm flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-[300px] p-4 text-[18px] h-[350px] border-[1px] border-mainColor rounded-2xl shadow-xl"
      >
        <h3 className=" text-center my-4">Change your Password</h3>
        <form action="">
          <div>
            <label htmlFor="old-password">Old password:</label>
            <input type="password" name="" id="old-password" />
          </div>
          <div>
            <label htmlFor="old-password">Again old password:</label>
            <input type="password" name="" id="old-password" />
          </div>
          <div>
            <label htmlFor="">New password:</label>
            <input type="password" name="" id="" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalPasswordChange;
