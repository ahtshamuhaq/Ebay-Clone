import React from "react";
import shoes from "./../../pictures/shoes.jpg";
const Shoes = () => {
  return (
    <div className="bg-[#E8E9E4] p-10 ">
      <div className="flex mt-10 md:flex-row flex-col ">
        <div className="md:w-1/2 w-full ">
          <h1 className="lg:text-[56px] text-2xl lg:leading-[57px] text-[#82187c]  font-bold">
            Need to Return an Item?
          </h1>
          <h1 className="text-[#82187c] text-xl font-bold leading-8 mt-2">
            It’s easy to do on eBay.
          </h1>
          <p className="text-[#666666] text-lg mt-4">
            Whatever you’re looking for, millions of <br /> items on eBay are
            returnable. Before you <br />
            buy an item, check the seller’s return
            <br />
            policy, then follow these easy steps to
            <br /> make a return.
          </p>
        </div>
        <div className="w-[100%] md:w-1/2 mt-5 md:mt-0 ">
          <img src={shoes} alt="" />
        </div>
      </div>
      <div className="flex  w-4/5  flex-col lg:flex-row  mt-6">
        <div className="w-20 h-20 rounded-full border-2  border-[#82187c] text-[#82187c] flex justify-center items-center text-4xl font-bold">
          1
        </div>
        <div className="lg:hidden ">
          <h1 className="text-[#82187c]  mt-3 text-xl font-bold">
            Start Your Return
          </h1>
          <p className="text-[#666666] mt-3">
            Select the item you want to return in <br /> your purchase history
            on <span className="font-bold ">My eBay</span>.
          </p>
        </div>
        <div className="hidden lg:block w-1/3 border-b-2 mb-5 border-dotted border-[#82187c] "></div>
        <div className="w-20 h-20 mt-4 lg:mt-0 rounded-full border-2  border-[#82187c] text-[#82187c] flex justify-center items-center text-4xl font-bold">
          2
        </div>
        <div className="lg:hidden">
          <h1 className="text-[#82187c]  mt-3 text-xl font-bold">
            Ship the Item Back
          </h1>
          <p className="text-[#666666] mt-3">
            If the seller asks, send the item back as <br /> soon as possible
            using their preferred return method.
          </p>
        </div>
        <div className="w-1/3 hidden mt-4 lg:mt-0 lg:block border-b-2 mb-5 border-dotted border-[#82187c] "></div>
        <div className="w-20 h-20 rounded-full border-2 mt-4 lg:mt-0 border-[#82187c] text-[#82187c] flex justify-center items-center text-4xl font-bold">
          3
        </div>
        <div className="lg:hidden">
          <h1 className="text-[#82187c]  mt-3 text-xl font-bold">
            Receive Your Refund
          </h1>
          <p className="text-[#666666] mt-3">
            If the seller doesn’t refund your money, <br /> ask eBay to step in
            and help.
          </p>
        </div>
      </div>
      <div className="lg:flex hidden justify-evenly ">
        <div className="w-1/3">
          <h1 className="text-[#82187c]  mt-3 text-xl font-bold">
            Start Your Return
          </h1>
          <p className="text-[#666666] mt-3">
            Select the item you want to return in <br /> your purchase history
            on <span className="font-bold ">My eBay</span>.
          </p>
        </div>
        <div className="w-1/3">
          <h1 className="text-[#82187c]  mt-3 text-xl font-bold">
            Ship the Item Back
          </h1>
          <p className="text-[#666666] mt-3">
            If the seller asks, send the item back as <br /> soon as possible
            using their preferred return method.
          </p>
        </div>
        <div className="w-1/3">
          <h1 className="text-[#82187c]  mt-3 text-xl font-bold">
            Receive Your Refund
          </h1>
          <p className="text-[#666666] mt-3">
            If the seller doesn’t refund your money, <br /> ask eBay to step in
            and help.
          </p>
        </div>
      </div>
      <p className="flex mt-6 items-center justify-end pb-12 text-[#82187c] text-2xl md:text-lg font-bold">
        Learn More <i class="material-icons">arrow_forward</i>
      </p>
    </div>
  );
};

export default Shoes;
