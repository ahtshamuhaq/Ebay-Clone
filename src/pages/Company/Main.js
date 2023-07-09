import React from "react";
import BlogNav from "../Blogs/BlogNav";
import LowerNav from "../Contactus/LowerNav";
import HeroSection from "./HeroSection";
import Card1 from "./Card1";
import GlobalSearch from "./GlobalSearch";
import Card2 from "./Card2";
const Main = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <BlogNav />
      <LowerNav />
      <HeroSection />
      <Card1 />
      <GlobalSearch />
      <Card2 />
    </div>
  );
};

export default Main;
