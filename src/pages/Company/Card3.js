import React from "react";

const Card3 = ({ cardData }) => {
  return (
    <div className="w-4/5 mx-auto">
      <div className={`p-4 mb-4 ${cardData.bgColor} flex`}>
        {cardData.imageSrc && (
          <img className="w-1/2" src={cardData.imageSrc} alt="" />
        )}

        <div className=" p-5 ">
          <h1 className={`text-4xl font-semibold ml-5 mb-10 ${cardData.color}`}>
            {cardData.title}
          </h1>
          <p className={` ${cardData.color} text-gray-700 ml-5`}>
            {cardData.desc}
          </p>
          <p
            className={`text-green-500 mt-16 text-2xl flex items-center ${cardData.color}`}
          >
            {cardData.learnMore}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-1 mt-2"
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
    </div>
  );
};

export default Card3;
