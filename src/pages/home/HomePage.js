import React, { useState } from "react";
import {
  HomeNav,
  Carousal,
  CarousalNav,
  HomeSearch,
  Button,
  InnerProductCard,
  PopularCategories,
  OuterCard,
  CardCarousal,
} from "./../../Components";

import outerCard1 from "./../../pictures/outerCard1.png";
import amex from "./../../pictures/amex.jpg";
import gpay from "./../../pictures/gpay.jpg";
import mastercard from "./../../pictures/mastercard.jpg";
import paypal from "./../../pictures/paypal.jpg";
import visa from "./../../pictures/visa.jpg";
import Inner1 from "./../../pictures/Inner2.jpg";
import Inner2 from "./../../pictures/Inner2.jpg";
import Inner3 from "./../../pictures/Inner3.jpg";
import Inner4 from "./../../pictures/Inner4.jpg";
import Inner5 from "./../../pictures/Inner5.jpg";
import Inner6 from "./../../pictures/Inner6.jpg";
import Inner7 from "./../../pictures/Inner7.jpg";
import Outer2 from "./../../pictures/Outer2.png";
import Outer2b from "./../../pictures/Outer2b.png";
import Outer2c from "./../../pictures/Outer2c.png";
import Outer2d from "./../../pictures/Outer2d.png";
import ebay from "./../../pictures/ebaylg.png";
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
  const data = {
    title: " Adidas Yeezy 500 ash grey UK9.5",
    condition: "New with box",
    timeLeft: "5d 8h|Sunday, 11:58 PM",
    startingBid: "GBP 126.00",
    numOfBids: "0 ",
    usPrice: "Approximately US $155.65",
    reserveMet: "Reserve not met",
    buttonText: "Place bid",

    OriginalPrice: "GBP 180.00",
    UsPrice: " $222.35",
    buttonText1: "Buy It Now",
    buttonText2: "Add to cart",
    buttonText3: "Add to watchlist",
    shipping: "  59.10 (approx US $73.01) ",
    location: "  Sidcup , United Kingdom",
    importCharges: "£126.03 ",
    delivery: "  Tue, Jun 13 and Fri, Jun 16 to 46000 ",
    returns: " Seller does not accept returns.",
    paymentMethod: [paypal, gpay, visa, mastercard, amex],
  };

  const data2 = {
    title: " Size UK 8.5 - adidas Yeezy 500 Super Moon Yellow",
    condition: "New with box",
    timeLeft: "",
    startingBid: "",
    numOfBids: "",
    usPrice: "",
    reserveMet: "",
    buttonText: "Place a bid ",
    OriginalPrice: "GBP 175.00",
    UsPrice: "$216.90",
    buttonText1: "Take Now",
    buttonText2: "HELLO cart",
    buttonText3: "sEE watchlist",
    shipping: "GBP 15.00 (approx US $18.59) ",
    location: "  cheltenham, Gloucestershire, United Kingdom",
    importCharges: "  £126.03",
    delivery: "  Tue, Jun 6 and Sat, Jun 10 to 46000        ",
    returns: " 30 days returns. Buyer pays for return shipping. ",
    paymentMethod: [paypal, gpay, visa, mastercard, amex],
  };

  const product = {
    image: outerCard1,
    description: "Adidas Yeezy 500 Enflame SIZE 11.5",
    gender: "MENS",
    details: ["Brand New", "· adidas", "· adidas Yeezy"],
    price: "329.99",
    buyIt: "Buy It Now",
    shippingFee: "46.00",
    origin: "United States",
    watchers: "12",
  };

  const deliveryMethod = [{}];
  const deliveryMethod2 = [{}];
  const images = [Inner1, Inner2, Inner3, Inner4, Inner5, Inner6, Inner7];
  const images2 = [Outer2, Outer2b, Outer2c, Outer2d];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
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
      <Navbar listItems={props.listItems} lg={props.lg} />
      <hr />
      <div className="mt-4 ">
        <HomeSearch />
      </div>
      <div className="w-4/5 mx-auto">
        <div className="mt-4">
          <hr />
        </div>
        <div className=" hidden xl:block mt-4">
          <CarousalNav />
        </div>
        <div className="hidden xl:block mt-2">
          <Carousal />
        </div>
        <div className="mt-4">
          <Categories categories={newCategories} />
        </div>
        <div className="mt-4">
          <CardCarousal />
        </div>
        <div className="mt-4">
          <Categories categories={newCategories2} />
        </div>
        {/* <div className="mt-4">
          <PopularCategories />
        </div>
        <div className="mt-4 mb-16 p-6 bg-[#E62048] flex flex-wrap justify-between ">
          <Button variant="transparent" type="submit">
            Shop Now
          </Button>
          <Button variant="errorText">Shop Now</Button>
          <Button variant="searchBox">Shop Now</Button>
          <Button variant="redWhite">Shop Now</Button>
          <Button variant="blueSmall">Shop Now</Button>
          <Button variant="white">Shop Now</Button>
          <Button variant="darkCyan">Shop Now</Button>
          <Button variant="skyBlue">Shop Now</Button>
          <Button variant="whiteLong">Shop Now</Button>
          <Button variant="whiteSmall">Shop Now</Button>
          <Button variant="lightGray">Shop Now</Button>
          <Button variant="lightNavy">Shop Now</Button>
          <Button variant="outlinedWhite">Shop Now</Button>
          <Button variant="whiteDefault">Shop Now</Button>
          <Button variant="outlinedBlue">Shop Now</Button>
          <Button variant="brilliantWhite">Shop Now</Button>
          <Button variant="navy">Shop Now</Button>
        </div>
        <div className="mt-4 mb-16 p-6">
          <OuterCard product={product} />
        </div>
        <div className="mt-4 mb-16 p-6">
          <InnerProductCard
            data={data}
            deliveryMethod={deliveryMethod}
            images={images}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            previousImageIndex={previousImageIndex}
            setPreviousImageIndex={setPreviousImageIndex}
          />
        </div>

        <div>
          <InnerProductCard
            data={data2}
            deliveryMethod={deliveryMethod2}
            images={images2}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            previousImageIndex={previousImageIndex}
            setPreviousImageIndex={setPreviousImageIndex}
          />
        </div> */}
        <div className="mt-8 mb-8">
          <CarousalSlide />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
