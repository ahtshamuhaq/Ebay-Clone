import React from "react";
import Carousel from "nuka-carousel";
import { shopNow } from "./../../uiComponents/reUsableComponents/ButtonStyle";
import { letsGo } from "./../../uiComponents/reUsableComponents/ButtonStyle";

const Carousal = () => {
  const slides = [
    {
      image: "https://i.ebayimg.com/images/g/IDYAAOSw-yNka35e/s-l960.webp",
      title: " There’s always time for playtime",
      description: "Shop the selection of toys & hobbies for all ages!",
      buttonText: "Shop Now",
      textColor: "#07522c",
      bgColor: "#E8F377",
      slideStyle: shopNow,
    },
    {
      image: "https://i.ebayimg.com/images/g/pm8AAOSw4YtjTqdZ/s-l960.webp",
      title: "Slide 2",
      description: "Description 2",
      buttonText: "letsGo ",
      bgColor: "#F8E376",
      slideStyle: letsGo,
    },
  ];
  return (
    <Carousel autoplay={true} autoplayInterval={2000} wrapAround={true}>
      {slides.map((slide, index) => (
        <div
          className="flex justify-between w-full"
          key={index}
          style={{ backgroundColor: slide.bgColor }}
        >
          <div className="w-[30%] p-5 pl-12">
            <h1 className="text-4xl " style={{ color: slide.textColor }}>
              {slide.title}
            </h1>
            <p className="pt-4" style={{ color: slide.textColor }}>
              {slide.description}
            </p>
            <button
              className="flex justify-between mt-5
                 "
              style={slide.slideStyle}
            >
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
            </button>
          </div>
          <img src={slide.image} alt="Slide" />
        </div>
      ))}
    </Carousel>
  );
};

export default Carousal;
