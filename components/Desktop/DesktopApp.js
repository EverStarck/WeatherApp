import React from "react";

import { Frame80 } from "../../styles/Main";
import ImageBackground from "./background/ImageBackground";
import ForecastFrame from "./forecast/ForecastFrame";

const DesktopApp = ({
  apiIsReady,
  apiData,
  setApiIsReady,
  searchValue,
  setSearchValue,
  searchFetchData,
  datesInfo
}) => {
  return (
    <>
      <ImageBackground
        apiData={apiData}
        apiIsReady={apiIsReady}
        setApiIsReady={setApiIsReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        datesInfo={datesInfo}
      />

      <Frame80>
        <ForecastFrame
          apiData={apiData.forecastWeatherInfo}
          apiIsReady={apiIsReady}
          datesInfo={datesInfo}
        />
      </Frame80>
    </>
  );
};

export default DesktopApp;
