import React, { useState, useContext } from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";

const MobileApp = () => {
  // Open a detail info of the weather day
  // const [mobileDetailInfo, setMobileDetailInfo] = useState(false);
  // Set index
  // const [mobileIndex, setMobileIndex] = useState(null);

  return (
    <>
      {/* Start app */}
      <MobileHeader />

      <MobileMain />

      {/* Click on any button? */}
      <MobileDetailWeather />
    </>
  );
};

export default MobileApp;
