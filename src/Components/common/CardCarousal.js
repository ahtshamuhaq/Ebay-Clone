import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fishfinder1 from "./../../pictures/fishfinder1.png";
import fishfinder2 from "./../../pictures/fishfinder2.png";
import fishfinder3 from "./../../pictures/fishfinder3.png";
import fishfinder4 from "./../../pictures/fishfinder4.png";
import fishfinder5 from "./../../pictures/fishfinder5.png";
import fishfinder6 from "./../../pictures/fishfinder6.png";
import fishfinder7 from "./../../pictures/fishfinder7.png";
import fishfinder8 from "./../../pictures/fishfinder8.png";
import fishfinder9 from "./../../pictures/fishfinder9.png";

const CardCarousel = () => {
  const cardData = [
    {
      image: fishfinder1,
      heading: "Card 1",
      description: "",
    },
    {
      image: fishfinder2,
      heading: "Card 2",
      description: "",
    },
    {
      image: fishfinder3,
      heading: "Card 3",
      description: "",
    },
    {
      image: fishfinder4,
      heading: "Card 4",
      description: "",
    },
    {
      image: fishfinder5,
      heading: "Card 5",
      description: "",
    },
    {
      image: fishfinder6,
      heading: "Card 6",
      description: "",
    },
    {
      image: fishfinder7,
      heading: "Card 7",
      description: "Description 1",
    },
    {
      image: fishfinder8,
      heading: "Card 8",
      description: "",
    },
    {
      image: fishfinder9,
      heading: "Card 9",
      description: "",
    },
  ];

  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      <div className="w-full relative flex items-center justify-center">
        <button
          aria-label="slide backward"
          className="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="w-[213px] h-[269px] ">
              <img src={card.image} alt="" />
              <div className="bg-gray-800  absolute w-full h-full p-6">
                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                  {card.heading}
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                  {card.description}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
        <button
          aria-label="slide forward"
          className="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
