import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)



    return (
        <div className="navbar bg-[#011b1cf1] backdrop-blur-lg lg:px-10 lg:py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 font-semibold shadow">

                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contactUs">Contact Us</NavLink>
                        {
                            user && <>
                                <NavLink to="/myprofile">My Profile</NavLink>
                            </>
                        }

                    </ul>
                </div>
                <Link to="/" className="font-extrabold text-[#ff7029] text-xl">CareerAlly</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-white">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contactUs">Contact Us</NavLink>
                    {
                        user && <>
                            <NavLink to="/myprofile">My Profile</NavLink>
                        </>
                    }

                </ul>
            </div>
            <div className="navbar-end">

                {user?.email && (
                    <div className="relative group w-14 h-14 mr-2 border-2 border-[#ff7029] rounded-full">

                        <img
                            className="w-full h-full rounded-full"
                            src={user.photoURL}
                            alt={`${user.displayName}'s Avatar`}
                        />

                        <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-200">
                            {user.displayName}
                        </div>
                    </div>
                )}

                {
                    user && user?.email ? (

                        <button onClick={logOut} className="btn bg-[#ff7029] hover:bg-orange-600 border-none text-white">LogOut</button>

                    ) : (<Link to={"/auth/login"} className="btn bg-[#ff7029] hover:bg-orange-600 border-none text-white">Login</Link>)
                }

            </div>
        </div>
    );
};

export default Navbar;