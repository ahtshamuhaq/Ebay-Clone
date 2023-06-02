import React, { useState } from "react";
import {
  HomeNav,
  Carousal,
  CarousalNav,
  HomeSearch,
  Button,
  CardsForSlider,
  InnerProductCard,
  PopularCategories,
  OuterCard,
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

const HomePage = (props) => {
  const data = [
    {
      title: " Adidas Yeezy 500 ash grey UK9.5",
      condition: "New with box",
      timeLeft: "5d 8h|Sunday, 11:58 PM",
      startingBid: "GBP 126.00",
      numOfBids: "0 ",
      usPrice: "Approximately US $155.65",
      reserveMet: "Reserve not met",
      buttonText: "Place bid",
    },
  ];
  const data3 = [
    {
      title: " Size UK 8.5 - adidas Yeezy 500 Super Moon Yellow",
      condition: "New with box",
      timeLeft: "",
      startingBid: "",
      numOfBids: "",
      usPrice: "",
      reserveMet: "",
      buttonText: "Place a bid ",
    },
  ];
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

  const data2 = [
    {
      OriginalPrice: "GBP 180.00",
      usPrice: " $222.35",
      buttonText1: "Buy It Now",
      buttonText2: "Add to cart",
      buttonText3: "Add to watchlist",
    },
  ];
  const data4 = [
    {
      OriginalPrice: "GBP 175.00",
      usPrice: "$216.90",
      buttonText1: "Take Now",
      buttonText2: "HELLO cart",
      buttonText3: "sEE watchlist",
    },
  ];
  const deliveryMethod = [
    {
      shipping:
        " GBP 59.10 (approx US $73.01) Expedited Shipping to Pakistan via eBay's Global Shipping Program. ",
      location: "  Sidcup , United Kingdom",
      importCharges: " Est. £126.03 Amount confirmed at checkout",
      delivery:
        " Estimated between Tue, Jun 13 and Fri, Jun 16 to 46000 Includes international tracking",
      returns: " Seller does not accept returns. See details- ",
      paymentMethod: [paypal, gpay, visa, mastercard, amex],
    },
  ];
  const deliveryMethod2 = [
    {
      shipping:
        "GBP 15.00 (approx US $18.59) Royal Mail International Tracked. ",
      location: "  cheltenham, Gloucestershire, United Kingdom",
      importCharges: " Est. £126.03 Amount confirmed at checkout",
      delivery:
        " Estimated between Tue, Jun 6 and Sat, Jun 10 to 46000        ",
      returns: " 30 days returns. Buyer pays for return shipping. ",
      paymentMethod: [paypal, gpay, visa, mastercard, amex],
    },
  ];
  const images = [Inner1, Inner2, Inner3, Inner4, Inner5, Inner6, Inner7];
  const images2 = [Outer2, Outer2b, Outer2c, Outer2d];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
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
          data2={data2}
          deliveryMethod={deliveryMethod}
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          previousImageIndex={previousImageIndex}
          setPreviousImageIndex={setPreviousImageIndex}
        />
      </div>
      <div className="w-full h-12 bg-red-700 mb-12"></div>
      <InnerProductCard
        data={data3}
        data2={data4}
        deliveryMethod={deliveryMethod2}
        images={images2}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        previousImageIndex={previousImageIndex}
        setPreviousImageIndex={setPreviousImageIndex}
      />
    </div>
  );
};

export default HomePage;
