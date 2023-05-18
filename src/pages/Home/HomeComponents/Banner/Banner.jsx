import React from "react";
import "./Banner.css";

const Banner = () => {
  const backgroundImage = "https://www.lifesavvy.com/p/uploads/2022/08/5a3f7b09.jpg?width=720&height=450&fit=crop&trim=2,2,2,2&fit=crop"
  return (
    <div className="">
      {/* Carousel banner */}

      {/* <div className="carousel w-full h-screen">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="/images (1).jpeg "
            className="w-full"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <div>

            </div>
            <a href="#slide4" className="btn btn-error mr-2 bg-red-700 hover:bg-red-800 text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-error bg-red-700 hover:bg-red-800 text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-error mr-2 bg-red-700 hover:bg-red-800 text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-error bg-red-700 hover:bg-red-800 text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/Melbourne-Corporate-Headshots-Julia-Nance-Portraits9.webp"
            className="w-full"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-error mr-2 bg-red-700 hover:bg-red-800 text-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-error bg-red-700 hover:bg-red-800 text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/photo-1544005313-94ddf0286df2.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-error bg-red-700 hover:bg-red-800  mr-2 text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-error bg-red-700 hover:bg-red-800 text-white">
              ❯
            </a>
          </div>
        </div>
      </div> */}

      {/* Geometric banner with text */}
      <div className="bg-gradient-to-b from-black to-red-700   grid grid-cols-1 md:grid-cols-5 md:grid-flow-row-dense  md:h-screen md:mx-auto relative">
        <div className=" col-span-2 relative">
          <div className="absolute top-36  md:top-1/3 md:w-full">
            <p className="text-3xl md:text-7xl font-bold px-2 md:px-5 text-white">Choose your favourite <span className="text-red-700">heroes</span>!</p>
            <p></p>
          </div>
        </div>
        <div className=" col-span-3 " >
          <img className="w-full md:h-screen md:rounded " src="https://www.lifesavvy.com/p/uploads/2022/08/5a3f7b09.jpg?width=720&height=450&fit=crop&trim=2,2,2,2&fit=crop" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
