import React from "react";
import eblg from "./.././../pictures/ebaylg.png";
import { Link } from "react-router-dom";
const HeroSec = () => {
  return (
    <div>
      <div className="md:flex items-center hidden">
        <Link to={"/"}>
          <div className="w-32">
            <img src={eblg} alt="" />
          </div>
        </Link>
        <div className="text-4xl font-bold ml-6">Customer Service</div>
      </div>
      <div className="flex items-center flex-col md:flex-row mt-6 text-gray-600">
        Home <i class="material-icons hidden md:block">keyboard_arrow_right</i>
        <i class="material-icons block md:hidden">keyboard_arrow_down</i>
        Customer{" "}
        <i class="material-icon hidden md:blocks">keyboard_arrow_right</i>
        <i class="material-icons block md:hidden">keyboard_arrow_down</i>
        Service Account{" "}
        <i class="material-icons hidden md:block">keyboard_arrow_right</i>
        <i class="material-icons block md:hidden">keyboard_arrow_down</i>
        Your eBay account
      </div>
    </div>
  );
};

export default HeroSec;
