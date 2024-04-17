import React from "react";
import { MdOutlineSaveAlt } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const DetailsCard = ({ show }) => {
  const {
    id,
    estate_title,
    image,
    image1,
    image2,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = show || {};

  return (
    <div className="">




<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>







      <div className="mt-10 flex justify-between">
        <div className="flex gap-8 justify-center items-center">
          <p className="text-2xl font-bold">{price}</p>
          <button className="btn text-white bg-[#F54748] ">
            {status} <MdOutlineSaveAlt />
          </button>
          <button className="btn text-white bg-[#FDC55E] ">
            {segment_name} <MdOutlineSaveAlt />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-3xl">
          <button className="btn btn-sm">
            Save <MdOutlineSaveAlt />
          </button>
          <button className="btn btn-sm">
            Share <CiShare1 />
          </button>
        </div>
      </div>

      <div className="my-5">
        <p className="lg:text-2xl text-xl  font-bold">
          <span></span> Take The Deal Of Renting This {area} Apartment In{" "}
          {location}
        </p>

        <div className="flex items-center gap-4 w-1/2 py-5">
          {facilities &&
            facilities.map((facility, index) => (
              <button key={index} className="btn btn-sm gap-2">
                {facility}
              </button>
            ))}
        </div>
        <p className="text-2xl font-bold my-5">{estate_title}</p>
        <p className="text-xl font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
