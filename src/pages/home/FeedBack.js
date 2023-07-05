import React, { useState } from "react";
import { Link } from "react-router-dom";
import i1 from "./../../pictures/ebaylg.png";
import { Button } from "../../Components";
const FeedBack = () => {
  const [text, setText] = useState("");
  const maxLength = 500;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };
  const [text1, setText1] = useState("");
  const maxLength1 = 500;

  const handleChange1 = (event) => {
    const newText1 = event.target.value;
    if (newText1.length <= maxLength1) {
      setText1(newText1);
    }
  };
  return (
    <div className="w-1/2 mt-4 mx-auto">
      <div className="w-40">
        <Link to={"/"}>
          <img src={i1} alt="" />
        </Link>
      </div>
      <h1 className="font-semibold mt-4 text-3xl"> Seller Center Feedback</h1>
      <p className="font-semibold mt-6">
        Did you find the information you were looking for on this page? *
      </p>
      <div className="w-4/5 flex justify-between items-center mt-8">
        <p>Very unsatisfied</p>
        <p>Very satisfied</p>
      </div>
      <div className=" w-3/4 ml-5 mt-5">
        <div className="flex justify-between">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <div className="flex justify-between mt-5">
          <input type="radio" name="radioGroup" />
          <input type="radio" name="radioGroup" />
          <input type="radio" name="radioGroup" />
          <input type="radio" name="radioGroup" />
          <input type="radio" name="radioGroup" />
        </div>
      </div>
      <p className="font-semibold mt-16">
        Tell us how we can improve the information on this page?
      </p>
      <div className="flex flex-col items-start mt-5">
        <textarea
          className="w-full h-40 p-2 bg-[#f7f7f7] mb-2 border border-gray-300 rounded"
          value={text}
          onChange={handleChange}
          placeholder="Please provide as specific detail as possible"
        />
        <div className="text-gray-500 text-sm">
          {text.length}/{maxLength}
        </div>
      </div>
      <p className="font-semibold mt-16">
        Please provide your email if you allow us to contact you.{" "}
      </p>
      <div className="flex flex-col items-start mt-5">
        <input
          className="w-full p-2 bg-[#f7f7f7] mb-2 border border-gray-300 rounded"
          value={text1}
          onChange={handleChange1}
        />
        <div className="text-gray-500 text-sm">
          {text1.length}/{maxLength1}
        </div>
        <p className="text-red-600 mt-4">*Required</p>
      </div>
      <div className="w-24 mt-6">
        <Button variant="blueSmall">Send</Button>
      </div>
      <div className="text-sm mt-8">
        Please don't include any personal information, such as your name,
        address, phone or user ID in the fields above.
      </div>
      <div className="text-sm mt-3">
        When you select Send, you are giving eBay full rights to use your
        comments, and agreeing to the User Agreement.
      </div>
      <hr className="mt-9" />
      <p className="mt-12 mb-16 ml-9 text-xs  hidden  lg:flex flex-wrap items-center">
        Copyright © 1995-2023 eBay Inc. All Rights Reserved.
        <span className="underline ml-2 text-xs">Accessibility</span>,
        <span className="underline ml-2 text-xs">Privacy</span>,
        <span className="underline ml-2 text-xs">Cookies</span>,
        <Link to={"/pages/home/PrivacyChoices"}>
          <span className="underline ml-2 text-xs">Your Privacy Choices</span>,
        </Link>
        <br />
        <span className="underline ml-2 text-xs">Payments Terms of Use</span>,
        <span className="underline ml-2 text-xs">User Agreement</span> and{" "}
        <span className="underline ml-2 text-xs">AdChoice</span>
      </p>
    </div>
  );
};

export default FeedBack;
