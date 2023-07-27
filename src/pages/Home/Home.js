import React from "react";
import About from "./About/About";
import Input from "./input/Input";
import Card from "./card/Card";
import Gallery from "./Gallery/Gallery";
import MasonryImagesGallery from "./Gallery/MasonryImagesGallery";

const Home = () => {
  return (
    <div>
      <About></About>
      <Input></Input>
      <Card></Card>
      <MasonryImagesGallery></MasonryImagesGallery>
    </div>
  );
};

export default Home;
