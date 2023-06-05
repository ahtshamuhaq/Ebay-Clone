import React from "react";

const YourComponent = () => {
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
    <div>
      <hr />
      <div className="flex justify-between mt-4 mb-4">
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
      <p className="mb-8 mt-6 flex items-center">
        Copyright © 1995-2023 eBay Inc. All Rights Reserved.
        <span className="underline ml-2 text-sm">Accessibility</span>,
        <span className="underline ml-2 text-sm">Privacy</span>,
        <span className="underline ml-2 text-sm">Cookies</span>,
        <span className="underline ml-2 text-sm">Your Privacy Choices</span>,
        <span className="underline ml-2 text-sm">Payments Terms of Use</span>,
        <span className="underline ml-2 text-sm">User Agreement</span> and{" "}
        <span className="underline ml-2 text-sm">AdChoice</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mt-1 ml-1 font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </p>
    </div>
  );
};

export default YourComponent;
