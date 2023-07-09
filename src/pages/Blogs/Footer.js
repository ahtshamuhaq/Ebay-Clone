import React from "react";
import i1 from "../../pictures/ebaylg.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-3/4 mx-auto mt-6">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div>
            <img className="w-20" src={i1} alt="" />
          </div>
        </Link>
        <div className="md:flex ml-5 text-[#333333] font-semibold hidden">
          <p className="pb-2 mt-2 hover:underline">Home</p>
          <p className="pb-2 mt-2 hover:underline ml-7">Company</p>
          <p className="pb-2 mt-2 hover:underline ml-7">Stories</p>
          <p className="pb-2 mt-2 hover:underline ml-7">Impact</p>
          <p className="pb-2 mt-2 hover:underline ml-7">Tech</p>
          <p className="pb-2 mt-2 hover:underline ml-7">Investors</p>
          <p className="pb-2 mt-2 hover:underline ml-7">Careers</p>
        </div>
      </div>
      <hr className="h-[1px] mt-6 mb-4 bg-black" />
      <p className=" pb-16 ml-9 text-xs  hidden  lg:flex items-center">
        Copyright © 1995-2023 eBay Inc. All Rights Reserved.
        <span className="underline ml-2 text-xs">Accessibility</span>,
        <span className="underline ml-2 text-xs">Privacy</span>,
        <span className="underline ml-2 text-xs">Cookies</span>,
        <Link to={"/pages/home/PrivacyChoices"}>
          <span className="underline ml-2 text-xs">Your Privacy Choices</span>,
        </Link>
        <span className="underline ml-2 text-xs">Payments Terms of Use</span>,
        <span className="underline ml-2 text-xs">User Agreement</span> and{" "}
        <span className="underline ml-2 text-xs">AdChoice</span>
      </p>
    </div>
  );
};

export default Footer;
