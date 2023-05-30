import React, { useState } from "react";
import ebaylg from "./../pictures/ebaylg.png";
import ReactSearchBox from "react-search-box";
import { search } from "./Reusable-Components/ButtonStyle";
const HomeSearch = () => {
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
    <div className="flex  items-center w-[95%] `">
      <div className="w-36">
        <img className="w-fit" src={ebaylg} alt="" />
      </div>

      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="flex justify-center items-center"
        >
          <span className="hover:text-[#3880df] w-24">Shop by category</span>
          <i className="fa fa-angle-down"></i>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-[700px] bg-white border border-gray-300 rounded-md shadow-md">
            <div className="grid grid-cols-3 gap-4 p-4">
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
            <div className="w-3/4 mb-3 text-xl text-[#3880df]  flex items-center justify-end">
              See All Categories<i className="fa fa-angle-right ml-2 mt-1"></i>
            </div>
          </div>
        )}
      </div>
      <div className="flex  items-center border-2  border-black ml-3 w-4/5 ">
        <div className="w-full">
          <ReactSearchBox
            placeholder="SEARCH FOR ANYTHING"
            leftIcon={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </>
            }
          />
        </div>
        <div className="ml-auto">
          {" "}
          <div>
            <select
              id="options"
              name="options"
              value={selectedValue}
              onChange={handleChange}
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
      <div>
        <button style={search}>Search</button>
      </div>
      <div>
        <a className="text-[#767676] ml-2" href="/">
          Advanced
        </a>
      </div>
    </div>
  );
};

export default HomeSearch;
