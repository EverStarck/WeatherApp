import React from "react";
import dayjs from "dayjs";

import MobileCardForecast from "./MobileCardForecast";
import { MobileForecasLoader } from "../MobileSkeletonLoader";

const MobileForecastFrame = ({ apiIsReady, apiData, setMobileDetailInfo }) => {
  const mobileDaysForecast = (add) => {
    return {
      letter: dayjs().add(add, "days").format("ddd, DD MMM"),
      number: dayjs().add(add, "days").format("MM/DD/YYYY"),
    };
  };
  return (
    <>
      {apiIsReady.forecastWeather ? (
        <>
          <MobileCardForecast
            mobileDateCardForecast="Tomorrow"
            mobileDaysForecast={mobileDaysForecast(0)}
            mobileTempForecast={apiData.forecastWeatherInfo.list[3].main.temp}
            mobileIcon={apiData.forecastWeatherInfo.list[0].weather[0].icon}
            mobileDescription={
              apiData.forecastWeatherInfo.list[0].weather[0].description
            }
            setMobileDetailInfo={setMobileDetailInfo}
          />
          <MobileCardForecast
            mobileDaysForecast={mobileDaysForecast(1)}
            mobileTempForecast={apiData.forecastWeatherInfo.list[11].main.temp}
            mobileIcon={apiData.forecastWeatherInfo.list[11].weather[0].icon}
            mobileDescriptio={
              apiData.forecastWeatherInfo.list[11].weather[0].description
            }
            setMobileDetailInfo={setMobileDetailInfo}
          />
          <MobileCardForecast
            mobileDaysForecast={mobileDaysForecast(2)}
            mobileTempForecast={apiData.forecastWeatherInfo.list[19].main.temp}
            mobileIcon={apiData.forecastWeatherInfo.list[19].weather[0].icon}
            mobileDescriptio={
              apiData.forecastWeatherInfo.list[19].weather[0].description
            }
            setMobileDetailInfo={setMobileDetailInfo}
          />
          <MobileCardForecast
            mobileDaysForecast={mobileDaysForecast(3)}
            mobileTempForecast={apiData.forecastWeatherInfo.list[27].main.temp}
            mobileIcon={apiData.forecastWeatherInfo.list[27].weather[0].icon}
            mobileDescriptio={
              apiData.forecastWeatherInfo.list[27].weather[0].description
            }
            setMobileDetailInfo={setMobileDetailInfo}
          />
          <MobileCardForecast
            mobileDaysForecast={mobileDaysForecast(4)}
            mobileTempForecast={apiData.forecastWeatherInfo.list[35].main.temp}
            mobileIcon={apiData.forecastWeatherInfo.list[27].weather[0].icon}
            mobileDescriptio={
              apiData.forecastWeatherInfo.list[27].weather[0].description
            }
            setMobileDetailInfo={setMobileDetailInfo}
          />
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
