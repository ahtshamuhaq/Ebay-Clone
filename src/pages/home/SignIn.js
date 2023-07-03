import React, { useState } from "react";
import lg from "./../../pictures/ebaylg.png";
import { Button } from "../../Components";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleText = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="w-[95%] mt-4  mx-auto ">
        <p className="text-[#5d7bf3] text-right">Tell us what you think</p>
        <Link to={"/"}>
          <img src={lg} className="h-10 sm:h-16" alt="" />
        </Link>
        <div>
          <h1 className="text-4xl text-center font-semibold">Hello</h1>
          <h1 className="text-lg mt-4 text-center font-semibold">
            Sign in to eBay or{" "}
            <Link to={"/pages/home/Register"}>
              <span className="text-[#5d7bf3] underline">
                create an account
              </span>
            </Link>
          </h1>
        </div>
        <div>
          <div className="flex mt-10 justify-center">
            <div class="relative">
              <input
                type="text"
                id="floating_filled"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                class="block  rounded-2xl font-bold border border-black px-2.5 pb-2.5 w-[280px] pt-5 sm:w-[350px] text-sm text-gray-900 bg-[#f7f7f7] dark:bg-[#f7f7f7]  appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_filled"
                class="absolute text-sm font-bold text-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email or Username
              </label>
            </div>
          </div>
          <div className="flex justify-center items-start mt-5">
            <div className="w-[280px] sm:w-[350px] ">
              <Button variant={inputValue ? "darkCyan" : "lightGray"}>
                Continue
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <hr className="border w-32 sm:w-40 border-gray-500" />
            <p className="ml-1 mr-1">Or</p>
            <hr className="border w-32 sm:w-40  border-gray-500" />
          </div>
          <div className="flex justify-center items-start mt-5">
            <div className="w-[80%]  sm:w-[350px] ">
              <Button variant="darkCyans">
                {" "}
                <i class="fa fa-facebook-official sm:mr-16 mr-2 text-2xl"></i>
                Continue With facebook
              </Button>
              <div className="w-full  sm:w-[350px]  mt-5">
                <Button variant="transBlack">
                  {" "}
                  <i class="fa fa-google sm:mr-16 mr-2 text-2xl "></i>
                  Continue With Google
                </Button>
              </div>
              <div className="w-full  sm:w-[350px] mt-5 ">
                <Button variant="transBlack">
                  <i class="fa fa-apple sm:mr-20 mr-2 text-2xl"></i>
                  Continue With Apple
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mt-4">
              <input type="checkbox" /> <p className="ml-3">stay logged in </p>
            </div>
            <h1 className="text-sm font-semibold text-center mt-3 ">
              Using a public or shared device? <br /> Uncheck to protect your
              account.
            </h1>
            <div
              onClick={() => toggleText()}
              className="text-blue-600 flex justify-center items-center"
            >
              <h1 className="text-sm  underline font-semibold text-center mt-3 ">
                Learn more
              </h1>
              {isOpen ? (
                <i class="material-icons mt-3 ml-2">keyboard_arrow_up</i>
              ) : (
                <i class="material-icons mt-3 ml-2">keyboard_arrow_down</i>
              )}
            </div>
            {isOpen && (
              <div className="bg-blue-600 text-white w-fit mx-auto p-5 flex   items-start ">
                <i class="material-icons text-white">info_outline</i>
                <p className="text-xs ml-4">
                  With this box checked, we'll keep you signed <br /> in, making
                  it easier to bid and buy. You'll also <br /> be all set to pay
                  if you've saved your payment
                  <br /> info. You can always turn off this feature in My <br />
                  eBay. We may ask you to sign in again for some
                  <br />
                  activities, such as making changes to your
                  <br /> account.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="mt-3" />
      <div className="  mx-auto  p-2">
        <p className="mb-4 text-sm mt-6 text-center   w-full">
          Copyright © 1995-2023 eBay Inc. All Rights Reserved.
          <span className="underline ml-1 text-sm">Accessibility</span>,
          <span className="underline ml-1 text-sm">Privacy</span>,
          <span className="underline ml-1 text-sm">Cookies</span>,
          <Link to={"/pages/home/PrivacyChoices"}>
            <span className="underline ml-1 text-sm">Your Privacy Choices</span>
            ,
          </Link>
          <span className="underline ml-1 text-sm">Payments Terms of Use</span>,
          <span className="underline ml-1 text-sm">User Agreement</span> and{" "}
          <span className="underline ml-1 text-sm">AdChoice</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
