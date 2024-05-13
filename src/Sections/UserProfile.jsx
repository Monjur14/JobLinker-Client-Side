import UseAuth from "../CustomHook/UseAuth";
const UserProfile = () => {
    const { user } = UseAuth()
    console.log(user)
  return (
    <div className="contain flex flex-col items-center pt-10 2xl:pt-16">
      <img src={user.photoURL} alt="" className="w-44 h-44 rounded-full border-4 border-indigo-700"/>
      <h1 className="text-xl font-semibold mt-5">User Name: {user.displayName}</h1>
      <h1 className="text-xl font-semibold mt-1">Email: {user.email}</h1>
    </div>
  )
}

export default UserProfile
