import React from "react";
import img from "/placeholder.jpg";
import { IoArrowForwardSharp } from "react-icons/io5";

const LimitedOffer = () => {
  return (
    <div>
      <div className="mx-5 md:w-4/5 md:mx-auto ">
        <div className="grid grid-cols-3 ">
          <div className="bg-slate-800  pl-2 py-2 md:py-0 md:pl-2 col-span-2 rounded-l-lg md:relative ">
            <div className="md:absolute md:top-1/4 md:left-20">
              <h2 className="text-slate-500 text-xs">Limited Offer</h2>
              <p className="text-white md:w-3/4 text-sm  md:text-3xl  md:font-bold">
                45% off only this Black Friday and chance to win Maldives tour{" "}
                
              </p>
              <button className="bg-white my-2 md:my-0 md:mt-5  flex items-center font-semibold px-3 md:px-5 md:py-3 rounded-full">
                Know more <IoArrowForwardSharp></IoArrowForwardSharp>
              </button>
            </div>
          </div>
          <div className="">
            <img className="rounded-r-md w-fit h-full" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedOffer;
