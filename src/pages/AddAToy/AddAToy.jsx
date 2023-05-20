import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import "./AddAToy.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const sellerName = form.sellerName.value;
    // console.log(sellerName);
    const sellerEmail = form.sellerEmail.value;
    const toyPhoto = form.toyPhoto.value;
    const toyName = form.toyName.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const newToy = {
      sellerName,
      sellerEmail,
      toyPhoto,
      toyName,
      subCategory,
      price,
      rating,
      quantity,
      details,
    };
    fetch("http://localhost:5000/all_toys", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newToy)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          toast.success("Toy added successfully")
        }
      });
  };
  return (
    <div className="w-full px-5 my-5  md:w-1/2 md:my-12 md:mx-auto">
      <form onSubmit={handleAddToy}>
        <p className="text-xl font-semibold ">Seller Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mb-5">
          <input
            type="text"
            name="sellerName"
            defaultValue={user?.displayName}
            placeholder="Seller name"
            className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="sellerEmail"
            defaultValue={user?.email}
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
            placeholder="Toy name"
            className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
            required
          />
          <input
            type="url"
            name="toyPhoto"
            placeholder="Toy photo"
            className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mb-5">
          <input
            type="text"
            name="subCategory"
            placeholder="Sub category"
            className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mb-2">
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="quantity"
            placeholder="Avaiable Quantity"
            className="input input-bordered mb-2 md:mb-0 w-full max-w-xs"
            required
          />
        </div>
        <div className="">
          <textarea
            type="text"
            className="textarea textarea-bordered"
            name="details"
            placeholder="Details"
          ></textarea>
        </div>
        <div className="mb-10">
          <button className="p-3 w-full bg-slate-700 hover:bg-slate-800 text-white rounded-md">
            <input type="submit" value="Add" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
