import React, { useState } from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";

const MobileApp = ({
  apiData,
  apiIsReady,
  setApiIsReady,
  searchValue,
  setSearchValue,
  searchFetchData,
}) => {
  // Open a detail info of the weather day
  const [mobileDetailInfo, setMobileDetailInfo] = useState(false);
  // Test
  const [idForecastButton, setIdForecastButton] = useState({
    id1: { active: false },
    id2: { active: false },
    id3: { active: false },
    id4: { active: false },
    id5: { active: false },
    id6: { active: false },
  });
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
        setIdForecastButton={setIdForecastButton}
        idForecastButton={idForecastButton}
        setApiIsReady={setApiIsReady}
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
