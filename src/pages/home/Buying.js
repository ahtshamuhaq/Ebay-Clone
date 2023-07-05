import React from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import CardCarousals from "../Buying&Bidding/CardCarousals";
import CardGrids from "../Buying&Bidding/CardGrids";
import HeroSec from "../Customer-Services/HeroSec";
import im from "./../../pictures/serv-1.jpg";
import { Link } from "react-router-dom";
import img from "./../../pictures/message.jpg";

const Buying = (props) => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Navbar listItems={props.listItems} lg={props.lg} />
        <HeroSec />
      </div>
      <div className="bg-[#ebfdff] mt-5 p-6">
        <div className="w-[20%] ml-20">
          <img src={im} alt="" />
        </div>
      </div>
      <CardCarousals />
      <CardGrids />
      <div className="bg-[#dfdfe1] mt-6 p-5 h-[370px] flex  flex-col items-center justify-center  mb-16">
        <h1 className="text-center text-2xl font-semibold">Need more help?</h1>
        <div className="bg-white px-10 py-5 flex flex-col sm:flex-row justify-center w-fit mx-auto mt-6 items-center">
          <img src={img} alt="" />
          <p className="sm:border-l-2 border-l-gray-600 sm:pl-4 border-l-0 pl-0 border-t-2 border-t-gray-600 pt-4 sm:border-t-0 sm:pt-0 ">
            <span className="font-semibold ">Contact us</span> <br />
            Get the help you need from our automated <br />
            assistant, or contact an agent
          </p>
        </div>
      </div>
      <div className="ml-6 mb-4 hidden sm:block">
        <span class="ml-4 hover:underline">About</span>
        <span class="ml-4 hover:underline">eBay</span>
        <span class="ml-4 hover:underline">Announcements</span>
        <span class="ml-4 hover:underline">Community</span>
        <span class="ml-4 hover:underline">Security Center</span>
        <span class="ml-4 hover:underline">Seller Information Center</span>
        <span class="ml-4 hover:underline">Policies</span>
        <span class="ml-4 hover:underline">Affiliates</span>
        <span class="ml-4 hover:underline">Help &amp; Contact</span>
        <span class="ml-4 hover:underline">Site Map</span>
      </div>
      <div className=" ml-6   p-2">
        <p className="mb-12 text-xs    w-full">
          Copyright © 1995-2023 eBay Inc. All Rights Reserved.
          <span className="underline ml-1 text-sm">Accessibility</span>,
          <span className="underline ml-1 text-sm">Privacy</span>,
          <span className="underline ml-1 text-sm">Cookies</span>,
          <Link to={"/pages/home/PrivacyChoices"}>
            <span className="underline ml-1 text-sm">Your Privacy Choices</span>
            ,
          </Link>
          <span className="underline ml-1 text-sm">Payments Terms of Use</span>,
          <span className="underline ml-1 text-sm">User Agreement</span> and{" "}
          <span className="underline ml-1 text-sm">AdChoice</span>
        </p>
      </div>
    </div>
  );
};

export default Buying;
