import React from "react";
import { Link } from "react-router-dom";

const Report = () => {
  return (
    <div>
      <div className="bg-[#005384] lg:h-72 flex flex-col justify-center items-center ">
        <div>
          <h1>
            <h1 className="sm:text-[54px] text-2xl sm:leading-[53px] text-[#fff] font-bold">
              Report a Concern
            </h1>
          </h1>
        </div>
        <div className="flex mt-10  flex-col sm:flex-row">
          <div className="flex lg:flex-row flex-col">
            <p className=" h-16 bg-[#ff9f39] hover:bg-[#ee881b] w-60  flex rounded-lg items-center  justify-center       text-black ">
              Contact Customer Service
            </p>
            <p className=" h-16 bg-[#ff9f39]  hover:bg-[#ee881b] w-60 mt-8 flex rounded-lg items-center lg:mt-0 justify-center  lg:ml-5     text-black ">
              Report a Fake Email
            </p>
          </div>
          <div className="flex lg:flex-row flex-col">
            <p className=" h-16 bg-[#ff9f39] w-60   hover:bg-[#ee881b] mt-8 sm:mt-0  flex rounded-lg items-center  justify-center   sm:ml-5     text-black ">
              If You Think You’ve Been Hacked
            </p>
            <p className=" h-16 bg-[#ff9f39] w-60  hover:bg-[#ee881b]  mt-8 lg:mt-0 flex rounded-lg items-center  justify-center mb-10  sm:ml-5     text-black ">
              Resolve a Problem
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-radiant w-full lg:w-1/2"></div>
        <div>
          <h1 className=" sm:text-[54px] text-3xl text-center pt-10 leading-[53px] text-black font-bold">
            Security <br /> Researchers
          </h1>
          <div className="flex mt-10 flex-col sm:flex-row items-center  justify-center ">
            <div className="flex  flex-col">
              <p className=" h-16  bg-[#0073b7] w-60  flex rounded-lg items-center  justify-center      text-white">
                Responsible Disclosure
              </p>
              <p className=" h-16  bg-[#0073b7] w-60 mt-8 flex rounded-lg items-center   justify-center      text-white">
                Eligible Vulnerabilities
              </p>
              <p className=" h-16  bg-[#0073b7] w-60 mt-8 flex rounded-lg items-center   justify-center      text-white">
                Report a Fake Email
              </p>
            </div>
            <div className="flex  flex-col">
              <p className=" h-16  bg-[#0073b7] w-60  mt-8 sm:mt-0  flex rounded-lg items-center  justify-center   sm:ml-5    text-white">
                If You Think You’ve Been Hacked
              </p>
              <p className=" h-16  bg-[#0073b7] w-60  mt-8   flex rounded-lg items-center  justify-center   sm:ml-5    text-white">
                Resolve a Problem
              </p>
              <p className=" h-16  bg-[#0073b7] w-60  mt-8   flex rounded-lg items-center  justify-center   sm:ml-5    text-white">
                Resolve a Problem
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#005384] lg:h-72 mt-9 flex flex-col justify-center items-center ">
        <h1 className="sm:text-[54px] text-2xl sm:leading-[53px] text-[#fff] font-bold">
          Law Enforcement Resources
        </h1>
        <div className="flex flex-col sm:flex-row mt-10 w-full justify-evenly ">
          <p className=" h-16 bg-[#ff9f39] w-full sm:w-2/5  flex rounded-lg items-center  justify-center       text-black ">
            Contact Customer Service
          </p>
          <p className=" h-16 bg-[#ff9f39] w-full sm:w-2/5 mt-8 flex rounded-lg items-center lg:mt-0 justify-center  lg:ml-5     text-black ">
            Report a Fake Email
          </p>
        </div>
      </div>
      <div className="ml-6 mt-12 mb-4 text-xs hidden sm:block">
        <span class="ml-4 hover:underline">About</span>
        <span class="ml-4 hover:underline">eBay</span>
        <span class="ml-4 hover:underline">Announcements</span>
        <span class="ml-4 hover:underline">Community</span>
        <span class="ml-4 hover:underline">Security Center</span>
        <span class="ml-4 hover:underline">Seller Information Center</span>
        <span class="ml-4 hover:underline">Policies</span>
        <span class="ml-4 hover:underline">Affiliates</span>
        <span class="ml-4 hover:underline">Help &amp; Contact</span>
        <span class="ml-4 hover:underline">Site Map</span>
      </div>
      <div className=" ml-6   p-2">
        <p className="mb-12 text-xs    w-full">
          Copyright © 1995-2023 eBay Inc. All Rights Reserved.
          <span className="underline ml-1 text-xs">Accessibility</span>,
          <span className="underline ml-1 text-xs">Privacy</span>,
          <span className="underline ml-1 text-xs">Cookies</span>,
          <Link to={"/pages/home/PrivacyChoices"}>
            <span className="underline ml-1 text-xs">Your Privacy Choices</span>
            ,
          </Link>
          <span className="underline ml-1 text-xs">Payments Terms of Use</span>,
          <span className="underline ml-1 text-xs">User Agreement</span> and{" "}
          <span className="underline ml-1 text-xs">AdChoice</span>
        </p>
      </div>
    </div>
  );
};

export default Report;
