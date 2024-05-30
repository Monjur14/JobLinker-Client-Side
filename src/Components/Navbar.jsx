import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../CustomHook/UseAuth";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNavbar = () => {
        setNav(!nav)
    }
    const {logout, user} = UseAuth()
  return (
    <div className="w-full  bg-white  zIndex">
    <div className="contain flex justify-between items-center py-2 lg:py-3 px-3 2xl:py-4 lg:px-0">
      <Link to={"/"} data-tooltip-id="my-tooltip" data-tooltip-content="JobLinker">
      <img src="logo.png" alt="" className="w-36 md:w-48 2xl:w-48"/>
      </Link>
      <Tooltip id="my-tooltip" className="z-50"/>
      <ul className="gap-5 items-center text-xl hidden lg:flex"> 
        <NavLink to={"/"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-indigo-700" : "cursor-pointer"}>Home</NavLink>
        <NavLink to={"/alljobs"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-indigo-700" : "cursor-pointer"}>All Jobs</NavLink>
        {user && <NavLink to={"/appliedjobs"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-indigo-700" : "cursor-pointer"}>Applied Jobs</NavLink>}
        {user && <NavLink to={"/addjob"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-indigo-700" : "cursor-pointer"}>Add Job</NavLink>}
        {user && <NavLink to={"/myjobs"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-indigo-700" : "cursor-pointer"}>My Jobs</NavLink>}
        <NavLink to={"/blogs"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-indigo-700" : "cursor-pointer"}>Blogs</NavLink>
        {user && <NavLink to={"/userprofile"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-indigo-700" : "cursor-pointer"}>User Profile</NavLink>}
      </ul>
      <div className="flex gap-4">
      <Tooltip id="my-tooltip2" className="z-50"/>
      {
        user?.email ? <div className="flex justify-end flex-1 lg:flex-none gap-2 lg:mr-0">
          <img src={user.photoURL || "https://i.ibb.co/N6p8fKX/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo.jpg"} data-tooltip-id="my-tooltip4" data-tooltip-content={user.displayName}  alt="" className="w-10 h-10 border-2 border-indigo-600 rounded-full cursor-pointer justify-self-end hidden lg:block" /> <Tooltip id="my-tooltip4" className="z-50"/><Link to={"/"}><button data-tooltip-id="my-tooltip3" data-tooltip-content="Logout Now" onClick={logout} className="bg-indigo-700 text-white font-semibold text-lg px-5 py-1 rounded-md hidden lg:block">Logout</button></Link> <Tooltip id="my-tooltip3" className="z-50"/></div> : <div className="hidden lg:flex gap-4">
          <Link to={"/login"}><button className="border-indigo-700 border-2 px-5 py-1 rounded-md text-lg font-semibold">Login</button></Link>
          <Link to={"/register"} className="bg-indigo-700 text-white font-semibold text-lg px-5 py-1 rounded-md">Register</Link>
        </div>
      }
      </div>
      
      <h1 className="text-[2.2rem] block lg:hidden cursor-pointer ml-2" onClick={toggleNavbar}><GiHamburgerMenu /></h1>
        <div className={`contain bg-white h-screen w-full ${nav ? "fixed" : "hidden"} top-0 left-0 flex flex-col justify-center z-50`}>
            <h1 className="text-[3rem] absolute top-3 right-3 cursor-pointer" onClick={toggleNavbar}><MdOutlineClose /></h1>
            <ul className="gap-5 items-center text-2xl flex flex-col mb-5">
            <NavLink to={"/"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-cyan-700" : "cursor-pointer"} onClick={toggleNavbar}>Home</NavLink>
            <NavLink to={"/alljobs"} className={({isActive}) => isActive ? "font-bold cursor-pointer text--700" : "cursor-pointer"} onClick={toggleNavbar}>All Jobs</NavLink>
        {user && <NavLink to={"/appliedjobs"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-cyan-700" : "cursor-pointer"} onClick={toggleNavbar}>Applied Jobs</NavLink>}
        {user && <NavLink to={"/addjob"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-cyan-700" : "cursor-pointer"} onClick={toggleNavbar}>Add Job</NavLink>}
        {user && <NavLink to={"/myjobs"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-cyan-700" : "cursor-pointer"} onClick={toggleNavbar}>My Jobs</NavLink>}
        <NavLink to={"/blogs"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-cyan-700" : "cursor-pointer"} onClick={toggleNavbar}>Blogs</NavLink>
        {user && <NavLink to={"/userprofile"} className={({isActive}) => isActive ? "font-bold cursor-pointer text-cyan-700" : "cursor-pointer"} onClick={toggleNavbar}>User Profile</NavLink>}
            </ul>
            {
        user?.email ? <div className="flex gap-2 w-full justify-center mt-5">
          <Link to={"/"}><button onClick={logout} className="bg-indigo-700 text-white font-semibold text-xl px-6 py-2 rounded-md mx-">Logout</button></Link></div> : <div className="flex flex-col items-center mt-4 gap-4">
          <Link to={"/login"}><button className="border-indigo-700 border-2 w-40 text-center py-2 rounded-md text-xl font-semibold" onClick={toggleNavbar}>Login</button></Link>
          <Link to={"/register"} className="bg-indigo-700 text-white font-semibold text-xl w-40 text-center py-2 rounded-md" onClick={toggleNavbar}>Register</Link>
        </div>
      }
        </div>
        
    </div>
    </div>
  )
}

export default Navbar
