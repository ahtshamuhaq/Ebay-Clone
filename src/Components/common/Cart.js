import React from "react";
import outer from "./../../pictures/outerCard1.png";
import c1 from "./../../pictures/visa.jpg";
import c2 from "./../../pictures/mastercard.jpg";
import c3 from "./../../pictures/amex.jpg";
import c4 from "./../../pictures/gpay.jpg";
import c5 from "./../../pictures/paypal.jpg";
import Button from "./Button";
import InnerCardCarousal from "./InnerCardCarousal";
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
const Cart = () => {
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
  const obj = {
    Seller: "k6ntb93",
    article: "Size 9 - adidas Yeezy 500",
    color: " Super Moon Yellow",
    owned: "Pre-owned",
    number: "LAST ONE",
    qty: 1,
    price: "145.00",
    image: outer,
    payments: [c1, c2, c3, c4, c5],
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-3xl font-semibold">Shopping cart</div>
        <div className="text-[#406ff1] underline">Send Us Your Comments</div>
      </div>
      <div>
        <p className="bg-[#3665f3] p-2 mt-6 text-white">
          <span>
            <i class="fa fa-info-circle mr-5"></i>
          </span>
          You're signed out right now. To save these items or see your
          previously saved items,{" "}
          <span className="font-semibold underline">sign in.</span>
        </p>
      </div>
      <div className="flex w-full flex-wrap">
        <div className="mt-6  mx-auto w-full md:w-[70%]">
          <div className="mt-6 mb-12 mx-auto border-2  border-[#ccc5c5] p-4">
            <h1 className="font-semibold text-2xl">
              Seller <span className="underline">{obj.Seller}</span>
            </h1>
            <div className="flex justify-between">
              <div className="flex justify-between mt-8 w-1/2  sm:w-1/3">
                <div className=":">
                  <img className="h-20 w-20" src={obj.image} alt="" />
                </div>
                <div className="ml-4">
                  <h1 className="font-semibold  underline">
                    {obj.article}
                    {obj.color}
                  </h1>
                  <h1 className="font-semibold">{obj.owned}</h1>
                  <h1 className="font-semibold text-[#e0214d] ">
                    {obj.number}
                  </h1>
                </div>
              </div>
              <div className="hidden sm:block">Qty {obj.qty}</div>
              <div className="text-2xl mt-8 font-semibold">
                US${obj.price}
                <div className="block mt-4 sm:hidden">Qty {obj.qty}</div>
              </div>
            </div>
            <div className="ml-auto w-full flex justify-between  sm:text-end sm:block">
              <span className="text-[#406ff1] underline">Save for later</span>
              <span className="text-[#406ff1] underline ml-3 mr-4">Remove</span>
            </div>
          </div>
          <div className="w-full block  border-2  border-[#ccc5c5] p-4 xl:hidden mt-4 h-fit">
            <Button variant="blueSmall">Go To Checkout</Button>
            <div className="flex justify-between mt-5">
              <p>Item (1)</p>
              <div className="text-lg font-semibold mb-5">US${obj.price}</div>
            </div>
            <hr />
            <div className="flex justify-between mt-4">
              <div className="text-lg font-semibold">Subtotal</div>
              <div className="text-2xl font-semibold">US${obj.price}</div>
            </div>
            <div className="w-10 sm:w-14 flex mt-4 justify-between">
              {obj.payments.map((payment, index) => (
                <img key={index} src={payment} alt={`Payment ${index}`} />
              ))}
            </div>
          </div>
          <div className=" mb-12  border-2 border-[#ccc5c5] p-2">
            <InnerCardCarousal cardData={cardData} />{" "}
          </div>
        </div>
        <div className="w-1/4 hidden xl:block border-2  border-[#ccc5c5] p-4 xl:sticky xl:top-0 mt-4 h-fit">
          <Button variant="blueSmall">Go To Checkout</Button>
          <div className="flex justify-between mt-5">
            <p>Item (1)</p>
            <div className="text-lg font-semibold mb-5">US${obj.price}</div>
          </div>
          <hr />
          <div className="flex justify-between mt-4">
            <div className="text-lg font-semibold">Subtotal</div>
            <div className="text-2xl font-semibold">US${obj.price}</div>
          </div>
          <div className="w-14 flex mt-4 justify-between">
            {obj.payments.map((payment, index) => (
              <img key={index} src={payment} alt={`Payment ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
