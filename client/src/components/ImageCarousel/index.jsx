import React, { useState } from "react";

import "./imageCarousel.css";

const ImageCarousel = ({ images,customClass }) => {
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

  console.log(customClass)

  return (
    <>
      <img className="carousel_img" src={images[currentIndex]} alt={"Це блок з відгуками"} />
      <div className={`carousel ${customClass || ""}`}>
        <div onClick={handlePrev} className="left_btn"></div>
        <div onClick={handleNext} className="right_btn"></div>
      </div>
    </>
  );
};

export default ImageCarousel;
