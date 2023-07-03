import React, { useState } from "react";
import ebay from "./../../pictures/ebaylg.png";
import { Link } from "react-router-dom";

const Navbar = ({ listItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };
  const [isOpen, setIstOpen] = useState(false);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const openNotifications = () => {
    setIsNotificationOpen(true);
  };
  const closeNotifications = () => {
    setIsNotificationOpen(false);
  };

  const openCart = () => {
    setIstOpen(true);
  };
  const closeCart = () => {
    setIstOpen(false);
  };
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const openSummary = () => {
    setIsSummaryOpen(true);
  };
  const closeSummary = () => {
    setIsSummaryOpen(false);
  };

  return (
    <div className="mx-auto text-xs w-full md:w-full ">
      <nav className="bg-white border-gray-200 w-full dark:bg-gray-900 ">
        <div className=" flex flex-wrap items-baseline justify-between md:items-baseline mx-auto ">
          <div>
            <a href="/" className="flex items-center">
              <img
                src={ebay}
                className=" h-8 mr-3 md:hidden"
                alt="Flowbite Logo"
              />

              <div className="hidden md:flex">
                <span>hi!</span>
                <span>
                  <Link to={"pages/home/SignIn"}>
                    <p className="ml-1 text-[#3880df] underline">Sign in</p>
                  </Link>
                </span>
                <span className="ml-1"> or</span>
                <span>
                  <Link to={"pages/home/register"}>
                    <p className="text-[#3880df] underline ml-1">register</p>
                  </Link>
                </span>
                <span>
                  <p className="text-black ml-5 hover:underline">Daily Deals</p>
                </span>
                <span>
                  <Link to={"/pages/home/HelpAndContact"}>
                    <p className="text-black ml-5 hover:underline">
                      Help & Contact
                    </p>
                  </Link>
                </span>
              </div>
            </a>
          </div>
          <div className="hidden    md:mb-8 md:flex ">
            <div className=" flex justify-between items-center mb-4 text-gray-700 pt-1  ">
              <span className="hover:text-[#3880df]">Ship to</span>
              <span className="ml-5 hover:underline">Sell</span>
              <div className="ml-5">
                Watchlist <i className="fa fa-angle-down"></i>
              </div>
              <div
                className="relative ml-5"
                onMouseEnter={openSummary}
                onMouseLeave={closeSummary}
              >
                <p>
                  Myebay <i className="fa fa-angle-down"></i>
                </p>
                {isSummaryOpen && (
                  <ul className="absolute z-10 bg-white p-3">
                    {listItems.map((item, index) => (
                      <li key={index}>
                        <a
                          className={
                            index === 0
                              ? "rounded-t"
                              : index === listItems.length - 1
                              ? "rounded-b"
                              : ""
                          }
                          href="/"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="relative ml-5"
                onMouseEnter={openNotifications}
                onMouseLeave={closeNotifications}
              >
                <i className="material-icons mt-1" style={{ fontSize: "16px" }}>
                  notifications_none
                </i>
                {isNotificationOpen && (
                  <div>
                    <div className="absolute z-10 w-[355px] left-[-305px] mt-[-1px] min-w-[100px] text-gray-700 shadow-xl bg-white">
                      <div className="leading-6 px-[128px] py-[86px]">
                        <span className="text-center">
                          <span href="/">
                            Please{" "}
                            <span>
                              <Link to={"pages/home/SignIn"}>
                                <a
                                  className="text-[#3880df] underline"
                                  href="/"
                                >
                                  Sign in
                                </a>
                              </Link>
                            </span>{" "}
                            to view notifications.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative ml-5"
                onMouseEnter={openCart}
                onMouseLeave={closeCart}
              >
                <i
                  className="fa fa-shopping-cart mt-1"
                  style={{ fontSize: "16px" }}
                ></i>
                {isOpen && (
                  <div>
                    <div className="absolute z-10 w-[355px] left-[-305px] mt-[-1px] min-w-[100px] text-gray-700 shadow-xl bg-white">
                      <div className="leading-6 px-12 py-12">
                        <span className="text-start text-2xl">
                          Your cart is empty <br />
                          <span>Time to start shopping!</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
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
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Watchlist
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Notifications
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Account
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
