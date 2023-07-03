import React, { useState, useRef } from "react";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRefs = useRef(null);

  const cardData = [
    {
      bgColor: "#ffdec7",
      textColor1: "#5c1b05",
      textColor2: "#7a3426",
      title: "Ship with ease",
      content: [
        "We provide recommendations for delivery, but to save on shipping, use an eBay delivery label.",
        "Plus, if you’re selling locally, you can also offer Local Pickup.",
      ],
    },
    {
      bgColor: "#fcf2bd",
      textColor1: "#5d1c06",
      textColor2: "#8e5741",
      title: "Take high-quality photos",
      content: [
        "Snap your items from multiple angles in a well-lit place, and capture any blemishes for transparency.",
        "On the eBay app, you can clean up your images and add a white background.",
      ],
    },
    {
      bgColor: "#c5e5fb",
      textColor1: "#121258",
      textColor2: "#414982",
      title: "Pick a purchase format",
      content: [
        "If you want to sell your item quickly, Buy it Now is probably the best format for you.",
        "Otherwise, if you want to try your luck and shoot for the best possible price, choose Auction.",
      ],
    },
    {
      bgColor: "#fad8f0",
      textColor1: "#500750",
      textColor2: "#844781",
      title: "Set the right price",
      content: [
        "We will recommend a price based on recent sales of similar items.",
        "You can even watch how other sellers are pricing their items, or use Best Offer to negotiate and sell faster.",
      ],
    },
    {
      bgColor: "#ccfdce",
      textColor1: "#446f30",
      textColor2: "#2d7e7b",
      title: "Stand out from the crowd",
      content: [
        "Promote your listing and be seen by more buyers with sponsored placements across the eBay network.",
        "Sell your items faster with eBay’s advertising tools.",
      ],
    },
    {
      bgColor: "#ffdec7",
      textColor1: "#5d1c06",
      textColor2: "#8e5741",
      title: "Write a standout title",
      content: [
        "We’ll recommend search terms that buyers often use, so be sure to add these in the title.",
        "Avoid all caps and focus on specific details like brand, model, size, and color.",
      ],
    },
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollSlider(-sliderRefs.current.offsetWidth);
    }
  };

  const handleNext = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollSlider(sliderRefs.current.offsetWidth);
    }
  };

  const scrollSlider = (scrollAmount) => {
    sliderRefs.current.scrollTo({
      left: sliderRefs.current.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex mt-6">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          <i className="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_left
          </i>
        </button>
        <div
          className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300"
          ref={sliderRefs}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-fit p-4 rounded-lg `}
              style={{ backgroundColor: card.bgColor }}
            >
              <h1
                className={`text-3xl font-bold mb-5`}
                style={{ color: card.textColor1 }}
              >
                {card.title}
              </h1>
              <ul className="list-disc ml-8" style={{ color: card.textColor2 }}>
                {card.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="mt-5 mb-16">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex === cardData.length - 1}
        >
          <i className="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_right
          </i>
        </button>
      </div>
    </div>
  );
};

export default Cards;
