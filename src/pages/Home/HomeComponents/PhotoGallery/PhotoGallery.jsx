import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const PhotoGallery = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-5xl font-bold pl-2 md:pl-16 mb-5">Gallery</h2>
      <div className="w-1/2 mx-16 md:w-fit md:mx-36 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="grid gap-4 ">
          <div data-aos-once='true' data-aos='fade-down-right'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/81+0DuwcKeL._AC_UX679_.jpg"
              alt=""
            />
          </div>
          <div data-aos-once='true' data-aos='fade-out'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/71FTXVVdf4L._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div data-aos-once='true' data-aos='flip-up'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/91aTd-k35qL._AC_SX679_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div data-aos-once='true' data-aos='slide-up'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/71a3TcqrM1L._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div data-aos-once='true' data-aos='zoom-in'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/81Z2qnQvIsL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
              alt=""
            />
          </div>
          <div data-aos-once='true' data-aos='flip-left'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/719ra-4mSgL._AC_SX679_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div data-aos-once='true' data-aos='slide-right'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/51q5hfp16fL._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div data-aos-once='true' data-aos='zoom-out-left'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/51UkIev5DYL._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div data-aos-once='true' data-aos='flip-up'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/613Ve-s3XBL._AC_SX679_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div data-aos-once='true' data-aos='fade-down-left'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/713idCUiJkL._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div data-aos-once='true' data-aos='zoom-in-left'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/81jg3yTx87L._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div data-aos-once='true' data-aos='zoom-in-down'>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://m.media-amazon.com/images/I/61ssX2B86UL._AC_SX679_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
