import React, { useState, useRef, useEffect } from "react";
import StepsToSell from "./StepsToSell";
import BestSeller from "./BestSeller";
import Inspired from "./Inspired";
import ReadyToSell from "./ReadyToSell";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [message, setMessage] = useState("");
  const stepsRef = useRef(null);
  const inspiredRef = useRef(null);
  const bestPracticesRef = useRef(null);
  const readyToSellRef = useRef(null);

  useEffect(() => {
    stepsRef.current = document.getElementById("stepsToSell");
    inspiredRef.current = document.getElementById("inspired");
    bestPracticesRef.current = document.getElementById("bestPractices");
    readyToSellRef.current = document.getElementById("readyToSell");
  }, []);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setMessage("");
  };

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <i className="material-icons mr-3">search</i>
        <input
          id="message"
          name="message"
          className="w-full border-2 border-black"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={message}
        />

        <div
          className="w-10 ml-3  h-10 bg-[#f7f7f7] rounded-full flex justify-center items-center"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#f7e376] mt-5 p-5">
        <h1 className="text-[#592e13] text-4xl font-bold pt-7 pl-24">
          How to sell
        </h1>
        <p className="text-[#592e13] text-2xl font-semibold mt-5 pb-16 hidden pl-24 md:block">
          From listing to getting paid—we provide the selling
          <br className="hidden md:block" /> expertise to help you sell and earn
          more.
        </p>
      </div>
      <Link to={"/pages/home/feedback"}>
        <div className=" w-fit p-3 border-2 border-blue-600 text-blue-600 font-bold -rotate-90 right-0 fixed">
          FeedBack
        </div>
      </Link>
      <div className=" bg-[#f7f7f7] block xl:hidden p-8  ">
        <div className="flex flex-col  w-full justify-center">
          <div className="text-xl font-bold w-full">On this page</div>
          <div className="flex flex-col ">
            <p
              onClick={() => scrollToRef(stepsRef)}
              className="hover:underline hover:cursor-pointer  mt-2"
            >
              3 Steps to sell
            </p>
            <p
              onClick={() => scrollToRef(inspiredRef)}
              className="hover:underline hover:cursor-pointer  mt-2"
            >
              Get inspired
            </p>
            <p
              onClick={() => scrollToRef(bestPracticesRef)}
              className="hover:underline hover:cursor-pointer  mt-2"
            >
              Best practices
            </p>
            <p
              onClick={() => scrollToRef(readyToSellRef)}
              className="hover:underline hover:cursor-pointer mt-2 "
            >
              Ready to sell?
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#f7f7f7] hidden xl:block p-8 sticky h-fit top-0">
        <div className="flex items-center w-3/5 justify-center">
          <div className="text-xl font-bold w-1/6">On this page</div>
          <div className="flex ">
            <p
              onClick={() => scrollToRef(stepsRef)}
              className="hover:underline hover:cursor-pointer ml-5"
            >
              3 Steps to sell
            </p>
            <p
              onClick={() => scrollToRef(inspiredRef)}
              className="hover:underline hover:cursor-pointer ml-5"
            >
              Get inspired
            </p>
            <p
              onClick={() => scrollToRef(bestPracticesRef)}
              className="hover:underline hover:cursor-pointer ml-5"
            >
              Best practices
            </p>
            <p
              onClick={() => scrollToRef(readyToSellRef)}
              className="hover:underline hover:cursor-pointer ml-5"
            >
              Ready to sell?
            </p>
          </div>
        </div>
      </div>
      <div id="stepsToSell">
        <StepsToSell />
      </div>
      <div id="inspired">
        <BestSeller />
      </div>
      <div id="bestPractices">
        <Inspired />
      </div>
      <div id="readyToSell">
        <ReadyToSell />
      </div>
    </div>
  );
};

export default HeroSection;
