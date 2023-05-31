import React from "react";
import HomeNav from "./../../uiComponents/homeComponents/HomeNav";
import HomeSearch from "./../../uiComponents/homeComponents/HomeSearch";
import CarousalNav from "./../../uiComponents/homeComponents/CarousalNav";
import Carousal from "./../../uiComponents/homeComponents/Carousal";
import CardsForSlider from "./../../uiComponents/reUsableComponents/CardsForSlider";
import PopularCategories from "./../../uiComponents/reUsableComponents/PopularCategories";
import {
  letsGo,
  shopNow,
  search,
  shopNowRedWhite,
  findGuest,
  LearnMore,
  buyItNow,
  addToCart,
  addToWatchlist,
  Wheels,
  Continue,
  facebook,
  allHere,
  visitWebsite,
  moreTech,
  brandAsus,
  goToHomepage,
} from "./../../uiComponents/reUsableComponents/ButtonStyle";
import OuterCard from "./../../uiComponents/reUsableComponents/OuterCard";
import InnerProductCard from "./../../uiComponents/reUsableComponents/InnerProductCard";

const HomePage = (props) => {
  return (
    <div className="w-4/5 mx-auto pt-2">
      <HomeNav listItems={props.listItems} />
      <hr />
      <div className="mt-4">
        <HomeSearch />
      </div>
      <div className="mt-4">
        <hr />
      </div>
      <div className="mt-4">
        <CarousalNav />
      </div>
      <div className="mt-4">
        <Carousal />
      </div>
      <div className="mt-4">
        <CardsForSlider />
      </div>
      <div className="mt-4">
        <PopularCategories />
      </div>
      <div className="mt-4 mb-16 p-6 bg-[#E62048] flex flex-wrap justify-between ">
        <button className="mb-2" style={letsGo}>
          Shop now
        </button>
        <button className="mb-2" style={shopNow}>
          Shop now
        </button>
        <button className="mb-2" style={search}>
          Shop now
        </button>
        <button className="mb-2" style={shopNowRedWhite}>
          Shop now
        </button>
        <button className="mb-2" style={findGuest}>
          Shop now
        </button>
        <button className="mb-2" style={LearnMore}>
          Shop now
        </button>
        <button className="mb-2" style={buyItNow}>
          Shop now
        </button>
        <button className="mb-2" style={addToCart}>
          Shop now
        </button>
        <button className="mb-2" style={addToWatchlist}>
          Shop now
        </button>
        <button className="mb-2" style={Wheels}>
          Shop now
        </button>
        <button className="mb-2" style={Continue}>
          Shop now
        </button>
        <button className="mb-2" style={facebook}>
          Shop now
        </button>
        <button className="mb-2" style={allHere}>
          Shop now
        </button>
        <button className="mb-2" style={visitWebsite}>
          Shop now
        </button>
        <button className="mb-2" style={moreTech}>
          Shop now
        </button>
        <button className="mb-2" style={brandAsus}>
          Shop now
        </button>
        <button className="mb-2" style={goToHomepage}>
          Shop now
        </button>
      </div>
      <div className="mt-4 mb-16 p-6">
        <OuterCard />
      </div>
      <div className="mt-4 mb-16 p-6">
        <InnerProductCard />
      </div>
    </div>
    //
  );
};

export default HomePage;
