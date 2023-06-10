import React, { useRef, useState } from "react";
import CardsForSlider from "./CardsForSlider";
import fishfinder1 from "./../../pictures/fishfinder1.png";
import fishfinder2 from "./../../pictures/fishfinder2.png";
import fishfinder3 from "./../../pictures/fishfinder3.png";
import fishfinder4 from "./../../pictures/fishfinder4.png";
import fishfinder5 from "./../../pictures/fishfinder5.png";
import fishfinder6 from "./../../pictures/fishfinder6.png";
import fishfinder7 from "./../../pictures/fishfinder7.png";
import fishfinder8 from "./../../pictures/fishfinder8.png";
import fishfinder9 from "./../../pictures/fishfinder9.png";
import C2 from "./../../pictures/C2.png";
import C2b from "./../../pictures/C2b.png";
import C2c from "./../../pictures/C2c.png";
import C2d from "./../../pictures/C2d.png";
import C2e from "./../../pictures/C2e.png";
import C2f from "./../../pictures/C2f.png";
import C2g from "./../../pictures/C2g.png";
import C2h from "./../../pictures/C2h.png";
import C2i from "./../../pictures/C2i.png";
import C2j from "./../../pictures/C2j.png";
import c3a from "./../../pictures/c3a.png";
import c3b from "./../../pictures/c3b.png";
import c3c from "./../../pictures/c3c.png";
import c3d from "./../../pictures/c3d.png";
import c3e from "./../../pictures/c3e.png";
import c3f from "./../../pictures/c3f.png";
import c3g from "./../../pictures/c3g.png";
import c3h from "./../../pictures/c3h.png";
import c3i from "./../../pictures/c3i.png";
import c3j from "./../../pictures/c3j.png";
import c3k from "./../../pictures/c3k.png";
import c3l from "./../../pictures/c3l.png";
import c3m from "./../../pictures/c3m.png";
const CardCarousal = () => {
  const cardData = [
    {
      image: fishfinder1,
      price: "$35.00",
      discount: "",
    },
    {
      image: fishfinder2,
      price: "$30.00",
      discount: "",
    },
    {
      image: fishfinder3,
      price: "$32.00",
      discount: "",
    },
    {
      image: fishfinder4,
      price: "$24.00",
      discount: "",
    },
    {
      image: fishfinder5,
      price: "$45.00",
      discount: "-$5.00",
    },
    {
      image: fishfinder6,
      price: "$350.00",
      discount: "",
    },
    {
      image: fishfinder7,
      price: "$85.00",
      discount: "-$28.00",
    },
    {
      image: fishfinder8,
      price: "$75.00",
      discount: "",
    },
    {
      image: fishfinder9,
      price: "$34.00",
      discount: "",
    },
  ];
  const card3Data = [
    {
      image: c3a,
      price: "$49.99",
      discount: "-$5.00",
    },
    {
      image: c3b,
      price: "$39.99",
      discount: "",
    },
    {
      image: c3c,
      price: "$42.99",
      discount: "",
    },
    {
      image: c3d,
      price: "$34.99",
      discount: "",
    },
    {
      image: c3e,
      price: "$49.99",
      discount: "-$10.00",
    },
    {
      image: c3f,
      price: "$359.99",
      discount: "",
    },
    {
      image: c3g,
      price: "$89.99",
      discount: "-$15.00",
    },
    {
      image: c3h,
      price: "$79.99",
      discount: "",
    },
    {
      image: c3i,
      price: "$39.99",
      discount: "",
    },
    {
      image: c3j,
      price: "$59.99",
      discount: "-$5.00",
    },
    {
      image: c3k,
      price: "$44.99",
      discount: "",
    },
    {
      image: c3l,
      price: "$54.99",
      discount: "",
    },
    {
      image: c3m,
      price: "$64.99",
      discount: "-$8.00",
    },
  ];
  const card2Data = [
    {
      image: C2,
      price: "$39.99",
      discount: "",
    },
    {
      image: C2b,
      price: "$29.99",
      discount: "",
    },
    {
      image: C2c,
      price: "$32.99",
      discount: "",
    },
    {
      image: C2d,
      price: "$24.99",
      discount: "",
    },
    {
      image: C2e,
      price: "$45.99",
      discount: "-$5.00",
    },
    {
      image: C2f,
      price: "$349.99",
      discount: "",
    },
    {
      image: C2g,
      price: "$79.99",
      discount: "-$20.00",
    },
    {
      image: C2h,
      price: "$72.99",
      discount: "",
    },
    {
      image: C2i,
      price: "$31.99",
      discount: "",
    },
    {
      image: C2j,
      price: "$54.99",
      discount: "-$10.00",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState([0, 0, 0]);
  const sliderRefs = useRef([null, null, null]);

  const handlePrevious = (sliderIndex) => {
    if (currentIndex[sliderIndex] > 0) {
      setCurrentIndex((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[sliderIndex] -= 1;
        return newIndexes;
      });
      scrollSlider(sliderIndex, -sliderRefs.current[sliderIndex].offsetWidth);
    }
  };

  const handleNext = (sliderIndex) => {
    const cardDataArray = [cardData, card2Data, card3Data];
    if (currentIndex[sliderIndex] < cardDataArray[sliderIndex].length - 1) {
      setCurrentIndex((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[sliderIndex] += 1;
        return newIndexes;
      });
      scrollSlider(sliderIndex, sliderRefs.current[sliderIndex].offsetWidth);
    }
  };

  const scrollSlider = (sliderIndex, scrollAmount) => {
    sliderRefs.current[sliderIndex].scrollTo({
      left: sliderRefs.current[sliderIndex].scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex  font-semibold text-3xl  mb-5">
        <h1 className="hover:underline">Your Recently Viewed Items</h1>
      </div>
      <div className="flex">
        <button
          onClick={() => handlePrevious(0)}
          disabled={currentIndex[0] === 0}
        >
          <i class="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_left
          </i>
        </button>
        <div
          className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300"
          ref={(ref) => (sliderRefs.current[0] = ref)}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-64 p-4 ${
                index === currentIndex[0] ? "active" : ""
              }`}
            >
              <CardsForSlider data={card} />
            </div>
          ))}
        </div>

        <button
          onClick={() => handleNext(0)}
          disabled={currentIndex[0] === cardData.length - 1}
        >
          <i class="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_right
          </i>
        </button>
      </div>
      <div className="flex  font-semibold text-3xl mt-12 mb-5">
        <h1 className="hover:underline border-r-2 pr-6 border-[#bcbcbc]">
          adidas Yeezy 500 Athletic Shoes
        </h1>
        <h1 className="hover:underline ml-10 flex justify-between ">
          See all{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-3 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </h1>
      </div>
      <div className="flex">
        <button
          onClick={() => handlePrevious(1)}
          disabled={currentIndex[1] === 0}
        >
          <i class="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_left
          </i>
        </button>
        <div
          className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 mt-8"
          ref={(ref) => (sliderRefs.current[1] = ref)}
        >
          {card2Data.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-64 p-4 ${
                index === currentIndex[1] ? "active" : ""
              }`}
            >
              <CardsForSlider data={card} />
            </div>
          ))}
        </div>

        <button
          onClick={() => handleNext(1)}
          disabled={currentIndex[1] === card2Data.length - 1}
        >
          <i class="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_right
          </i>
        </button>
      </div>
      <div className="flex  font-semibold text-3xl mt-12 mb-5">
        <h1 className="hover:underline border-r-2 w-24 border-[#bcbcbc]">
          Deals
        </h1>
        <h1 className="hover:underline ml-6  flex justify-between ">
          See all{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-3 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </h1>
      </div>
      <div className="flex">
        <button
          onClick={() => handlePrevious(2)}
          disabled={currentIndex[2] === 0}
        >
          <i class="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_left
          </i>
        </button>
        <div
          className="flex  overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 mt-8"
          ref={(ref) => (sliderRefs.current[2] = ref)}
        >
          {card3Data.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-64 p-4 ${
                index === currentIndex[2] ? "active" : ""
              }`}
            >
              <CardsForSlider data={card} />
            </div>
          ))}
        </div>

        <button
          onClick={() => handleNext(2)}
          disabled={currentIndex[2] === card3Data.length - 1}
        >
          <i class="material-icons" style={{ fontSize: "36px" }}>
            keyboard_arrow_right
          </i>
        </button>
      </div>
    </div>
  );
};

export default CardCarousal;
