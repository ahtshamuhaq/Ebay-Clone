import React from "react";

const Buttons = ({ children, style }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default Buttons;
