import React from "react";

import { Frame80 } from "../../styles/Main";
import ImageBackground from "./background/ImageBackground";
import ForecastFrame from "./forecast/ForecastFrame";

const DesktopApp = ({
    searchValue,
    setSearchValue,
    searchFetchData,
    backgroundPixabay,
    weatherInfo,
    isReady,
    pixabayIsReady,
    forecastWeatherInfo,
    isReadyForcast,
}) => {
  return (
    <>
      <ImageBackground
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        backgroundPixabay={backgroundPixabay}
        weatherInfo={weatherInfo}
        isReady={isReady}
        pixabayIsReady={pixabayIsReady}
      />

      <Frame80>
        <ForecastFrame
          forecastWeatherInfo={forecastWeatherInfo.list}
          isReadyForcast={isReadyForcast}
        />
      </Frame80>
    </>
  );
};

export default DesktopApp;
