import React from "react";
import PopularCategories from "./PopularCategories";

const Categories = ({ categories }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-6">{categories.mainTitle}</h1>
      <div className="flex flex-wrap items-center justify-between">
        {categories.items.map((category, index) => (
          <div key={index}>
            <PopularCategories PopularCategory={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
