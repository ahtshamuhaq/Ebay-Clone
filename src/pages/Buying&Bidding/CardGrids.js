import React, { useState } from "react";
import Card from "./Card";
import LastSection from "./LastSection";

const CardGrids = () => {
  const cardsData = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const cardsData2 = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const cardsData3 = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const cardsData4 = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const cardsData5 = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const cardsData6 = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const cardsData7 = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const cardsData8 = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const cardsData9 = [
    {
      title: "eBay rules and policies",
      description:
        "We're committed to providing a secure and fair marketplace for our buyers and sellers. To support this commitment, we've put in place rules and policies.",
      overview: "4 min overview",
    },
    {
      title: "Buying as a guest",
      description:
        "You can shop for most things on eBay without needing an eBay account, but you’ll miss out on the benefits of being a member.",
      overview: "2 min article",
    },
    {
      title: "Get help if you bought as a guest",
      description:
        "If you want to return an item or if there's a problem with your order, the first step is to let the seller know. If you're not able to resolve things with the seller, you can ask us to help.",
      overview: "3 min article",
    },
    {
      title: "Get help with an item that hasn't arrived",
      description:
        "If the estimated delivery date for your order has passed and your item hasn't arrived, you can let the seller know by reporting that you didn't receive it.",
      overview: "4 min article",
    },
    {
      title: "Return an item for a refund",
      description:
        "If you've changed your mind about an item you bought or there's something wrong with it, you can request a return.",
      overview: "4 min article",
    },
    {
      title: "International purchases and shipping for buyers",
      description:
        "You'll find items from all over the world on eBay. International sellers can send items to you through regular shipping services, or they may use one of eBay's shipping programs.",
      overview: "3 min article",
    },
    {
      title: "Paying for items",
      description:
        "When you see an item for sale on eBay, the listing will include the payment methods you can use to buy it. If you have any problems paying for your items, we can help troubleshoot the issue.",
      overview: "2 min article",
    },
  ];
  const [showAllCards, setShowAllCards] = useState(false);
  const displayedCards = showAllCards ? cardsData : cardsData.slice(0, 5);

  const handleClick = () => {
    setShowAllCards(true);
  };
  const [showAllCards2, setShowAllCards2] = useState(false);
  const displayedCards2 = showAllCards2 ? cardsData2 : cardsData2.slice(0, 5);

  const handleClick2 = () => {
    setShowAllCards2(true);
  };
  const [showAllCards3, setShowAllCards3] = useState(false);
  const displayedCards3 = showAllCards3 ? cardsData3 : cardsData3.slice(0, 5);

  const handleClick3 = () => {
    setShowAllCards3(true);
  };
  const [showAllCards4, setShowAllCards4] = useState(false);
  const displayedCards4 = showAllCards4 ? cardsData4 : cardsData4.slice(0, 5);

  const handleClick4 = () => {
    setShowAllCards4(true);
  };
  const [showAllCards5, setShowAllCards5] = useState(false);
  const displayedCards5 = showAllCards5 ? cardsData5 : cardsData5.slice(0, 5);

  const handleClick5 = () => {
    setShowAllCards5(true);
  };
  const [showAllCards6, setShowAllCards6] = useState(false);
  const displayedCards6 = showAllCards6 ? cardsData6 : cardsData6.slice(0, 5);

  const handleClick6 = () => {
    setShowAllCards6(true);
  };
  const [showAllCards7, setShowAllCards7] = useState(false);
  const displayedCards7 = showAllCards7 ? cardsData7 : cardsData7.slice(0, 5);

  const handleClick7 = () => {
    setShowAllCards7(true);
  };
  const [showAllCards8, setShowAllCards8] = useState(false);
  const displayedCards8 = showAllCards8 ? cardsData8 : cardsData8.slice(0, 5);

  const handleClick8 = () => {
    setShowAllCards8(true);
  };
  const [showAllCards9, setShowAllCards9] = useState(false);
  const displayedCards9 = showAllCards9 ? cardsData9 : cardsData9.slice(0, 5);

  const handleClick9 = () => {
    setShowAllCards9(true);
  };
  return (
    <div className="bg-[#f7f7f7] pb-16">
      <div className="flex   h-fit">
        <div className="sticky hidden sm:block   text-[#0e67ff]  top-0 h-fit pt-16 pl-8 font-bold mt-0 w-1/3 left-0 text-xl">
          <h1>Buying Items</h1>
          <h1>How Bidding Works</h1>
          <h1>Resolving Buying Problems</h1>
          <h1>Payments</h1>
          <h1>Shipping & Tracking Items</h1>
          <h1> Finding Items & Managing Purchases</h1>
          <h1> All About Feedback </h1>
          <h1> Buying Limits </h1>
          <h1> Working With Sellers </h1>
        </div>
        <div className=" sm:w-3/5 sm:mx-auto w-full ">
          <h1 className="text-2xl font-bold">Buying Items</h1>

          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72 mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick}
              >
                Click to show more cards
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">How Bidding Works</h1>

          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards2.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards2 && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72  mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick2}
              >
                Click to show more cards
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">Resolving Buying Problems</h1>

          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards3.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards3 && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72  mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick3}
              >
                Click to show more cards
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">Payments</h1>

          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards4.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards4 && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72  mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick4}
              >
                Click to show more cards
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">Shipping & Tracking Items</h1>

          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards5.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards5 && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72  mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick5}
              >
                Click to show more cards
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">
            {" "}
            Finding Items & Managing Purchases
          </h1>

          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards6.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards6 && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72  mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick6}
              >
                Click to show more cards
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold"> All About Feedback </h1>

          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards7.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards7 && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72  mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick7}
              >
                Click to show more cards
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold"> Buying Limits </h1>

          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards8.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards8 && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72  mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick8}
              >
                Click to show more cards
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold"> Working With Sellers </h1>
          <div className="flex flex-wrap   p-4 sm:p-8 mt-0">
            {displayedCards9.map((card, cardIndex) => (
              <div key={cardIndex} className="card   pl-4 pt-3   ">
                <Card
                  title={card.title}
                  description={card.description}
                  overview={card.overview}
                />
              </div>
            ))}
            {!showAllCards9 && (
              <div
                className="more-cards  ml-0 sm:ml-5 h-56 w-56 sm:h-72 sm:w-72  mt-0 text-center flex justify-center items-center font-bold text-3xl text-[#0e67ff] border-2 border-white"
                onClick={handleClick9}
              >
                Click to show more cards
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <LastSection />
    </div>
  );
};

export default CardGrids;
