import React from "react";
import Navbar from "./../../Components/homeComponents/Navbar";
import HomeSearch from "./../../Components/homeComponents/HomeSearch";
import PrivacyMain from "./../../Components/common/PrivacyMain";
import Footer from "./../../Components/common/Footer";

const PrivacyChoices = () => {
  return (
    <div>
      <Navbar />
      <HomeSearch />
      <div className="w-[90%] mt-6 mx-auto">
        <PrivacyMain />
      </div>
      <div className="w-[90%] mt-6 mb-2 mx-auto  p-2">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyChoices;
