import React from "react";

const CarousalNav = () => {
  const menuItems = [
    "Home",
    "Saved",
    "Electronics",
    "Motors",
    "Fashion",
    "Collectibles and Art",
    "Sports",
    "Health & Beauty",
    "Industrial equipment",
    "Home & Garden",
    "Deals",
    "Sell",
  ];
  return (
    <nav>
      <ul className="flex justify-between">
        {menuItems.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CarousalNav;
