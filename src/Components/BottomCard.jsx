import React from "react";
import Button from "./Button";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function BottomCard({ title, dec, user, storage, mail, about, buttonBgColor }) {
  const buttonStyle = {
    backgroundColor: buttonBgColor,
  };

  const isNarrowScreen = window.innerWidth <= 1024;

  const containerStyle = {
    // Apply flex-start alignment for narrow screens
    alignItems: isNarrowScreen ? 'flex-start' : 'center',
  };

  return (
    <div className="flex cardHover  cursor-pointer lg:flex-row sm:flex-col shadow-lg rounded-lg w-full items-center justify-between bg-white px-6 py-3 h-full" style={containerStyle}>
      <div className="flex flex-col gap-2 w-2/3">
        <div className="flex">
          <p className="small-text flex p-1 rounded-lg " style={buttonStyle}>
            Free Forever
          </p>
        </div>
        <h1 className="font-semibold sm:text-2xl lg:text-2xl">{title}</h1>
        <p className="small-text">{dec}</p>

        <p className="mt-3">
          <Button bgColor={buttonBgColor} />
        </p>
      </div>

      <div className="flex flex-col gap-2 w-1/3 py-4">
        <p className="small-text">what you'll get:</p>
        <p className="flex gap-2 small-text font-medium">
          <PersonOutlineOutlinedIcon sx={{ fontSize: 15 }} /> {user}
        </p>
        {storage && (
          <p className="flex gap-2 small-text font-medium">
            <EmailOutlinedIcon sx={{ fontSize: 15 }} /> {storage}
          </p>
        )}
        {mail && (
          <p className="flex gap-2 small-text font-medium">
            <CloudDownloadOutlinedIcon sx={{ fontSize: 15 }} /> {mail}
          </p>
        )}
        <p className="small-text">
          <DoneAllIcon sx={{ fontSize: 15 }} />
          {about}
        </p>
      </div>
    </div>
  );
}

export default BottomCard;
