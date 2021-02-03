import React from "react";
import dayjs from "dayjs";
import styled from "@emotion/styled";

import CardForecast from "./CardForecast";
import { ForecastCardLoader } from "../SkeletonLoadears";
import Tooltip from "../Tooltip";

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

const ForecastFrame = ({ apiIsReady, apiData, datesInfo }) => {
  const dateForecast = (add) => {
    return dayjs().add(add, "days").format("ddd, DD MMM"); //tomorrow //Sat, 16 Jan
  };
  // The array of the forecast info
  let desktopForecast = apiData.list;
  return (
    <>
      <TextForecast>
        <h2>Next 5 Days</h2>
        <Tooltip />
      </TextForecast>
      <ForecastFrameLayaout>
        {apiIsReady.forecastWeather ? (
          <>
            {desktopForecast.slice(1).map((data, index) => {
              return (
                <CardForecast
                  date={datesInfo[index].dateInfo.letter}
                  minWeather={data.main.temp_min}
                  maxWeather={data.main.temp_max}
                  icon={data.weather[0].icon}
                  iconDescription={data.weather[0].description}
                  key={data.dt}
                />
              );
            })}
          </>
        ) : (
          // Skeleton Loader
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
