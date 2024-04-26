import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMinus } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { CgMail } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { Tooltip  } from 'react-tooltip'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [openProfile, setOpenProfile] = useState(false)
    const [open, setOpen] = useState(false)
    const hangleLogOut = () => {
        logOut()
    }
    const styleNav = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#41B06E" : "",
        };
    }
    return (
        <div className="bg-base-100 shadow-lg z-10 fixed left-0 right-0">
            <div className="navbar container mx-auto px-4">
                <div onClick={() => setOpen(!open)} className="text-2xl lg:hidden mr-3">
                    {
                       open ? <FaMinus></FaMinus> : <FaBars></FaBars>
                    }
                </div>
                <div className="navbar-start">
                    <a className="text-3xl font-bold cursor-pointer">My <span className="text-green-600">Arts</span></a>
                </div>


                <div className={`navbar-center md:flex md:items-center md:static absolute transition-all z-[-1] md:z-auto left-0  bg-white md:bg-transparent w-full md:w-auto  md:py-0 text-gray-500  py-4 top-16 ${open ? 'block' : 'hidden'} duration-500 md:shadow-none shadow-xl`}>
                    <ul className="text-lg font-medium flex lg:flex-row flex-col md:space-y-0 md:space-x-6 space-x-0 space-y-4 py-4 pl-5">
                        <li><NavLink to={'/'} style={styleNav}>Home</NavLink></li>
                        <li><NavLink to={'/allArts'} style={styleNav}>All Art & craft Items</NavLink></li>
                        <li><NavLink to={'/AddArts'} style={styleNav}>Add Craft Item</NavLink></li>
                        <li><NavLink to={'/myArts'} style={styleNav}>My Art & Craft List</NavLink></li>
                    </ul>
                </div>


                <div className="navbar-end space-x-2">
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" value="dracula" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    {


                        user ?
                            <>
                                <Tooltip id="my-tooltip" />
                                <button data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user.displayName ? user.displayName : 'Name Not Found'}
                                    data-tooltip-place="top"
                                    onClick={() => setOpenProfile(!openProfile)} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src={user.photoURL ? user.photoURL : '../../src/assets/User.png'} />
                                </button>
                                <div className={`z-50 ${openProfile ? 'block' : 'hidden'}  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-5 top-10`}>
                                    <div className="px-4 py-3 space-y-3">
                                        <div className="flex gap-3 items-center my-4">

                                            <img className="w-10 rounded-full" src={user?.photoURL ? user.photoURL : '../../src/assets/User.png'} alt="" />
                                            <p className="block text-base text-gray-900 dark:text-white font-bold">{user.displayName ? user.displayName : 'Name Not Found'}</p>
                                        </div>
                                        <div className="flex items-center gap-3 my-4">
                                            <CgMail className="text-xl"></CgMail>
                                            <p className="block text-base  text-gray-500 truncate dark:text-gray-400">{user.email}</p>
                                        </div>

                                        <div className="flex items-center gap-3 my-4  pt-3 text-blue-500">
                                            <IoIosLogOut className="text-xl"></IoIosLogOut>
                                            <button onClick={hangleLogOut} className="text-lg font-medium duration-300 text-center">LogOut</button>
                                        </div>
                                    </div>
                                </div>
                            </>

                            :
                            <Link to={'/login'} className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;