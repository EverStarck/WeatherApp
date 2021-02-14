import React, { useState, useEffect } from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";

// Context
import GetInfoDayProvider from "../../Context/Mobile/GetInfoDayContext";

const MobileApp = ({}) => {
  // Open a detail info of the weather day
  const [mobileDetailInfo, setMobileDetailInfo] = useState(false);
  // Set index
  const [mobileIndex, setMobileIndex] = useState(null);

  return (
    <GetInfoDayProvider mobileIndex={mobileIndex}>
        {/* Start app */}
        <MobileHeader
          setMobileDetailInfo={setMobileDetailInfo}
          setMobileIndex={setMobileIndex}
        />

        <MobileMain
          setMobileDetailInfo={setMobileDetailInfo}
          setMobileIndex={setMobileIndex}
        />

        {/* Click on any button? */}
        <MobileDetailWeather
          mobileDetailInfo={mobileDetailInfo}
          setMobileDetailInfo={setMobileDetailInfo}
          mobileIndex={mobileIndex}
        />
    </GetInfoDayProvider>
  );
};

export default MobileApp;
