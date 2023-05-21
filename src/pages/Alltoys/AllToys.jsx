import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";
import { tabTitle } from "../Shared/UseDocumentTitle/GeneralFunctions";

const AllToys = () => {
  tabTitle('All Toy - MyHeroes')
  const allToys = useLoaderData()

  const handleSearch = (e) =>{
    e.preventDefault()
    const form = e.target;
    const searchBy = form.search.value;
    console.log(searchBy);
  }


  return (
    <div className="my-12 md:mx-20">
       <div className="mb-2 ">
       <form onSubmit={handleSearch} className="flex justify-end">
       <input type="text"
       name="search"
       placeholder="Toy name" className="input input-bordered  max-w-xs" />
        <button className="p-2 mr-2 md:p-3 bg-slate-700 hover:bg-slate-800 rounded-md text-white"><input type="submit" value="Search" /></button>
       </form>
       </div>
      <table className="border-collapse table-fixed w-full md:table-auto border-slate-400  md:w-full">
        <thead>
          <tr className="border border-slate-400 md:h-16">
            <th className='border-2'>Seller Name</th>
            <th className="border-2">Toy Name</th>
            <th className="border-2">Sub-Category</th>
            <th className="border-2">Price</th>
            <th className="border-2">Avaialbe Qty.</th>
            <th className="border-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Create dynamic row with data */}

          <AllToyRow allToys={allToys}></AllToyRow>


        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
