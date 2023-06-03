import React, { useState } from "react";
import CarousalNavDropdowns from "./CarousalNavDropdowns";
import CarouslD1 from "./../../pictures/carousalD1.jpg";
import CarouslD2 from "./../../pictures/carousalD2.jpg";
import CarouslD3 from "./../../pictures/carousalD3.jpg";
import CarouslD4 from "./../../pictures/carousalD4.jpg";
import CarouslD5 from "./../../pictures/carousalD5.jpg";
import CarouslD6 from "./../../pictures/carousalD6.jpg";
import CarouslD7 from "./../../pictures/carousalD7.jpg";
import CarouslD8 from "./../../pictures/carousalD8.jpg";
import CarouslD9 from "./../../pictures/carousalD9.jpg";

const CarousalNav = () => {
  const electronics = {
    heading1: "Most popular categories",
    paragraphs1: [
      "Smartphones and accessories",
      "Video games and consoles",
      "Computers and tablets",
      "Cameras and photos",
      "Camera drones",
      "Refurbished",
      "Smart home",
    ],
    heading2: "More categories",
    paragraphs2: [
      "Apple",
      "Samsung",
      "Portable audio and headphones",
      "Emerging brands",
      "Smart watches",
      "Deals",
      "Sell on eBay",
    ],
    image: CarouslD1,
  };
  const motors = {
    heading1: "Car",
    paragraphs1: [
      "Auto and truck parts",
      "Tools and supplies",
      "Turbo chargers",
      "Clothing and merchandise",
      "Shock absorbers",
      "Electronic and GPS",
      "Air intake",
      "Vintage pieces",
    ],
    heading2: "Motorcycle and more",
    paragraphs2: [
      "Motorcycle parts",
      "Body and frame",
      "Engines and parts",
      "Accessories",
      "Exhausts and systems",
      "Rims",
      "Deals",
      "Sell on eBay",
    ],
    image: CarouslD2,
  };
  const fashion = {
    heading1: "Most popular categories",
    paragraphs1: [
      "Footwear",
      "Women's clothing",
      "Footwear for women",
      "Men's clothing",
      "Men's footwear",
      "Watches",
      "Jewelry",
    ],
    heading2: "More categories",
    paragraphs2: [
      "Accessories for men",
      "Accessories for women",
      "Bags and wallets for women",
      "Mens sunglasses",
      "Womens sunglasses",
      "Sneakers",
      "Deals",
      "Sell on eBay",
    ],
    image: CarouslD3,
  };
  const collectiblesAndArt = {
    heading1: "Most popular categories",
    paragraphs1: [
      "Collectibles",
      "Art",
      "Action figures",
      "Cartoon characters",
      "Movie and TV characters",
      "Diecast",
      "Musical memorabilia",
    ],
    heading2: "More categories",
    paragraphs2: [
      "Collectibles",
      "Art",
      "Action figures",
      "Cartoon characters",
      "Movie and TV characters",
      "Diecast",
      "Musical memorabilia",
    ],
    image: CarouslD4,
  };

  const sports = {
    heading1: "Most popular categories",
    paragraphs1: [
      "Cycling",
      "Fitness, running and yoga",
      "Fitness Tech",
      "Fishing",
      "Camping",
      "Scooters",
      "Team sports",
    ],
    heading2: "More categories",
    paragraphs2: [
      "Watersports",
      "Winter sports",
      "Box and MMA",
      "Swimming",
      "GPS & Running Watches",
      "Garmin",
      "Deals",
      "Sell on eBay",
    ],
    image: CarouslD5,
  };
  const healthAndBeauty = {
    heading1: "Most popular categories",
    paragraphs1: [
      "Beauty",
      "Makeup",
      "Health",
      "K-Beauty",
      "Manicure and pedicure",
      "Hair products",
      "Skin products",
      "Orthopedic products",
    ],
    heading2: "More categories",
    paragraphs2: [
      "Vitamins and food supplements",
      "Shaving and waxing",
      "Bath and personal hygiene",
      "Oral hygiene",
      "Massagers",
      "Deals",
      "Sell on eBay",
    ],
    image: CarouslD6,
  };
  const industrialEquipment = {
    heading1: "Most popular categories",
    paragraphs1: [
      "Dental healthcare",
      "Electronic equipment and supplies",
      "Metallurgy and manufacturing",
      "Motors and industrial automation",
      "Heavy equipment parts",
      "Light industrial tools",
      "Inspection, measurement and testing equipment",
    ],
    heading2: "More categories",
    paragraphs2: [
      "Packing and shipping",
      "Office supplies and equipment",
      "Printing and graphic arts",
      "Restaurants and food service",
      "Maintenance and safety",
      "Retail and services",
      "Deals",
      "Sell on eBay",
    ],
    image: CarouslD7,
  };
  const homeAndGarden = {
    heading1: "Most popular categories",
    paragraphs1: [
      "Workshop Tools and Equipment",
      "Patio, garden and outdoors",
      "Home improvement",
      "Kitchen, dining and bar",
      "Lamps, lights and fans",
      "Interior decoration",
      "Home organization",
      "Home appliances",
    ],
    heading2: "More categories",
    paragraphs2: [
      "Toys",
      "Pets",
      "Crafts",
      "Art supplies",
      "Musical instruments",
      "Jewelry and beads",
      "Deals",
      "Sell on eBay",
    ],
    image: CarouslD8,
  };
  const Sell = {
    heading1: "Most popular categories",
    paragraphs1: [
      "How to create a listing",
      "Join our growth program",
      "Seller center",
      "Seller updates",
      "Seller customer service",
      "eBay managed payments",
    ],
    heading2: "More categories",
    paragraphs2: [
      "Learn to sell",
      "eBay stores",
      "eBay fees",
      "Selling limits",
    ],
    image: CarouslD9,
  };
  const [isOpen, setIsOpen] = useState({
    electronics: false,
    motors: false,
    fashion: false,
    collectiblesAndArt: false,
    sports: false,
    healthAndBeauty: false,
    industrialEquipment: false,
    homeAndGarden: false,
    sell: false,
  });

  const handleMouseEnter = (category) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [category]: true,
    }));
  };

  const handleMouseLeave = (category) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [category]: false,
    }));
  };

  //
  return (
    <nav>
      <ul className="flex justify-between">
        <li>
          <span className="font-bold">Home</span>
        </li>
        <li>
          <span>Saved</span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("electronics")}
            onMouseLeave={() => handleMouseLeave("electronics")}
          >
            Electronics
            <CarousalNavDropdowns
              dropdownData={electronics}
              setIsOpen={setIsOpen}
              isOpen={isOpen.electronics}
            />
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("motors")}
            onMouseLeave={() => handleMouseLeave("motors")}
          >
            Motors
            <CarousalNavDropdowns
              dropdownData={motors}
              setIsOpen={setIsOpen}
              isOpen={isOpen.motors}
            />
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("fashion")}
            onMouseLeave={() => handleMouseLeave("fashion")}
          >
            Fashion
            <CarousalNavDropdowns
              dropdownData={fashion}
              setIsOpen={setIsOpen}
              isOpen={isOpen.fashion}
            />
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("collectiblesAndArt")}
            onMouseLeave={() => handleMouseLeave("collectiblesAndArt")}
          >
            Collectibles and Art
            <CarousalNavDropdowns
              dropdownData={collectiblesAndArt}
              setIsOpen={setIsOpen}
              isOpen={isOpen.collectiblesAndArt}
            />
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("sports")}
            onMouseLeave={() => handleMouseLeave("sports")}
          >
            Sports
            <CarousalNavDropdowns
              dropdownData={sports}
              setIsOpen={setIsOpen}
              isOpen={isOpen.sports}
            />
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("healthAndBeauty")}
            onMouseLeave={() => handleMouseLeave("healthAndBeauty")}
          >
            Health & Beauty
            <CarousalNavDropdowns
              dropdownData={healthAndBeauty}
              setIsOpen={setIsOpen}
              isOpen={isOpen.healthAndBeauty}
            />
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("industrialEquipment")}
            onMouseLeave={() => handleMouseLeave("industrialEquipment")}
          >
            Industrial equipment
            <CarousalNavDropdowns
              dropdownData={industrialEquipment}
              setIsOpen={setIsOpen}
              isOpen={isOpen.industrialEquipment}
            />
          </span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("homeAndGarden")}
            onMouseLeave={() => handleMouseLeave("homeAndGarden")}
          >
            Home & Garden
            <CarousalNavDropdowns
              dropdownData={homeAndGarden}
              setIsOpen={setIsOpen}
              isOpen={isOpen.homeAndGarden}
            />
          </span>
        </li>
        <li>
          <span>Deals</span>
        </li>
        <li>
          <span
            onMouseEnter={() => handleMouseEnter("sell")}
            onMouseLeave={() => handleMouseLeave("sell")}
          >
            Sell
            <CarousalNavDropdowns
              dropdownData={Sell}
              setIsOpen={setIsOpen}
              isOpen={isOpen.sell}
            />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default CarousalNav;
