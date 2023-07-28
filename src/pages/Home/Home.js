import React from "react";
import About from "./About/About";
import Input from "./input/Input";
import Card from "./card/Card";

import MasonryImagesGallery from "./Gallery/MasonryImagesGallery";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <About></About>
      <Input></Input>
      <Card></Card>
      <MasonryImagesGallery></MasonryImagesGallery>
      <Banner></Banner>
    </div>
  );
};

export default Home;
