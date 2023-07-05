import React from "react";
import img5 from "././../../pictures/4.jpg";
import i5 from "././../../pictures/5.png";

const Contact = () => {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row bg-[#fad8f0]">
      <div className=" mt-8">
        <h1 className="text-[#82187c] pl-24 font-bold text-xl md:text-[54px] md:leading-[54px]">
          eBay <br className="hidden sm:block" />
          Customer Service
        </h1>
        <p className="text-[#82187c] pl-24 font-bold text-xl mt-5">
          Have a question? Need to resolve an issue? We’re here to help!{" "}
          <br className="hidden sm:block" />
          Customer service is available seven days a week.
        </p>
      </div>
      <img className="hidden lg:block" src={img5} alt="" />
      <img className="block lg:hidden w-60 mt-5" src={i5} alt="" />
    </div>
  );
};

export default Contact;
