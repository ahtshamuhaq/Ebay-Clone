import React from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import { HomeSearch } from "../../Components";
import HeroSection from "../MoneyBack/HeroSection";
import MoneyBackGuarantee from "../MoneyBack/MoneyBackGuarantee";
import Shoes from "../MoneyBack/Shoes";
import BuyingEbay from "../MoneyBack/BuyingEbay";
import Contact from "../MoneyBack/Contact";
import { Link } from "react-router-dom";

const MoneyBack = (props) => {
  return (
    <div>
      <Navbar listItems={props.listItems} lg={props.lg} />
      <div className=" sm:w-[80%] mx-auto">
        <HomeSearch />
        <HeroSection />
        <MoneyBackGuarantee />
        <div className="ml-0  mt-12">
          <Shoes />
        </div>
        <div className="ml-0 ">
          <BuyingEbay />
        </div>
        <Contact />
      </div>
      <hr className="mt-6" />
      <div className="ml-6 sm:ml-24 mb-4 mt-16 hidden text-xs sm:block">
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
      <div className=" ml-6 sm:ml-24  p-2">
        <p className="mb-12 text-xs    w-full">
          Copyright © 1995-2023 eBay Inc. All Rights Reserved.
          <span className="underline ml-1 text-xs">Accessibility</span>,
          <span className="underline ml-1 text-xs">Privacy</span>,
          <span className="underline ml-1 text-xs">Cookies</span>,
          <Link to={"/pages/home/PrivacyChoices"}>
            <span className="underline ml-1 text-xs">Your Privacy Choices</span>
            ,
          </Link>
          <span className="underline ml-1 text-xs">Payments Terms of Use</span>,
          <span className="underline ml-1 text-xs">User Agreement</span> and{" "}
          <span className="underline ml-1 text-xs">AdChoice</span>
        </p>
      </div>
    </div>
  );
};

export default MoneyBack;
