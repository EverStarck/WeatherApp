import React, { useState, useEffect } from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";
import dayjs from "dayjs";
import GetInfoDayProvider from "../../Context/Mobile/GetInfoDayContext";

const MobileApp = ({
  // apiData,
  // apiIsReady,
  // setApiIsReady,
  // searchValue,
  // setSearchValue,
  // searchFetchData,
  // datesInfo,
}) => {
  // Open a detail info of the weather day
  const [mobileDetailInfo, setMobileDetailInfo] = useState(false);
  // Set index
  const [mobileIndex, setMobileIndex] = useState(null);

  return (
    <>
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
    </>
  );
};

export default MobileApp;