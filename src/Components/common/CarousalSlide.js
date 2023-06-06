import React from "react";
import Button from "./Button";

const CarousalSlide = () => {
  const slide = {
    image: "https://i.ebayimg.com/images/g/IDYAAOSw-yNka35e/s-l960.webp",
    title: " Stay Fit, stay active!",
    description: "Discover our must-have sports products",
    buttonText: "Discover now",
    textColor: "#07522c",
    bgColor: "#E8F377",
    variant: "transparent",
  };
  return (
    <div className="hidden sm:w-4/5 sm:block md:w-4/5 md:block ">
      {" "}
      <div
        className="flex justify-between w-full"
        style={{ backgroundColor: slide.bgColor }}
      >
        <div className=" flex flex-col  justify-start mt-8 pl-12">
          <h1
            className="text-4xl font-semibold "
            style={{ color: slide.textColor }}
          >
            {slide.title}
          </h1>
          <p className="pt-4 text-xl pb-6 " style={{ color: slide.textColor }}>
            {slide.description}
          </p>
          <Button variant={slide.variant}>
            {slide.buttonText}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
        <img src={slide.image} alt="Slide" />
      </div>
    </div>
  );
};

export default CarousalSlide;
