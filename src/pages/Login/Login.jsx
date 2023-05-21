import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ImGoogle } from "react-icons/im";
import { tabTitle } from "../Shared/UseDocumentTitle/GeneralFunctions";

const Login = () => {
  tabTitle('Login - MyHeroes')
  const { user, emailLogin, googleLogin } = useContext(AuthContext);
  const [isHidden, setIsHidden] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    emailLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from)
        toast.success(`Welcome, ${loggedUser.displayName} `);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from)
        toast.success(`Welcome ${loggedUser.displayName}`);
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="  flex justify-center md:mt-5">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleLogin} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Please login
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type={isHidden ? "password" : "text"}
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              {error && (
                <p className="text-red-500">
                  <small>{error}</small>
                </p>
              )}
              <div className="flex justify-end">
                {isHidden ? (
                  <FaEyeSlash
                    onClick={() => setIsHidden(!isHidden)}
                  ></FaEyeSlash>
                ) : (
                  <FaEye onClick={() => setIsHidden(!isHidden)}></FaEye>
                )}
              </div>
            </div>
            {/* <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
             
            </div> */}
            <button
              type="submit"
              className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Login to your account
            </button>
            
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/register"
                state={{from: location}}
                className="text-red-700 hover:underline dark:text-red-500"
              >
                Create account
              </Link>
            </div>
          </form>
          <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="w-full flex justify-center items-center gap-2 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-200 dark:hover:bg-red-700 dark:focus:ring-slate-500"
            >
              <ImGoogle></ImGoogle> Continue with Google
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
