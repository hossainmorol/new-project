import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { img, _id } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={`/checkOut/${_id}`} className="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
