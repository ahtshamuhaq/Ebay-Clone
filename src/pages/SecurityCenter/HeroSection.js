import React from "react";
import i1 from "../../pictures/sec1.jpg";
const HeroSection = () => {
  return (
    <div>
      <div className="flex xl:flex-row flex-col xl:flex-wrap items-center w-4/5 mx-auto justify-between">
        <div>
          <h1 className="text-3xl font-semibold hover:text-[#0073b7]">
            Security Center
          </h1>
        </div>
        <p className="hidden  lg:flex  xl:flex-wrap items-center justify-between">
          <span className="flex items-center  hover:text-[#0073b7] hover:cursor-pointer">
            Protect Your Information
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 hidden xl:block  mt-1"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <span className="flex items-center ml-5 hover:text-[#0073b7] hover:cursor-pointer">
            Stay Safe From Scammers{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 hidden xl:block  mt-1"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="flex items-center hover:text-[#0073b7] hover:cursor-pointer ml-5">
            Report a Concern{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 hidden xl:block  mt-1"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="flex items-center hover:text-[#0073b7] hover:cursor-pointer ml-5">
            Security Researchers{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 hidden xl:block  mt-1"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="flex items-center hover:text-[#0073b7] hover:cursor-pointer ml-5  mt-1">
            Law Enforcement{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 hidden xl:block  mt-1"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </p>
      </div>
      <div className="bg-[#0073b7] border-b-8 border-b-[#ff9f39] flex flex-col-reverse lg:flex-row justify-center mt-5 items-center">
        <div className=" w-full text-center lg:w-1/2 flex flex-col items-center lg:flex-none  lg:text-end mr-10 pt-16  ">
          <h1 className="text-white text-6xl font-bold  w-fit lg:ml-auto pb-7">
            Stay <br />
            Safe on
            <br /> eBay
          </h1>
          <p className="text-white  mt-5 border-t-2 border-t-white w-fit lg:ml-auto  pt-7">
            Welcome to the eBay Security Center,
            <br /> where we provide tips and resources to
            <br /> help you stay safe while buying and selling
            <br /> online.
          </p>
        </div>
        <div className="w-full lg:w-[950px] h-full ">
          <img src={i1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
