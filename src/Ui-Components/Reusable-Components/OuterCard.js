import React from "react";
import outerCard1 from "./../../pictures/outerCard1.png";
const OuterCard = () => {
  const product = [
    {
      image: outerCard1,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "MENS",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "$329.99",
      buyIt: "Buy It Now",
      shippingFee: "+$46.00 shipping",
      origin: "from United States",
      watchers: "230 watchers",
    },
  ];
  const productItems = product[0];
  return (
    <div>
      <div className="">
        <img src={productItems.image} alt="Product" />
      </div>
      <h1 className="font-bold">{productItems.description}</h1>
      <h1 className="font-bold">{productItems.gender}</h1>
      {productItems.details.map((detail) => (
        <span className="text-[#727070]">{detail}</span>
      ))}
      <h1 className="font-bold mt-3 text-2xl">{productItems.price}</h1>
      <p className="text-[#727070]">{productItems.buyIt}</p>
      <p className="text-[#727070]">{productItems.shippingFee}</p>
      <p className="text-[#727070]">{productItems.origin}</p>
      <h1 className="font-bold">{productItems.watchers} Watchers</h1>
    </div>
    //
  );
};

export default OuterCard;
