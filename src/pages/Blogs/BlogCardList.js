import React from "react";
import BlogCard from "./BlogCard";
import i3 from "../../pictures/blog3.jpg";
import i4 from "../../pictures/blog4.jpg";
import i5 from "../../pictures/blog5.jpg";

const BlogCardList = () => {
  const cardData = [
    {
      id: 1,
      imageSrc: i3,
      date: "Jun 29, 2023",
      category: "SELLERS",
      title: "Meet the Women Selling Menswear to Help Fund Their Future Family",
      description:
        "Selling on eBay has enabled Heather and Alicia to have a flexible, family-friendly lifestyle and pay for their fertility treatment.",
      author: "Nicole Grant Kriege, eBay News Team",
    },
    {
      id: 2,
      imageSrc: i4,
      date: "Jul 6, 2023",
      category: "PRESS RELEASE",
      title: "eBay Launches Training Camp for Sports Trading Card Collectors",
      description:
        "First-of-its-kind ‘Collectors Camp’ convenes trading card enthusiasts to level up their collections. Inaugural events take place during NBA Draft week with Brooklyn Nets’ Mikal Bridges and local eBay seller Piece of the Game.",
      author: "eBay News Team",
    },
    {
      id: 3,
      imageSrc: i5,
      date: "Jun 5, 2023",
      category: "EBAY VENTURES",
      title:
        "Techstars and eBay Announce Partnership to Launch Techstars Future of Ecommerce powered by eBay",
      description:
        "The accelerator program will invest in early-stage companies transforming the online economy.",
      author: "Press Release",
    },
  ];
  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row w-full lg:w-3/4 mx-auto mt-5">
        {cardData.map((card) => (
          <div className="md:w-[360px] w-full   ">
            <BlogCard key={card.id} card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCardList;
