import React from "react";

const AllToys = () => {
  return (
    <div className="mt-12 md:mx-20">
       <div className="mb-2 ">
       <form className="flex justify-end">
       <input type="text" placeholder="Toy name" className="input input-bordered w-full max-w-xs" />
        <button className="p-3 bg-red-700 hover:bg-red-800 rounded-md text-white"><input type="submit" value="Search" /></button>
       </form>
       </div>
      <table className="border-collapse border-slate-400  md:w-full">
        <thead>
          <tr className="border border-slate-400 md:h-16">
            <th className='border-2'>Seller</th>
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
            <td className="border-2"><button className="md:px-3 md:py-2 text-white bg-red-500">Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
