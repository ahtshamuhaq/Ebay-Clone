import React from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import HeroSec from "../Seller/HeroSec";
import Basics from "../Seller/Basics";
import SellBusiness from "../Seller/SellBusiness";
import Carousal from "../Seller/Carousal";
import Faqs from "../Seller/Faqs";
import Lastsec from "../Seller/Lastsec";
import { Link } from "react-router-dom";

const CustomerServices = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Navbar />
        <HeroSec />
        <Basics />
        <SellBusiness />
        <Carousal />
        <Faqs />
        <div className="hidden lg:block">
          <Lastsec />
        </div>
        <div className="flex mt-6 mb-8 ">
          <div>
            <h1 className="font-bold mb-3">Selling on eBay</h1>
            <p className="underline text-gray-500 text-sm">Seller Center</p>
            <p className="underline text-gray-500 text-sm">Sell for charity</p>
            <p className="underline text-gray-500 text-sm">Business tools</p>
          </div>
          <div className="ml-20">
            <h1 className="font-bold mb-3">Support </h1>
            <p className="underline text-gray-500 text-sm">Customer service </p>
            <p className="underline text-gray-500 text-sm">Seller policies </p>
            <p className="underline text-gray-500 text-sm">Community</p>
          </div>
        </div>
        <div className="    p-2">
          <p className="mb-4 text-xs mt-6    w-full">
            Copyright © 1995-2023 eBay Inc. All Rights Reserved.
            <span className="underline ml-1 text-sm">Accessibility</span>,
            <span className="underline ml-1 text-sm">Privacy</span>,
            <span className="underline ml-1 text-sm">Cookies</span>,
            <Link to={"/pages/home/PrivacyChoices"}>
              <span className="underline ml-1 text-sm">
                Your Privacy Choices
              </span>
              ,
            </Link>
            <span className="underline ml-1 text-sm">
              Payments Terms of Use
            </span>
            ,<span className="underline ml-1 text-sm">User Agreement</span> and{" "}
            <span className="underline ml-1 text-sm">AdChoice</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServices;
