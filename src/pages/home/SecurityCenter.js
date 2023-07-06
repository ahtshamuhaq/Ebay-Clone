import React from "react";
import Nav2 from "../../Components/common/Nav2";
import { HomeSearch } from "../../Components";
import HeroSection from "../SecurityCenter/HeroSection";
import Protection from "../SecurityCenter/Protection";
import Report from "../SecurityCenter/Report";

const SecurityCenter = () => {
  return (
    <div>
      <Nav2 />
      <HomeSearch />
      <HeroSection />
      <Protection />
      <Report />
      <div className="w-full flex flex-wrap justify-between lg:hidden sticky text-xs  bg-white h-fit bottom-2  ">
        <p className="flex  items-center p-3      hover:text-[#0073b7] hover:cursor-pointer">
          Protect Your Information
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5  hidden sm:block  mt-1"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </p>

        <p className="flex    items-center p-3 ml-5    hover:text-[#0073b7] hover:cursor-pointer">
          Stay Safe{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5  hidden sm:block  mt-1"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <p className="flex    items-center p-3    hover:text-[#0073b7] hover:cursor-pointer ml-5">
          Report Concern{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5  hidden sm:block  mt-1"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <p className="flex    items-center p-3    hover:text-[#0073b7] hover:cursor-pointer ml-5">
          Security Researchers{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5  hidden sm:block  mt-1"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <p className="flex    items-center p-3    hover:text-[#0073b7] hover:cursor-pointer ml-5  mt-1">
          Law Enforcement{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5  hidden sm:block  mt-1"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default SecurityCenter;
