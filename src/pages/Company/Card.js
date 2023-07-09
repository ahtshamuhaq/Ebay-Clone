import React from "react";

const Card = ({ title, heading, business, desc, imageSrc }) => {
  return (
    <div className="bg-white w-1/2 mt-8 ml-3">
      <div>
        <img className="" src={imageSrc} alt="" />
      </div>
      <div className="p-3">
        <p className="text-blue-600">{heading}</p>
        <h1 className="text-2xl mt-1">{business}</h1>
        <p className="text-sm text-[#666666] mt-2">{desc}</p>
        <p className="text-blue-600 flex items-center justify-end mt-8 mr-5">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Card;
