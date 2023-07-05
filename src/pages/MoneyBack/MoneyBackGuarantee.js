import React from "react";
import img from "./../../pictures/mb-2.png";
import img2 from "./../../pictures/mb-contact.png";
import img3 from "./../../pictures/mb-earphone.png";
import img4 from "./../../pictures/mb-cclock.png";
import img5 from "./../../pictures/mb-4.png";

const MoneyBackGuarantee = () => {
  return (
    <div>
      <div className="ml-16 mt-8 w-3/5">
        <img src={img} alt="" />
      </div>
      <div className=" ml-16 mt-6 ">
        <h1 className="text-[#82177b] text-[16px]  sm:text-[28px] font-bold">
          Get the item you ordered or your money <br /> back—it’s that simple.
        </h1>
        <p className="text-[#756a67] text-lg mt-8">
          It’s automatic and covers your purchase price plus original shipping
          on eligible purchases* <br /> and there’s no extra fee for coverage.
          Follow these steps to get your refund.
        </p>
      </div>
      <div className="flex flex-wrap justify-between w-4/5 mx-auto items-center mt-6 ml-16">
        <div className="mt-3">
          <div className="mt-3">
            <img src={img2} alt="" />
          </div>
          <div>
            <h1 className="text-[#82177b] mt-3 font-semibold text-xl">
              Contact Your Seller
            </h1>
          </div>
          <div>
            <p className="text-[#797978] mt-3">
              If an item hasn’t arrived or isn’t as <br />
              described, go to <span className="font-bold ">My eBay</span>,
              select the
              <br />
              item in your purchase history, and
              <br />
              reach out to your seller.
            </p>
          </div>
        </div>
        <div className="mt-3">
          <div className="mt-3">
            <img src={img3} alt="" />
          </div>
          <div>
            <h1 className="text-[#82177b] mt-3 font-semibold text-xl">
              {" "}
              Not resolved? Let us know.
            </h1>
          </div>
          <div>
            <p className="text-[#797978] mt-3">
              If you’ve talked to your seller and the <br /> issue still isn’t
              resolved after three <br />
              business days, <span className="font-bold ">contact us.</span>
            </p>
          </div>
        </div>
        <div className="mt-3">
          <div className="mt-3">
            <img src={img4} alt="" />
          </div>
          <div>
            <h1 className="text-[#82177b] mt-3 font-semibold text-xl">
              We’ll get your money back. Fast.
            </h1>
          </div>
          <div>
            <p className="text-[#797978] mt-3">
              You can count on hearing from us within <br /> 48 hours.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col lg:flex-row lg:items-center  ">
        <p className="ml-16 mt-3 md:mt-12 text-sm">
          *In order to be protected by eBay Money Back Guarantee certain payment
          methods must be used and all eligibility requirements and deadlines
          must be <br /> met. Category/Item exclusions apply. For full terms and
          conditions, read our eBay Money Back Guarantee policy.
        </p>
        <p className="flex lg:ml-4 mt-6 ml-16 text-[#82187c] text-2xl md:text-lg font-bold">
          Learn More <i class="material-icons">arrow_forward</i>
        </p>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;
