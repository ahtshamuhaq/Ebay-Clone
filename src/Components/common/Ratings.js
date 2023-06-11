import { Rating, Typography } from "@mui/material";
import React, { useState } from "react";

const Ratings = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex flex-wrap items-center ">
      <div className="flex shadow-lg w-[25%] flex-col justify-center ml-5 h-[123px]">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">No ratings or reviews yet</Typography>
      </div>
      <div className=" h-[123px] shadow-2xl w-[70%] flex items-centers">
        <p className="text-gray-500 text-3xl">
          Be the first to{" "}
          <span className="text-[#1e69cf] underline">write a review.</span>
        </p>
      </div>
    </div>
  );
};

export default Ratings;
