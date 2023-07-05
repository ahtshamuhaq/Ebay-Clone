import React from "react";
import { Button } from "../../Components";

const ReadyToSell = () => {
  return (
    <div>
      <div className="bg-[#f7f7f7] mt-5 pt-10 p-5">
        <h1 className="text-[#000000] text-4xl font-bold pt-7 md:pl-24">
          Ready to sell?
        </h1>
        <p className="text-[#000000] text-2xl font-semibold mt-5 mb-7  md:pl-24">
          You have all the tools. Time to make extra cash.
        </p>
        <div className="xl:w-1/6 lg:w-1/4 sm:w-1/2 w-full md:pl-24 pb-10">
          <Button variant="outlinedBlue"> Sell now</Button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToSell;
