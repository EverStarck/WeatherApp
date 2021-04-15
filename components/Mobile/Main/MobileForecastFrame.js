import { Fragment, useContext } from "react";

import MobileCardForecast from "./MobileCardForecast";
import { MobileForecasLoader } from "../MobileSkeletonLoader";

// Context
import { ApiDataContext } from "../../../Context/ApiDataContext";
import { DaysInfoContext } from "../../../Context/DaysInfoContext";
import { MobileDetailAndIndexContext } from "../../../Context/Mobile/MobileDetailAndIndexContext";

const MobileForecastFrame = () => {
  // Context Data
  const { apiData, apiIsReady } = useContext(ApiDataContext);
  const { datesInfo } = useContext(DaysInfoContext);
  const { setMobileIndex, setMobileDetailInfo } = useContext(
    MobileDetailAndIndexContext
  );

  // The array of the forecast info
  let mobileForecast = apiData.forecastWeatherInfo.list;
  return (
    <>
      {apiIsReady.forecastWeather ? (
        <>
          {/* With slice remove the first array item, the first day */}
          {mobileForecast.slice(1).map((data, index) => {
            return (
              <Fragment key={data.dt}>
                {Object.keys(datesInfo).length === 0 ? (
                  <p> Loading...</p>
                ) : (
                  <MobileCardForecast
                    data={data}
                    // key={data.dt}
                    index={index + 1}
                    mobileDateCardForecast={datesInfo[index].dateInfo.letter}
                    mobileDaysForecast={datesInfo[index].dateInfo.number}
                    setMobileDetailInfo={setMobileDetailInfo}
                    setMobileIndex={setMobileIndex}
                    ariaLabel={datesInfo[index].dateInfo.letter}
                  />
                )}
              </Fragment>
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
