import React from "react";
import heroImg1 from "../../../assest/hero-img01.jpg";
import heroImg2 from "../../../assest/hero-img02.jpg";
import heroVideo from "../../../assest/hero-video (1).mp4";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content  flex-col lg:flex-row-reverse ">
          <img
            className=" h-56  rounded-xl mt-12 w-36"
            src={heroImg1}
            alt="#"
          />
          <video
            className=" object-cover rounded-xl mt-8   h-56  w-36 "
            src={heroVideo}
            alt="#"
            controls
          />
          <img className=" h-56 rounded-xl w-36" src={heroImg2} alt="#" />

          <div className="">
            <h1 className="text-5xl font-bold">
              Traveling opens the door <br /> to creating
              <span className="text-yellow-600">memories</span>
            </h1>
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ipsam sed repellat, odio illum nesciunt libero similique sequi
              animi deleniti voluptates itaque necessitatibus quo omnis nobis
              repudiandae quidem laborum porro?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
