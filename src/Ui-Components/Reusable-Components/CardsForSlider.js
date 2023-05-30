import fishfinder1 from "./../../pictures/fishfinder1.png";
import React from "react";

const CardsForSlider = () => {
  const cardData = {
    image: fishfinder1,
    price: "$35.00",
    discount: "",
  };

  return (
    <div>
      <img src={cardData.image} alt="" />
      <div>
        <h1 className="font-bold text-lg">{cardData.price}</h1>
        <p>{cardData.discount}</p>
      </div>
    </div>
  );
};

export default CardsForSlider;
