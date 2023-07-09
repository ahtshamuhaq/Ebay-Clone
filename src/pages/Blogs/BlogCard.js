import React from "react";

const BlogCard = ({ card }) => {
  return (
    <div>
      <div className="bg-white hoverable w-full flex flex-col ">
        <div className="w-full">
          <img className="w-full h-full" src={card.imageSrc} alt="" />
        </div>
        <div className="p-4">
          <span>{card.date}</span>{" "}
          <span className="border-l border-l-gray-500 pl-3">
            {card.category}
          </span>
          <h1 className="text-2xl text font-semibold mt-3">{card.title}</h1>
          <p className="mt-2">{card.description}</p>
          <p className="mt-3">{card.author}</p>
          <div className="mt-20 flex justify-between items-center">
            <p className="hidden-section">
              <i className="fa fa-twitter hover:text-blue-600"></i>
              <i className="fa fa-linkedin ml-3 hover:text-blue-600"></i>
              <i className="fa fa-facebook ml-3 hover:text-blue-600"></i>
              <i className="fa fa-chain ml-3 hover:text-blue-600"></i>
            </p>
            <i
              className="material-icons flex justify-end items-end"
              style={{ fontSize: "30px", color: "blue" }}
            >
              keyboard_arrow_right
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
