import React from "react";
import { Button } from "../../Components";
import i1 from "../../pictures/3way1.jpg";
import i2 from "../../pictures/3way2.jpg";
import i3 from "../../pictures/3way3.jpg";
const StepsToSell = () => {
  return (
    <div>
      <div className=" p-8 ">
        <h1 className="font-semibold text-4xl">3 Steps to sell</h1>
        <div className="flex justify-between flex-col md:flex-row mt-12">
          <div className="w-full md:w-[30%] shadow-lg rounded-xl">
            <img src={i1} className="rounded-t-2xl" alt="" />
            <h1 className="text-2xl font-semibold ml-5 mt-5">List</h1>
            <p className="text-[#707070] ml-5 mt-5">
              Learn what to sell, how to photograph and describe it, and how to
              price it right.
            </p>
            <div className="pb-7 md:ml-3 mt-5 w-full md:w-1/3">
              <Button variant="outlinedBlue">Watch now</Button>
            </div>
          </div>
          <div className="w-full md:w-[30%] shadow-lg rounded-xl">
            <img src={i2} className="rounded-t-2xl" alt="" />
            <h1 className="text-2xl font-semibold ml-5 mt-5">Ship</h1>
            <p className="text-[#707070] ml-5 mt-5">
              Learn how to pack your item, print your label, and ship with ease.
            </p>
            <div className="pb-7 md:ml-3 mt-5 w-full md:w-1/3">
              <Button variant="outlinedBlue">Watch now</Button>
            </div>
          </div>
          <div className="w-full md:w-[30%] shadow-lg rounded-xl">
            <img src={i3} className="rounded-t-2xl" alt="" />
            <h1 className="text-2xl font-semibold ml-5 mt-5">Earn cash</h1>
            <p className="text-[#707070] ml-5 mt-5">
              How do you want to be paid? We show you your options.
            </p>
            <div className="pb-7 md:ml-3 mt-5 w-full md:w-1/3">
              <Button variant="outlinedBlue">Check it out</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsToSell;
