import React from "react";
import outerCard1 from "./../../pictures/outerCard1.png";
import { Button, OuterCard } from "./Index";

const InnerProductCard = ({
  data,
  data2,
  deliveryMethod,
  images,
  setCurrentImageIndex,
  previousImageIndex,
  setPreviousImageIndex,
  currentImageIndex,
}) => {
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

  const product = {
    image: outerCard1,
    description: " 500 Enflame SIZE 11.5",
    gender: "WOMENS",
    details: ["Brand ", "·ALIBABA adidas", "·  Yeezy"],
    price: "3239.99",
    buyIt: "Sale It Now",
    shippingFee: "46.00 ",
    origin: " AMERICAN States",
    watchers: "1",
  };

  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col mt-3">
          {images.map((imageSrc, index) => (
            <div
              className="w-11 mt-2 h-11 border border-black mr-2 overflow-hidden"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleClick(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={imageSrc} alt="Iage" className="hover:cursor-pointer" />
            </div>
          ))}
        </div>
        <div className="w-[500px] h-[500px] mt-4 flex border border-gray-500">
          <button
            className=" bg-[#cccccc] p-2"
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
              alt="Big mage"
              className="w-full h-full"
            />
          </div>
          <button
            className=" bg-[#cccccc] p-2"
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
                <h1 className="font-bold text-xl">{item.title}</h1>
                <hr />
                <div className="ml-12 mt-4 mb-4 font-semibold text-lg">
                  {item.condition && (
                    <p className="w-full">Condition: {item.condition}</p>
                  )}
                  {item.timeLeft && (
                    <p className="w-full">Time Left: {item.timeLeft}</p>
                  )}
                </div>
                <hr />
                <div className="flex justify-evenly">
                  <div>
                    {item.startingBid && (
                      <h1 className="font-bold text-2xl">
                        Starting Bid:{item.startingBid}
                      </h1>
                    )}
                    {item.usPrice && (
                      <p className="text-[#777170] font-semibold">
                        US Price: {item.usPrice}
                      </p>
                    )}
                    {item.reserveMet && (
                      <p className="font-semibold flex">
                        {item.reserveMet}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 mt-1 ml-1 font-bold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                      </p>
                    )}
                  </div>
                  <div className="ml-6">
                    {item.numOfBids && (
                      <p className="text-[#367dd0] underline mb-2">
                        [ {item.numOfBids} Bids]
                      </p>
                    )}
                    {item.buttonText && (
                      <Button variant="darkCyan">{item.buttonText}</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {data2.map((item, index) => (
              <div key={index}>
                {item.OriginalPrice && (
                  <div className="flex justify-evenly mt-4 mb-4">
                    <div>
                      <h1 className="font-bold text-2xl">
                        Price: {item.OriginalPrice}
                      </h1>
                      <h1 className="text-[#777170] font-semibold">
                        Approximately US {item.usPrice}
                      </h1>
                    </div>
                    <div className="flex flex-col">
                      {item.buttonText1 && (
                        <Button variant="darkCyan">{item.buttonText1}</Button>
                      )}
                      {item.buttonText2 && (
                        <Button variant="skyBlue">{item.buttonText2}</Button>
                      )}
                      {item.buttonText3 && (
                        <Button variant="whiteLong">{item.buttonText3}</Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="ml-6">
            {deliveryMethod.map((item, index) => (
              <div key={index}>
                {item.shipping && (
                  <h1 className="font-semibold text-lg flex">
                    Shipping: {item.shipping}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mt-1 ml-1 font-bold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </h1>
                )}
                {item.location && (
                  <h1 className="text-[#777170] font-semibold flex">
                    Located in: {item.location}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mt-1 ml-1 font-bold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </h1>
                )}
                {item.importCharges && (
                  <h1 className="font-semibold text-lg flex">
                    Import charges: {item.importCharges}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mt-1 ml-1 font-bold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </h1>
                )}
                {item.delivery && (
                  <h1 className="font-semibold text-lg">
                    Delivery: {item.delivery}
                  </h1>
                )}
                {item.returns && (
                  <h1 className="font-semibold text-lg">
                    Returns: {item.returns}
                  </h1>
                )}
                {item.paymentMethod.length > 0 && (
                  <div className="flex w-12 h-8 font-semibold text-lg">
                    Payments:
                    {item.paymentMethod.map((method, methodIndex) => (
                      <img key={methodIndex} src={method} alt={method} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <OuterCard product={product} />
      </div>
    </div>
  );
};

export default InnerProductCard;
