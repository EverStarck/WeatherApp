import React from "react";
import styled from "@emotion/styled";
import CardForecast from "./CardForecast";
import {ForecastCardLoader} from '../background/SkeletonLoadears';
import dayjs from "dayjs";

const TextForecast = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    font-size: clamp(1.8rem, 3vw, 2rem);
    font-weight: 500;
    color: var(--main-color);
  }
`;

const ForecastFrameLayaout = styled.section`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 2rem;
    color: #000;
  }
`;

const ForecastFrame = ({ isReadyForcast, forecastWeatherInfo }) => {
  const dateForecast = (add) => {
    return dayjs().add(add, "days").format("ddd, DD MMM"); //tomorrow //Sat, 16 Jan
  };

  return (
    <>
      <TextForecast>
        <h2>Next 5 Days</h2>
      </TextForecast>
      <ForecastFrameLayaout>
        {isReadyForcast ? (
          <>
            <CardForecast
              date="Tomorrow"
              minWeather={forecastWeatherInfo[3].main.temp_min}
              maxWeather={forecastWeatherInfo[3].main.temp_max}
              icon={forecastWeatherInfo[3].weather[0].icon}
              iconDescription={forecastWeatherInfo[3].weather[0].description}
            />
            <CardForecast
              date={dateForecast(1)}
              minWeather={forecastWeatherInfo[11].main.temp_min}
              maxWeather={forecastWeatherInfo[11].main.temp_max}
              icon={forecastWeatherInfo[11].weather[0].icon}
              iconDescription={forecastWeatherInfo[11].weather[0].description}
            />
            <CardForecast
              date={dateForecast(2)}
              minWeather={forecastWeatherInfo[19].main.temp_min}
              maxWeather={forecastWeatherInfo[19].main.temp_max}
              icon={forecastWeatherInfo[19].weather[0].icon}
              iconDescription={forecastWeatherInfo[19].weather[0].description}
            />
            <CardForecast
              date={dateForecast(3)}
              minWeather={forecastWeatherInfo[27].main.temp_min}
              maxWeather={forecastWeatherInfo[27].main.temp_max}
              icon={forecastWeatherInfo[27].weather[0].icon}
              iconDescription={forecastWeatherInfo[27].weather[0].description}
            />
            <CardForecast
              date={dateForecast(4)}
              minWeather={forecastWeatherInfo[35].main.temp_min}
              maxWeather={forecastWeatherInfo[35].main.temp_max}
              icon={forecastWeatherInfo[35].weather[0].icon}
              iconDescription={forecastWeatherInfo[35].weather[0].description}
            />
          </>
        ) : (
          <>
            <ForecastCardLoader />
            <ForecastCardLoader />
            <ForecastCardLoader />
            <ForecastCardLoader />
            <ForecastCardLoader />
          </>
        )}
      </ForecastFrameLayaout>
    </>
  );
};

export default ForecastFrame;
