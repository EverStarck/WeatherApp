import React from "react";
import dayjs from "dayjs";
import styled from "@emotion/styled";

import CardForecast from "./CardForecast";
import { ForecastCardLoader } from "../background/SkeletonLoadears";

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

const Tooltip = styled.div`
  font-size: clamp(1rem, 5vw, 2rem);
  position: relative;
  margin: 16.6px 0 16.6px 10px;
  color: var(--gray-search);
  cursor: pointer;
  .tooltipText {
    width: 250px;
    position: absolute;
    bottom: 120%;
    right: -675%;
    color: var(--main-bg-color);
    border-radius: var(--border-radius);
    padding: 10px 20px;
    margin-left: -60px;
    z-index: 1;
    font-size: clamp(0.5rem, 5vw, 1.2rem);
    text-align: center;
    text-transform: none;
    content: attr(aria-label);
    background-color: var(--black-forecast);
    transition: all 0.5s ease;
    opacity: 0;
    b {
      font-size: clamp(0.5rem, 5vw, 1.4rem);
    }
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--black-forecast) transparent transparent transparent;
    }
  }
  &:hover {
    .tooltipText {
      opacity: 1;
      pointer-events: none;
    }
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
        <Tooltip>
          &#x1F6C8;
          <span className="tooltipText">
            <b> Left:</b> Min temp <b> Rigtht:</b> Max temp <br /> If you see
            the information similar or exactly the same, is because it is
            the minimum and maximum currently observed temperature (within large
            megalopolises and areas)
          </span>
        </Tooltip>
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
