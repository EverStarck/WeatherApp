import React, { useState } from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";

const MobileApp = ({
  apiData,
  apiIsReady,
  backgroundPixabay,
  weatherInfo,
  isReady,
  searchValue,
  setSearchValue,
  searchFetchData,
}) => {
  const [mobileDetailInfo, setMobileDetailInfo] = useState(false);
  return (
    <>
      {/* Click on any button? */}
      <MobileDetailWeather
        apiData={apiData}
        apiIsReady={apiIsReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        mobileDetailInfo={mobileDetailInfo}
        setMobileDetailInfo={setMobileDetailInfo}
      />

      {/* Start app */}
      <MobileHeader
        apiData={apiData}
        apiIsReady={apiIsReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        setMobileDetailInfo={setMobileDetailInfo}
      />

      <MobileMain
        apiData={apiData}
        apiIsReady={apiIsReady}
        setMobileDetailInfo={setMobileDetailInfo}
      />
    </>
  );
};

export default MobileApp;
