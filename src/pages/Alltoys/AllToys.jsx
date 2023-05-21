import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";
import { tabTitle } from "../Shared/UseDocumentTitle/GeneralFunctions";
import MyToys from "../MyToys/MyToys/MyToys";

const AllToys = () => {
  tabTitle('All Toys - MyHeroes')
  const [searchItem, setSearchItem] = useState('')
  const showAllToys = useLoaderData()
  const [allToys, setAllToys] = useState(useLoaderData())
  const [isSearch, setIsSearch] = useState(false)

  const handleSearch = (e) =>{
    e.preventDefault()
    if(searchItem === " " || searchItem === ""){
      return allToys
    }
    fetch(`https://assignment-11-my-heroes-server-rezwan563.vercel.app/toys/${searchItem}`)
    .then(res => res.json())
    .then(data => {
      setAllToys(data)
      setIsSearch(true)
    })
  }


  return (
    <div className="my-12 md:mx-20">
       <div className="mb-2 ">
       {
        isSearch &&  <p className="text-2xl">Found matching: {allToys.length}</p>
       }
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
          <tr className="odd:bg-slate-200 md:h-16">
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
