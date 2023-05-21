import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";
import { tabTitle } from "../Shared/UseDocumentTitle/GeneralFunctions";

const AllToys = () => {
  tabTitle('All Toys - MyHeroes')
  const [searchItem, setSearchItem] = useState('')
  // const allToys = useLoaderData()
  const [allToys, setAllToys] = useState(useLoaderData())

  const handleSearch = (e) =>{
    e.preventDefault()
    if(searchItem === " " || searchItem === ""){
      return allToys
    }
    fetch(`http://localhost:5000/toys/${searchItem}`)
    .then(res => res.json())
    .then(data => {
      setAllToys(data)
    })
  }


  return (
    <div className="my-12 md:mx-20">
       <div className="mb-2 ">
       <form onSubmit={handleSearch} className="flex justify-end">
       <input type="text"
       onChange={(e) => setSearchItem(e.target.value)}
       name="search"
       placeholder="ex:(avengers, transformers)" className="input input-bordered  max-w-xs" />
        <input className="p-2 mr-2 md:p-3 bg-slate-700 hover:bg-slate-800 rounded-md text-white" type="submit" value="Search" />
       </form>
       </div>
      <table className=" table-fixed w-full md:table-auto   md:w-full">
        <thead>
          <tr className=" md:h-16">
            <th className="">#</th>
            <th className=''>Seller Name</th>
            <th className="">Toy Name</th>
            <th className="">Sub-Category</th>
            <th className="">Price</th>
            <th className="">Avaialbe Qty.</th>
            <th className="">Actions</th>
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
