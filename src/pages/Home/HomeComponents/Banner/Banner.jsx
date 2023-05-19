import React from "react";
import "./Banner.css";
import img1 from "/img1.jpg";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";

const Banner = () => {
  return (
    <div className="">
      {/* bg-gradient-to-r from-cyan-500 to-blue-500 */}
      <div className="carousel w-full h-full md:h-screen ">
        <div id="item1" className="carousel-item w-full   relative">
          <div className="absolute  w-full bg-gradient-to-tr from-black to-[rgba(245, 53, 53, 0.5)]  h-full md:h-screen ">
            <div className="text-left ">
              <p className="absolute top-20 md:left-1/2 pl-5 text-5xl md:text-7xl font-bold text-white">
                Choose your favourite{" "}
                <span className="text-red-600">heroes</span>
              </p>
            </div>
          </div>
        
          <img src={img1} className="w-full " />
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <div className="absolute  w-full bg-gradient-to-tr from-black to-[rgba(245, 53, 53, 0.5)]  h-full md:h-screen ">
            <div className="text-left ">
              <p className="absolute top-20 md:left-1/2 pl-5 text-5xl md:text-7xl font-bold text-white">
                Choose your favourite{" "}
                <span className="text-red-600">heroes</span>
              </p>
            </div>
          </div>
          <img src={img2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <div className="absolute  w-full bg-gradient-to-tr from-black to-[rgba(245, 53, 53, 0.5)]  h-full md:h-screen ">
            <div className="text-left ">
              <p className="absolute top-20 md:left-1/2 pl-5 text-5xl md:text-7xl font-bold text-white">
                Choose your favourite{" "}
                <span className="text-red-600">heroes</span>
              </p>
            </div>
          </div>
          <img src={img3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <div className="absolute  w-full bg-gradient-to-tr from-black to-[rgba(245, 53, 53, 0.5)]  h-full md:h-screen ">
            <div className="text-left ">
              <p className="absolute top-20 md:left-1/2 pl-5 text-5xl md:text-7xl font-bold text-white">
                Choose your favourite{" "}
                <span className="text-red-600">heroes</span>
              </p>
            </div>
          </div>
          <img src={img4} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-circle btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-circle btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-circle btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-circle btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
