import React, { useState } from "react";
import Navbar from "../../Components/homeComponents/Navbar";
import HeroSec from "../Customer-Services/HeroSec";
import CardsSeller from "../Customer-Services/CardsSeller";
import img from "./../../pictures/message.jpg";
import { Link } from "react-router-dom";

const EbayAccount = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <Navbar />
        <HeroSec />
      </div>
      <div className="bg-[#ff9772] text-[#111a85] flex flex-col justify-center mt-6 ">
        <div className="w-fit mx-auto ">
          <div className="mt-8">1 min overview</div>
          <div className="text-6xl mb-8 font-bold">Your eBay account</div>
          <div className="font-semibold text-xl mb-24">
            It takes just a few minutes to create an eBay account. Once your
            account is set up, you <br /> can buy and sell, send messages to
            other eBay members, and leave feedback for buyers <br /> and
            sellers.
          </div>
        </div>
      </div>
      <div className="hidden sm:flex xl:hidden items-center justify-center w-full top-50 sticky bg-white mt-4">
        <div className=" flex items-center mt-3  ">
          <input
            type="text"
            placeholder="Search Ebay Help.."
            className="py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
            value={searchText}
            onChange={handleSearch}
          />
          {searchText && (
            <button
              className="absolute top-0 left-0 p-2 text-gray-500 focus:outline-none"
              onClick={clearSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="w-10 mt-1 h-10 ml-5 bg-blue-600 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="w-full flex">
        <div className="hidden xl:flex items-center w-1/4 sticky top-0 h-fit left-0  mt-4">
          <div className=" flex items-center mt-3 relative ">
            <input
              type="text"
              placeholder="Search Ebay Help.."
              className="py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300"
              value={searchText}
              onChange={handleSearch}
            />
            {searchText && (
              <button
                className="absolute top-0 left-0 p-2 text-gray-500 focus:outline-none"
                onClick={clearSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="w-10 mt-1 h-10 ml-5 bg-blue-600 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-0  xl:ml-auto w-full xl:w-1/2 mt-7">
          <p>
            Our guides below will explain everything you need to know about how
            to create, manage, and <br /> customize your account. You’ll also
            find out how to get help with any eBay account problems.
          </p>
          <ul className="list-disc ml-4 mt-4">
            <li className="underline text-blue-600">Setting up your account</li>
            <li className="underline text-blue-600">Managing your account</li>
            <li className="underline text-blue-600">
              Get help with your account
            </li>
            <li className="underline text-blue-600 mb-6">
              Your seller account
            </li>
          </ul>
          <hr />
          <h1 className="font-semibold text-2xl mt-10">
            Setting up your account
          </h1>
          <p className="underline text-blue-600 mt-4">
            Signing up for an eBay account
          </p>
          <p>
            Find out how you can set up an eBay account using your email address
            or one of your social <br /> accounts.{" "}
          </p>
          <p className="underline text-blue-600 mt-4">
            Signing in to your account{" "}
          </p>
          <p>
            Learn how to sign in and sign out of your account and what to do if
            you have any problems accessing <br /> your eBay account.
          </p>
          <hr />
          <h1 className="font-semibold text-2xl mt-10">
            Managing your account
          </h1>
          <p className="underline text-blue-600 mt-4">
            Changing your account settings
          </p>
          <p>
            Customize your account to suit you by changing your account
            settings, including your preferences,
            <br /> contact information, and subscriptions.{" "}
          </p>
          <p className="underline text-blue-600 mt-4">Changing your password</p>
          <p>
            Learn how to change your eBay password, whether you’ve forgotten it
            or would just like to update it.
          </p>
          <p className="underline text-blue-600 mt-4">Messages</p>
          <p>
            Find out how to send someone a message on eBay and how to view your
            eBay Messages. .
          </p>
          <p className="underline text-blue-600 mt-4">Purchase History</p>
          <p>
            You can keep track of all your orders, find order details, contact
            sellers, and more from your Purchase
            <br /> History.
          </p>
          <hr className="mb-12 mt-4" />
          <h1 className="font-semibold text-2xl mt-10">
            Get help with your account
          </h1>
          <p className="underline text-blue-600 mt-4">
            Protecting your account
          </p>
          <p>Learn how to protect your eBay account from hacking and fraud.</p>
          <p className="underline text-blue-600 mt-4">
            Get help with a hacked account
          </p>
          <p>
            If you think your account is compromised, we’ll work with you to
            secure it.
          </p>
          <p className="underline text-blue-600 mt-4">
            Account restrictions and suspensions
          </p>
          <p>
            If you can’t find your account, it may have been suspended or
            restricted.
          </p>
          <hr className="mb-12 mt-4" />
          <h1
            className="font-semibold text-2xl
          "
          >
            Your seller account
          </h1>
          <p className="underline text-blue-600 mt-4">Start selling on eBay </p>
          <p className="mb-24">
            Want to start selling your items on eBay? Read our overview on
            getting started.
          </p>
          <div className="bg-[#f7f7f7] ">
            <div className=" flex items-center flex-col md:flex-row justify-evenly pt-6">
              <h1 className="font-bold text-3xl">
                Was this article helpful for you?
              </h1>
              <div className="w-20 h-20 bg-transparent border-2 border-blue-600 rounded-full hidden  md:flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                  />
                </svg>
              </div>
              <div className="w-20 h-20 bg-transparent border-2 border-blue-600 rounded-full  hidden  md:flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 h-12 text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>
              <div className="flex mt-4 md:hidden">
                <div className="w-20 h-20 bg-transparent border-2 border-blue-600 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                    />
                  </svg>
                </div>
                <div className="w-20 h-20 bg-transparent border-2 border-blue-600 ml-4 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-12 h-12 text-blue-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="ml-5 font-semibold text-xl mt-16">
              Related help topics{" "}
            </h1>
            <p className="ml-5 text-lg mt-3">See other articles in:</p>
            <p className=" text-blue-600 flex items-center mt-3 font-bold text-xl">
              <i class="fa fa-long-arrow-left mr-3 mt-1 ml-5"></i>
              Account
            </p>
            <p className="ml-9 text-lg mt-3">
              You might also be interested in:
            </p>
            <div className="ml-10 mt-10">
              <CardsSeller />
            </div>
          </div>
        </div>
        <div className="hidden xl:flex w-1/4"></div>
      </div>

      <div className="bg-[#dfdfe1] mt-6 p-5 h-[370px] flex  flex-col items-center justify-center  mb-16">
        <h1 className="text-center text-2xl font-semibold">Need more help?</h1>
        <div className="bg-white px-10 py-5 flex flex-col sm:flex-row justify-center w-fit mx-auto mt-6 items-center">
          <img src={img} alt="" />
          <p className="sm:border-l-2 border-l-gray-600 sm:pl-4 border-l-0 pl-0 border-t-2 border-t-gray-600 pt-4 sm:border-t-0 sm:pt-0 ">
            <span className="font-semibold ">Contact us</span> <br />
            Get the help you need from our automated <br />
            assistant, or contact an agent
          </p>
        </div>
      </div>
      <div className="ml-6 mb-4">
        <span class="ml-4 hover:underline">About</span>
        <span class="ml-4 hover:underline">eBay</span>
        <span class="ml-4 hover:underline">Announcements</span>
        <span class="ml-4 hover:underline">Community</span>
        <span class="ml-4 hover:underline">Security Center</span>
        <span class="ml-4 hover:underline">Seller Information Center</span>
        <span class="ml-4 hover:underline">Policies</span>
        <span class="ml-4 hover:underline">Affiliates</span>
        <span class="ml-4 hover:underline">Help &amp; Contact</span>
        <span class="ml-4 hover:underline">Site Map</span>
      </div>
      <div className=" ml-6   p-2">
        <p className="mb-12 text-xs    w-full">
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

export default EbayAccount;
