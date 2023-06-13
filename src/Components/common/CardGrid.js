import React from "react";
import OuterCard from "./OuterCard";
import outerCard1 from "./../../pictures/outerCard1.png";

const CardGrid = () => {
  const product = {
    image: outerCard1,
    description: "Adidas Yeezy 500 Enflame SIZE 11.5",
    gender: "MENS",
    details: ["Brand New", "· adidas", "· adidas Yeezy"],
    price: "329.99",
    buyIt: "Buy It Now",
    shippingFee: "46.00",
    origin: "United States",
    watchers: "12",
  };

  return (
    <div className="container">
      <div className="cards flex flex-wrap justify-between ">
        {Array.from({ length: 25 }).map((_, index) => (
          <div className="w-[271px] p-2 m-2 ">
            <OuterCard product={product} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
