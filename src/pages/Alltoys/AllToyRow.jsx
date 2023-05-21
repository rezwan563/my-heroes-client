import React from "react";
import { Link } from "react-router-dom";

const AllToyRow = ({ allToys }) => {

  return (
    <>
      {allToys.map((toy, index) => {
        const {
          _id,
          sellerName,
          sellerEmail,
          toyPhoto,
          toyName,
          subCategory,
          price,
          quantity,
          rating,
          details,
        } = toy;
        return (
          <tr key={toy._id}  className="border-b-2 odd:bg-white even:bg-slate-50 text-center ">
            <td className="">{index + 1}</td>
            <td className="">{sellerName}</td>
            <td className="">{toyName}</td>
            <td className="">{subCategory}</td>
            <td className="">{price}</td>
            <td className="">{quantity}</td>
            <td className="">
              <Link to={`/toy/${_id}`}>
                <button className="md:px-3 md:py-2 text-white bg-zinc-600 rounded-md hover:bg-zinc-400 dark:bg-white dark:text-black my-2">
                  Details
                </button>
              </Link>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default AllToyRow;
