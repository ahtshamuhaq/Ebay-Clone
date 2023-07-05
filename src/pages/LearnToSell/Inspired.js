import React from "react";
import { Button } from "../../Components";
import i1 from "../../pictures/Best1.jpg";
const Inspired = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse  p-12 mt-12">
        <div className="w-full lg:w-2/5">
          <img src={i1} className="rounded-2xl" alt="" />
        </div>
        <div className="flex flex-col lg:items-start lg:pl-12 w-full lg:w-3/5 justify-start lg:justify-center">
          <h1 className="text-4xl font-bold">Best practices</h1>
          <p className="font-semibold text-xl mt-3">
            Create listings that are sure to sell with these tips.
          </p>
          <div className="pb-7 md:ml-3 mt-5 w-full lg:w-1/3">
            <Button variant="outlinedBlue">Learn more﻿</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspired;
