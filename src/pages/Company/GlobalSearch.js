import React from "react";

const GlobalSearch = () => {
  return (
    <div>
      <div className="bg-white w-4/5 mx-auto">
        <div>
          <h1 className="text-center text-3xl mt-8 mb-8">
            Global Scale & Reach
          </h1>
        </div>
        <div className="flex justify-evenly">
          <div>
            <div className="w-40 h-40 border-4 border-[#01718f] rounded-full flex items-center text-4xl justify-center font-semibold">
              1.8B
            </div>
            <h1 className="mt-4 font-semibold text-center">
              Approximate number of live <br /> listings
            </h1>
          </div>
          <div>
            <div className="w-40 h-40 border-4 border-[#01718f] rounded-full flex items-center text-4xl justify-center font-semibold">
              133M
            </div>
            <h1 className="mt-4 font-semibold">Active buyers worldwides</h1>
          </div>
          <div>
            <div className="w-40 h-40 border-4 border-[#01718f] rounded-full flex items-center text-4xl justify-center font-semibold">
              190
            </div>
            <h1 className="mt-4 font-semibold">Markets around the world</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
