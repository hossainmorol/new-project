import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./Gallery";

const MasonryImagesGallery = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-12">Our Featured Tours</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <img
              src={item}
              key={index}
              alt=""
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryImagesGallery;
