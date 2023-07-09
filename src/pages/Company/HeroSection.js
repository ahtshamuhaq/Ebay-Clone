import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="flex ">
          <div className="bg-[#003147] h-32 w-full md:w-4/5 text-white text-3xl   md:text-5xl font-semibold pt-8 pl-12 ">
            Our Company
          </div>
          <div className="w-1/5 flex">
            <div className="w-1/2 h-32 bg-[#0e4a6c]"></div>
            <div className="w-1/2 flex flex-col">
              <div className="bg-[#01718f] w-full h-16 "></div>
              <div className="bg-[#02a2ac] w-full h-16 "></div>
            </div>
          </div>
        </div>
        <div>
          <video autoPlay loop>
            <source
              src="https://player.vimeo.com/external/389123523.hd.mp4?s=59807ffb60cce6ce7e81a36e376a0276ab1bcfa0&profile_id=175"
              type="video/mp4"
            />
          </video>
        </div>
        <h1 className="text-2xl font-semibold text-center mt-6">
          We connect people and build communities to create economic opportunity
          for all.
        </h1>
        <p className="text-center text-lg mt-4 ">
          At eBay, we create pathways to connect millions of sellers and buyers
          in more than 190 markets around the world. Our{" "}
          <br className="hidden xl:block" />
          technology empowers our customers, providing everyone the opportunity
          to grow and thrive — no matter who they are or{" "}
          <br className="hidden xl:block" /> where they are in the world. And
          the ripple effect of our work creates waves of change for our
          customers, our company, our <br className="hidden xl:block" />{" "}
          communities and our planet.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
