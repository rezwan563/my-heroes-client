import React, { useState } from "react";
import { FcEmptyTrash } from "react-icons/fc";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const MyToys = () => {
    const [selected, setSelected] = useState([])
    
    const hadnleSort = (e) =>{
        const sortBy = e.target.value;
        console.log(sortBy);
    }
  return (
    <div>
      <div className="mt-12 mx-2 md:mx-36">
        <div className="mb-2 text-end">
          <select className="select select-bordered w-full max-w-xs" onChange={hadnleSort}>
            <option value="all"  className="">Select</option>
            <option  value='ascending'>Ascending</option>
            <option value='descending'>Descending</option>
          </select>
        </div>
        <table className="border-collapse border-slate-400  md:w-full mb-12">
          <thead>
            <tr className="border border-slate-400 md:h-16">
              <th className="border-2">Seller</th>
              <th className="border-2">Toy Name</th>
              <th className="border-2">Sub-Category</th>
              <th className="border-2">Price</th>
              <th className="border-2">Avaialbe Qty.</th>
              <th className="border-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-slate-200 text-center ">
              <td className="border-2">John</td>
              <td className="border-2">Iron Man</td>
              <td className="border-2">Marvel</td>
              <td className="border-2">250</td>
              <td className="border-2">2000</td>
              <td className="border-2">
                <button className="">
                  <FiTrash2 className="text-red-700 text-2xl mb-2"></FiTrash2>
                  <FiEdit className="text-blue-700 text-2xl"></FiEdit>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
