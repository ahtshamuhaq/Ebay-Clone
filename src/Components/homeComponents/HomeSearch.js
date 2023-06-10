import React, { useState } from "react";
import ebaylg from "./../../pictures/ebaylg.png";
import ReactSearchBox from "react-search-box";
import Button from "../common/Button";
const HomeSearch = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const categories = [
    {
      category: "Collectibles & art",
      tags: ["Collectibles", "Antiques", "Sports memorabilia", "Art"],
    },
    {
      category: "Electronics",
      tags: [
        "Computers & tablets",
        "Cameras & photo",
        "TV, audio & surveillance",
        "Cell phones & accessories",
      ],
    },
    {
      category: "Fashion",
      tags: ["Women", "Men", "Jewelry & watches", "Shoes"],
    },
    {
      category: "Home & garden",
      tags: [
        "Yard, garden & outdoor",
        "Crafts",
        "Home improvement",
        "Pet supplies",
      ],
    },
    {
      category: "Auto Parts & Accessories",
      tags: [
        "GPS & Security Devices",
        "Radar & Laser Detectors",
        "Car Care & Detailing",
        "Scooter Parts & Accessories",
      ],
    },
    {
      category: "Musical instruments & gear",
      tags: [
        "Guitar",
        "Pro audio equipment",
        "String",
        "Stage lighting & effects",
      ],
    },
    {
      category: "Sporting goods",
      tags: ["Outdoor sports", "Team sports", "Exercise & fitness", "Golf"],
    },
    {
      category: "Toys & hobbies",
      tags: ["Radio control", "Kids toys", "Action figures", "Dolls & bears"],
    },
    {
      category: "Other categories",
      tags: [
        "Video games & consoles",
        "Health & beauty",
        "Baby",
        "Business & industrial",
      ],
    },
  ];
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const categoriesForSelect = [
    { value: "volvo", label: "All categories" },
    { value: "saab", label: "Antiques" },
    { value: "mercedes", label: "Art" },
    { value: "audi", label: "Baby" },
    { value: "", label: "Books" },
    { value: "", label: "Business & Industrial" },
    { value: "", label: "Cameras & Photo" },
    { value: "", label: "Cell Phones & Accessories" },
    { value: "", label: "Clothing, Shoes & Accessories" },
    { value: "", label: "Coins & Paper Money" },
    { value: "", label: "Collectibles" },
    { value: "", label: "Computers/Tablets & Networking" },
    { value: "", label: "Consumer Electronics" },
    { value: "", label: "Crafts" },
    { value: "", label: "Dolls & Bears" },
    { value: "", label: "DVDs & Movies" },
    { value: "", label: "eBay Motors" },
    { value: "", label: "Entertainment Memorabilia" },
    { value: "", label: "Gift Cards & Coupons" },
    { value: "", label: "Health & Beauty" },
    { value: "", label: "Home & Garden" },
    { value: "", label: "Jewelry & Watches" },
    { value: "", label: "Music" },
    { value: "", label: "Musical Instruments & Gear" },
    { value: "", label: "Pet Supplies" },
    { value: "", label: "Pottery & Glass" },
    { value: "", label: "Real Estate" },
    { value: "", label: "Specialty Services" },
    { value: "", label: "Sporting Goods" },
    { value: "", label: "Sports Mem, Cards & Fan Shop" },
    { value: "", label: "Stamps" },
    { value: "", label: "Tickets & Experiences" },
    { value: "", label: "Toys & Hobbies" },
    { value: "", label: "Travel" },
    { value: "", label: "Video Games & Consoles" },
    { value: "", label: "Everything Else" },
  ];
  return (
    <div className="flex mx-auto items-center w-[90%] `">
      <div className=" hidden lg:block w-36">
        <img src={ebaylg} alt="" />
      </div>

      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="hidden  md:flex justify-center items-center"
        >
          <span className="hover:text-[#3880df] w-24">Shop by category</span>
          <i className="fa fa-angle-down"></i>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-[650px] bg-white border border-gray-300 rounded-md shadow-md">
            <div className="hidden md:grid grid-cols-3 gap-4 p-4">
              {categories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-black hover:underline hover:text-[#3880df]">
                    {category.category}{" "}
                    <i className="fa fa-angle-right ml-2 mt-1"></i>
                  </h2>
                  {category.tags.map((tag, index) => (
                    <p
                      className="hover:underline hover:text-[#3880df]"
                      key={index}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="mb-3">
              <hr />
            </div>
            <div className="w-3/4 mb-3 text-xl text-[#3880df] hidden  md:flex items-center justify-end">
              See All Categories<i className="fa fa-angle-right ml-2 mt-1"></i>
            </div>
          </div>
        )}
      </div>
      <div className="flex  justify-between items-center border-2  border-black ml-3 w-full md:w-4/5 ">
        <div className="w-full">
          <form class="flex items-center w-full">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div className="ml-auto w-1/5   ">
          {" "}
          <div>
            <select
              id="options"
              name="options"
              value={selectedValue}
              onChange={handleChange}
              className="w-full"
            >
              {categoriesForSelect.map((items, index) => (
                <option key={index} value={items.value}>
                  {items.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Button variant="outlinedBlue">Search</Button>
      </div>
      <div className="hidden md:block">
        <a className="text-[#767676] text-xs ml-2" href="/">
          Advanced
        </a>
      </div>
    </div>
  );
};

export default HomeSearch;
