import React, { useState } from "react";

const InnerProductDescription = () => {
  const [activeTab, setActiveTab] = useState("About this item");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const itemNumber = 225585996570;
  const item = {
    title: "Item specifics",
    condition: `New with box: A brand-new, unused, and unworn item (including handmade items)
     in the original packaging (such as the original box or bag) and/or with the original tags attached`,
    theme: "Moon",
    customised: "No",
    brand: "adidas",
    ukShoeSize: 5.5,
    department: "Men",
    type: "Trainer",
    releaseYear: 2017,
    model: "adidas Yeezy 500",
    style: "Sneaker",
    mpn: "DB2966",
    upperMaterial: "Mesh",
    colour: "Yellow",
    productLine: "adidas Yeezy",
  };
  const data = [
    {
      title: "About this product",
      obj1: {
        brand: "adidas",
        mpn: "DB2966",
        model: "adidas Yeezy 500",
        eBayProductId: "21050516568",
      },
      obj2: {
        department: "Men",
        colour: "Yellow",
        releaseYear: 2017,
        style: "Sneaker",
        ukShoeSize: 5.5,
        type: "Trainer",
        upperMaterial: "Mesh",
        productLine: "adidas Yeezy",
      },
      obj3: {
        manufacturerColour: "Super Moon Yellow/Super Moon Yellow",
        collaboration: "Kanye West",
        releaseDate: "20171206",
      },
    },
  ];
  return (
    <div className="px-4">
      <div className="flex">
        <p
          onClick={() => handleTabClick("About this item")}
          className={`font-bold mr-4 ${
            activeTab === "About this item"
              ? "text-[#0d5dbe]"
              : "text-gray-500 "
          }`}
        >
          About this item
        </p>
        <p
          onClick={() => handleTabClick("Shipping, returns & payments")}
          className={`font-bold ${
            activeTab === "Shipping, returns & payments"
              ? "text-[#0d5dbe]"
              : "text-gray-500 "
          }`}
        >
          Shipping, returns & payments
        </p>
      </div>

      <div className="mt-5">
        {activeTab === "About this item" && (
          <div className="mt-12">
            <div className="flex justify-between">
              <p>Seller assumes all responsibility for this listing.</p>
              <p className="text-gray-500">
                eBay item number:{" "}
                <span className="text-black font-bold">{itemNumber}</span>
              </p>
            </div>
            <div>
              <h1 className="font-semibold mt-14 text-2xl">{item.title}</h1>
              <div className="flex flex-wrap  ">
                <div className="">
                  <div className="flex ">
                    <p className="text-gray-500  w-[183px] h-20 mt-12">
                      Condition
                    </p>
                    <p className="w-[450px] break-words font-semibold h-20 mt-12">
                      {item.condition}
                    </p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Theme</p>
                    <p className="w-[450px] font-semibold h-4">{item.theme}</p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Customised</p>{" "}
                    <p className="w-[450px] font-semibold h-4">
                      {item.customised}
                    </p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Brand</p>{" "}
                    <p className="w-[450px] font-semibold h-4">{item.brand}</p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">UK Shoe Size</p>
                    <p className="w-[450px] font-semibold h-4">
                      {item.ukShoeSize}
                    </p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Department</p>
                    <p className="w-[450px] font-semibold h-4">
                      {item.department}
                    </p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Type</p>{" "}
                    <p className="w-[450px] font-semibold h-4">{item.type}</p>
                  </div>
                </div>
                <div className="ml-9">
                  <div className="flex ">
                    <p className="text-gray-500 w-[183px] h-20 mt-12">
                      Release Year
                    </p>
                    <p className="w-[450px] font-semibold h-20 mt-12">
                      {item.releaseYear}
                    </p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Model</p>{" "}
                    <p className="w-[450px] font-semibold h-4">{item.model}</p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Style</p>
                    <p className="w-[450px] font-semibold h-4">{item.style}</p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">MPN</p>
                    <p className="w-[450px] font-semibold h-4">{item.mpn}</p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">
                      Upper Material
                    </p>
                    <p className="w-[450px] font-semibold h-4">
                      {item.upperMaterial}
                    </p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Colour</p>{" "}
                    <p className="w-[450px] font-semibold h-4">{item.colour}</p>
                  </div>
                  <div className="flex mt-5">
                    <p className="text-gray-500 w-[183px] h-4">Product Line</p>{" "}
                    <pp className="w-[450px] font-semibold h-4">
                      {item.productLine}
                    </pp>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Shipping, returns & payments" && (
          <div className="flex mt-5">Shipping content</div>
        )}
      </div>

      <div className="mt-8">
        {data.map((item, index) => (
          <div key={index}>
            <h1 className="font-semibold text-2xl">{item.title}</h1>
            <div className="flex flex-col">
              <h1 className="font-bold mt-6 mb-4">Product Identifiers</h1>
              <div className="flex flex-wrap">
                {Object.entries(item.obj1).map(([key, value]) => (
                  <div className="w-1/2 flex mb-5" key={key}>
                    <span className="font-medium text-gray-500  w-[183px] h-4 ">
                      {key}
                    </span>{" "}
                    <p className="font-bold w-[450px] h-4">{value}</p>
                  </div>
                ))}
              </div>
              <h1 className="font-bold mt-6 mb-4">Product Key Features</h1>
              <div className="flex flex-wrap">
                {Object.entries(item.obj2).map(([key, value]) => (
                  <div className="w-1/2 flex mb-5" key={key}>
                    <span className="font-medium text-gray-500 w-[183px] h-4">
                      {key}
                    </span>{" "}
                    <p className="font-bold w-[450px] h-4">{value}</p>
                  </div>
                ))}
              </div>
              <h1 className="font-bold mt-6 mb-4">
                Additional Product Features
              </h1>
              <div className="flex flex-wrap">
                {Object.entries(item.obj3).map(([key, value]) => (
                  <div className="w-1/2 flex mb-5" key={key}>
                    <span className="font-medium text-gray-500 w-[183px] h-4">
                      {key}
                    </span>{" "}
                    <p className="font-bold w-[450px] h-4">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 mb-20">
        <h1 className="font-semibold text-3xl">
          Item description from the seller
        </h1>
        <h1 className="font-semibold underline mt-4 text-xl">
          Adidas Yeezy 500 Super Moon Yellow DB2966 UK 5 / US 5.5 | Same Day
          Dispatch
        </h1>
        <h1 className="text-[#444444]  mt-4 text-xl">Brand New & Unworn.</h1>
        <p className="text-[#444444] mt-4 text-xl">
          Item will be dispatched within 24hrs of purchase via Royal Mail
          Tracked 24.
        </p>
        <p className="text-[#444444]  mt-4 text-xl">
          If you have any further questions please do not hesitate to contact me
          via eBay.
        </p>
      </div>
    </div>
  );
};

export default InnerProductDescription;
