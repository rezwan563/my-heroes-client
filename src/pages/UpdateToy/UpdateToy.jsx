import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { tabTitle } from "../Shared/UseDocumentTitle/GeneralFunctions";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UpdateToy = () => {
    tabTitle('Update Toy - MyHeroes')
    const{ user } = useContext(AuthContext)
    const [toyData, setToyData] = useState(useLoaderData())
    const { _id, sellerName, sellerEmail, toyName, toyPhoto, subCategory, price, rating, quantity, details} = toyData[0]

    const handleUpdateToy = (e) =>{
      event.preventDefault();
      const form = e.target;
      const subCategory = form.subCategory.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const quantity = form.quantity.value;
      const details = form.details.value;
      const updatedInfo = {
       
        price,
        rating,
        quantity,
        details,
      };
      console.log(updatedInfo);
      fetch(`https://assignment-11-my-heroes-server-rezwan563.vercel.app/all_toys/${_id}`,{
        method: "PUT",
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedInfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        
        toast.success("Toy information updated")
      })
    }
  return (
    <div>
      <div className="w-full px-5 my-5  md:w-1/2 md:my-12 md:mx-auto">
        <p className="text-xl md:text-3xl ">Update Toy information</p>
        <form onSubmit={handleUpdateToy}>
          <p className="text-xl font-semibold ">Seller Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mb-5">
            <input
              type="text"
              name="sellerName"
              defaultValue={sellerName}
              disabled
              placeholder="Seller name"
              className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
              required
            />
            <input
              type="text"
              name="sellerEmail"
              defaultValue={sellerEmail}
              disabled
              placeholder="Seller email"
              className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
              required
            />
          </div>
          <hr />
          <p className="text-xl font-semibold md:mt-5">Toy Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2  md:mb-5">
            <input
              type="text"
              name="toyName"
              defaultValue={toyName}
              disabled
              placeholder="Toy name"
              className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
              required
            />
            <input
              type="url"
              name="toyPhoto"
              defaultValue={toyPhoto}
              disabled
              placeholder="Toy photo"
              className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mb-5">
            <input
              type="text"
              name="subCategory"
              defaultValue={subCategory}
              disabled
              placeholder="Sub category"
              className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
              required
            />
            <input
              type="number"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mb-2">
            <input
              type="text"
              name="rating"
              defaultValue={rating}
              placeholder="Rating"
              className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
              required
            />
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Avaiable Quantity"
              className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
              required
            />
          </div>
          <div className="">
            <textarea
              type="text"
              defaultValue={details}
              className="textarea textarea-bordered"
              name="details"
              placeholder="Details"
            ></textarea>
          </div>
          <div className="mb-10">
            <button className="p-3 w-full bg-slate-700 hover:bg-slate-800 text-white rounded-md">
              <input type="submit" value="Update" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
