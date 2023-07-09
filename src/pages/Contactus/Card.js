import React from "react";

const Card = ({ data }) => {
  return (
    <div>
      <div className="bg-white  p-3">
        {data.title && <h1 className="text-2xl font-semibold">{data.title}</h1>}
        {data.description && <p className="text-sm mt-4">{data.description}</p>}
        <div className="flex flex-wrap items-center justify-between mt-10">
          {data.icon && (
            <p className="flex items-center text-blue-500">
              <i className={`${data.icon} mr-2`}></i>
              {data.text}
            </p>
          )}
          {data.svgPath && data.text2 && (
            <p className="flex items-center text-blue-600">
              {data.text2}

              <svg
                xmlns="http://www.w3.org/2000/svg "
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={data.svgPath}
                />
              </svg>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
