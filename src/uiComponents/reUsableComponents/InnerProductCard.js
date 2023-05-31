import React, { useState } from "react";
import Inner1 from "./../../pictures/Inner1.jpg";
import Inner2 from "./../../pictures/Inner2.jpg";
import Inner3 from "./../../pictures/Inner3.jpg";
import Inner4 from "./../../pictures/Inner4.jpg";
import Inner5 from "./../../pictures/Inner5.jpg";
import Inner6 from "./../../pictures/Inner6.jpg";
import Inner7 from "./../../pictures/Inner7.jpg";
import paypal from "./../../pictures/paypal.jpg";
import gpay from "./../../pictures/gpay.jpg";
import mastercard from "./../../pictures/mastercard.jpg";
import visa from "./../../pictures/visa.jpg";
import amex from "./../../pictures/amex.jpg";
import { buyItNow, addToCart, addToWatchlist } from "./ButtonStyle";
const InnerProductCard = () => {
  const images = [Inner1, Inner2, Inner3, Inner4, Inner5, Inner6, Inner7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setCurrentImageIndex(index);
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(previousImageIndex);
  };

  const handleClick = (index) => {
    setCurrentImageIndex(index);
    setPreviousImageIndex(currentImageIndex);
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  const data = [
    {
      title: " Adidas Yeezy 500 ash grey UK9.5",
      condition: "New with box",
      timeLeft: "5d 8h|Sunday, 11:58 PM",
      startingBid: "GBP 126.00",
      numOfBids: "[ 0 bids ]",
      usPrice: "Approximately US $155.65",
      reserveMet: "Reserve not met",
      buttonText: "Place bid",
    },
  ];
  const data2 = [
    {
      OriginalPrice: "GBP 180.00",
      usPrice: "Approximately US $222.35",
      buttonText1: "Buy It Now",
      buttonText2: "Add to cart",
      buttonText3: "Add to watchlist",
    },
  ];
  const deliveryMethod = [
    {
      shipping:
        " GBP 59.10 (approx US $73.01) Expedited Shipping to Pakistan via eBay's Global Shipping Program. ",
      location: "Located in: Sidcup , United Kingdom",
      importCharges: " Est. £126.03 Amount confirmed at checkout",
      delivery:
        " Estimated between Tue, Jun 13 and Fri, Jun 16 to 46000 Includes international tracking",
      returns: " Seller does not accept returns. See details- ",
      paymentMethod: [paypal, gpay, visa, mastercard, amex],
    },
  ];
  return (
    <div className="flex justify-between w-full ">
      <div className="flex flex-col mt-3">
        {images.map((imageSrc, index) => (
          <div
            className="w-11 mt-2 h-11 border border-black mr-2 overflow-hidden"
            key={index}
            onMouseEnter={() => handleMouseEnter(imageSrc, index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(imageSrc, index)}
          >
            <img src={imageSrc} alt="Iage" className="hover:cursor-pointer" />
          </div>
        ))}
      </div>
      <div className="w-[500px] h-[500px] mt-4 flex border border-gray-500">
        <button
          className=" bg-[#cccccc] p-2 "
          onClick={handlePrev}
          disabled={currentImageIndex === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt="Big Imae"
            className="w-full h-full"
          />
        </div>
        <button
          className=" bg-[#cccccc] p-2 "
          onClick={handleNext}
          disabled={currentImageIndex === images.length - 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-start ml-4">
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <h1 className="font-bold text-xl"> {item.title}</h1>
              <hr />
              <div className=" ml-12 mt-4 mb-4 font-semibold text-lg ">
                <p className="w-full">Condition: {item.condition}</p>
                <p className="w-full"> Time Left: {item.timeLeft}</p>
              </div>
              <hr />
              <div className="flex justify-evenly">
                <p className="font-semibold text-lg">Starting Bid:</p>
                <div>
                  <h1 className="font-bold text-2xl"> {item.startingBid}</h1>
                  <p className="text-[#777170] font-semibold">
                    US Price: {item.usPrice}
                  </p>
                  <p className="font-semibold flex">
                    {item.reserveMet}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mt-1 ml-1 font-bold"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </p>
                </div>
                <div className="ml-6">
                  <p className="text-[#367dd0] underline mb-2">
                    {" "}
                    {item.numOfBids}
                  </p>

                  <button style={buyItNow}>{item.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
          <hr />
        </div>
        <div>
          {data2.map((item, index) => (
            <div key={index}>
              <div className="flex justify-evenly mt-4 mb-4">
                <h1 className="font-semibold text-lg">Price:</h1>
                <div>
                  <h1 className="font-bold text-2xl">{item.OriginalPrice}</h1>
                  <h1 className="text-[#777170] font-semibold">
                    {item.usPrice}
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <button className="mt-3" style={buyItNow}>
                    {item.buttonText1}
                  </button>
                  <button className="mt-3" style={addToCart}>
                    {item.buttonText2}
                  </button>
                  <button className="mt-3" style={addToWatchlist}>
                    {item.buttonText3}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ml-6">
          {deliveryMethod.map((item, index) => (
            <div key={index}>
              <h1 className="font-semibold text-lg flex">
                Shipping:{item.shipping}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mt-1 ml-1 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <h1 className="text-[#777170] font-semibold flex">
                {item.location}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mt-1 ml-1 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <h1 className="font-semibold text-lg flex">
                Import charges:{item.importCharges}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mt-1 ml-1 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <h1 className="font-semibold text-lg">
                Delivery:{item.delivery}
              </h1>
              <h1 className="font-semibold text-lg">Returns:{item.returns}</h1>
              <div className="flex w-12 h-8 font-semibold text-lg">
                Payments:
                {item.paymentMethod.map((method, methodIndex) => (
                  <img key={methodIndex} src={method} alt={method} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnerProductCard;
