import React from "react";
import { Link } from "react-router-dom";

const Route = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="flex items-center">
        <div className="border border-gray-600 w-6 h-6  flex items-center">
          <i style={{ color: "blue" }} className="material-icons">
            keyboard_arrow_left
          </i>
        </div>
        <Link to={"/"}>
          <span className="border-r-black border-r-2 pr-3 text-xs ml-4 h-fit text-[#0d2e9d] hover:underline">
            {" "}
            back to Home page
          </span>
        </Link>
        <span className="ml-2  text-xs">Listed in category:</span>
        <span className="ml-1  text-xs hover:underline text-[#2661bd]  hidden sm:block">
          Clothing, Shoes &amp; Accessories &gt;
        </span>{" "}
        <span className="ml-1  text-xs hover:underline text-[#2661bd]  hidden sm:block">
          Men &gt;
        </span>{" "}
        <span className="ml-1  text-xs hover:underline text-[#2661bd]  hidden sm:block">
          Men's Shoes &gt;
        </span>{" "}
        <span className="ml-1  text-xs hover:underline text-[#2661bd]  hidden sm:block">
          Athletic Shoes
        </span>
      </div>
      <div className="flex">
        <span className=" border-r-black border-r h-4 pr-3 text-xs hover:underline text-[#2661bd]  hidden sm:block">
          Share
        </span>
        <span className=" text-xs ml-2 hover:underline text-[#2661bd]  hidden sm:block">
          Add to Watchlist
        </span>
      </div>
    </div>
  );
};

export default Route;
