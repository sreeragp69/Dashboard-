import React from 'react'
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function Profile({profile}) {
  return (
    <>
    <div className="profile-img user w-20 m-5 rounded-full">
          <img className=" rounded-full" src={profile} alt="Network error" />
        </div>

        <h5 className="font-bold cursor-pointer">
          Ram Mohan <KeyboardArrowRightRoundedIcon className="text-blue" />{" "}
        </h5>
        <p className="text-smm">rammohan2@gmail.com</p>
      
    </>
  )
}

export default Profile
