import React, { useState } from "react";

const ImageSpinner = ({ img }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!img || img.length === 0) {
    return null;
  }

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
  };
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div>
        <h1>asdasdads</h1>
        <div className="left_btn" onClick={handlePrevSlide}></div>
        <div className="right_btn" onClick={handleNextSlide}></div>
      </div>
    </>
  );
};

export default ImageSpinner;
