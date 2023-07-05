import React from "react";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CardCarousals = () => {
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
    {
      title: "Seller ratings",
      description:
        "You can find the best and most reputable sellers on eBay by looking at their seller rating, feedback score, and the number of items they've sold.",
      overview: "2 min article",
    },
    {
      title: "How buyers can cancel an order",
      description:
        "If you want to cancel an order, you'll need to contact the seller and ask if they can cancel it for you. The seller can either accept or decline your cancellation request.",
      overview: "2 min article",
    },
    {
      title: "Paying with PayPal",
      description:
        "If you have a PayPal account, you can use it to pay for your items on eBay. You can also link your PayPal and eBay accounts so you don’t need to enter your details each time you pay at checkout.",
      overview: "2 min article",
    },
  ];

  const settings = {
    showThumbs: false,
    infiniteLoop: false,
    swipeable: true,
    emulateTouch: true,
    showStatus: false,
    showIndicators: true,
    centerMode: false,
    selectedItem: 0,
  };

  const groupedCards = [];
  for (let i = 0; i < cardsData.length; i += 4) {
    groupedCards.push(cardsData.slice(i, i + 4));
  }

  return (
    <div className="bg-[#111a85] p-8 ">
      <Carousel {...settings}>
        {groupedCards.map((slide, index) => (
          <div key={index} className="flex">
            {slide.map((card, cardIndex) => (
              <div key={cardIndex} className="card mr-3 ml-3">
                {card.isEmpty ? (
                  <div className="empty-card"></div>
                ) : (
                  <Card
                    title={card.title}
                    description={card.description}
                    overview={card.overview}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousals;
