import React from "react";
import Card3 from "./Card3";
import i1 from "../../pictures/comp3.jpg";
const Card2 = () => {
  const cardData = [
    {
      title: "Technology",
      desc: "Meet the leaders at eBay who are shaping the vision for our company and driving the future of ecommerce",
      learnMore: "Learn more",
      imageSrc: i1,
      color: "text-[#01718f]",
      bgColor: "white",
    },
    {
      title: "Impact",
      desc: "eBay creates inspiring ecommerce experiences for our buyers, sellers and developers. Embracing innovation has been a cornerstone of our growth and customer loyalty for more than 25 years – encompassing technologies such as AI, computer vision, natural language processing and machine translation.",
      learnMore: "Learn more",
      imageSrc: "",
      color: "text-[#5d91a2]",
      bgColor: "bg-[#c2f2ef]",
    },
    {
      title: "Our Leaders",
      desc: "Every day, people build businesses on eBay. Nonprofit organizations raise vital funds. Entrepreneurs gain new skills and access to new markets where they can turn their dreams and ideas into business success.",
      learnMore: "Learn more",
      imageSrc: "",
      color: "text-[#c2f2ef]",
      bgColor: "bg-[#01718f]",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {cardData.map((card, index) => (
        <div className={index === 0 ? "w-full" : "w-1/2"} key={index}>
          <Card3 cardData={card} />
        </div>
      ))}
    </div>
  );
};

export default Card2;
