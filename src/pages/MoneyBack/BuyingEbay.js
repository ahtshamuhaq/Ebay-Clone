import React from "react";
import i1 from "./../../pictures/1.png";
import i2 from "./../../pictures/2.png";
import i3 from "./../../pictures/3.png";
const BuyingEbay = () => {
  return (
    <div className="bg-[#82187c] mt-3 mb-5">
      <div className="pl-6 sm:pl-24">
        <h1 className="sm:text-[54px] text-xl sm:leading-[54px] pt-12 text-white font-bold">
          Buying Auto Parts and Accessories,
          <br className="hidden sm:block" /> a Vehicle, or Business Equipment{" "}
          <br />
          on eBay?
        </h1>
        <h1 className="text-3xl text-white mt-7 font-bold">
          Your purchase may come with protection.
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row pl-6 sm:pl-24 flex-wrap xl:flex-nowrap justify-between  p-8 items-center">
        <div className="w-full lg:w-1/2  xl:w-1/3">
          <img src={i1} alt="" />
          <h1 className="text-xl font-bold text-white mt-3">
            For Parts and Accessories
          </h1>
          <p className="font-semibold text-white mt-3">
            Eligible parts and accessories purchased{" "}
            <br className="hidden sm:block" />
            are covered by eBay Guaranteed Fit. These <br />
            products are guaranteed to fit your vehicle
            <br className="hidden sm:block" />
            or you will get your money back plus free
            <br className="hidden sm:block" />
            return shipping.
          </p>
          <p className="flex mt-6 items-center   pb-12 text-[#ffffff] text-2xl md:text-lg font-bold">
            Learn More <i class="material-icons">arrow_forward</i>
          </p>
        </div>
        <div className="w-full lg:w-1/2  xl:w-1/3">
          <img src={i2} alt="" />
          <h1 className="text-xl font-bold text-white mt-3">For Vehicles</h1>
          <p className="font-semibold text-white mt-3">
            Our Vehicle Purchase Protection (VPP)
            <br className="hidden sm:block" />
            covers up to $100,000 for vehicle non-
            <br className="hidden sm:block" />
            delivery, missing title, or major
            <br className="hidden sm:block" />
            undisclosed defects. You’re automatically{" "}
            <br className="hidden sm:block" />
            enrolled in the program at no extra charge.
          </p>
          <p className="flex mt-6 items-center   pb-12 text-[#ffffff] text-2xl md:text-lg font-bold">
            Learn More <i class="material-icons">arrow_forward</i>
          </p>
        </div>
        <div className=" w-full lg:w-1/2  xl:w-1/3 ml-4">
          <img src={i3} alt="" />
          <h1 className="text-xl font-bold text-white mt-3">
            For Business Equipment
          </h1>
          <p className="font-semibold text-white mt-3">
            Our Business Equipment Purchase
            <br className="hidden sm:block" />
            Protection (BEPP) protects eligible capital{" "}
            <br className="hidden sm:block" />
            equipment purchases for up to $100,000{" "}
            <br className="hidden sm:block" />
            for non-delivery and undisclosed defects.
          </p>
          <p className="flex mt-6 items-center   pb-12 text-[#ffffff] text-2xl md:text-lg font-bold">
            Learn More <i class="material-icons">arrow_forward</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyingEbay;
