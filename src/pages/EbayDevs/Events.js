import React from "react";
import { Button } from "../../Components";
import image from "../../pictures/dev3.png";
import image2 from "../../pictures/dev4.png";
import image3 from "../../pictures/dev5.png";
const Events = () => {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-5xl mt-12">Events</h1>
        <p className="font-semibold mt-6 ">
          Plan for upcoming conferences and webinars, or
          <span className="font-semibold underline">
            see what you missed at past events.
          </span>
        </p>
      </div>
      <div className="flex justify-between mt-6 flex-col lg:flex-row">
        <div
          className="bg-center bg-cover w-full h-[60vw] lg:w-[33%] lg:h-[40vh] flex flex-col justify-end mt-4 mb-20 bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="w-32 lg:mb-5 sm:w-36">
            <Button variant="whiteBlack">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-1 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div
          className="bg-center bg-cover w-full h-[60vw] lg:w-[33%] lg:h-[40vh] flex flex-col justify-end mt-4 mb-20 bg-no-repeat"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div className="w-fit lg:mb-5 sm:w-36">
            <Button variant="whiteBlack">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-1 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div
          className="bg-center bg-cover w-full h-[60vw] lg:w-[33%] lg:h-[40vh] flex flex-col justify-end mt-4 mb-20 bg-no-repeat"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div className="w-fit lg:mb-5 sm:w-36">
            <Button variant="whiteBlack">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-1 mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
