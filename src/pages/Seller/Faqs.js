import React, { useState } from "react";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleText = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleText2 = () => {
    setIsOpen2(!isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleText3 = () => {
    setIsOpen3(!isOpen3);
  };
  const [isOpen4, setIsOpen4] = useState(false);
  const toggleText4 = () => {
    setIsOpen4(!isOpen4);
  };
  const [isOpen5, setIsOpen5] = useState(false);
  const toggleText5 = () => {
    setIsOpen5(!isOpen5);
  };
  const [isOpen6, setIsOpen6] = useState(false);
  const toggleText6 = () => {
    setIsOpen6(!isOpen6);
  };
  const [isOpen7, setIsOpen7] = useState(false);
  const toggleText7 = () => {
    setIsOpen7(!isOpen7);
  };
  const [isOpen8, setIsOpen8] = useState(false);
  const toggleText8 = () => {
    setIsOpen8(!isOpen8);
  };
  const [isOpen9, setIsOpen9] = useState(false);
  const toggleText9 = () => {
    setIsOpen9(!isOpen9);
  };
  const [isOpen10, setIsOpen10] = useState(false);
  const toggleText10 = () => {
    setIsOpen10(!isOpen10);
  };
  const [isOpen11, setIsOpen11] = useState(false);
  const toggleText11 = () => {
    setIsOpen11(!isOpen11);
  };
  const [isOpen12, setIsOpen12] = useState(false);
  const toggleText12 = () => {
    setIsOpen12(!isOpen12);
  };
  return (
    <div>
      <div className="bg-[#f7f7f7] p-3">
        <h1 className="text-3xl font-bold">FAQ</h1>
        <div
          onClick={toggleText}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">How much does it cost to sell?</h1>
          <i class="material-icons text-2xl font-bold">
            {isOpen ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            Once your item sells, we generally charge 10-15% of the final value.
            Your first 250 listings each month are free and, after, there’s a
            $0.35 insertion fee per listing. Learn more about fees
          </p>
        )}
        <div
          onClick={toggleText2}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">
            What’s the best way to ship my item?
          </h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen2 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen2 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            eBay provides recommendations, but you can choose a preferred
            shipping carrier. Can’t make it to your local dropoff? Some offer
            free “ship from home” pickup. Print your shipping labels with eBay
            to receive a <br /> discount from the carriers we work with. If you
            don’t have a printer, we also offer QR codes for eBay labels.
          </p>
        )}
        <div
          onClick={toggleText3}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">Can I sell locally on eBay?</h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen3 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen3 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            When creating your listing, you can offer local pickup by selecting
            it in shipping details. Once the buyer pays, they’ll receive a QR
            code and a 6-digit code, which you can scan or enter with the app to
            confirm the sale.
          </p>
        )}
        <div
          onClick={toggleText4}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">
            How much will it cost to ship my item?
          </h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen4 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen4 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            You can choose the shipping option that offers the greatest value
            and convenience for you. Learn more about shipping.
          </p>
        )}
        <div
          onClick={toggleText5}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">
            Where can I get shipping supplies?
          </h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen5 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen5 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            You can use any packaging supplies you may already have at home or
            get free boxes from carriers. For an added touch, eBay branded
            supplies are available to purchase. Buy eBay branded packaging.
          </p>
        )}
        <div
          onClick={toggleText6}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">
            How should I choose my listing price?
          </h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen6 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen6 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            For most items, we can provide a price recommendation for you based
            on recently sold, similar items. How you price your item can depend
            on how you prefer to sell it—Auction or Buy It Now. Choose a lower
            starting price for auctions to create more interest.
          </p>
        )}
        <div
          onClick={toggleText7}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">
            How does eBay protect sellers?{" "}
          </h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen7 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen7 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            We understand that things can happen that are out of your control as
            a seller. When they do, we have your back. Learn more about seller
            protection.
          </p>
        )}
        <div
          onClick={toggleText8}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">What can I sell on eBay? </h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen8 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen8 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            You can sell almost anything, from homemade goods to used or unused
            items from your closet. We restrict items that violate any laws, or
            infringe on intellectual property.
          </p>
        )}
        <div
          onClick={toggleText9}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">How do I create an account? </h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen9 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen9 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            To get started, select List an item. We’ll help you create and
            verify your account, and set-up payment information during your
            first listing. Have your preferred payment account details on hand
            and be ready to receive a call or text on your phone for
            verification.
          </p>
        )}
        <div
          onClick={toggleText10}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">When will I get paid?</h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen10 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen10 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            After we confirm the buyer's payment has been received, payouts are
            sent directly to your bank account, Monday through Friday (excluding
            bank holidays), within two business days. Once a payout is
            initiated, funds are typically available within 1-3 business days
            depending on your bank's normal processing time.
          </p>
        )}
        <div
          onClick={toggleText11}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">
            Do I have to pay federal income tax on my sales?
          </h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen11 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen11 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            Starting on Jan 1, 2022, IRS regulations require all businesses that
            process payments, including online marketplaces like eBay, to issue
            a Form 1099-K for all sellers who receive $600 or more in sales. The
            new tax reporting requirement may impact your 2022 tax return that
            you may file in 2023. However, just because you receive a 1099-K
            doesn’t automatically mean that you’ll owe taxes on the amount
            reported on your 1099-K. Only goods that are sold for a profit are
            considered taxable, so you won’t owe any taxes on something you sell
            for less than what you paid for it. For example, if you bought a
            bike for $1,000 last year, and then sold it on eBay today for $700,
            that $700 you made would generally not be subject to income tax.
            Check out our 1099-K FAQ to learn more about these changes.
          </p>
        )}
        <div
          onClick={toggleText12}
          className="flex justify-between mt-6  h-16  items-center p-3 hover:bg-white hover:text-blue-600"
        >
          <h1 className="text-2xl font-bold">How does eBay Ads work?</h1>
          <i class="material-icons text-2xl font-bold">
            {" "}
            {isOpen12 ? "keyboard_arrow_up" : " keyboard_arrow_down"}
          </i>
        </div>
        {isOpen12 && (
          <p className="text-gray-600 text-sm pb-8 pl-3 bg-white">
            eBay Ads can help you build your business on eBay with effective
            advertising tools that create a meaningful connection between you
            and eBay’s global community of passionate buyers - and help you sell
            your items faster. Stand out among billions of listings on eBay by
            putting your items in front of interested buyers no matter the size
            of your budget. Learn More
          </p>
        )}
      </div>
    </div>
  );
};

export default Faqs;
