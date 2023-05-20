import { key } from "localforage";
import React from "react";
import { Link } from "react-router-dom";

const AllToyRow = ({ allToys }) => {

  return (
    <>
      {allToys.map((toy) => {
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
          <tr key={toy._id} className="border border-slate-200 text-center ">
            <td className="border-2">{sellerName}</td>
            <td className="border-2">{toyName}</td>
            <td className="border-2">{subCategory}</td>
            <td className="border-2">{price}</td>
            <td className="border-2">{quantity}</td>
            <td className="border-2">
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
