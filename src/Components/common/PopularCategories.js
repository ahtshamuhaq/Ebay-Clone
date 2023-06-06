import React from "react";
const PopularCategories = ({ PopularCategory }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-40 hover:underline hover:cursor-pointer">
        <div className="hover:border border-gray-500 w-[200px] h-[200px] justify-center rounded-full flex  items-center  ">
          <div className="rounded-full w-[195px] h-[195px]  aria-hidden:w-[230px] bg-white ">
            <img
              style={{ borderRadius: "500px", width: "100%" }}
              src={PopularCategory.image}
              alt=""
            />
          </div>
        </div>
        <div>{PopularCategory.title}</div>
      </div>
    </div>
  );
};

export default PopularCategories;
