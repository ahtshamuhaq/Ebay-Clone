import React from "react";

const CardsForSlider = ({ data }) => {
  return (
    <div className="hover:underline">
      <div className="w-[208px] h-[208px] flex bg-[#fafafa] items-center justify-center">
        <img src={data.image} alt="" />
      </div>
      <div className="flex mt-3 w-fit justify-between">
        <h1 className="font-bold text-lg">{data.price}</h1>
        <p className="ml-3">{data.discount}</p>
      </div>
    </div>
  );
};

export default CardsForSlider;
