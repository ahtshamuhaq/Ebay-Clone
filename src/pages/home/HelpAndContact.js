import React from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import ContactPage from "../../Components/common/ContactPage";
import BrowseHelp from "../../Components/common/BrowseHelp";
import Footer from "../../Components/common/Footer";

const HelpAndContact = (props) => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Navbar listItems={props.listItems} lg={props.lg} />
      </div>
      <ContactPage />
      <div className="w-[90%] mt-6 mb-12 mx-auto    ">
        <BrowseHelp />
      </div>
      <div className="w-[90%] mt-6 mb-12 mx-auto  p-2">
        <Footer />
      </div>
    </div>
  );
};

export default HelpAndContact;
