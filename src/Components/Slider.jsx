import React from "react";

function Slider() {
  return (
    <>
      <div className="h-text ">
        <p>Choose a plan that's just right for you !</p>
      </div>

      <div className="plan-sec slider  flex  p-1 mt-7">
        <div className="monthly">
          <span className="text-xs font-normal">Monthly</span>
        </div>
        <div className="Annually">
          <span className="text-xs font-normal">Annually</span>
        </div>
      </div>
    </>
  );
}

export default Slider;
