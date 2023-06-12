import React, { useState } from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import { HomeSearch, InnerProductCard, OuterCard } from "../../Components";
import Route from "../../Components/common/Route";
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
import InnerCardCarousal from "../../Components/common/InnerCardCarousal";
import INNER6 from "./../../pictures/outerCard1.png";
import INNER1 from "./../../pictures/innercard(carousal1)1-veed-remove-background.jpg";
import INNER2 from "./../../pictures/innercard(carousal1)2-veed-remove-background.jpg";
import INNER3 from "./../../pictures/innercard(carousal1)3-veed-remove-background.jpg";
import INNER4 from "./../../pictures/innercard(carousal1)4-veed-remove-background.jpg";
import INNER5 from "./../../pictures/innercard(carousal1)5-veed-remove-background.jpg";
import INNER7 from "./../../pictures/innercard(carousal1)7-veed-remove-background.jpg";
import INNER8 from "./../../pictures/innercard(carousal1)8-veed-remove-background.jpg";
import INNER9 from "./../../pictures/innercard(carousal1)9-veed-remove-background.jpg";
import InnerSec1 from "./../../pictures/innercard(carousal2)1-veed-remove-background.png";
import InnerSec2 from "./../../pictures/innercard(carousal2)1-veed-remove-background.png";
import InnerSec3 from "./../../pictures/innercard(carousal2)2-veed-remove-background.png";
import InnerSec4 from "./../../pictures/innercard(carousal2)3-veed-remove-background.png";
import InnerSec5 from "./../../pictures/innercard(carousal2)4-veed-remove-background.png";
import InnerSec6 from "./../../pictures/innercard(carousal2)5-veed-remove-background.png";
import InnerSec7 from "./../../pictures/innercard(carousal2)6-veed-remove-background.png";
import InnerSec8 from "./../../pictures/innercard(carousal2)9.jpg";
import InnerSec9 from "./../../pictures/innercard(carousal2)10.jpg";
import InnerSec10 from "./../../pictures/innercard(carousal2)11.jpg";
import InnerSec11 from "./../../pictures/innercard(carousal2)12.jpg";
import InnerProductDescription from "../../Components/common/InnerProductDescription";
import SellerFeedback from "../../Components/common/SellerFeedback";
import Ratings from "../../Components/common/Ratings";
import CardGrid from "../../Components/common/CardGrid";
import Footer from "../../Components/common/Footer";
const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
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
  const images = [Inner1, Inner2, Inner3, Inner4, Inner5, Inner6, Inner7];
  const card2Data = [
    {
      image: INNER9,
      description:
        "Garmin Forerunner 35 Black GPS Sport Watch Wrist Based HR 010-01689-00",
      gender: "",
      details: ["Certified -", "·  Refurbished", ""],
      price: "99.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: INNER8,
      description: "adidas YEEZY SLIDE_ Easy Slide / 27.5cm / BLK",
      gender: "",
      details: ["", " Pre Owned", ""],
      price: "225.24",
      buyIt: "Buy It Now",
      shippingFee: "20.00 ",
      origin: " United States",
      watchers: "1",
    },
    {
      image: INNER7,
      description: "FZ5896 adidas Yeezy Slide Flax Brown",
      gender: "",
      details: ["New", "", ""],
      price: "172.99",
      buyIt: "Buy It Now",
      shippingFee: "6.00 ",
      origin: " United States",
      watchers: "2",
    },
    {
      image: INNER6,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "MENS",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: INNER5,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "MENS",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: INNER4,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "MENS",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: INNER3,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "MENS",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: INNER2,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "MENS",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: INNER1,
      description:
        "Garmin STRIKER 4 Fishfinder with 4-Pin 77/200kHz TM Transducer 010-01550-00",
      gender: "",
      details: ["Brand New", "· ", "· "],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
  ];
  card2Data.reverse();
  const cardData = [
    {
      image: InnerSec9,
      description:
        "Garmin Forerunner 35 Black GPS Sport Watch Wrist Based HR 010-01689-00",
      gender: "",
      details: ["Certified -", "·  Refurbished", ""],
      price: "99.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: InnerSec8,
      description: "adidas YEEZY SLIDE_ Easy Slide / 27.5cm / BLK",
      gender: "",
      details: ["", " Pre Owned", ""],
      price: "225.24",
      buyIt: "Buy It Now",
      shippingFee: "20.00",
      origin: "United States",
      watchers: "1",
    },
    {
      image: InnerSec7,
      description: "FZ5896 adidas Yeezy Slide Flax Brown",
      gender: "",
      details: ["New", "", ""],
      price: "172.99",
      buyIt: "Buy It Now",
      shippingFee: "6.00",
      origin: "United States",
      watchers: "2",
    },
    {
      image: InnerSec6,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: InnerSec5,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: InnerSec4,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: InnerSec3,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: InnerSec2,
      description: "Adidas Yeezy 500 Enflame SIZE 11.5",
      gender: "",
      details: ["Brand New", "· adidas", "· adidas Yeezy"],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: InnerSec1,
      description:
        "Garmin STRIKER 4 Fishfinder with 4-Pin 77/200kHz TM Transducer 010-01550-00",
      gender: "",
      details: ["Brand New", "· ", "· "],
      price: "329.99",
      buyIt: "Buy It Now",
      shippingFee: "46.00",
      origin: "United States",
      watchers: "12",
    },
    {
      image: InnerSec10,
      description: "Sample Description 1",
      gender: "",
      details: ["New", "· Sample Brand", "· Sample Detail"],
      price: "199.99",
      buyIt: "Buy It Now",
      shippingFee: "12.00",
      origin: "United States",
      watchers: "5",
    },
    {
      image: InnerSec11,
      description: "Sample Description 2",
      gender: "",
      details: ["Pre Owned", "· Sample Brand", ""],
      price: "149.99",
      buyIt: "Buy It Now",
      shippingFee: "8.00",
      origin: "United States",
      watchers: "3",
    },
  ];

  return (
    <div>
      <Navbar />
      <HomeSearch variant="outlined" />
      <div className="w-[90%] mt-6 mx-auto">
        <Route />
      </div>
      <div className="w-[90%] mt-6 mx-auto">
        <InnerProductCard
          data={data}
          images={images}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          previousImageIndex={previousImageIndex}
          setPreviousImageIndex={setPreviousImageIndex}
        />
      </div>
      <div className="w-[90%] mt-6 mb-12 mx-auto border-2 border-[#ccc5c5] p-2">
        <InnerCardCarousal cardData={card2Data} />{" "}
      </div>
      <div className="w-[90%] mt-6 mb-12 mx-auto border-2 border-[#ccc5c5] p-2">
        <InnerCardCarousal cardData={cardData} />{" "}
      </div>
      <div className="w-[90%] mt-6 mb-12 mx-auto border-2 border-[#ccc5c5] p-2">
        <InnerProductDescription />
      </div>
      <div className="w-full lg:w-[90%] mt-6 mb-12 mx-auto bg-[#f8f8f8] p-2">
        <SellerFeedback />
      </div>
      <div className="w-[90%] mt-6 mb-12 mx-auto border-2 border-[#ccc5c5] p-2">
        <InnerCardCarousal cardData={cardData} />{" "}
      </div>
      <div className="w-[90%] mt-6 mb-12 mx-auto border-2 border-[#ccc5c5] p-2">
        <Ratings />
      </div>

      <div className="w-[90%] mt-6 mb-12 mx-auto border-2 border-[#ccc5c5] p-2">
        <InnerCardCarousal cardData={card2Data} />{" "}
      </div>
      <div className="w-[90%] mt-6 mb-12 mx-auto border-2 border-[#ccc5c5] p-2">
        <InnerCardCarousal cardData={card2Data} />{" "}
      </div>
      <div className="w-[95%] mt-6 mb-12 mx-auto border-2 border-[#ccc5c5] p-2">
        <CardGrid />
      </div>
      <hr />
      <div className="w-[90%] mt-6 mb-12 mx-auto  p-2">
        <Route />
      </div>
      <hr />
      <div className="w-[90%] mt-6 mb-12 mx-auto  p-2">
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
