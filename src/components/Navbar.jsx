import React, { use } from "react";
import { NavLink } from "react-router";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";

function Navbar() {
  const { authUser, logOutUser } = use(AuthContext);

  const handleLogOut = ()=>{
    logOutUser().then(()=>{
      toast.success("User Logout Succesfully")
    })
    .catch((err)=>{
      toast.error("Some Error hanppend when try to logout")
      console.error(err);
      
    })
  }

  const links = (
    <>
      {authUser ? (
        <li>
          <a>Dashboard</a>
        </li>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/registration"}>Registration</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end flex gap-5">
            {authUser ? (
              <>
              <p className="font-bold">{authUser.email}</p>
                <button
                  onClick={handleLogOut}
                  className="btn btn-warning font-bold"
                  type="button"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className={"btn btn-secondary"} to={"/login"}>
                  Login
                </NavLink>
                <NavLink className={"btn btn-primary"} to={"/registration"}>
                  Registration
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
