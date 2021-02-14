import React, { useContext } from "react";

import MobileCardForecast from "./MobileCardForecast";
import { MobileForecasLoader } from "../MobileSkeletonLoader";

// Context
import { ApiDataContext } from "../../../Context/ApiDataContext";
import { DaysInfoContext } from "../../../Context/DaysInfoContext";

const MobileForecastFrame = ({ setMobileDetailInfo, setMobileIndex }) => {
  // Context Data
  const { apiData, apiIsReady } = useContext(ApiDataContext);
  const { datesInfo } = useContext(DaysInfoContext);

  // The array of the forecast info
  let mobileForecast = apiData.forecastWeatherInfo.list;
  return (
    <>
      {apiIsReady.forecastWeather ? (
        <>
          {/* With slice remove the first array item, the first day */}
          {mobileForecast.slice(1).map((data, index) => {
            return (
              <MobileCardForecast
                data={data}
                key={data.dt}
                index={index + 1}
                mobileDateCardForecast={datesInfo[index].dateInfo.letter}
                mobileDaysForecast={datesInfo[index].dateInfo.number}
                setMobileDetailInfo={setMobileDetailInfo}
                setMobileIndex={setMobileIndex}
                ariaLabel={datesInfo[index].dateInfo.letter}
              />
            );
          })}
        </>
      ) : (
        // Skeleton Loader
        <>
          <MobileForecasLoader />
          <MobileForecasLoader />
          <MobileForecasLoader />
          <MobileForecasLoader />
          <MobileForecasLoader />
        </>
      )}
    </>
  );
};

export default MobileForecastFrame;
