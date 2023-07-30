import React from "react";
import inputImg from "../../../assest/male-tourist.png";

const BannerImg = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={inputImg} alt="" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <input className="p-3" type="text" placeholder="Enter you email" />
        </div>
      </div>
    </div>
  );
};

export default BannerImg;
