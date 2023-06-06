import React, { useState } from "react";

const HomeNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const listItems = props.listItems;
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openNotifications = () => {
    setIsNotificationOpen(true);
  };
  const closeNotifications = () => {
    setIsNotificationOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="w-full sm:container mx-auto py-2">
      <div className="flex justify-between items-center">
        <div className="hidden sm:flex">
          <span>hi!</span>
          <span>
            <a className="ml-1 text-[#3880df] underline" href="/">
              Sign in
            </a>
          </span>
          <span className="ml-1"> or</span>
          <span>
            <a className="text-[#3880df] underline ml-1" href="/">
              register
            </a>
          </span>
          <span>
            <a className="text-black ml-5 hover:underline" href="/">
              Daily Deals
            </a>
          </span>
          <span>
            <a className="text-black ml-5 hover:underline" href="/">
              Help & Contact
            </a>
          </span>
        </div>

        <div className="flex w-20 h-10 sm:hidden">
          <img src={props.lg} alt="" />
        </div>

        <div className="flex flex-wrap sm:hidden">
          <i
            className="fa fa-bars"
            onClick={toggleDropdown}
            style={{ cursor: "pointer" }}
          ></i>
          {isOpen && (
            <div className="absolute z-10 text-gray-700 pt-1 bg-white rounded shadow-xl pr-24">
              <span className="hover:text-[#3880df]">Ship to</span>
              <span className="ml-5 hover:underline">Sell</span>
              <div className="ml-5">
                Watchlist <i className="fa fa-angle-down"></i>
              </div>
              <div className="relative ml-5">
                Myebay <i className="fa fa-angle-down"></i>
                <ul>
                  {listItems.map((item, index) => (
                    <li key={index}>
                      <a
                        className={
                          index === 0
                            ? "rounded-t"
                            : index === listItems.length - 1
                            ? "rounded-b"
                            : ""
                        }
                        href="/"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="relative ml-5"
                onMouseEnter={openNotifications}
                onMouseLeave={closeNotifications}
              >
                <i className="material-icons mt-1" style={{ fontSize: "23px" }}>
                  notifications_none
                </i>
                {isNotificationOpen && (
                  <div>
                    <div className="absolute z-10 w-[355px] left-[-305px] mt-[-1px] min-w-[100px] text-gray-700 shadow-xl bg-white">
                      <div className="leading-6 px-[128px] py-[86px]">
                        <span className="text-center">
                          <span href="/">
                            Please{" "}
                            <span>
                              <a className="text-[#3880df] underline" href="/">
                                Sign in
                              </a>
                            </span>{" "}
                            to view notifications.
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative ml-5"
                onMouseEnter={openCart}
                onMouseLeave={closeCart}
              >
                <i
                  className="fa fa-shopping-cart mt-1"
                  style={{ fontSize: "23px" }}
                ></i>
                {isCartOpen && (
                  <div>
                    <div className="absolute z-10 w-[355px] left-[-305px] mt-[-1px] min-w-[100px] text-gray-700 shadow-xl bg-white">
                      <div className="leading-6 px-12 py-12">
                        <span className="text-start text-2xl">
                          Your cart is empty <br />
                          <span>Time to start shopping!</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
