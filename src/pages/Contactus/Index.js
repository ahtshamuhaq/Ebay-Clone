import React from "react";
import BlogNav from "../Blogs/BlogNav";
import LowerNav from "./LowerNav";
import Card from "./Card";
import CardGrid from "./CardGrid";
import Footer from "../Blogs/Footer";

const Index = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <BlogNav />
      <LowerNav />
      <div className="bg-[#003147] h-32 w-full md:w-4/5 text-white text-3xl   md:text-5xl font-semibold pt-8 pl-12 mx-auto">
        Contact Us
      </div>
      <CardGrid />
      <Footer />
    </div>
  );
};

export default Index;
