import React from "react";

import { Frame80 } from "../../styles/Main";
import ImageBackground from "./background/ImageBackground";
import ForecastFrame from "./forecast/ForecastFrame";

const DesktopApp = ({
  apiIsReady,
  apiData,
  searchValue,
  setSearchValue,
  searchFetchData,
}) => {
  return (
    <>
      <ImageBackground
        apiData={apiData}
        apiIsReady={apiIsReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
      />

      <Frame80>
        <ForecastFrame apiData={apiData.forecastWeatherInfo} apiIsReady={apiIsReady} />
      </Frame80>
    </>
  );
};

export default DesktopApp;
