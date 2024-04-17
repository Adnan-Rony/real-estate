import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const {
    id,
    estate_title,
    image,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = item;

  return (
    <div className="">
      <div className="card card-normal  bg-base-100 shadow-xl">
        <figure>
          <img
            className="rounded-t-lg lg:h-[250px] w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>Location : {location}</p>
          <div className="card-actions flex justify-between items-center">
            <p className="font-semibold">Starting {price} $</p>
            <p className="font-semibold">
              Status: <span className="uppercase">{status}</span>
            </p>
          </div>
          <Link to={`/details/${id}`}>
            <button className="btn w-full bg-[#F54748] text-white">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
