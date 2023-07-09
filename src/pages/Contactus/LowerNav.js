import React from "react";

const LowerNav = () => {
  return (
    <div>
      <div className="bg-white shadow-lg hidden xl:block border-t border-gray-600">
        <div className="py-5 w-3/5 mx-auto text-sm text-[#333333]">
          <div className="flex justify-between">
            <p className="hover:underline cursor-pointer">Overview</p>
            <p className="hover:underline cursor-pointer">Our History</p>
            <p className="hover:underline cursor-pointer">
              Sustainable Commerce
            </p>
            <p className="hover:underline cursor-pointer">
              Government Relations
            </p>
            <p className="hover:underline cursor-pointer">Reports & Policies</p>
          </div>

          <div className="flex justify-between w-4/5 mt-4">
            <p className="hover:underline cursor-pointer">Our Leaders</p>
            <p className="hover:underline cursor-pointer">
              Our Purpose in Action
            </p>
            <p className="hover:underline cursor-pointer">
              Diversity, Equity & Inclusion
            </p>
            <p className="hover:underline cursor-pointer">Privacy Center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
