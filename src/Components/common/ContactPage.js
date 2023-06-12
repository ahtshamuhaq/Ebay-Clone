import React from "react";
import ebay from "./../../pictures/ebaylg.png";
import Button from "./Button";
import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
    <div className="w-[90%] mt-6 mb-12 mx-auto  p-2">
      <div className="flex items-center">
        <Link to={"/"}>
          <img className="w-40" src={ebay} alt="" />
        </Link>
        <h1 className=" ml-5 text-4xl font-semibold">Customer Service</h1>
      </div>
      <div className="flex items-center mt-6 text-[#948f95]">
        <span>Home </span> <i class="material-icons">keyboard_arrow_right</i>
        <span>Customer Services </span>
      </div>
      <h1 className="text-5xl mt-4 font-semibold">
        How can we help you today?
      </h1>
      <div className="flex items-center sticky bg-white p-2  mb-4 top-0">
        <input
          type="text"
          placeholder="Search EBAY help"
          className="w-4/5 mt-6 rounded-full font-bold active:border border-blue-600 "
        />
        <div className="w-10 h-10 ml-4 mt-6 bg-blue-600 rounded-full text-white flex items-center justify-center">
          <i class="fa fa-search"></i>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full bg-[#caecfb] md:w-[50%]  lg:w-[30%]  h-[370px]  p-5">
          <h1 className="text-2xl font-semibold mt-4 mb-5">
            Get personalized help and see your recent orders
          </h1>
          <Button variant="blueLong">Sign In</Button>
          <h1 className="mt-4">
            Don't have an account?{" "}
            <span className="text-[#191a85] text-lg font-semibold">
              Register now <i class="fa fa-long-arrow-right mt-2"></i>
            </span>
          </h1>
        </div>
        <div className="bg-[#ebfdff] w-full md:w-[50%]  justify-between flex flex-col  lg:w-[30%]  h-[370px]  p-5">
          <div className="border-r-2 border-[#ceeefc]">
            <h1 className="font-semibold text-lg flex justify-between items-center">
              Buying as a guest{" "}
              <i class="material-icons text-blue-600 mr-5">arrow_forward</i>
            </h1>
            <p>Popular article</p>
          </div>
          <div className="border-r-2 border-[#ceeefc]">
            <h1 className="font-semibold text-lg flex justify-between items-center">
              Get help with an item that hasn't arrived{" "}
              <i class="material-icons text-blue-600 mr-5">arrow_forward</i>
            </h1>
            <p>Popular article</p>
          </div>
          <div className="border-r-2 border-[#ceeefc]">
            <h1 className="font-semibold text-lg flex justify-between items-center">
              Get help with a hacked account{" "}
              <i class="material-icons text-blue-600 mr-5">arrow_forward</i>
            </h1>
            <p>Popular article</p>
          </div>
        </div>
        <div className="bg-[#ebfdff] w-full md:w-[50%]  justify-between flex flex-col  lg:w-[30%]  h-[370px]  p-5">
          <div>
            <h1 className="font-semibold text-lg flex justify-between items-center">
              Buying as a guest{" "}
              <i class="material-icons text-blue-600 mr-5">arrow_forward</i>
            </h1>
            <p>Popular article</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg flex justify-between items-center">
              Get help with an item that hasn't arrived{" "}
              <i class="material-icons text-blue-600 mr-5">arrow_forward</i>
            </h1>
            <p>Popular article</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg flex justify-between items-center">
              Get help with a hacked account{" "}
              <i class="material-icons text-blue-600 mr-5">arrow_forward</i>
            </h1>
            <p>Popular article</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
