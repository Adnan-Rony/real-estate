import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Importing Link and NavLink from React Router
import { AuthContext } from '../authintication/AuthProvider';

const Navbar = () => {
  const { user, logout, googleLogin } = useContext(AuthContext);

  const handleSignOut = () => {
    logout();
  };

  return (
    <div className="navbar">
      {/* Start of navbar-start section */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Dropdown button for small devices */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {/* Dropdown menu */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {/* Content for small device navbar */}
            <ul>
               <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
            }>
              Home
            </NavLink>
          </li>
               <li>
            <NavLink to="/contact" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
            }>
              Contact
            </NavLink>
          </li>
               <li>
            <NavLink to="/login" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
            }>
              Login
            </NavLink>
          </li>
          </ul>
          </ul>
        </div>
        {/* Logo or brand */}
        <Link to={"/"}>
          <img className="w-20 rounded-full" src="https://i.ibb.co/5GDKNwj/3-removebg-preview.png" alt="" />
        </Link>
      </div>
      {/* End of navbar-start section */}

      {/* Start of navbar-center section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Navigation links */}
          <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
            }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
            }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
            }>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* End of navbar-center section */}

      {/* Start of navbar-end section */}
      <div className="navbar-end flex gap-2">
        
        {user && (
          <img className="w-12 rounded-full" src={user.photoURL} alt="" />
        )}
        <div>
          {/* Conditional rendering of Sign Out or Login button */}
          {user ? (
            <button onClick={handleSignOut} className="btn btn-sm btn-outline text-white  bg-[#F54748]">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-outline text-white bg-[#FDC55E]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* End of navbar-end section */}
    </div>
  );
};

export default Navbar;
