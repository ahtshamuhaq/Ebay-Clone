import React from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import { HomeSearch } from "../../Components";
import Cart from "../../Components/common/Cart";
import Footer from "../../Components/common/Footer";

const AddCart = (props) => {
  return (
    <div>
      <Navbar listItems={props.listItems} lg={props.lg} />
      <div className="w-[90%]  mb-12 mx-auto p-2">
        <HomeSearch />
        <Cart />
      </div>
      <hr />
      <div className="w-[90%] mt-6 mb-12 mx-auto  p-2">
        <Footer />
      </div>
    </div>
  );
};

export default AddCart;
