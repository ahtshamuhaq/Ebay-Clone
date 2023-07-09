import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const columns = [
    {
      title: "Buy",
      items: [
        { text: "Registration", path: "/pages/home/ebayaccount" },
        { text: "eBay Money Back Guarantee", path: "/pages/home/moneyback" },
        { text: "Bidding & buying help", path: "/pages/home/buying" },
        { text: "Stores", path: "/stores" },
      ],
    },
    {
      title: (
        <Link
          to="/pages/home/CustomerServices"
          className="text-blackfont-[unset]"
        >
          Sell
        </Link>
      ),
      items: [
        { text: "Start selling", path: "/pages/home/startselling" },
        { text: "Learn to sell", path: "/pages/home/learnselling" },
        { text: "Affiliates", path: "/pages/home/affiliates" },
      ],
      title2: "Tools & apps",
      items2: [
        { text: "Developers", path: "/pages/home/ebaydevs" },
        { text: "Security center", path: "/pages/home/securitycenter" },
        { text: "Site map", path: "/pages/home/sitemap" },
      ],
    },
    {
      title: "Stay connected",
      items: [
        { text: "eBay's Blogs", path: "/pages/home/blogs" },
        { text: "Facebook", path: "/pages/home/facebook" },
        { text: "Twitter", path: "/pages/home/twitter" },
      ],
    },
    {
      title: "About eBay",
      items: [
        { text: "Company info", path: "/pages/home/company" },
        { text: "News", path: "/pages/home/news" },
        { text: "Investors", path: "/pages/home/investors" },
        { text: "Careers", path: "/pages/home/careers" },
        { text: "Government relations", path: "/pages/home/government" },
        { text: "Advertise with us", path: "/pages/home/advertise" },
        { text: "Policies", path: "/pages/home/policies" },
        {
          text: "Verified Rights Owner (VeRO) Program",
          path: "/pages/home/vero",
        },
      ],
    },
    {
      title: "Help & Contact",
      items: [
        { text: "Seller Information Center", path: "/pages/home/sellerinfo" },
        { text: "Contact us", path: "/pages/contactus/index" },
      ],
      title2: "Community",
      items2: [
        { text: "Announcements", path: "/pages/home/announcements" },
        { text: "Discussion boards", path: "/pages/home/discussionboards" },
        { text: "eBay Giving Works", path: "/pages/home/givingworks" },
      ],
    },
  ];

  return (
    <div className="text-sm">
      <hr />
      <div className="hidden lg:flex justify-between mt-4 mb-4 w-[90%] mx-auto">
        {columns.map((column, index) => (
          <div key={index}>
            <h1 className="text-black font-semibold mb-3">
              {typeof column.title === "string" ? (
                column.title
              ) : (
                <Link to="/pages/home/CustomerServices" className="text-black">
                  {column.title}
                </Link>
              )}
            </h1>
            <ul>
              {column.items.map((item, i) => (
                <li className="text-[#262626]  hover:underline" key={i}>
                  {item.path ? (
                    <Link to={item.path}>{item.text}</Link>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
            {column.title2 &&
              column.items2 && ( // Add conditional check for column.items2
                <>
                  <h1 className="text-black font-bold mt-5 mb-3">
                    {column.title2}
                  </h1>
                  <ul>
                    {column.items2.map((item, i) => (
                      <li className="text-[#000000] hover:underline" key={i}>
                        {item.path ? (
                          <Link to={item.path}>{item.text}</Link>
                        ) : (
                          item.text
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
          </div>
        ))}
      </div>

      <div className="bg-[#111820] text-white font-semibold pb-5 lg:hidden ">
        <ul className=" p-3 pt-8 pl-5 mb-4   ">
          <Link to={"/"}>
            <li className="mb-2">Home</li>
          </Link>
          <Link to={"/pages/home/signIn"}>
            <li className="mb-2">Sign in</li>
          </Link>
          <Link to={"/pages/home/register"}>
            {" "}
            <li className="mb-2">Register</li>
          </Link>
          <Link to="/pages/home/CustomerServices">
            <li className="mb-2">Sell an item</li>
          </Link>

          <Link to={"/pages/home/helpandcontact"}>
            <li className="mb-2">Help & Contact</li>
          </Link>
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
          <div className="mb-12 ">
            Mobile / <span className="underline">Classic Site</span>
          </div>
        </div>
      </div>
      <p className="mt-24 mb-6 ml-9 text-xs  hidden  lg:flex items-center">
        Copyright © 1995-2023 eBay Inc. All Rights Reserved.
        <span className="underline ml-2 text-xs">Accessibility</span>,
        <span className="underline ml-2 text-xs">Privacy</span>,
        <span className="underline ml-2 text-xs">Cookies</span>,
        <Link to={"/pages/home/PrivacyChoices"}>
          <span className="underline ml-2 text-xs">Your Privacy Choices</span>,
        </Link>
        <span className="underline ml-2 text-xs">Payments Terms of Use</span>,
        <span className="underline ml-2 text-xs">User Agreement</span> and{" "}
        <span className="underline ml-2 text-xs">AdChoice</span>
      </p>
    </div>
  );
};

export default Footer;
