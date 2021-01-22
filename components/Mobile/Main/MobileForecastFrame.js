import React from "react";
import MobileCardForecast from "./MobileCardForecast";
import dayjs from "dayjs";

const MobileForecastFrame = ({
  setMobileDetailInfo,
  isReadyForcast,
  forecastWeatherInfo,
}) => {
  const mobileDaysForecast = (add) => {
    return {
      letter: dayjs().add(add, "days").format("ddd, DD MMM"),
      number: dayjs().add(add, "days").format("MM/DD/YYYY"),
    };
  };
  return (
    <>
      {isReadyForcast ? (
        <>
          <MobileCardForecast
            setMobileDetailInfo={setMobileDetailInfo}
            mobileDateCardForecast="Tomorrow"
            mobileDaysForecast={mobileDaysForecast(0)}
            forecastWeatherInfo={forecastWeatherInfo}
            mobileTempForecast={forecastWeatherInfo.list[3].main.temp}
            mobileIcon={forecastWeatherInfo.list[0].weather[0].icon}
            mobileDescription={
              forecastWeatherInfo.list[0].weather[0].description
            }
          />
          <MobileCardForecast
            mobileDaysForecast={mobileDaysForecast(1)}
            forecastWeatherInfo={forecastWeatherInfo}
            mobileTempForecast={forecastWeatherInfo.list[11].main.temp}
            mobileIcon={forecastWeatherInfo.list[11].weather[0].icon}
            mobileDescriptio={
              forecastWeatherInfo.list[11].weather[0].description
            }
            setMobileDetailInfo={setMobileDetailInfo}
          />
          <MobileCardForecast
            mobileDaysForecast={mobileDaysForecast(2)}
            forecastWeatherInfo={forecastWeatherInfo}
            mobileTempForecast={forecastWeatherInfo.list[19].main.temp}
            mobileIcon={forecastWeatherInfo.list[19].weather[0].icon}
            mobileDescriptio={
              forecastWeatherInfo.list[19].weather[0].description
            }
            setMobileDetailInfo={setMobileDetailInfo}
          />
          <MobileCardForecast
            mobileDaysForecast={mobileDaysForecast(3)}
            forecastWeatherInfo={forecastWeatherInfo}
            mobileTempForecast={forecastWeatherInfo.list[27].main.temp}
            mobileIcon={forecastWeatherInfo.list[27].weather[0].icon}
            mobileDescriptio={
              forecastWeatherInfo.list[27].weather[0].description
            }
          />
          <MobileCardForecast
            mobileDaysForecast={mobileDaysForecast(4)}
            forecastWeatherInfo={forecastWeatherInfo}
            mobileTempForecast={forecastWeatherInfo.list[35].main.temp}
            mobileIcon={forecastWeatherInfo.list[27].weather[0].icon}
            mobileDescriptio={
              forecastWeatherInfo.list[27].weather[0].description
            }
            setMobileDetailInfo={setMobileDetailInfo}
          />
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default MobileForecastFrame;
