import React from "react";
import styled from "@emotion/styled";

import CardInfo from "../CardInfo";
import { AsideCardLoader } from "../../SkeletonLoadears";

const AsideCardInfoStyles = styled.aside`
  /* Height overflow for tvs */
  @media only screen and (max-height: 889px) {
    margin-top: 150px;
  }
`;
// Sekeleton Loader
const AsideLoaderStyles = styled.section`
  display: flex;
  flex-direction: column;
  /* Height overflow for tvs */
  @media only screen and (max-height: 889px) {
    margin-top: 150px;
  }
`;

const AsideCardInfo = ({ apiIsReady, apiData }) => {
  return (
    <AsideCardInfoStyles>

      {/* If the openweathermap is loaded, show all the cards */}
      {apiIsReady.dayWeather ? (
        <>
          <CardInfo
            apiIsReady={apiIsReady}
            nameWeather="Feels like"
            numberWeather={apiData.dayWeatherInfo.main.feels_like}
            descriptionWeather="This temperature parameter is the human perception of weather"
            marginTop="-10px"
          />
          <CardInfo
            apiIsReady={apiIsReady}
            nameWeather="Humidity"
            numberWeather={apiData.dayWeatherInfo.main.humidity}
            descriptionWeather="The amount of water vapor in the air"
          />
          <CardInfo
            apiIsReady={apiIsReady}
            nameWeather="Pressure"
            numberWeather={apiData.dayWeatherInfo.main.pressure}
            descriptionWeather="Force exerted on a surface by the air above it"
          />
          <CardInfo
            apiIsReady={apiIsReady}
            nameWeather="Wind Speed"
            numberWeather={apiData.dayWeatherInfo.wind.speed}
            descriptionWeather="Is a fundamental atmospheric quantity caused by air moving from high to low pressure"
          />
        </>
      ) : (
        // Skeleton loader
        <AsideLoaderStyles>
          <AsideCardLoader />
          <AsideCardLoader />
          <AsideCardLoader />
          <AsideCardLoader />
        </AsideLoaderStyles>
      )}
    </AsideCardInfoStyles>
  );
};

export default AsideCardInfo;
