import React from "react";

const Button = ({ variant, children, ...rest }) => {
  const buttonStyles =
    variant === "transparent"
      ? "bg-transparent rounded py-2 px-4 border border-black mb-1"
      : variant === "errorText"
      ? "px-4 py-2 rounded bg-transparent text-[#ff0000]  border border-black mb-1 "
      : variant === "searchBox"
      ? "bg-[#3665f3] text-white ml-1 rounded px-4 py-2 mb-1"
      : variant === "redWhite"
      ? "bg-white text-[#E62048] ml-1 rounded-3xl py-3 px-4 font-bold mb-1"
      : variant === "blueSmall"
      ? "bg-[#0e67ff] text-white ml-1 rounded-3xl px-12 py-3  font-bold mb-1"
      : variant === "white"
      ? " bg-white text-[#819ef5] ml-1 rounded-3xl py-2 px-12  border border-[#819ef5] mb-1"
      : variant === "darkCyan"
      ? " bg-[#0053a0] text-white ml-1 rounded-3xl py-2 px-20 mb-1 "
      : variant === "skyBlue"
      ? "bg-[#3498ca] text-white ml-1 rounded-3xl py-2 px-20 mb-1"
      : variant === "whiteLong"
      ? " bg-white text-[#4373f5]  ml-1 rounded-3xl py-2 px-20  border border-[#4373f5]  mb-1"
      : variant === "whiteSmall"
      ? "bg-[#e5e5e5] text-black ml-1 rounded-3xl py-2 px-4 mb-1"
      : variant === "lightGray"
      ? " bg-[#c7c7c7] text-white ml-1 rounded-3xl py-2 px-20 mb-1"
      : variant === "lightNavy"
      ? "bg-[#4267b2] text-white  ml-1 rounded-3xl py-2 px-20 mb-1"
      : variant === "outlinedWhite"
      ? "bg-transparent  text-white ml-1 border border-white py-4 px-12 mb-1 "
      : variant === "whiteDefault"
      ? "bg-white ml-1 border border-[#4979cc] text-[#4979cc] py-4 px-12 mb-1"
      : variant === "outlinedBlue"
      ? "bg-transparent text-[#023c64] ml-1 border border-[#023c64] py-4 px-12 mb-1"
      : variant === "brilliantWhite"
      ? "bg-[#e1e8fd] text-[#5e6065] ml-1 rounded-3xl py-2 px-8 mb-1"
      : variant === "navy"
      ? "bg-[#3c0773] text-white ml-1 py-2 px-8 mb-1"
      : "";

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
