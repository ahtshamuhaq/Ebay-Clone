import React from "react";
import i1 from "../../pictures/comp1.jpg";
import i2 from "../../pictures/comp2.jpg";
import a1 from "../../pictures/blog6.jpg";
import Card from "./Card";
const Card1 = () => {
  const cardData = [
    {
      title: "Learn more",
      heading: "FOR SELLERS",
      business: "Reach new customers & grow your business",
      desc: "We offer sellers the ability to grow a business with little barrier to entry regardless of size, background or geographic location. We never compete with our sellers. We win when our sellers succeed.",
      imageSrc: i1,
    },
    {
      heading: "FOR BUYERS",
      business: "Explore vast inventory & unique selection",
      desc: "Buyers who shop on the ebay.com marketplace and its localized counterparts, as well as the eBay mobile apps, enjoy a highly personalized experience with an unparalleled selection at great value.",
      imageSrc: i2,
      title: "Learn more",
    },
  ];
  return (
    <div className="w-4/5 mx-auto ">
      <div className="flex">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div>
        <h1 className="text-center text-3xl mt-8 mb-8">
          Our Purpose in Action
        </h1>
        <div className=" mx-auto">
          <img src={a1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card1;
