import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const MyToysRow = ({ myToys, hadnleEdit, handleDelete }) => {
  return (
    <>
      {myToys.map((toy) => {
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
              <button className="">
                <FiTrash2
                  onClick={handleDelete}
                  className="text-red-700 text-2xl mb-2"
                ></FiTrash2>
                <FiEdit
                  onClick={hadnleEdit}
                  className="text-blue-700 text-2xl"
                ></FiEdit>
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default MyToysRow;
