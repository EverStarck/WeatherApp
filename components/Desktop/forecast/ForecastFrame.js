import React from "react";
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
  // The array of the forecast info
  let desktopForecast = apiData.list;
  return (
    <>
      <TextForecast>
        <h2>Next 5 Days</h2>
        <Tooltip
          textTooltip={[
            <b key="forecastTooltip01">Left:</b>,
            "Min temp",
            <b key="forecastTooltip02"> Rigtht:</b>,
            <br key="forecastTooltip03" />,
            "If you see the information similar or exactly the same, is because it is the minimum and maximum currently observed temperature (within large megalopolises and areas)",
          ]}

          //   <b> Left:</b> Min temp <b> Rigtht:</b> Max temp <br /> If you see the
          // information similar or exactly the same, is because it is the minimum
          // and maximum currently observed temperature (within large megalopolises
          // and areas)
        />
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
