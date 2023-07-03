import React from "react";
import Cards from "./Cards";

const Carousal = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl mt-6 font-bold">Create a great listing</h1>
        <p className="text-gray-500 mt-2 text-sm hidden lg:block">
          Here’s six ways to set yourself up for success.
        </p>
        <Cards />
        <h1 className="text-3xl mt-6 font-bold">Promotions just for you</h1>
        <p className="text-gray-500 mt-2 text-sm hidden lg:block">
          Get the most out of selling on eBay with these deals.
        </p>
        <div className="bg-[#f7f7f7] w-fit py-8 mt-5 mb-20 px-4 flex justify-between">
          <div>
            <h1 className="font-bold mt-3 mb-5">
              List up to 200 Items for FREE Every <br /> Month!
            </h1>
            <p className="mb-2">
              Pay no insertion fees for 200 auction-style or fixed price
              listings.
            </p>
            <p className="underline mb-2">Learn more</p>
            <p>
              Jul 01 - Aug 01
              <i className="fa fa-exclamation-circle ml-4"></i>
            </p>
          </div>
          <div className="w-32 h-32 rounded-full flex justify-center ml-6  flex-col items-center border-4 border-green-500">
            <h1>200</h1>
            <p>Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
