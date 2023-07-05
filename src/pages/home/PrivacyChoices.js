import React from "react";
import Navbar from "./../../Components/homeComponents/Navbar";
import HomeSearch from "./../../Components/homeComponents/HomeSearch";
import PrivacyMain from "./../../Components/common/PrivacyMain";
import Footer from "./../../Components/common/Footer";

const PrivacyChoices = (props) => {
  return (
    <div>
      <Navbar listItems={props.listItems} lg={props.lg} />
      <div className="w-[90%] mt-6 mx-auto">
        <HomeSearch />
        <PrivacyMain />
      </div>
      <div className="w-[90%] mt-6 mb-2 mx-auto  p-2">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyChoices;
