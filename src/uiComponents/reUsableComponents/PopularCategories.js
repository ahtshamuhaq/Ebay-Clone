import React from "react";
import Category1 from "./../../pictures/Category1.png";
const PopularCategories = () => {
  const PopularCategory = {
    image: Category1,
  };
  return (
    <div className="flex flex-col justify-center items-center w-40 hover:underline hover:cursor-pointer">
      <div className="hover:border border-gray-500 w-[150px] h-[150px] justify-center rounded-full flex  items-center  ">
        <div className="rounded-full w-[145px] h-[145px]  aria-hidden:w--[150px] bg-white ">
          <img
            style={{ borderRadius: "500px" }}
            src={PopularCategory.image}
            alt=""
          />
        </div>
      </div>
      <div>SNEAKERS</div>
    </div>
  );
};

export default PopularCategories;
