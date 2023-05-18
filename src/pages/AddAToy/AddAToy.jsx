import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext)

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
    console.log(newToy);
  };
  return (
    <div className="w-full md:w-1/2 md:my-12 md:mx-auto">
      <form onSubmit={handleAddToy} >
        <p className="text-xl font-semibold ">Seller Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mb-5">
          <input
            type="text"
            name="sellerName"
            defaultValue={user?.displayName}
            disabled={user?.displayName ? 'true' : 'false'}
            placeholder="Seller name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="sellerEmail"
            defaultValue={user?.email}
            disabled={user?.email ? 'true' : 'false'}
            placeholder="Seller email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <hr />
        <p className="text-xl font-semibold md:mt-5">Toy Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2  md:mb-5">
          <input
            type="text"
            name="toyName"
            placeholder="Toy name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="url"
            name="toyPhoto"
            placeholder="Toy photo"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mb-5">
          <input
            type="text"
            name="subCategory"
            placeholder="Sub category"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mb-2">
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="quantity"
            placeholder="Avaiable Quantity"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="">
          <textarea
            name="details"
            placeholder="Details"
            cols="75"
            rows="3"
          ></textarea>
        </div>
        <div className="">
          <button
            type="submit"
            className="p-3 bg-red-700 hover:bg-red-800 text-white rounded-md"
          >
           <input type="submit" value="Add" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
