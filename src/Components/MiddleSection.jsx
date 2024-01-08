import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import BottomCard from "./BottomCard";

import Slider from "./Slider";

function MiddleSection() {
  const [showSlider, setShowSlider] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth > 1000);
    };

    
    handleResize();


    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <>
      {/* HEADING SECTION  */}

      <div className=" slider-container heading w-full  slider-container flex justify-between">
      {showSlider && <Slider />}
      </div>

      <div className="flex flex-col lg:flex-row lg:px-0  items-center justify-center gap-10">
        <Cards
          title={"Basics"}
          off={"$ 89.99/mo"}
          price={"$ 9.99/mo"}
          user={"upto 25 Users"}
          storage={"upto 25gb storage"}
          mail={"Email Support"}
          feature={"EXPLORE FEATURES"}
          buttonBgColor="#ffe7a8"
          featureBtn="#ffe7a8"
        />

        <Cards
          title={"Standard"}
          off={"$ 189.99/mo"}
          price={"$99.99/mo"}
          user={"upto 50 Users"}
          storage={"upto 60gb storage"}
          mail={"Email + Chat Support"}
          feature={"EXPLORE FEATURES"}
          buttonBgColor="#ff9494"
        />

        <Cards
          title={"Premium"}
          off={"$ 389.99/mo"}
          price={"$ 199.99/mo"}
          user={"upto 75 Users"}
          storage={"upto 100gb storage"}
          mail={"Email + Chat + Whatsapp Support"}
          feature={"EXPLORE FEATURES"}
          buttonBgColor="#e7a2ff"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:px-0  items-center justify-center gap-10 mt-5">
        <BottomCard
          title={"Free Starter"}
          dec={" The quckest way to try Protocols with basic functionalites"}
          user={"upto 75 Users"}
          storage={"upto 100gb storage"}
          mail={"Email Support"}
          about={
            "Basic of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, "
          }
          buttonBgColor="#c6ff8e"
        />
        
        <BottomCard
         title={"Enterprice Plan"}
         dec={"Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for succsus"}
         user={"More than 75 Users"}
         about={"Customization of all other features"}
         buttonBgColor="#b1e7ff"
         />
      </div>
    </>
  );
}

export default MiddleSection;
