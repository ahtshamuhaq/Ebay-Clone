import React, { useEffect, useState } from "react";
import i1 from "../../pictures/ebaylg.png";
import { Link } from "react-router-dom";
const BlogNav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY < prevScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return (
    <div className={`bg-white shadow-lg p-4 ${isSticky ? "sticky top-0" : ""}`}>
      <div className="md:flex items-center flex-wrap w-full hidden xl:w-3/4 lg:mx-auto justify-between">
        <div className="flex items-center">
          <div>
            <img className="w-24" src={i1} alt="" />
          </div>
          <div className="flex ml-5 text-[#333333]">
            <p className="pb-2 mt-2 hover:border-b-4 border-black">Company</p>
            <p className="pb-2 mt-2 hover:border-b-4 border-black ml-7">
              Stories
            </p>
            <p className="pb-2 mt-2 hover:border-b-4 border-black ml-7">
              Impact
            </p>
            <p className="pb-2 mt-2 hover:border-b-4 border-black ml-7">Tech</p>
            <p className="pb-2 mt-2 hover:border-b-4 border-black ml-7">
              Investors
            </p>
            <p className="pb-2 mt-2 hover:border-b-4 border-black ml-7">
              Careers
            </p>
          </div>
        </div>
        <div className="flex text-xs items-center text-[#666666]">
          <p className="ml-5">Press Room</p>
          <p className="ml-5">Follow Us</p>
          <p className="ml-5">Contact Us</p>
          <p className="ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center md:hidden">
        <div>
          <img className="w-24" src={i1} alt="" />
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
                    <p className="text-blackhover:underline">Help & Contact</p>
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
    </div>
  );
};

export default BlogNav;
