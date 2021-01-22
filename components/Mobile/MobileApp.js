import React, { useState } from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";

const MobileApp = ({
  backgroundPixabay,
  weatherInfo,
  isReady,
  searchValue,
  setSearchValue,
  searchFetchData,
  forecastWeatherInfo,
  isReadyForcast,
}) => {
  const [mobileDetailInfo, setMobileDetailInfo] = useState(false);

  return (
    <>
      {/* Click on any button? */}
      <MobileDetailWeather
        backgroundPixabay={backgroundPixabay}
        weatherInfo={weatherInfo}
        isReady={isReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        mobileDetailInfo={mobileDetailInfo}
        setMobileDetailInfo={setMobileDetailInfo}
      />

      {/* Start app */}
      <MobileHeader
        backgroundPixabay={backgroundPixabay}
        weatherInfo={weatherInfo}
        isReady={isReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        setMobileDetailInfo={setMobileDetailInfo}
      />

      <MobileMain
        isReadyForcast={isReadyForcast}
        forecastWeatherInfo={forecastWeatherInfo}
        setMobileDetailInfo={setMobileDetailInfo}
      />
    </>
  );
};

export default MobileApp;
