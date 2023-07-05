import React from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import { HomeSearch } from "../../Components";
import HeroSection from "../MoneyBack/HeroSection";
import MoneyBackGuarantee from "../MoneyBack/MoneyBackGuarantee";

const MoneyBack = (props) => {
  return (
    <div>
      <Navbar listItems={props.listItems} lg={props.lg} />
      <div className="w-[90%] mx-auto">
        <HomeSearch />
        <HeroSection />
        <MoneyBackGuarantee />
      </div>
    </div>
  );
};

export default MoneyBack;
