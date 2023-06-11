import React from "react";
import img from "./../../pictures/message.jpg";
const BrowseHelp = () => {
  return (
    <div>
      <div className="bg-[#f7f7f7] p-4">
        <h1 className="font-semibold text-3xl">Browse Help Articles</h1>
        <div className="flex flex-wrap justify-between">
          <div className="bg-white flex  justify-center  mt-5 items-center w-[29%] h-[250px] ">
            <h1>
              <i class="fa fa-shopping-cart text-blue-600 text-6xl"></i>
              <p className="font-semibold text-xl">Buying </p>
            </h1>
          </div>
          <div className="bg-white flex   justify-center mt-5 items-center w-[29%] h-[250px] ">
            <h1>
              <i class="fa fa-tag text-blue-600 text-6xl"></i>

              <p className="font-semibold text-xl">Selling </p>
            </h1>
          </div>
          <div className="bg-white flex   justify-center mt-5 items-center w-[29%] h-[250px] ">
            <h1>
              <i class="fa fa-user text-blue-600 ml-3 text-6xl"></i>
              <p className="font-semibold text-xl">Account </p>
            </h1>
          </div>
          <div className="bg-white flex   justify-center mt-5 items-center w-[29%] h-[250px] ">
            <h1>
              <i class="material-icons text-blue-600 ml-10 text-6xl">
                assignment_return
              </i>
              <p className="font-semibold text-xl">Returns & Refunds </p>
            </h1>
          </div>
          <div className="bg-white flex   justify-center mt-5 items-center w-[29%] h-[250px] ">
            <h1>
              <i class="material-icons text-blue-600 ml-10 text-6xl">
                local_shipping
              </i>

              <p className="font-semibold text-xl">Shipping & Tracking </p>
            </h1>
          </div>
          <div className="bg-white flex   justify-center mt-5 items-center w-[29%] h-[250px] ">
            <h1>
              <i class="fa fa-dollar text-blue-600 ml-10 text-6xl"></i>
              <p className="font-semibold text-xl">Fees & Billing </p>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#dfdfe1] mt-6 p-5 ">
        <h1 className="text-center text-2xl font-semibold">Need more help?</h1>
        <div className="bg-white px-10 py-5 flex justify-center w-fit mx-auto mt-6 items-center">
          <img src={img} alt="" />
          <p>
            <span className="font-semibold ">Contact us</span> <br />
            Get the help you need from our automated <br />
            assistant, or contact an agent
          </p>
        </div>
        <h1 className="text-center text-2xl font-semibold">
          Other options for you
        </h1>
        <div className="hidden md:flex mt-7  justify-center">
          <span className="text-[#191a85] w-fit text-lg font-semibold">
            Start a return <i class="fa fa-long-arrow-right mt-2"></i>
          </span>
          <span className="text-[#191a85] text-lg mr-9  ml-12 font-semibold">
            Report an item that hasn’t <br /> arrived{" "}
            <i class="fa fa-long-arrow-right mt-2"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrowseHelp;
