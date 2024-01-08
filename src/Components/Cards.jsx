import React from "react";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import Button from "./Button";


function Cards({ title, off, price, user, storage, mail, feature,buttonBgColor }) {
  const buttonStyle = {
    color: buttonBgColor,

  };

  return (
    <div className="flex flex-col cardHover cursor-pointer shadow-lg rounded-lg w-full items-start  justify-center bg-white px-6 py-3">
      <div className="flex flex-col gap-2 relative card-line w-full">
        <h1 className="font-medium sm:text-xl lg:text-2xl">{title}</h1>
        <p className="small-text">{off}</p>
        <p className="text-xl opacity-70">{price}</p>
        <p>
         <Button bgColor={buttonBgColor}/>
        </p>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <p className="text-xs">what you'll get:</p>
        <p className="flex gap-2 small-text font-medium">
          <PersonOutlineOutlinedIcon  sx={{ fontSize: 15 }} /> {user}
        </p>
        <p className="flex gap-2 small-text font-medium">
          <CloudDownloadOutlinedIcon sx={{ fontSize: 15 }} /> {storage}
        </p>
        <p className="flex gap-2 small-text font-medium">
          <EmailOutlinedIcon sx={{ fontSize: 15 }} /> {mail}
          {/* {color} */}
        </p>
        <p className="underline font-medium uppercase text-xs  px-7"  >
          {feature}
          <ArrowRightRoundedIcon fontSize="large"   style={buttonStyle} />
        </p>
      </div>
    </div>
  );
}

export default Cards;
