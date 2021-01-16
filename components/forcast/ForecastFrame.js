import React from "react";
import styled from "@emotion/styled";
import CardForecast from "./CardForecast";

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

const ForecastFrame = ({ weatherInfo, isReady }) => {
  return (
    <>
      <TextForecast>
        <h2>Next 5 Days</h2>
      </TextForecast>
      <ForecastFrameLayaout>
        {isReady ? (
          <>
            <CardForecast
              date=""
              minWeather={weatherInfo.main.temp_min}
              maxWeather={weatherInfo.main.temp_max}
            />
            <CardForecast date="" minWeather="" maxWeather="" />
            <CardForecast date="" minWeather="" maxWeather="" />
            <CardForecast date="" minWeather="" maxWeather="" />
            <CardForecast date="" minWeather="" maxWeather="" />
          </>
        ) : (
          <h2>Loading</h2>
        )}
      </ForecastFrameLayaout>
    </>
  );
};

export default ForecastFrame;
