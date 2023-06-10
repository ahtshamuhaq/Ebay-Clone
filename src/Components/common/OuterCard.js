import React from "react";
const OuterCard = ({ product }) => {
  return (
    <div>
      {product.image && (
        <div className="W-[258px] h-[200px] flex items-center justify-center bg-[#f2f2f2]">
          <img
            className="W-[258px] h-[200px]"
            src={product.image}
            alt="Product"
          />
        </div>
      )}
      {product.description && (
        <h1 className="font-bold">{product.description}</h1>
      )}
      {product.gender && <h1 className="font-bold">{product.gender}</h1>}
      {product.details.length > 0 &&
        product.details.map((detail, index) => (
          <span className="text-[#727070]" key={index}>
            {detail}
          </span>
        ))}
      {product.price && (
        <h1 className="font-bold mt-3 text-2xl">${product.price}</h1>
      )}
      {product.buyIt && <p className="text-[#727070]">{product.buyIt}</p>}
      {product.shippingFee && (
        <p className="text-[#727070]">+${product.shippingFee}Shipping</p>
      )}
      {product.origin && (
        <p className="text-[#727070]"> From{product.origin}</p>
      )}
      {product.watchers && (
        <h1 className="font-bold">
          {product.watchers} {console.log(product.watchers)}
          {product.watchers > 1 ? "Watchers" : "Watcher"}
        </h1>
      )}
    </div>
  );
};

export default OuterCard;
//
