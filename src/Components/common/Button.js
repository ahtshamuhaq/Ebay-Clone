import React from "react";

const Button = ({ variant, children, ...rest }) => {
  const buttonStyles =
    variant === "transparent"
      ? "bg-transparent rounded py-2 px-4 border border-black mb-1 flex justify-between items-center mt-2 transition-colors duration-300"
      : variant === "errorText"
      ? " flex justify-between px-4 py-2 rounded bg-transparent text-[#ff0000]  border border-black items-center mt-2 mb-1 transition-colors duration-300 "
      : variant === "searchBox"
      ? "bg-[#3665f3] text-white ml-1 w-full transition-colors duration-300 rounded px-20 py-3 mb-1"
      : variant === "redWhite"
      ? "bg-white text-[#E62048] ml-1 w-full transition-colors  duration-300 rounded-3xl py-3 px-4 font-bold mb-1"
      : variant === "blueSmall"
      ? "bg-[#0e67ff] text-white ml-1 w-full transition-colors duration-300 rounded-3xl px-2 py-3  font-bold mb-1"
      : variant === "blueLong"
      ? "bg-[#0e67ff] text-white ml-1 w-full w-fit transition-colors duration-300  px-2 flex py-3  font-bold mb-1"
      : variant === "white"
      ? " bg-white text-[#819ef5] ml-1 w-full transition-colors duration-300 rounded-3xl py-2 px-12  border border-[#819ef5] mb-1"
      : variant === "darkCyan"
      ? " bg-[#0053a0] text-white ml-1 w-full transition-colors duration-300 rounded-3xl py-2 px-4 mb-1 "
      : variant === "skyBlue"
      ? "bg-[#3498ca] text-white ml-1 w-full transition-colors duration-300 rounded-3xl py-2 px-4 mb-1"
      : variant === "whiteLong"
      ? " bg-white text-[#4373f5]  ml-1 w-full transition-colors duration-300 rounded-3xl py-2 px-4 w-full border border-[#4373f5]  mb-1"
      : variant === "whiteSmall"
      ? "bg-[#e5e5e5] text-black ml-1 w-full transition-colors duration-300 rounded-3xl  py-2 px-4 mb-1"
      : variant === "lightGray"
      ? " bg-[#c7c7c7] text-white ml-1 w-full transition-colors duration-300 rounded-3xl py-2 px-2 mb-1 cursor-no-drop"
      : variant === "lightNavy"
      ? "bg-[#4267b2] text-white  ml-1 w-full transition-colors duration-300 rounded-3xl py-2 px-20 mb-1"
      : variant === "outlinedWhite"
      ? "bg-transparent  text-white ml-1 w-full transition-colors duration-300 border border-white py-4 px-12 mb-1 "
      : variant === "whiteDefault"
      ? "bg-white ml-1 w-full transition-colors duration-300 border border-[#4979cc] text-[#4979cc] py-4 px-12 mb-1"
      : variant === "outlinedBlue"
      ? "bg-transparent text-[#2d6fc5] ml-1 w-full transition-colors rounded-full duration-300 border border-[#2d6fc5] py-2 px-2 mb-1"
      : variant === "brilliantWhite"
      ? "bg-[#e1e8fd] text-[#5e6065] ml-1 w-full transition-colors duration-300 rounded-3xl py-2 px-8 mb-1"
      : variant === "navy"
      ? "bg-[#3c0773] text-white ml-1 w-full transition-colors flex items-center duration-300 py-2 px-8 mb-1"
      : variant === "transBlack"
      ? "bg-transparent  text-black ml-1 w-full flex items-center rounded-full transition-colors duration-300 border font-bold border-black py-2 px-2 mb-1 "
      : variant === "darkCyans"
      ? " bg-[#0053a0] text-white flex items-center  ml-1 w-full transition-colors duration-300 rounded-3xl py-2 px-2 mb-1 "
      : variant === "outlinedBlack"
      ? "bg-transparent  text-[#000000] ml-1 w-full flex items-center rounded-full transition-colors duration-300 border font-semibold border-black py-2 px-2 mb-1 "
      : variant === "whiteBlack"
      ? "bg-white  text-[#000000] ml-1 w-full flex items-center rounded-full transition-colors duration-300 border font-semibold border-black py-2 px-2 mb-1 "
      : variant === "";
  const hoverStyles =
    variant === "transparent"
      ? "hover:bg-black hover:text-[#e8f377]"
      : variant === "errorText"
      ? "hover:bg-black hover:text-[#c8e63c]"
      : variant === "darkCyans"
      ? "hover:bg-[#193da8] "
      : variant === "transBlack"
      ? "hover:bg-[#c7c7c7] "
      : variant === "outlinedBlack"
      ? "hover:bg-[#000000] hover:text-white hover:underline"
      : variant === "whiteBlack"
      ? "hover:text-[#ffffff] hover:bg-black "
      : "";

  return (
    <button className={`${buttonStyles} ${hoverStyles}`} {...rest} {...rest}>
      {children}
    </button>
  );
};

export default Button;
