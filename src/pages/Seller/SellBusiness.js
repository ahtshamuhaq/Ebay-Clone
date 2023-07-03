import React from "react";
import { Button } from "../../Components";
import image from "./../../pictures/sell-2.jpg";

const SellBusiness = () => {
  return (
    <div className="bg-[#f7f7f7] p-20 flex justify-center mt-6">
      <div className="w-full  sm:w-3/4 lg:w-1/2 mx-auto ">
        <h1 className="font-semibold text-4xl mb-4 w-full">
          Selling as a business? We make <br /> it easy
        </h1>
        <p className="mt-4 mb-6">
          We’ve got powerful tools to help you manage your inventory and orders,
          track your <br /> sales, and build your brand.
        </p>
        <div className="md:w-1/4 lg:w-1/2 w-full">
          <Button variant="outlinedBlue">Learn more</Button>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block ">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SellBusiness;
