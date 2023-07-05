import React from "react";

const CardsForSeller = ({ title, description, overview }) => {
  return (
    <div className="h-72 w-72 bg-white border-b-4 p-6 border-b-[#ff9772]">
      <h1 className="text-[#11238b] font-bold text-xl mt-4">{title}</h1>
      <p className="text-[13px] mt-6">{description}</p>
      <p className="text-[16px] mt-12">{overview}</p>
    </div>
  );
};

export default CardsForSeller;
