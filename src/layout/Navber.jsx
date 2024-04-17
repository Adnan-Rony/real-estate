import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authintication/AuthProvider";
import { NavLink } from "react-router-dom";
const Navber = () => {
  const { user, logout, googleLogin } = useContext(AuthContext);

  const handleesignOut = () => {
    logout();
  };

  return (
    <div>
      <div className="navbar   ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to={"/login"}></Link>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                   
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                   
                    <NavLink
                      to="/contact"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                   
                    <NavLink
                      to="/about"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">Real-Estate</Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
          <li>
              
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
                }
              >
                About
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "border-b-4 border-l-2 border-r-2  border-[#F54748]" : ""
                }
              >
                Contact
              </NavLink>
            </li>
           
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <img className="w-14 rounded-full" src={user.photoURL} alt="" />
          )}
        </div>
        <div>
          <div>
            {user ? (
              <button
                onClick={handleesignOut}
                className="btn btn-sm btn-outline bg-[#F54748]"
              >
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
      </div>
       
    </div>
  );
};

export default Navber;
