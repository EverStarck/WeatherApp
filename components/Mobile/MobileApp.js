import React, { useState, useEffect } from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";
import dayjs from "dayjs";

const MobileApp = ({
  apiData,
  apiIsReady,
  setApiIsReady,
  searchValue,
  setSearchValue,
  searchFetchData,
  datesInfo,
}) => {
  // Open a detail info of the weather day
  const [mobileDetailInfo, setMobileDetailInfo] = useState(false);
  // Set index
  const [mobileIndex, setMobileIndex] = useState(null);

  return (
    <>
      {/* Start app */}
      <MobileHeader
        apiData={apiData}
        apiIsReady={apiIsReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        setMobileDetailInfo={setMobileDetailInfo}
        setApiIsReady={setApiIsReady}
        setMobileIndex={setMobileIndex}
        datesInfo={datesInfo}
      />

      <MobileMain
        apiData={apiData}
        apiIsReady={apiIsReady}
        setMobileDetailInfo={setMobileDetailInfo}
        setMobileIndex={setMobileIndex}
        datesInfo={datesInfo}
      />

      {/* Click on any button? */}
      <MobileDetailWeather
        apiData={apiData}
        apiIsReady={apiIsReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        mobileDetailInfo={mobileDetailInfo}
        setMobileDetailInfo={setMobileDetailInfo}
        mobileIndex={mobileIndex}
        datesInfo={datesInfo}
      />
    </>
  );
};

export default MobileApp;