import React from "react";
import Carousel from "nuka-carousel";

const InnerCa = ({
  data,
  images,
  setCurrentImageIndex,
  previousImageIndex,
  setPreviousImageIndex,
  currentImageIndex,
}) => {
  const handleMouseEnter = (index) => {
    setCurrentImageIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(previousImageIndex);
  };

  const handleClick = (index) => {
    setCurrentImageIndex(index);
    setPreviousImageIndex(currentImageIndex);
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  return (
    <div>
      <div className="block sm:hidden">
        <Carousel wrapAround={true}>
          {images.map((imageSrc, index) => (
            <div
              className="border border-black mr-2 overflow-hidden"
              key={index}
            >
              <img src={imageSrc} alt="Iage" className="hover:cursor-pointer" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InnerCa;
