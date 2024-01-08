import React, { useState } from "react";
import profile from "../assets/profile.jpg";

import dashboard from "../assets/dashboard.png";
import perks from "../assets/perk.png";
import addons from "../assets/addons.png";
import faq from "../assets/faq.png";
import support from "../assets/support.png";

import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import SideButton from "./SideButton";
import Profile from "./Profile";

function SideBar({ open }) {
  return (
    <div>
      {/* PROFILE PART  */}
      <div
        className={`duration-300 profile flex flex-col items-center justify-center shadow-md mb-5 relative ${
          open ? "visible" : "hidden"
        }`}
      >
        <Profile profile={profile} />
      </div>

      {/* BUTTONS  */}

      <div className="btns w-full">
        <SideButton
          dashboard={dashboard}
          title={"Dashboard"}
          hideTitle={!open}
        />
        <SideButton dashboard={perks} title={"perks"} hideTitle={!open} />
        <SideButton dashboard={addons} title={"Addons"} hideTitle={!open} />
        <SideButton dashboard={faq} title={"FAQ"} hideTitle={!open} />
        <SideButton dashboard={support} title={"Support"} hideTitle={!open} />
      </div>

      <div
        className={`absolute rounded-full flex items-center justify-center w-full bottom-0 mb-4 ${
          open ? "visible" : "hidden"
        }`}
      >
        <p className="logout cursor-pointer rounded-full p-2">
          Logout <PowerSettingsNewRoundedIcon />
        </p>
      </div>
    </div>
  );
}

export default SideBar;
