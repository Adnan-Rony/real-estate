import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="lg:px-0 px-3 ">
      {/* <div className="lg:px-0 px-3 ">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-2 justify-center items-center lg:py-10 py-5">
          
          <div className="flex justify-center items-center lg:hidden">
            <img
              className="rounded-full"
              src="../assets//building-png-5a363ca913bce5.9210205415135039130809.jpg"
            ></img>
          </div>

         
          <div className="lg:space-y-3 space-y-2">
            <p className="lg:text-5xl text-3xl font-bold">
              Get Your <span className="text-[#F54748]"></span>
            </p>
            <p className="lg:text-5xl text-3xl font-bold">
              <span className="text-[#FDC55E]">Dream</span>
              <span className="text-[#F54748]"> Home </span>
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a
              cupiditate numquam. Lorem ipsum, dolor sit amet consectetur itate
              numquam.
            </p>
            <input
              type="text"
              placeholder="Search Home"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex items-center gap-3">
              <button className="btn btn-sm hover:bg-[#FDC55E] bg-[#F54748] text-white">
                Download App
              </button>
            </div>
          </div>

       
          <div className="hidden lg:flex justify-center items-center">
            <img
              className="w-[488px] h-[586px] rounded-full "
              src="../assets/building-png-5a363ca913bce5.9210205415135039130809.jpg"
            ></img>
          </div>
        </div>
      </div> */}

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 justify-center items-center grid-cols-1 gap-4">
            <div>
              <div className="lg:space-y-3 space-y-2">
                <p className="lg:text-5xl text-3xl font-bold">
                  Explore <span className="text-[#F54748]">Luxurious</span>{" "}
                  Living
                </p>
                <p className="lg:text-5xl text-3xl font-bold">
                  <span className="text-[#F54748]">Elegant</span> Homes &{" "}
                </p>
                <p className="lg:text-5xl text-3xl font-bold">
                  <span className="text-[#FDC55E]">Exceptional</span> Comfort
                </p>
                <p className="py-2">
                  Indulge in a world of luxury with our exquisite selection of
                  homes. From sophisticated designs to exceptional comfort, find
                  the perfect retreat to call home.
                </p>
                <input
                  type="text"
                  placeholder="Search for your dream home"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="flex items-center gap-3">
                  <button className="btn  hover:bg-[#FDC55E] bg-[#F54748] text-white">
                    Find Your Home
                  </button>
                </div>
              </div>
            </div>

            <img src="https://i.ibb.co/MM0H8Jh/hero-banner.png" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid lg:grid-cols-2 justify-center items-center grid-cols-1 gap-4">
            <div>
              <div className="lg:space-y-3 space-y-2">
                <p className="lg:text-5xl text-3xl font-bold">
                  Unlock <span className="text-[#F54748]">Your Dream</span> Home
                </p>
                <p className="lg:text-5xl text-3xl font-bold">
                  <span className="text-[#F54748]">Exquisite</span> Residences &{" "}
                </p>
                <p className="lg:text-5xl text-3xl font-bold">
                  <span className="text-[#FDC55E]">Unmatched</span> Comfort
                </p>
                <p className="py-2">
                  Discover a curated selection of homes that redefine luxury
                  living. From breathtaking views to unparalleled amenities,
                  find the perfect sanctuary for you and your family.
                </p>
                <input
                  type="text"
                  placeholder="Search for your dream home"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="flex items-center gap-3">
                  <button className="btn  hover:bg-[#FDC55E] bg-[#F54748] text-white">
                    Find Your Home
                  </button>
                </div>
              </div>
            </div>

            <img className="w-[632px] h-[472px]" src="https://i.ibb.co/wgmJCcf/png-clipart-home-inspection-house-mortgage-loan-real-estate-home-renovation-building-window-removebg.png" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid lg:grid-cols-2 justify-center items-center grid-cols-1 gap-4">
            <div>
              <div className="lg:space-y-3 space-y-2">
                <p className="lg:text-5xl text-3xl font-bold">
                  Find Your <span className="text-[#F54748]">Perfect</span> Home
                </p>
                <p className="lg:text-5xl text-3xl font-bold">
                  <span className="text-[#F54748]">Luxurious</span> Residences &{" "}
                </p>
                <p className="lg:text-5xl text-3xl font-bold">
                  <span className="text-[#FDC55E]">Unparalleled</span> Comfort
                </p>
                <p className="py-2">
                  Discover an array of luxurious residences tailored to your
                  lifestyle. From elegant designs to unparalleled comfort, find
                  the perfect sanctuary for you and your loved ones.
                </p>
                <input
                  type="text"
                  placeholder="Search for your dream home"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="flex items-center gap-3">
                  <button className="btn  hover:bg-[#FDC55E] bg-[#F54748] text-white">
                    Explore Properties
                  </button>
                </div>
              </div>
            </div>

            <img
              src="https://i.ibb.co/MM0H8Jh/hero-banner.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
