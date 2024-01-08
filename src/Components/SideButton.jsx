import React from 'react'


function SideButton({dashboard,title}) {
  return (
    <>
      <div className="cursor-pointer btn-hover  flex items-center rounded-r-lg  border m-3 mb-5 p-2">
          <div className="btn-img w-10">
            <img className="w-5" src={dashboard} alt="Netwok Error" />
          </div>
          <span className="btn-text">{title}</span>
        </div>
    </>
  )
}

export default SideButton
