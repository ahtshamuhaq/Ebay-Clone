import React, { useRef, useState } from "react";
import OuterCard from "./OuterCard";

const InnerCardCarousal = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef([]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollSlider(-sliderRef.current[0].offsetWidth);
    }
  };

  const handleNext = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollSlider(sliderRef.current[0].offsetWidth);
    }
  };

  const scrollSlider = (scrollAmount) => {
    sliderRef.current[0].scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex font-semibold text-lg  mb-5">
        <h1 className="hover:underline pr-6 ">
          Sponsored items inspired by your views
        </h1>
        <h1 className="hover:underline ml-10 flex items-center justify-between ">
          See all
        </h1>
        <i className="material-icons mt-1">keyboard_arrow_right</i>
      </div>
      <div className="flex">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          <i className="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_left
          </i>
        </button>
        <div
          className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300"
          ref={(ref) => (sliderRef.current[0] = ref)}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-64 p-4 ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <OuterCard product={card} />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex === cardData.length - 1}
        >
          <i className="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_right
          </i>
        </button>
      </div>
    </div>
  );
};

export default InnerCardCarousal;
