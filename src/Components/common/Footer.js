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
                <li className="text-[#c5c5c5] font-medium" key={i}>
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
                    <li className="text-[#c5c5c5] font-medium" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
