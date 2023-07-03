import React from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import HeroSec from "../Seller/HeroSec";
import Basics from "../Seller/Basics";
import SellBusiness from "../Seller/SellBusiness";
import Carousal from "../Seller/Carousal";

const CustomerServices = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Navbar />
        <HeroSec />
        <Basics />
        <SellBusiness />
        <Carousal />
      </div>
    </div>
  );
};

export default CustomerServices;
