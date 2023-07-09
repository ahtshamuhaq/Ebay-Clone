import React, { useState } from "react";
import i0 from "../../pictures/award0.jpg";
import i1 from "../../pictures/award1.jpg";
import i2 from "../../pictures/award2.jpg";
import i3 from "../../pictures/award3.jpg";
import i4 from "../../pictures/award4.jpg";
import i5 from "../../pictures/award5.jpg";
import Carousel from "nuka-carousel";
const Awards = () => {
  const slides = [
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
  ];
  const items = [
    "Advertising",
    "Customer Service",
    "Data Science",
    "Design & UX",
    "Engineering",
    "Finance & Business Analytics",
    "General Management & Business Support",
    "Global Internships",
    "IT & Technical Operations",
    "Legal",
    "Marketing & Communications",
    "People Team",
    "Product Management",
    "Sales & Business Development",
    "Trust, Safety & Fraud",
    "US & Canada Internships",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (increment) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + increment;
      if (newIndex < 0) {
        newIndex = items.length - 1;
      } else if (newIndex >= items.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  const [autoplay, setAutoplay] = useState(true);
  const startIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;
  const endIndex =
    startIndex + 2 >= items.length ? items.length - 1 : startIndex + 2;

  return (
    <div className="w-full md:w-3/4 mx-auto mt-6 bg-white flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/2 md:mr-6">
        <h1 className="flex items-center font-semibold bg-[#f1f1f1] text-2xl justify-start md:justify-center pb-4 ">
          Join Our Team
        </h1>
        <div>
          <img className="w-full md:w-fit" src={i0} alt="" />
        </div>
        <h1 className="text-2xl text-blue-600 text-center mt-4">
          Start searching for your eBay career in:
        </h1>
        <div className="flex flex-col justify-center items-center mt-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer mb-3"
            onClick={() => updateIndex(-1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
          <div className="">
            <ul className="space-y-2">
              {items.slice(startIndex, endIndex + 1).map((item, index) => (
                <li
                  key={startIndex + index}
                  className={`text-lg text-center ${
                    index === 1 ? "font-bold text-xl" : "text-sm"
                  } ${index === 0 ? "opacity-50" : ""}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mt-4"
            onClick={() => updateIndex(1)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <hr className="mt-6 mb-5 h-[1px] bg-black" />
        <h1 className="flex items-center text-blue-600   font-semibold text-2xl justify-end  pb-3 mt-4">
          See all openings
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-2 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="flex items-center font-semibold bg-[#f1f1f1] text-2xl justify-start md:justify-center pb-4 ">
          Awards & Recognition
        </h1>
        <div>
          <Carousel
            autoplay={autoplay}
            autoplayInterval={2000}
            wrapAround={true}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
          >
            {slides.map((slide, index) => (
              <div key={index}>
                <img className="w-full" src={slide.image} alt="Slide" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Awards;
//
