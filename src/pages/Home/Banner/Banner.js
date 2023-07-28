import React from "react";
import "./Banner.css";
import banner from "../../../assest/experience.png";

const Banner = () => {
  return (
    // <div className="min-box">
    //   <div className="box">
    //     <h2>Css</h2>
    //   </div>
    // </div>

    <div className="hero py-24">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">
            with our all experience <br /> we will serve you{" "}
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-yellow mr-5">22k+</button>
          <button className="btn btn-primary mr-5">5k+</button>
          <button className="btn btn-orange">12k+</button>
        </div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
