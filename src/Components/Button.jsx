import React from 'react'
import ArrowRightAltTwoToneIcon from "@mui/icons-material/ArrowRightAltTwoTone";

function Button({bgColor}) {
  
  const buttonStyle = {
    backgroundColor: bgColor,

  };

  return (
    <div className='flex '>
      <p style={buttonStyle}  className=' flex items-center cardButton rounded-md py-1 px-2 mb-3 text-xs ' >
      Get started <ArrowRightAltTwoToneIcon fontSize="small"/>
      </p>
    </div>
  )
}

export default Button
