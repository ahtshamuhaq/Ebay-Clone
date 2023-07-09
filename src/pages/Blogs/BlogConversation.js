import React from "react";
const BlogConversation = ({ data }) => {
  return (
    <div className="bg-white h-full xl:h-60 hoverable">
      <div
        className="
        flex items-center"
      >
        <div className="p-2">
          <img src={data.imageSrc} alt="" />
        </div>
        <div className="p-2">
          <h1 className="font-semibold">{data.name}</h1>
          <h1 className="font-semibold">{data.username}</h1>
          <p className=" text-xs mt-1">J{data.date}</p>
        </div>
      </div>
      <p className="px-3 text-sm pb-6 mt-4">{data.content}</p>
      <p className="hidden-section ml-3">
        <i class="fa fa-comment-o  hover:text-blue-600"></i>
        <i className="fa fa-retweet ml-3  hover:text-blue-600"></i>
        <i className="fa fa-heart-o ml-3 hover:text-blue-600"></i>
      </p>
    </div>
  );
};

export default BlogConversation;
