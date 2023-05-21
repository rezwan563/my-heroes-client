import React from "react";
import "./Banner.css";


const Banner = () => {
  return (
    <div className="">
      {/* bg-gradient-to-r from-cyan-500 to-blue-500 */}
      <div className="carousel w-full h-full md:h-screen ">
        <div id="item1" className="carousel-item w-full   relative">
          <div className="absolute  w-full bg-gradient-to-tr from-black to-[rgba(245, 53, 53, 0.5)]  h-full md:h-screen ">
            <div className="text-left ">
              <p className="absolute top-36 md:top-96 md:left-48 pl-5 text-3xl md:text-7xl font-bold text-white">
                Choose your favourite{" "}
                <span className="text-red-600">heroes</span>
              </p>
            </div>
          </div>
        
          <img src='https://i.ytimg.com/vi/IYJp7c_8GHk/maxresdefault.jpg' className="w-full " />
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <div className="absolute  w-full bg-gradient-to-tr from-black to-[rgba(245, 53, 53, 0.5)]  h-full md:h-screen ">
            <div className="text-left ">
              <p className="absolute top-20 md:w-1/2 md:top-[500px] md:left-10 pl-5 text-3xl md:text-7xl font-bold text-white">
              Which super<span className="text-red-600">heroes</span> you want in your team?{" "}
              </p>
            </div>
          </div>
          <img src="https://www.lifesavvy.com/p/uploads/2022/08/5a3f7b09.jpg?height=200p&trim=2,2,2,2&crop=16:9" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <div className="absolute  w-full bg-gradient-to-tr from-black to-[rgba(245, 53, 53, 0.5)]  h-full md:h-screen ">
            <div className="text-left ">
              <p className="absolute top-20 md:left-1/2 pl-5 text-3xl md:text-7xl font-bold text-white">
                Be <span className="text-red-600">bold</span>{" "}
              </p>
            </div>
          </div>
          <img src='https://i.ibb.co/T1DpKLf/IMG-1457-1024x682.jpg' className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <div className="absolute  w-full bg-gradient-to-tr from-black to-[rgba(245, 53, 53, 0.5)]  h-full md:h-screen ">
            <div className="text-left ">
              <p className="absolute top-20 md:top-[500px] md:left-0 pl-5 text-3xl md:text-7xl font-bold text-white">
                Be <span className="text-red-600">Adventurous</span>
              </p>
            </div>
          </div>
          <img src='https://images.squarespace-cdn.com/content/v1/5cc3d1b051f4d40415789cc2/8942fca5-b540-4b97-9404-a344a3572e1d/playmates-star-trek.png' className="w-full" />
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
