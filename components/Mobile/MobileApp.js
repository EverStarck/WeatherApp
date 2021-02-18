import React from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";

const MobileApp = () => {
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
