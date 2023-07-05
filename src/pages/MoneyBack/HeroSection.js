import React from "react";
import image from "./../../pictures/money-1.jpg";
const HeroSection = () => {
  return (
    <div>
      <div
        className="mx-auto text-[#82187c] hidden xl:block "
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "90vh",
          width: "",
        }}
      >
        <div className="float-right mt-8 mr-6 p-6">
          <h1 className="font-bold text-2xl sm:text-6xl">Browse.</h1>
          <h1 className="font-bold text-2xl sm:text-6xl">Buy.</h1>
          <h1 className="font-bold text-2xl sm:text-6xl">Carefree.</h1>
          <p className="font-bold text-lg mt-5">
            Whatever you’re buying—large or small <br />, new or
            refurbished—eBay offers many ways <br /> to ensure you get exactly
            what you want.
          </p>
        </div>
      </div>
      <div className="bg-[#f7f7f7] xl:hidden mx-auto">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="text-[#82187c] flex flex-col sm:flex-row justify-center text-center mt-8 mr-6 p-6">
          <h1 className="font-bold text-2xl sm:text-6xl">Browse.</h1>
          <h1 className="font-bold text-2xl sm:text-6xl">Buy.</h1>
          <h1 className="font-bold text-2xl sm:text-6xl">Carefree.</h1>
        </div>
        <p className="font-bold text-lg text-[#82187c] text-center mt-3">
          Whatever you’re buying—large or small , new or refurbished—eBay offers
          many ways <br /> to ensure you get exactly what you want.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
