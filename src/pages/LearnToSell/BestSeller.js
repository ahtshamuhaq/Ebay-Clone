import React from "react";
import i1 from "./../../pictures/inspired1.jpg";
import { Button } from "../../Components";
const BestSeller = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#f7f7f7] p-12 mt-12">
      <div className="w-full lg:w-2/5">
        <img src={i1} className="rounded-2xl" alt="" />
      </div>
      <div className="flex flex-col lg:items-start lg:pl-12 w-full lg:w-3/5 justify-start lg:justify-center">
        <h1 className="text-4xl font-bold">Get inspired</h1>
        <p className="font-semibold text-xl mt-3">
          If you want to know what buyers are looking for, use our research to{" "}
          <br className="hidden md:block" />
          help you score more sales.
        </p>
        <div className="pb-7 lg:ml-3 mt-5 w-full lg:w-1/3">
          <Button variant="outlinedBlue">See insights</Button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
