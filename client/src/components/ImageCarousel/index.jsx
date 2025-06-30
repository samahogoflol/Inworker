import React, { useState } from "react";

import "./style.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div className="slider">
        <img
          className="slider_img_left"
          src={images[(currentIndex - 1 + images.length) % images.length]}
          alt={"Це блок з відгуками"}
        />
        <img className="slider_img_center" src={images[currentIndex]} alt={"Це блок з відгуками"} />

        <img className="slider_img_right" src={images[(currentIndex + 1) % images.length]} alt={"Це блок з відгуками"} />
      </div>

      <div className="slider_buttons">
        <div onClick={handlePrev} className="slider_buttons_left_btn"></div>
        <div onClick={handleNext} className="slider_buttons_right_btn"></div>
      </div>
    </>
  );
};

export default ImageCarousel;
