import React from "react";
import image from "../../pictures/dev2.jpg";
import { Button } from "../../Components";
const Updates = () => {
  return (
    <div>
      <div className="bg-[#f7f7f7] mt-20 lg:p-9 pt-14">
        <div>
          <h1 className="font-semibold text-5xl">Updates</h1>
          <p className="font-semibold mt-6 ">
            Keep up-to-date with our{" "}
            <span className="font-semibold underline">
              latest API enhancements.
            </span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-10 pb-24">
          <div className="lg:w-1/3  bg-white  p-8 rounded-xl">
            <h1 className="font-bold text-2xl">
              eBay Developers <br className="hidden xl:block" /> Program Q1 2023{" "}
              <br className="hidden xl:block" /> Newsletter
            </h1>
            <p className="font-semibold mt-5">
              Program news, API updates, and <br className="hidden xl:block" />
              deprecations for the first quarter of
              <br className="hidden xl:block" />
              2023.
            </p>
            <p className="mt-4 hover:underline">Learn more</p>
          </div>
          <div className="lg:w-1/3  bg-white p-8  mt-10 lg:mt-0 lg:ml-5 rounded-xl">
            <h1 className="font-bold text-2xl">
              Enhance buyer
              <br className="hidden xl:block" /> engagement: Add{" "}
              <br className="hidden xl:block" />
              videos to eBay listings
            </h1>
            <p className="font-semibold mt-5">
              Use new Media API and Trading API{" "}
              <br className="hidden xl:block" />
              to enhance listings with videos.
            </p>
            <p className="mt-4 hover:underline">Learn more</p>
          </div>
          <div className="lg:w-1/3  bg-white mt-10  p-8 lg:ml-5 lg:mt-0  rounded-xl">
            <h1 className="font-bold text-2xl">
              Open-source SDK for
              <br className="hidden xl:block" /> taxonomy metadata{" "}
            </h1>
            <p className="font-semibold mt-5">
              eBay’s Category Aspects
              <br className="hidden xl:block" /> metadata, which has defined our
              <br className="hidden xl:block" /> marketplace listings, is
              evolving at <br className="hidden xl:block" /> a fast pace.
            </p>
            <p className="mt-4 hover:underline">Learn more</p>
          </div>
        </div>
      </div>
      <div
        className="bg-cover h-[60vh] w-full  mt-4  bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-radial-gradient p-8 h-full">
          {" "}
          <h1 className="text-white text-xl sm:text-5xl font-semibold">
            eBay Developers <br className="hidden xl:block" /> Awards
          </h1>
          <h1 className="text-white text-xl font-semibold mt-10">
            Check out award-winning developers and apps.
          </h1>
          <div className="w-fit sm:w-36  mt-3">
            <Button variant="whiteBlack">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 ml-1 mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clip-rule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
