import React from "react";
import jaminahat from "./../../pictures/jaminahat.jpg";
import Button from "./Button";
const SellerFeedback = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center md:flex-row md:justify-between ">
        <div className="flex items-center">
          <div className="w-[135px] mr-5 h-[135px] rounded-full border border-[#e5e5e5] flex justify-center items-center">
            <img className="w-16 h-16" src={jaminahat} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-3xl hover:underline">jaminahat</h1>
            <h1 className="font-semibold text-lg">100% Positive Feedback</h1>
            <h1 className="font-semibold text-lg"> 825 Items sold</h1>
          </div>
        </div>
        <div className="flex flex-col w-fit mt-3">
          <Button variant="blueSmall">Visit Shop</Button>
          <Button variant="outlinedBlue">Contact</Button>
          <Button variant="outlinedBlue">
            <i class="fa fa-heart-o mr-2"></i>
            Save Seller
          </Button>
        </div>
      </div>
      <div>
        <div className="text-center mt-6 md:text-left">
          <h1 className="font-bold text-2xl">Detailed seller ratings</h1>
          <p className="text-gray-500 mt-3">Average for the last 12 months</p>
        </div>
      </div>
    </div>
  );
};

export default SellerFeedback;
