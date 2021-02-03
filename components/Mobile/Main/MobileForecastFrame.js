import React from "react";

import MobileCardForecast from "./MobileCardForecast";
import { MobileForecasLoader } from "../MobileSkeletonLoader";

const MobileForecastFrame = ({
  apiIsReady,
  apiData,
  setMobileDetailInfo,
  setMobileIndex,
  datesInfo,
}) => {
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
