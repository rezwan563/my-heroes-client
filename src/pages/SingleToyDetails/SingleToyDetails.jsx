import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { tabTitle } from "../Shared/UseDocumentTitle/GeneralFunctions";

const SingleToyDetails = () => {
    tabTitle('Single Toy - MyHeroes')
  const { user } = useContext(AuthContext);
  const loadSingleDetails = useLoaderData();
  const {
    _id,
    sellerName,
    sellerEmail,
    toyName,
    toyPhoto,
    subCategory,
    price,
    rating,
    quantity,
    details,
  } = loadSingleDetails[0];

  return (
    <div className="my-10">
      <div className="border-4 shadow-md border-red-50 mx-2 md:w-1/2 md:mx-auto">
        <div className="bg-slate-100 p-2 grid grid-cols-1 md:flex md:justify-between">
          <div className="p-2 grid md:grid-cols-2 order-last md:order-none">
            <div className=" p-2">
              <p className="text-lg md:text-2xl font-semibold">Seller Info</p>
              <p>
                <span className="font-semibold">Name:</span> {sellerName}
              </p>
              <p>
                <span className="font-semibold">Email: </span> {sellerEmail}
              </p>
            </div>
            {/* Mobile and desktop layout */}
            <div className="md:hidden p-2">
              <p className="text-lg md:text-2xl  font-semibold">Product Info</p>
              <p>
                <span className="font-semibold">Name</span> {toyName}
              </p>
              <p>
                <span className="font-semibold">Sub-category: </span>{" "}
                {subCategory}
              </p>
              <p>
                <span className="font-semibold">Price: </span> ${price}
              </p>
              <p>
                <span className="font-semibold">Rating: </span> {rating}
              </p>
              <p>
                <span className="font-semibold">vailable Qty.</span>: {quantity}
              </p>
              <p>
                <span className="font-semibold">Details: </span> {details}
              </p>
            </div>
          </div>
          <div className="">
            {/* <img
              className="w-24 md:w-fit md:h-48 md:mx-auto shadow-sm"
              src={user?.photoURL}
              alt=""
            /> */}
          </div>
        </div>
        <div className="hidden  md:flex p-2">
          <div>
            <p className="text-lg md:text-2xl  font-semibold">Product Info</p>
            <p>
              <span className="font-semibold">Name</span> {toyName}
            </p>
            <p>
              <span className="font-semibold">Sub-category: </span>{" "}
              {subCategory}
            </p>
            <p>
              <span className="font-semibold">Price: </span> {price}
            </p>
            <p>
              <span className="font-semibold">Rating: </span> {rating}
            </p>
            <p>
              <span className="font-semibold">vailable Qty.</span>: {quantity}
            </p>
            <p>
              <span className="font-semibold">Details: </span> {details}
            </p>
          </div>
          <div>
            <img className="md:w-fit" src={toyPhoto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
