import React, { useState } from "react";
import { Link } from "react-router-dom";
import ebay from "./../../pictures/ebaydev.png";
const Nav = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isDevelopOpen, setIsDevelopOpen] = useState(false);
  const [isGrowOpen, setIsGrowOpen] = useState(false);
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const toggleJoinDropdown = () => {
    setIsJoinOpen(!isJoinOpen);
  };

  const toggleDevelopDropdown = () => {
    setIsDevelopOpen(!isDevelopOpen);
  };

  const toggleGrowDropdown = () => {
    setIsGrowOpen(!isGrowOpen);
  };

  const toggleUpdatesDropdown = () => {
    setIsUpdatesOpen(!isUpdatesOpen);
  };

  const toggleSupportDropdown = () => {
    setIsSupportOpen(!isSupportOpen);
  };
  const [isNotificationOpen, setisNotificationOpen] = useState(false);

  const joinItems = [
    "About the Developers Program",
    "Benefits",
    "Policies",
    "API License Agreement",
  ];
  const developItems = [
    "Get Started",
    "APIs",
    "Tools",
    "SDKs",
    "Widgets",
    "Guides",
  ];
  const growItems = [
    "Application Growth Check",
    "Affiliate Program",
    "Loyalty Program",
    "Events",
    "Awards",
  ];

  const updatesItems = ["API Updates", "Newsletter", "Blog"];

  const supportItems = [
    "API Status",
    "FAQs",
    "Developer Community Forum",
    "Knowledge Base",
    "Developer Account Support",
    "Developer Technical Support",
  ];

  const notifications = [
    "Application Keysets",
    "User Access Tokens",
    "Alerts and Notifications",
    "Profile & Contacts",
  ];
  const openNotifications = () => {
    setisNotificationOpen(true);
  };
  const closeNotifications = () => {
    setisNotificationOpen(false);
  };
  const [isCartOpen, setisCartOpen] = useState(false);
  const toggleDropdown = () => {
    setisCartOpen(!isCartOpen);
  };

  return (
    <div className="mx-auto text-xs px-3 w-full md:w-full ">
      <nav className="bg-white border-gray-200 w-full md:w-4/5 mx-auto dark:bg-gray-900 mb-2 ">
        <div className=" flex flex-wrap items-center justify-between mx-auto ">
          <div>
            <a href="/" className="flex items-center">
              <img
                src={ebay}
                className=" h-8 mr-3 md:hidden"
                alt="Flowbite Logo"
              />

              <div className="hidden w-64 md:flex">
                <img src={ebay} alt="" />
              </div>
            </a>
          </div>
          <div className="hidden font-semibold mt-8 text-lg md:flex ">
            <div className="flex justify-between items-center mb-6 text-gray-700">
              <div
                className="relative ml-8"
                onMouseEnter={toggleJoinDropdown}
                onMouseLeave={toggleJoinDropdown}
              >
                <p className="">Join</p>
                {isJoinOpen && (
                  <ul className="absolute z-10 bg-white p-3">
                    {joinItems.map((item, index) => (
                      <li key={index}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="relative ml-8"
                onMouseEnter={toggleDevelopDropdown}
                onMouseLeave={toggleDevelopDropdown}
              >
                <p className="">Develop</p>
                {isDevelopOpen && (
                  <ul className="absolute z-10 bg-white p-3">
                    {developItems.map((item, index) => (
                      <li key={index}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="relative ml-8"
                onMouseEnter={toggleGrowDropdown}
                onMouseLeave={toggleGrowDropdown}
              >
                <p className="">Grow</p>
                {isGrowOpen && (
                  <ul className="absolute z-10 bg-white p-3">
                    {growItems.map((item, index) => (
                      <li key={index}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="relative ml-8"
                onMouseEnter={toggleUpdatesDropdown}
                onMouseLeave={toggleUpdatesDropdown}
              >
                <p className="">Updates</p>
                {isUpdatesOpen && (
                  <ul className="absolute z-10 bg-white p-3">
                    {updatesItems.map((item, index) => (
                      <li key={index}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="relative ml-8"
                onMouseEnter={toggleSupportDropdown}
                onMouseLeave={toggleSupportDropdown}
              >
                <p className="">Support</p>
                {isSupportOpen && (
                  <ul className="absolute z-10 bg-white p-3">
                    {supportItems.map((item, index) => (
                      <li key={index}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="relative ml-8"
                onMouseEnter={openNotifications}
                onMouseLeave={closeNotifications}
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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {isNotificationOpen && (
                  <ul className="absolute z-10 bg-white p-3">
                    {notifications.map((item, index) => (
                      <li key={index}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative ml-8">
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
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleDropdown}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          {isCartOpen && (
            <div className="  block w-full  md:hidden" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <p
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    <Link to={"/pages/home/CustomerServices"}>
                      <p>CustomerServices</p>
                    </Link>
                  </p>
                </li>
                <li>
                  <p className="block py-2  pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Link to={"/pages/home/HelpAndContact"}>
                      <p className="text-blackhover:underline">
                        Help & Contact
                      </p>
                    </Link>
                  </p>
                </li>
                <li>
                  <Link to={"/pages/home/SignIn"}>
                    <p className="block py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      <p className=" text-[#3880df] underline">Sign in</p>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to={"/pages/home/register"}>
                    <p className="text-[#3880df] underline ">register</p>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to={"/pages/home/ebayaccount"}>
                    <p className="text-[#3880df] underline ">EbayAccount</p>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to={"/pages/home/moneyback"}>
                    <p className="text-[#3880df] underline ">
                      eBay Money Back Policy
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
