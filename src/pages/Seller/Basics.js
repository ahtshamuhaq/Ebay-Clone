import React from "react";

const Basics = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Learn the basics</h1>
      <p className="text-gray-500 mt-2 text-sm hidden lg:block">
        Here's what you need to know to start selling.
      </p>
      <div className="flex flex-col sm:flex-row  mt-5">
        <div className=" lg:w-1/3 md:w-1/2 w-full">
          <div className="flex sm:block">
            <div className="bg-[#f7f7f7] font-bold w-16 h-16 flex justify-center items-center text-2xl rounded-full">
              1
            </div>
            <div className="text-lg font-bold ml-4 sm:ml-0 mt-4 mb-4">
              List your item
            </div>
          </div>
          <div>
            You can list new or used items and pay a final <br /> value fee only
            when it sells. Learn more about
            <br /> fees.
          </div>
        </div>
        <div className=" lg:w-1/3 md:w-1/2 w-full">
          <div className="flex sm:block">
            <div className="bg-[#f7f7f7] font-bold w-16 h-16 flex justify-center items-center text-2xl rounded-full">
              2
            </div>
            <div className="text-lg  ml-4 sm:ml-0 font-bold mt-4 mb-4">
              Get seller protection
            </div>
          </div>
          <div>
            You’re protected by policies, monitoring, and
            <br /> our customer service team.
          </div>
        </div>
        <div className=" lg:w-1/3 md:w-1/2 w-full">
          <div>
            <div className="flex sm:block">
              <div className="bg-[#f7f7f7] font-bold w-16 h-16 flex justify-center items-center text-2xl rounded-full">
                3
              </div>
              <div className="text-lg font-bold ml-4 sm:ml-0 mt-4 mb-4">
                Choose when you get paid
              </div>
            </div>
            You can schedule either daily or weekly
            <br /> payouts, and we'll deposit your earnings <br />
            directly into your bank account.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basics;
