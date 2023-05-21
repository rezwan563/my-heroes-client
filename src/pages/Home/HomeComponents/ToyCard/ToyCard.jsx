import React, { useContext } from "react";
import img from '/placeholder.jpg'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../provider/AuthProvider";

const ToyCard = ({singleToy}) => {
  const {user} = useContext(AuthContext)
  const {
    _id,
    sellerName,
    sellerEmail,
    toyName,
    toyPhoto,
    subCategory,
    price,
    rating,
    quantity,
    details,
  } = singleToy

  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 w-fit md:w-36 rounded-t-lg"
            src={toyPhoto}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {toyName}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
          <p>Rating: {rating}</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            {/* TODO dynamic route */}
            <button onClick={() => !user && toast.warning("You have to loging first to view details")}>  <Link
              to={`toy/${_id}`}
              className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              View Details
            </Link></button>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
