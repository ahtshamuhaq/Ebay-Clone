import React from "react";
import Card from "./Card";

const CardData = [
  {
    title: "eBay Headquarters",
    description: "2025 Hamilton Avenue San Jose, California 95125 USA",
    icon: "",
    text: "",
    svgPath:
      "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
    text2: "Get Directions",
  },
  {
    title: "Customer Service Contacts",
    description: "Need help? Contact our Customer Service team.",
    icon: "fa fa-twitter",
    text: "@askebay",
    svgPath:
      "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
    text2: "Customer Service Help",
  },
  {
    title: "Media & Press Contacts",
    description:
      "If you're a member of the press with editorial inquiries, please contact our Media and Press Team.",
    icon: "fa fa-twitter",
    text: "@ebaynewsroom",
    svgPath: "M8.25 4.5l7.5 7.5-7.5 7.5",
    text2: "Press Room",
  },
  {
    title: "Careers Contacts",
    description:
      "Interested in joining us? Get in touch with our Careers Team.",
    icon: "fa fa-file-text",
    text: "talent@ebay.com",
    svgPath: "",
    text2: "",
  },
  {
    title: "Investor Relations Contacts",
    description:
      "For financial inquiries, please contact our Investor Relations team.",
    icon: "",
    text: "",
    svgPath:
      "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
    text2: "Contact Investor Relations",
  },
  {
    title: "eBay Impact Contacts",
    description:
      "Contact the eBay Impact team about our initiatives to drive positive social and environmental change.",
    icon: "",
    text: "",
    svgPath:
      "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
    text2: "Contact Global Impact",
  },
  {
    title: "Government Relations Contacts",
    description:
      "Contact our Government Relations team for federal, state, and local public policy inquiries.",
    icon: "",
    text: "",
    svgPath:
      "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
    text2: "Contact Government Relations",
  },
  {
    title: "Privacy Contacts",
    description:
      "Contact the eBay Global Privacy Office for privacy-related inquiries.",
    icon: "",
    text: "",
    svgPath: "M8.25 4.5l7.5 7.5-7.5 7.5",
    text2: "Contact Privacy Office",
  },
  {
    title: "Developers Program Contacts",
    description:
      "If you’re a developer and want to learn more about our APIs and ecommerce technology ecosystem, please contact our Developers Program team.",
    icon: "",
    text: "",
    svgPath:
      "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
    text2: "Contact Developers Program",
  },
];
const CardGrid = () => {
  return (
    <div>
      <div className="flex flex-wrap w-full flex-col md:flex-row lg:w-4/5 mx-auto pb-10">
        {CardData.map((data) => (
          <div className=" w-full md:w-[33.33%] md:pl-5 mt-4    ">
            <Card key={data.title} data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
