import React from "react";
import PopularCategories from "./PopularCategories";

const Categories = ({ categories }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-6">{categories.mainTitle}</h1>
      <div className="sm:flex sm:flex-row flex flex-col w-full sm:justify-between items-center justify-center">
        <div>
          {categories.items.slice(0, 3).map((category, index) => (
            <div key={index}>
              <PopularCategories PopularCategory={category} />
            </div>
          ))}
        </div>
        <div>
          {categories.items.slice(3, 6).map((category, index) => (
            <div key={index}>
              <PopularCategories PopularCategory={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
