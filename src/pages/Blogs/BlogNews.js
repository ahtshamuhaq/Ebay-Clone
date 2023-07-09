import React from "react";
const BlogNews = ({ data }) => {
  return (
    <div>
      <div className="bg-white w-fit h-full xl:h-60 hoverable flex justify-between">
        <div className="p-3">
          <img className="h-8 mt-6" src={data.imagesrc} alt="" />
        </div>
        <div className="ml-6 mt-2">
          <p>{data.date}</p>
          <h1 className="text-2xl font-semibold mr-8 mt-4">{data.title}</h1>
          <div className="flex justify-between datas-center">
            <div className="mt-20 w-fit">
              <p className="hidden-section">
                <i className="fa fa-twitter hover:text-blue-600"></i>
                <i className="fa fa-linkedin ml-3  hover:text-blue-600"></i>
                <i className="fa fa-facebook ml-3 hover:text-blue-600"></i>
                <i className="fa fa-chain ml-3 hover:text-blue-600"></i>
              </p>
            </div>
            <div className="float-right text-blue-600 mr-3 mt-16 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
