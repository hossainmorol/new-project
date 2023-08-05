import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  const { img, price, _id } = useLoaderData();

  const [credentials, setCredentials] = useState({
    _id,
    fullName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
    price,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row  ">
        <img className=" w-full lg:w-1/2" src={img} alt="" />
        <div>
          <form className="border p-12" onSubmit={handleClick}>
            <h1 className="text-xl font-bold mb-3">Information</h1>
            <div className="form-control">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder=" fullname"
                className="input input-bordered"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-control mt-3 ">
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="phone"
                className="input input-bordered"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control mt-3 flex">
              <input
                type="date"
                className="input input-bordered"
                placeholder=""
                id="bookAt"
                onChange={handleChange}
                required
              />

              <input
                type="number"
                placeholder="Guest"
                id="guestSize"
                onChange={handleChange}
                className="input input-bordered mt-3"
                required
              />
            </div>
            <div>
              <div className="mt-3 ">
                <p>
                  ${price} X 1 person <span className="pl-12">${price}</span>
                </p>
                <p>
                  Service charge
                  <span className=" span-style">${serviceFee}</span>
                </p>
              </div>
              <p>
                Total:<span className="span-p">${totalAmount}</span>
              </p>
            </div>
            <input type="submit" className="btn-style" value="Book Now" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
