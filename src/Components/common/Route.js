import React from "react";

const Route = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="border border-gray-600 w-6 h-6  flex items-center">
          <i style={{ color: "blue" }} className="material-icons">
            keyboard_arrow_left
          </i>
        </div>
        <span className="border-r-black border-r-2 pr-3 text-xs ml-4 h-fit text-[#0d2e9d] hover:underline">
          {" "}
          back to Home page
        </span>
        <span className="ml-2  text-xs">Listed in category:</span>
        <span className="ml-1  text-xs hover:underline text-[#2661bd]">
          Clothing, Shoes &amp; Accessories
        </span>{" "}
        &gt;
        <span className="ml-1  text-xs hover:underline text-[#2661bd]">
          Men
        </span>{" "}
        &gt;
        <span className="ml-1  text-xs hover:underline text-[#2661bd]">
          Men's Shoes
        </span>{" "}
        &gt;
        <span className="ml-1  text-xs hover:underline text-[#2661bd]">
          Athletic Shoes
        </span>
      </div>
      <div>
        <span className=" border-r-black border-r-2 pr-3 text-xs hover:underline text-[#2661bd]">
          Share
        </span>
        <span className=" text-xs ml-2 hover:underline text-[#2661bd]">
          Add to Watchlist
        </span>
      </div>
    </div>
  );
};

export default Route;
