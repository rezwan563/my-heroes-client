import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const NavigationBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Logout successful");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  return (
    <div>
      {/* <h2>This is navbar</h2> */}
      <nav className="">
        <div className="px-2 py-3 md:px-20 md:py-5 mx-auto  flex justify-between items-center shadow-md md:shadow-lg z-10 ">
          <Link to="/" className="text-3xl ">
            <p className="font-bold">
              <span className="text-white bg-red-600 py-1">My</span>
              <span className="text-slate-500 border-y-red-500 border-y-2">
                Heroes
              </span>
            </p>
          </Link>
          {/* `md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-cyan-400 w-full left-0 md:w-auto py-4 md:py-0 pl-8 md:pl-0 md:opacity-100 opacity-0 ${isClicked ? 'opacity-100 duration-500' : 'top-80'}` */}
          {/* -translate-y-60 ${isClicked ? "" : "hidden md:block"} */}
          <ul
            className={` md:flex md:static absolute left-0 z-10  md:gap-5 w-full md:w-auto  ${
              isClicked
                ? "translate-y-20  duration-700  bg-slate-300 md:bg-transparent    px-5 "
                : "-translate-y-48 md:translate-y-0 duration-300"
            }`}
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/all_toys">All Toys</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/add_toy">Add Toy</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            {user && (
              <img
                title={user.displayName}
                className="w-10 h-10 rounded-full border-red-400 border-2 shadow-md"
                src={user.photoURL}
                alt=""
              />
            )}
            {user ? (
              <button onClick={handleLogout} className="px-3 bg-red-700 text-white py-2 rounded-md shadow-md">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="px-3 bg-red-700 text-white py-2 rounded-md shadow-md">
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden">
              {isClicked ? (
                <IoCloseCircleOutline
                  onClick={() => setIsClicked(!isClicked)}
                  className="text-3xl"
                ></IoCloseCircleOutline>
              ) : (
                <IoMenu
                  onClick={() => setIsClicked(!isClicked)}
                  className="text-3xl"
                ></IoMenu>
              )}
            </span>
          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
