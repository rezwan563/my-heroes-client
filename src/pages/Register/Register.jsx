import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, createUser, profileUpdate } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        profileUpdate(name, photo)
          .then(() => {
            toast.success("Profile updated");
          })
          .catch((error) => {
            setError(error.message);
            toast.error(`${error.message}`);
          });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`${error.message}`);
      });
  };
  const handlePassword = (e) => {
    const userInput = e.target.value;
    if (!/[A-Z]/.test(userInput)) {
      setError("At least one upper case");
      return;
    } else if (!/[a-z]/.test(userInput)) {
      setError("At least one lower case");
    } else if (!/[0-9]/.test(userInput)) {
      setError("At least one digit");
    } else if (!/[#?!@$%^&*-]/.test(userInput)) {
      setError("At least one special character");
    } else if (!/.{6,}/.test(userInput)) {
      setError("Minimum six in length");
    } else {
      setError("");
    }
    setPassword(userInput);
  };

  return (
    <div>
      <div className="  flex justify-center md:mt-5">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleRegister} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Please register
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your photo
              </label>
              <input
                type="url"
                name="photo"
                id="photo"
                placeholder="http://photourl.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
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
                onChange={handlePassword}
                type="password"
                name="password"
                id="password"
                placeholder="6 characters"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            
              {error && (
                <p className="text-red-500">
                  <small>{error}</small>
                </p>
              )}
            
            
            <button
              type="submit"
              className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Register
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-red-700 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
