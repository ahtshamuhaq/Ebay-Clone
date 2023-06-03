import React from "react";
import outerCard1 from "./../../pictures/outerCard1.png";
import { Button, OuterCard } from "./Index";

const InnerProductCard = ({
  data,
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
            <div>
              <h1 className="font-bold text-xl">{data.title}</h1>
              <hr />
              <div className="ml-12 mt-4 mb-4 font-semibold text-lg">
                {data.condition && (
                  <p className="w-full">Condition: {data.condition}</p>
                )}
                {data.timeLeft && (
                  <p className="w-full">Time Left: {data.timeLeft}</p>
                )}
              </div>
              <hr />
              <div className="flex justify-evenly">
                <div>
                  {data.startingBid && (
                    <h1 className="font-bold text-2xl">
                      Starting Bid:{data.startingBid}
                    </h1>
                  )}
                  {data.usPrice && (
                    <p className="text-[#777170] font-semibold">
                      US Price: {data.usPrice}
                    </p>
                  )}
                  {data.reserveMet && (
                    <p className="font-semibold flex">
                      {data.reserveMet}
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
                  {data.numOfBids && (
                    <p className="text-[#367dd0] underline mb-2">
                      [ {data.numOfBids} Bids]
                    </p>
                  )}
                  {data.buttonText && (
                    <Button variant="darkCyan">{data.buttonText}</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {data.OriginalPrice && (
                <div className="flex justify-evenly mt-4 mb-4">
                  <div>
                    <h1 className="font-bold text-2xl">
                      Price: {data.OriginalPrice}
                    </h1>
                    <h1 className="text-[#777170] font-semibold">
                      Approximately US {data.UsPrice}
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    {data.buttonText1 && (
                      <Button variant="darkCyan">{data.buttonText1}</Button>
                    )}
                    {data.buttonText2 && (
                      <Button variant="skyBlue">{data.buttonText2}</Button>
                    )}
                    {data.buttonText3 && (
                      <Button variant="whiteLong">{data.buttonText3}</Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="ml-6">
            <div>
              {data.shipping && (
                <h1 className="font-semibold text-lg flex">
                  Shipping:GBP {data.shipping} Expedited Shipping to Pakistan
                  via eBay's Global Shipping Program.
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
              {data.location && (
                <h1 className="text-[#777170] font-semibold flex">
                  Located in: {data.location}
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
              {data.importCharges && (
                <h1 className="font-semibold text-lg flex">
                  Import charges: Est. {data.importCharges}Amount confirmed at
                  checkout
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
              {data.delivery && (
                <h1 className="font-semibold text-lg">
                  Delivery:Estimated between {data.delivery} Includes
                  international tracking
                </h1>
              )}
              {data.returns && (
                <h1 className="font-semibold text-lg">
                  Returns: {data.returns}
                </h1>
              )}
              {data.paymentMethod.length > 0 && (
                <div className="flex w-12 h-8 font-semibold text-lg">
                  Payments:
                  {data.paymentMethod.map((method, methodIndex) => (
                    <img key={methodIndex} src={method} alt={method} />
                  ))}
                </div>
              )}
            </div>
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
