import React from "react";
import Button from "../../Components/common/Button";

const LastSection = () => {
  return (
    <div className="mt-8  flex flex-col sm:flex-row justify-center items-center">
      <div className="text-3xl font-bold">Didn't find what you need?</div>
      <div className="w-full sm:w-fit ml-6 mt-3 sm:mt-0">
        <Button variant="blueLong">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mr-2 mt-1"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          Search with eBay
        </Button>
      </div>
    </div>
  );
};

export default LastSection;
