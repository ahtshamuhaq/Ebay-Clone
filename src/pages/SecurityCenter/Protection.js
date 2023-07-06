import React from "react";
import i1 from "../../pictures/sec3.png";
import i2 from "../../pictures/sec4.png";
import i3 from "../../pictures/sec5.png";
import i4 from "../../pictures/sec2.png";
import i5 from "../../pictures/sec6.png";
import i6 from "../../pictures/sec7.png";
import i7 from "../../pictures/sec8.png";
import i8 from "../../pictures/sec9.png";
const Protection = () => {
  return (
    <div>
      <div className="lg:h-[428px] h-full flex flex-col lg:flex-row items-start lg:items-center justify-center">
        <div className="flex flex-col  items-start lg:items-center w-full pl-14 lg:ml-0 lg:w-3/5">
          <h1 className="sm:text-[54px] text-2xl  leading-[53px] text-[#464646] font-bold">
            Protect Your <br /> Information
          </h1>
          <p className="bg-[#0073b7] w-1/2 sm:w-[25%] mt-10 text-center rounded-lg text-white py-5 hover:bg-[#16628e]">
            Learn More
          </p>
        </div>
        <div className="lg:w-3/5 w-4/5 mt-10 ml-auto lg:m-0">
          <div className="flex">
            <div className="w-16 h-16 bg-[#ff9f39]  hover:bg-[#ee881b] ">
              <img src={i4} alt="" />
            </div>
            <div className="bg-[#0073b7] hover:bg-[#16628e] w-3/5  flex justify-start items-center   h-16 ">
              <p className="pl-5   text-white ">
                Protect Your Account Information
              </p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-16 h-16 bg-[#ff9f39] hover:bg-[#ee881b] ">
              <img src={i1} alt="" />
            </div>
            <div className="bg-[#0073b7] hover:bg-[#16628e] w-3/5  flex justify-start items-center   h-16 ">
              <p className="pl-5   text-white ">Protect Your Privacy</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-16 h-16 bg-[#ff9f39] hover:bg-[#ee881b] ">
              <img src={i2} alt="" />
            </div>
            <div className="bg-[#0073b7] hover:bg-[#16628e] w-3/5  flex justify-start items-center   h-16 ">
              <p className="  pl-5 text-white ">Protect Your Devices</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-16 h-16 bg-[#ff9f39] hover:bg-[#ee881b] ">
              <img src={i3} alt="" />
            </div>
            <div className="bg-[#0073b7] hover:bg-[#16628e] w-3/5  flex justify-start items-center   h-16 ">
              <p className="pl-5   text-white ">
                Protect Your Wireless Network
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0073b7]">
        <div>
          <h1 className="text-[54px] text-center pt-16 leading-[53px] text-white font-bold">
            Stay Safe From Scammers
          </h1>
        </div>
        <div className=" w-3/4 mt-10 ml-auto pb-14">
          <div className="flex">
            <div className="w-16 h-16 bg-[#ff9f39] hover:bg-[#ee881b] ">
              <img src={i5} alt="" />
            </div>
            <div className="bg-[#fff] hover:bg-[#f7f7f7] w-3/5  flex justify-start items-center   h-16 ">
              <p className="pl-5   text-black ">
                Protect Your Account Information
              </p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-16 h-16 bg-[#ff9f39] hover:bg-[#ee881b] ">
              <img src={i6} alt="" />
            </div>
            <div className="bg-[#fff] hover:bg-[#f7f7f7] w-3/5  flex justify-start items-center   h-16 ">
              <p className="pl-5   text-black ">Protect Your Privacy</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-16 h-16 bg-[#ff9f39] hover:bg-[#ee881b] ">
              <img src={i7} alt="" />
            </div>
            <div className="bg-[#fff] hover:bg-[#f7f7f7] w-3/5  flex justify-start items-center   h-16 ">
              <p className="  pl-5 text-black ">Protect Your Devices</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-16 h-16 bg-[#ff9f39] hover:bg-[#ee881b] ">
              <img src={i8} alt="" />
            </div>
            <div className="bg-[#fff] hover:bg-[#f7f7f7] w-3/5  flex justify-start items-center   h-16 ">
              <p className="pl-5   text-black ">
                Protect Your Wireless Network
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protection;
