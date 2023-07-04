import React from "react";
import image from "./../../pictures/sell-3.jpg";
import { Button } from "../../Components";
const Lastsec = () => {
  return (
    <div className="mt-6">
      <div
        className="p-6 w-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "100%",
        }}
      >
        <div className="text-4xl font-bold mt-40 ml-20">You've got this.</div>
        <div className="text-4xl font-bold mt-4 ml-20">
          We've got your back.
        </div>
        <div className="w-1/4 ml-20 mt-3">
          <Button variant="blueSmall">List an item </Button>
        </div>
      </div>
    </div>
  );
};

export default Lastsec;
