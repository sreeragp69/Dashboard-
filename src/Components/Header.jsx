import React from "react";
import logo from "../assets/logo.png";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import loginIcon from "../assets/login-icon.png";
function Header() {
  return (
    <header className="flex justify-between items-center pr-20">
      <div className="flex">
        {/* LOGO PART  */}

        <div className="logo  p-4 pl-10  bg-white w-30">
          <img className="w-20" src={logo} alt="Network Error" />
        </div>
        <div className="shape w-52"></div>
      </div>

      {/* USER LOGIN SECTION  */}
      <div className="user-sec flex justify-between gap-2">
        <div className="user cursor-pointer p-2 items-center flex bg-white rounded ">
          <img className="w-7 mr-1  h-7 " src={loginIcon} alt="Network Error" />
          <span>XYZ EnterPrises.Ltd</span>
        </div>
        <div className="user-btn cursor-pointer p-2  bg-white rounded shadow-md">
          <KeyboardArrowDownRoundedIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
