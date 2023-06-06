import React, { useState } from "react";
import Carousel from "nuka-carousel";
import Button from "./../common/Button";
{
  /* <div className="w-20 h-10  sm:hidden">
<img src={props.lg} alt="" />
</div> */
}
const Carousal = () => {
  const slides = [
    {
      image: "https://i.ebayimg.com/images/g/IDYAAOSw-yNka35e/s-l960.webp",
      title: " Stay Fit, stay active!",
      description: "Discover our must-have sports products",
      buttonText: "Discover now",
      textColor: "#07522c",
      bgColor: "#E8F377",
      variant: "transparent",
    },
    {
      image: "https://i.ebayimg.com/images/g/MKsAAOSwIIxkZjAI/s-l960.webp",
      title: "There’s always time for playtime",
      description: "Shop the selection of toys & hobbies for all ages!",
      buttonText: "Shop Now ",
      bgColor: "#c9e53c",
      variant: "transparent",
    },
  ];
  const [autoplay, setAutoplay] = useState(true);
  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };
  return (
    <div>
      <div className="w-12 mt-1 h-1 bg-[#555555]"></div>
      <div className="relative">
        <Carousel autoplay={autoplay} autoplayInterval={2000} wrapAround={true}>
          {slides.map((slide, index) => (
            <div>
              <div
                className="flex justify-between w-full"
                key={index}
                style={{ backgroundColor: slide.bgColor }}
              >
                <div className=" mt-6 pl-12">
                  <h1
                    className="text-4xl font-semibold "
                    style={{ color: slide.textColor }}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="pt-4 text-xl pb-6"
                    style={{ color: slide.textColor }}
                  >
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
          ))}
        </Carousel>
        <div className="right-0 mr-2 flex absolute -mt-20 ml-[550px] ">
          <button
            className="mx-auto  bg-[#011a28] text-white rounded-full p-2 mt-3"
            onClick={toggleAutoplay}
          >
            {autoplay ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-full h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
