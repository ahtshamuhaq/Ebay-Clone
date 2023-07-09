import React from "react";
import i1 from "../../pictures/blog1.jpg";
import i2 from "../../pictures/blog2.jpg";

import BlogCard from "./BlogCard";
const HeroSection = () => {
  return (
    <div>
      <div className=" hidden md:block ">
        <div className="bg-radiants w-full   lg:w-3/4  mx-auto">
          <div className="relative top-[20%]">
            <div className=" p-4 h-56 w-1/3 bg-[#f1f1f1]  flex flex-col justify-center">
              <h1 className="text-4xl font-semibold mt-4 mb-4">
                eBay’s 2022 <br /> Impact Report
              </h1>
              <p>
                Leading the way for meaningful <br /> ecommerce.
              </p>
              <p className="flex text-blue-600 items-center ">
                Learn More <i class="material-icons">arrow_forward</i>
              </p>
              <div className="mb-4 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <img src={i1} alt="" />
      </div>
      <div className=" p-4 h-56 w-full bg-[#f1f1f1] md:hidden  flex flex-col justify-center">
        <h1 className="text-4xl font-semibold mt-4 mb-4">
          eBay’s 2022 Impact Report
        </h1>
        <p className="mt-4">Leading the way for meaningful ecommerce.</p>
        <p className="flex text-blue-600 items-center justify-end">
          Learn More <i class="material-icons">arrow_forward</i>
        </p>
        <div className="mb-4 mt-2"></div>
      </div>
      <h1 className="text-center text-3xl mt-8 mb-8">Featured Stories</h1>
      <div className="bg-white hoverable w-3/4 mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img className="w-full h-full" src={i2} alt="" />
        </div>
        <div className="p-4">
          <span>Jul 6, 2023</span>{" "}
          <span className="border-l border-l-gray-500 pl-3">
            ECONOMIC OPPORTUNITY
          </span>
          <h1 className="text-2xl text font-semibold mt-3">
            How eBay Is Helping Graduates Ease Their <br /> Student Debt
          </h1>
          <p className="mt-2">
            With determination and consistency, these sellers paid off their
            student <br /> loans using eBay.
          </p>
          <p className="mt-3">James Dobbins, eBay News Team</p>
          <div className=" mt-20 flex justify-between items-center ">
            <p className="hidden-section">
              <i class="fa fa-twitter hover:text-blue-600"></i>
              <i class="fa fa-linkedin ml-3  hover:text-blue-600"></i>
              <i class="fa fa-facebook ml-3 hover:text-blue-600"></i>
              <i class="fa fa-chain ml-3 hover:text-blue-600"></i>
            </p>
            <i
              class="material-icons flex justify-end items-end"
              style={{ fontSize: "30px", color: "blue" }}
            >
              keyboard_arrow_right
            </i>
          </div>
        </div>
      </div>
      <video src="https://vimeo.com/810280707"></video>
    </div>
  );
};

export default HeroSection;
