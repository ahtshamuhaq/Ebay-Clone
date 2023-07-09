import React from "react";
import a1 from "../../pictures/blog6.jpg";
import i1 from "../../pictures/news1.png";
import i2 from "../../pictures/news2.jpg";
import i3 from "../../pictures/news3.png";
import i4 from "../../pictures/news4.png";
import i5 from "../../pictures/conversation1.jpg";
import i6 from "../../pictures/conversation2.jpg";
import i7 from "../../pictures/conversation3.jpg";
import i8 from "../../pictures/conversation4.jpg";
import BlogNews from "./BlogNews";
import BlogConversation from "./BlogConversation";
const NewsFeed = () => {
  const cardData = [
    {
      date: "Jun 16, 2023",
      title: "eBay launches beta test of new  generative AI tools for sellers",
      imagesrc: i1,
    },
    {
      date: "Jun 16, 2023",
      title:
        "eBay's Avritti Khandurie Mittal Recognized as a Woman of Influence 2023 by Silicon Valley Business Journal",
      imagesrc: i2,
    },
    {
      date: "Jun 13, 2023",
      title: "eBay's Christine Su Named to Fast Company's 2023 Queer 50 List",
      imagesrc: i3,
    },
    {
      date: "Jun 13, 2023",
      title:
        "Meet 19 executives guiding eBay's online marketplace toward AI, ads, and authentication",
      imagesrc: i4,
    },
  ];

  const cardData2 = [
    {
      name: "eBay Newsroom",
      username: "eBayNewsroom",
      date: "Jun 15, 2023",
      content:
        "Our Chief Technology Officer @mazenra joined @Bloomberg’s Tech Disruptors podcast to share how #AI is powering new customer experiences on our marketplace — plus other tech trends we’re watching. https://t.co/nmLn2HQtAq https://t.co/lGjDJG48Zs",
      imageSrc: i5,
    },
    {
      name: "eBay Main Street",
      username: "ebaymainstreet",
      date: "Jun 2, 2023",
      content:
        "The eBay #SmallBiz Ambassador Network Program provides numerous opportunities for sellers like Akil McLeod to advocate for ecommerce public policy issues. Shop Akil's store, The Dapper Advisor, on eBay for some great men's fashion finds: https://t.co/4kit7BkgH0 https://t.co/OXYbrzSKd6",
      imageSrc: i6,
    },
    {
      name: "The Hill Events",
      username: "TheHillEvents",
      date: "May 31, 2023",
      content:
        'CEO of @eBay Jamie Iannone on AI developments, including beta testing a program where the company will write descriptions for sellers: "Excited for what [AI will] do for e-commerce and creating more small businesses over the next decade." #TheHillCEO https://t.co/haJSU9MdZy',
      imageSrc: i7,
    },
    {
      name: "eBay Newsroom",
      username: "eBayNewsroom",
      date: "May 26, 2023",
      content:
        "We’ve teamed up with @BritishVogue on the Forces For Change initiative to spark behavioral change among consumers and extend the life of fashion. https://t.co/BgFFi443m3",
      imageSrc: i8,
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl mt-8 mb-8">
          Our Purpose in Action
        </h1>
        <div className="w-3/4 mx-auto">
          <img src={a1} alt="" />
        </div>
      </div>
      <div className=" w-full md:w-3/4 md:mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="flex items-center font-semibold text-2xl justify-start md:justify-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2 text-blue-600 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
            In The News
          </h1>
          {cardData.map((data) => (
            <div className=" flex mt-4  ">
              <BlogNews key={data.title} data={data} />
            </div>
          ))}
          <h1 className="flex items-center text-blue-600   font-semibold text-2xl justify-end  mt-4">
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-2 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="flex items-center font-semibold text-2xl justify-start md:justify-center  mt-4">
            <i class="fa fa-twitter text-3xl mr-1 mt-1 text-blue-600"></i>
            In Conversation
          </h1>
          <div className="mt-3 ml-4">
            {cardData2.map((data) => (
              <div className=" flex mt-4  ">
                <BlogConversation key={data.name} data={data} />
              </div>
            ))}
          </div>
          <h1 className="flex items-center text-blue-600   font-semibold text-2xl justify-end  mt-4">
            Follow us{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-2 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
