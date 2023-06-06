import React from "react";

const CarousalNavDropdowns = ({ dropdownData, isOpen }) => {
  return (
    <div className="dropdown">
      {console.log(dropdownData)}
      {isOpen && (
        <div className="dropdown-content flex justify-between z-30 absolute w-[1220px] h-[300px] left-[120px] bg-white">
          <div className=" mt-4">
            <h1 className="font-bold mb-3 mt-1">{dropdownData.heading1}</h1>
            {dropdownData.paragraphs1.map((paragraph, index) => (
              <ul>
                <li
                  className="mb-[12px] text-xs hover:underline hover:cursor-pointer"
                  key={index}
                >
                  {paragraph}
                </li>
              </ul>
            ))}
          </div>
          <div className="mt-4">
            <h1 className="font-bold mb-3 mt-1">{dropdownData.heading2}</h1>
            {dropdownData.paragraphs2.map((paragraph, index) => (
              <ul>
                <li
                  className="mb-[10px] text-xs hover:underline hover:cursor-pointer"
                  key={index}
                >
                  {paragraph}
                </li>
              </ul>
            ))}
          </div>
          <div className="mt-4 h-fit">
            <img src={dropdownData.image} alt="" />{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarousalNavDropdowns;
