import LoginRegisterButton from "../../../styles/LoginRegisterButton"

const User = () => {
  return (
    <div className="flex gap-4">
      <LoginRegisterButton children="LogIn" />
      <LoginRegisterButton children="Register" />
    </div>
  )
}

export default User