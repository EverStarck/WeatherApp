import React from "react";
import styled from "@emotion/styled";
import CardForecast from "./CardForecast";
import { ForecastCardLoader } from "../background/SkeletonLoadears";
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
    font-size: clamp(1.6rem, 3vw, 2rem);
    color: var(--main-color);
  }
`;

const ForecastFrame = ({ apiIsReady, apiData }) => {
  const dateForecast = (add) => {
    return dayjs().add(add, "days").format("ddd, DD MMM"); //tomorrow //Sat, 16 Jan
  };

  return (
    <>
      <TextForecast>
        <h2>Next 5 Days</h2>
      </TextForecast>
      <ForecastFrameLayaout>
        {apiIsReady.forecastWeather ? (
          <>
            <CardForecast
              date="Tomorrow"
              minWeather={apiData.list[3].main.temp_min}
              maxWeather={apiData.list[3].main.temp_max}
              icon={apiData.list[3].weather[0].icon}
              iconDescription={apiData.list[3].weather[0].description}
            />
            <CardForecast
              date={dateForecast(1)}
              minWeather={apiData.list[11].main.temp_min}
              maxWeather={apiData.list[11].main.temp_max}
              icon={apiData.list[11].weather[0].icon}
              iconDescription={apiData.list[11].weather[0].description}
            />
            <CardForecast
              date={dateForecast(2)}
              minWeather={apiData.list[19].main.temp_min}
              maxWeather={apiData.list[19].main.temp_max}
              icon={apiData.list[19].weather[0].icon}
              iconDescription={apiData.list[19].weather[0].description}
            />
            <CardForecast
              date={dateForecast(3)}
              minWeather={apiData.list[27].main.temp_min}
              maxWeather={apiData.list[27].main.temp_max}
              icon={apiData.list[27].weather[0].icon}
              iconDescription={apiData.list[27].weather[0].description}
            />
            <CardForecast
              date={dateForecast(4)}
              minWeather={apiData.list[35].main.temp_min}
              maxWeather={apiData.list[35].main.temp_max}
              icon={apiData.list[35].weather[0].icon}
              iconDescription={apiData.list[35].weather[0].description}
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
