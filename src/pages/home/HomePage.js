import React, { useState } from "react";
import {
  Carousal,
  CarousalNav,
  HomeSearch,
  CardCarousal,
} from "./../../Components";
import Footer from "../../Components/common/Footer";
import CarousalSlide from "../../Components/common/CarousalSlide";
import Navbar from "../../Components/homeComponents/Navbar";
import Categories from "../../Components/common/Categories";
import Category1 from "./../../pictures/cp6.png";
import Category2 from "./../../pictures/cp1.png";
import Category3 from "./../../pictures/cp2.png";
import Category4 from "./../../pictures/cp3.png";
import Category5 from "./../../pictures/cp4.png";
import Category6 from "./../../pictures/cp5.png";
import Category7 from "./../../pictures/cp7.png";
import Category8 from "./../../pictures/cp8.png";
import Category9 from "./../../pictures/cp9.png";
import Category10 from "./../../pictures/cp10.png";
import Category11 from "./../../pictures/cp11.png";
import Category12 from "./../../pictures/cp12.png";
const HomePage = (props) => {
  const newCategories2 = {
    mainTitle: "Explore New Categories",
    items: [
      {
        image: Category7,
        title: "Korean beauty ",
      },
      {
        image: Category8,
        title: "Wristwatches",
      },
      {
        image: Category9,
        title: "Collectibles",
      },
      {
        image: Category10,
        title: "Smartphones",
      },
      {
        image: Category11,
        title: "Sell",
      },
      {
        image: Category12,
        title: "Sneakers",
      },
    ],
  };
  const newCategories = {
    mainTitle: "Explore New Categories",
    items: [
      {
        image: Category1,
        title: "Nike",
      },
      {
        image: Category2,
        title: "Samsung",
      },
      {
        image: Category3,
        title: "Sony",
      },
      {
        image: Category4,
        title: "Ugreen",
      },
      {
        image: Category5,
        title: "Xiaomi",
      },
      {
        image: Category6,
        title: "Adidas",
      },
    ],
  };

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <Navbar listItems={props.listItems} lg={props.lg} />
        <hr />
        <div className=" ">
          <HomeSearch />
        </div>
        <div className="mt-4">
          <hr />
        </div>
        <div className=" hidden xl:block mt-4">
          <CarousalNav />
        </div>
        <div className="hidden xl:block mt-2">
          <Carousal />
        </div>
        <div className=" md:hidden mt-4">
          <Categories categories={newCategories} />
        </div>
        <div className="mt-4">
          <CardCarousal />
        </div>
        <div className="md:hidden mt-4">
          <Categories categories={newCategories2} />
        </div>

        <div className="mt-8 mb-8">
          <CarousalSlide />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
