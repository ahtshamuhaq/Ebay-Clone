import React from "react";
import Carousel from "nuka-carousel";
import { Button } from "./Index";
import detailIcon from "./../../pictures/Screenshot 2023-06-08 083718.jpg";
import sp1 from "./../../pictures/sponsor1.jpg";
import sp2 from "./../../pictures/sponsor2.jpg";
import sp3 from "./../../pictures/sponsor3.jpg";
import sp4 from "./../../pictures/sponsor4.jpg";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="hidden xl:flex flex-col mt-3">
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
        <div className="hidden w-[500px] h-[500px] mt-4 border sm:flex mx-auto lg:mx-0 border-gray-500">
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
              className="  w-6 h-6"
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
              className=" w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="block sm:hidden">
          <Carousel wrapAround={true}>
            {images.map((imageSrc, index) => (
              <div
                className="border border-black mr-2 overflow-hidden"
                key={index}
              >
                <img
                  src={imageSrc}
                  alt="Iage"
                  className="hover:cursor-pointer"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col justify-start ml-4">
          <div>
            <div>
              <h1 className="font-bold text-xl">{data.title}</h1>
              <hr />
              <div className="ml-1 lg:ml-2 mt-4 mb-4 font-semibold text-lg">
                {data.condition && (
                  <p className="w-full">Condition: {data.condition}</p>
                )}
                {data.timeLeft && (
                  <p className="w-full">Time Left: {data.timeLeft}</p>
                )}
              </div>
              <hr />
              <div className="">
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
                  <div className="">
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
          </div>
          <div>
            <div>
              {data.OriginalPrice && (
                <div className="flex flex-col justify-evenly mt-4 mb-4">
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
                      <div className="flex">
                        <Button variant="darkCyan">{data.buttonText1}</Button>
                      </div>
                    )}
                    {data.buttonText2 && (
                      <Link to={"/pages/home/AddCart"}>
                        <Button variant="skyBlue">{data.buttonText2}</Button>
                      </Link>
                    )}
                    {data.buttonText3 && (
                      <div className="border ">
                        <Button variant="whiteLong">
                          <i class="fa fa-heart-o mr-2"></i>
                          {data.buttonText3}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="w-[300px] border border-[#dfdfdf] shadow-xl py-4 px-5 rounded-2xl ">
            <h1 className="font-semibold pt-2">Shop with confidence</h1>
            <div className="flex justify-between  pt-2 items-center">
              <img className="w-[25px] h-[25px]" src={detailIcon} alt="" />
              <p className="ml-3">
                <span className="font-bold ">eBay Money Back Guarantee</span>
                <br />
                <span className="">
                  Get the item you ordered or your money back.
                </span>
                <br />
                <span className=" text-[#3880df] underline pt-2">
                  Learn More
                </span>
              </p>
            </div>
          </div>
          <div className="w-[300px] border border-[#dfdfdf] shadow-xl py-4 px-5 rounded-2xl ">
            <span className="font-bold">Seller Information</span>
            <br />
            <span className="flex  text-[#3880df] underline">
              jaminahat (430)
            </span>
            <span className="text-sm">100% positive feedback</span>
            <br />
            <hr className="mt-3 border-2" />
            <br />
            <span className="flex items-center  text-[#3880df] ">
              {" "}
              <i className="fa fa-heart-o  mr-2 mt-1"></i> Save seller
            </span>
            <span className=" text-[#3880df] underline">Contact seller</span>
            <br />
            <span className=" text-[#3880df] underline">See other items</span>
            <br />
          </div>
          <div className="w-[300px] border border-[#dfdfdf] shadow-xl py-4 px-3 rounded-2xl ">
            <h1 className="font-bold">Shop related items</h1>
            <span className="flex  text-[#3880df]">
              Shop now <i class="material-icons">arrow_forward</i>
            </span>
            <div className="flex justify-between">
              <img className="w-[84px] h-[84px]" src={sp1} alt="" />
              <img className="w-[84px] h-[84px]" src={sp2} alt="" />
              <img className="w-[84px] h-[84px]" src={sp3} alt="" />
            </div>
            <div className="flex items-center">
              <div>
                <img className="w-11 h-11" src={sp4} alt="" />
              </div>
              <div className="ml-1">
                <h1 className="font-bold">OnlineShoesStore</h1>
                <div className="flex justify-between ">
                  <p>
                    <span className="font-bold">140K </span>
                    <span className="text-[#848f94]"> items sold</span>
                  </p>
                  <p className="text-[#848f94] ml-6">Sponsored</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-6">
        <div>
          <h1 className="font-semibold text-3xl">SHIPPING AND RETURN</h1>
          {data.shipping && (
            <h1 className="font-semibold text-lg flex pt-3 pb-3">
              Shipping:GBP {data.shipping} Expedited Shipping to Pakistan via
              eBay's Global Shipping Program.
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
            <h1 className="text-[#777170] font-semibold flex  pt-3 pb-3">
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
            <h1 className="font-semibold text-lg flex  pt-3 pb-3">
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
            <h1 className="font-semibold text-lg  pt-3 pb-3">
              Delivery:Estimated between {data.delivery} Includes international
              tracking
            </h1>
          )}
          {data.returns && (
            <h1 className="font-semibold text-lg  pt-3 pb-3">
              Returns: {data.returns}
            </h1>
          )}
          {data.paymentMethod.length > 0 && (
            <div className="flex w-12 h-8 font-semibold text-lg  ">
              Payments:
              {data.paymentMethod.map((method, methodIndex) => (
                <img key={methodIndex} src={method} alt={method} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-6 xl:hidden">
        <div className="w-[300px] border border-[#dfdfdf] shadow-xl py-4 px-5 rounded-2xl ">
          <h1 className="font-semibold">Shop with confidence</h1>
          <div className="flex justify-between  items-center">
            <img className="w-[25px] h-[25px]" src={detailIcon} alt="" />
            <p className="ml-3">
              <span className="font-bold">eBay Money Back Guarantee</span>
              <br />
              <span>Get the item you ordered or your money back.</span>
              <br />
              <span className=" text-[#3880df] underline">Learn More</span>
            </p>
          </div>
        </div>
        <div className="w-[300px] border border-[#dfdfdf] shadow-xl py-4 px-5 rounded-2xl ">
          <span className="font-bold">Seller Information</span>
          <br />
          <span className="flex  text-[#3880df] underline">
            jaminahat (430{" "}
            <i
              style={{ color: "green", textDecoration: "none" }}
              className="material-icons"
            >
              star
            </i>
            )
          </span>
          <span className="text-sm">100% positive feedback</span>
          <br />
          <span>
            ................................................................................
          </span>
          <br />
          <span className="flex items-center  text-[#3880df] ">
            {" "}
            <i className="fa fa-heart-o  mr-2 mt-1"></i> Save seller
          </span>
          <span className=" text-[#3880df] underline">Contact seller</span>
          <br />
          <span className=" text-[#3880df] underline">See other items</span>
          <br />
        </div>
        <div className="w-[300px] border border-[#dfdfdf] shadow-xl py-4 px-3 rounded-2xl ">
          <h1 className="font-bold">Shop related items</h1>
          <span className="flex  text-[#3880df]">
            Shop now <i class="material-icons">arrow_forward</i>
          </span>
          <div className="flex justify-between">
            <img className="w-[84px] h-[84px]" src={sp1} alt="" />
            <img className="w-[84px] h-[84px]" src={sp2} alt="" />
            <img className="w-[84px] h-[84px]" src={sp3} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <img className="w-11 h-11" src={sp4} alt="" />
            </div>
            <div className="ml-1">
              <h1 className="font-bold">OnlineShoesStore</h1>
              <div className="flex justify-between ">
                <p>
                  <span className="font-bold">140K </span>
                  <span className="text-[#848f94]"> items sold</span>
                </p>
                <p className="text-[#848f94] ml-6">Sponsored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerProductCard;
