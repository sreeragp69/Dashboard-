import React, { useState } from "react";
import MiddleSection from "./MiddleSection";
import SideBar from "./SideBar";
import Msg from "./Msg";
import Plus from "./Plus";
import MenuIcon from '@mui/icons-material/Menu';

function Home() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`flex w-full bg-white justify-between ${open ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className={`sidebar relative ${open ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className={`flex items-center cursor-pointer justify-center px-2 pt-2 w-full`} onClick={toggleSidebar}>
          <MenuIcon />
        </div>
        <SideBar open={open}  />
      </div>
      <div className="middle px-14 pb-6 pt-6">
        <MiddleSection />
      </div>
      <div className="sidebar-right relative">
        <Msg />
        <Plus />
      </div>
    </div>
  );
}

export default Home;
