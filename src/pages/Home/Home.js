import React from "react";
import About from "./About/About";
import Input from "./input/Input";
import Card from "./card/Card";

import MasonryImagesGallery from "./Gallery/MasonryImagesGallery";
import Banner from "./Banner/Banner";
import BannerImg from "./BannerImg/BannerImg";
import Carousel from "./Carousel/Carousel";
import Services from "./Service/Services";

const Home = () => {
  return (
    <div>
      <About></About>
      <Input></Input>
      <Card></Card>
      <MasonryImagesGallery></MasonryImagesGallery>
      <Banner></Banner>
      <Carousel></Carousel>
      <Services></Services>
      <BannerImg></BannerImg>
    </div>
  );
};

export default Home;
