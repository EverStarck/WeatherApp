import React from "react";
import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";

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
  return (
    <>
      <MobileHeader
        backgroundPixabay={backgroundPixabay}
        weatherInfo={weatherInfo}
        isReady={isReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
      />

      <MobileMain
        isReadyForcast={isReadyForcast}
        forecastWeatherInfo={forecastWeatherInfo}
      />
    </>
  );
};

export default MobileApp;
