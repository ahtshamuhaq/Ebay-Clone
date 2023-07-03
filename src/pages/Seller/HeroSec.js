import React, { useState } from "react";
import backgroundImage from "./../../pictures/Sell-bg.jpg";
import { Button } from "../../Components";
const HeroSec = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleHelp = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div>
      <div className="fixed right-0 hidden bg-[#d1cfcf] border-t border-t-blue-500 p-2 w-12 h-12 xl:flex justify-center">
        <i
          onClick={toggleHelp}
          class="fa fa-question-circle-o text-2xl text-blue-500"
        ></i>
      </div>
      {isOpen2 && (
        <div className="fixed top-20 right-16 w-[400px] h-[80vh] hidden xl:block border-t border-t-gray-300 z-20 bg-white rounded-xl shadow-xl">
          <div className=" border-b flex pb-4 mt-5 justify-center items-center  border-b-gray-600">
            <p className="font-bold text-2xl ml-24 ">Help</p>
            <i onClick={toggleHelp} class="material-icons ml-40">
              cancel
            </i>
          </div>

          <hr className="mt-2" />

          <p className="font-bold text-2xl ml-6 mt-4">Need More Help?</p>
          <div className="w-[95%] mx-auto mt-8">
            <Button variant="blueSmall">Visit Help & Contact</Button>
          </div>
          <p className="font-bold mt-8 ml-4 text-xl">Let us know</p>
          <p className="flex items-center ml-6 text-blue-600 font-semibold mt-4">
            Feedback <i class="material-icons ml-6">arrow_forward</i>
          </p>
        </div>
      )}
      <div className="relative">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-auto  lg:opacity-100"
        />
        <div className="absolute top-24 right-20 p-4 bg-white rounded-xl hidden xl:block ">
          <h1 className="text-4xl font-bold mt-4 mb-4">
            Make money selling on <br /> eBay
          </h1>
          <p>
            Sell your items fast—millions of buyers are <br /> waiting.
          </p>
          <div className="mb-4 mt-2">
            <Button variant="blueSmall">List An Item</Button>
          </div>
        </div>
        <h1 className="text-2xl absolute top-0 opacity-100 z-20 left-0 text-white sm:hidden font-black text-center">
          Make money selling on <br /> eBay
        </h1>
      </div>
    </div>
  );
};

export default HeroSec;
