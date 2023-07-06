import React, { useState } from "react";
import image from "../../pictures/dev1.jpg";
import { Button } from "../../Components";
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <div className="flex items-start md:items-center p-4 rounded-lg justify-between bg-[#f7f7f7]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-3 text-white "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <div>
            <p>
              <b>Important</b> : Due to EU & UK Payments regulatory
              requirements, an additional security verification via Digital
              Signatures is required for certain API calls that are made by{" "}
              <br className="hidden md:flex" /> EU/UK sellers. Please refer to{" "}
              <b className="underline">Digital Signatures</b> for APIs to learn
              more on the impacted APIs and the process to create signature to
              be included in the HTTP payload.
            </p>
          </div>
          <div
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-[#867f7f]"
            onClick={toggleButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}

      <div
        className="bg-cover h-[60vh]  mt-4  bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-radial-gradient p-8 h-full">
          {" "}
          <h1 className="text-white text-2xl sm:text-5xl font-semibold">
            eBay Developers <br className="hidden xl:block" /> Program
          </h1>
          <h1 className="text-white text-xl font-semibold mt-10">
            Building blocks for buying and selling on{" "}
            <br className="hidden xl:block" /> eBay from anywhere online
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/3 mt-16 p-4">
          <h1 className="text-4xl font-bold">Join</h1>
          <p className="font-semibold mt-7">
            Not a member? It's free to join the eBay Developers Program!
          </p>
          <div className="flex mt-6 items-center">
            <p className="hover:underline">Learn more</p>
            <div className="w-36 ml-8">
              <Button variant="outlinedBlack">
                Register now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 ml-1 mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-16 p-4">
          <h1 className="text-4xl font-bold">Develop</h1>
          <p className="font-semibold mt-7">
            eBay API tools and support - designed by developer, for developers.
          </p>
          <div className="flex mt-6 items-center">
            <p className="hover:underline">Learn more</p>
            <div className="w-36 ml-8">
              <Button variant="outlinedBlack">
                See all APIs{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 ml-1 mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-16 p-4">
          <h1 className="text-4xl font-bold">Grow</h1>
          <p className="font-semibold mt-7 ">
            Ready to grow? Put your application in the spotlight.
          </p>
          <p className="mt-14 hover:underline">Learn more</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
