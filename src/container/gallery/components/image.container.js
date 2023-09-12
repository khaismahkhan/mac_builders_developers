import React from "react";
import "../gallery.scss"

const ImageContainer = (props) => {
  return (
    <div className="d-flex justify-content-center flex-wrap mt-5">
      {props.images.map((image, index) => (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${image.img}`}
          alt="product-img"
          className="gallery-image"
          id={index}
          data-aos="zoom-in-up"
        />
      ))}
    </div>
  );
};

export default ImageContainer;
