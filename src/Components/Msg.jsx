import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Msg() {
  return (
    <div>
      <div className=" bg-white p-2 rounded-lg cursor-pointer  cardHover ">
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon fontSize="large" color="primary"  />
        </Badge>
      </div>
    </div>
  );
}

export default Msg;
