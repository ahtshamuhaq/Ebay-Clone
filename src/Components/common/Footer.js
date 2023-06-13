import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const columns = [
    {
      title: "Buy",
      items: [
        "Registration",
        "eBay Money Back Guarantee",
        "Bidding & buying help",
        "Stores",
      ],
    },
    {
      title: "Sell",
      items: ["Start selling", "Learn to sell", "Affiliates"],
      title2: "Tools & apps",
      items2: ["Developers", "Security center", "Site map"],
    },
    {
      title: "Stay connected",
      items: ["eBay's Blogs", "Facebook", "Twitter"],
    },
    {
      title: "About eBay",
      items: [
        "Company info",
        "News",
        "Investors",
        "Careers",
        "Government relations",
        "Advertise with us",
        "Policies",
        "Verified Rights Owner (VeRO) Program",
      ],
    },
    {
      title: "Help & Contact",
      items: ["Seller Information Center", "Contact us"],
      title2: "Community",
      items2: ["Announcements", "Discussion boards", "eBay Giving Works"],
    },
  ];

  return (
    <div className="">
      <hr />
      <div className="hidden  lg:flex justify-between mt-4 mb-4 w-[90%] mx-auto">
        {columns.map((column, index) => (
          <div key={index}>
            <h1 className="text-[#7c7976] font-bold">{column.title}</h1>
            <ul>
              {column.items.map((item, i) => (
                <li
                  className="text-[#c5c5c5] font-medium hover:underline"
                  key={i}
                >
                  {item === "Facebook" ? (
                    <i
                      class="fa fa-facebook-official"
                      style={{ fontSize: "19px" }}
                    ></i>
                  ) : item === "Twitter" ? (
                    <i
                      class="fa fa-twitter-square"
                      style={{ fontSize: "19px" }}
                    ></i>
                  ) : (
                    ""
                  )}{" "}
                  {item}
                </li>
              ))}
            </ul>
            {column.title2 && (
              <>
                <h1 className="text-[#7c7976] font-bold">{column.title2}</h1>
                <ul>
                  {column.items2.map((item, i) => (
                    <li
                      className="text-[#c5c5c5] font-medium hover:underline"
                      key={i}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="bg-[#111820] text-white font-semibold pb-5 lg:hidden ">
        <ul className=" p-3 pt-8 pl-5 mb-4 w-[95%]  ">
          <li className="mb-2">Home</li>
          <li className="mb-2">Sign in / Register</li>
          <li className="mb-2">Sell an item</li>
          <li className="mb-2">Help & Contact</li>
          <li className="mb-8">Download the free eBay app</li>
          <hr />
        </ul>
        <div className="flex flex-col items-center">
          <div>
            <span className="underline mr-2">Site map,</span>
            <span className="underline mr-2">User Agreement,</span>
            <Link to={"/pages/home/PrivacyChoices"}>
              <span className="underline ml-2 text-sm">
                Your Privacy Choices
              </span>
              ,
            </Link>
            <span className="underline ml-2">Cookies &</span>
            <span className="underline mr-2">AdChoice.</span>
          </div>
          <div>© 1995-2023 eBay Inc.</div>
          <div className="mb-12">
            Mobile / <span className="underline">Classic Site</span>
          </div>
        </div>
      </div>
      <p className="mb-2 mt-6  w-full hidden  lg:flex items-center">
        Copyright © 1995-2023 eBay Inc. All Rights Reserved.
        <span className="underline ml-2 text-sm">Accessibility</span>,
        <span className="underline ml-2 text-sm">Privacy</span>,
        <span className="underline ml-2 text-sm">Cookies</span>,
        <Link to={"/pages/home/PrivacyChoices"}>
          <span className="underline ml-2 text-sm">Your Privacy Choices</span>,
        </Link>
        <span className="underline ml-2 text-sm">Payments Terms of Use</span>,
        <span className="underline ml-2 text-sm">User Agreement</span> and{" "}
        <span className="underline ml-2 text-sm">AdChoice</span>
      </p>
    </div>
  );
};

export default Footer;
