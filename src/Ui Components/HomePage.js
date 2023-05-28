import React from "react";
import HomeNav from "./HomeNav";
import HomeSearch from "./HomeSearch";
import CarousalNav from "./CarousalNav";
import Carousal from "./Reusable-Components/Carousal";

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
    </div>
  );
};

export default HomePage;
