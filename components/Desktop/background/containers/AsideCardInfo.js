import React from "react";
import CardInfo from "../CardInfo";
import { AsideCardLoader } from "../SkeletonLoadears";
import styled from "@emotion/styled";

const AsideCardInfoStyles = styled.aside`
  /* Height overflow for tvs */
  @media only screen and (max-height: 889px) {
    margin-top: 150px;
  }
`;

const AsideLoaderStyles = styled.aside`
  display: flex;
  flex-direction: column;
  /* Height overflow for tvs */
  @media only screen and (max-height: 889px) {
    margin-top: 150px;
  }
`;

const AsideCardInfo = ({ isReady, weatherInfo }) => {
  return (
    <AsideCardInfoStyles>
      {isReady ? (
        <>
          <CardInfo
            isReady={isReady}
            nameWeather="Feels like"
            numberWeather={weatherInfo.main.feels_like}
            descriptionWeather="This temperature parameter is the human perception of weather"
            marginTop="-10px"
          />
          <CardInfo
            isReady={isReady}
            nameWeather="Humidity"
            numberWeather={weatherInfo.main.humidity}
            descriptionWeather="The amount of water vapor in the air"
          />
          <CardInfo
            isReady={isReady}
            nameWeather="Pressure"
            numberWeather={weatherInfo.main.pressure}
            descriptionWeather="Force exerted on a surface by the air above it"
          />
          <CardInfo
            isReady={isReady}
            nameWeather="Wind Speed"
            numberWeather={weatherInfo.wind.speed}
            descriptionWeather="Is a fundamental atmospheric quantity caused by air moving from high to low pressure"
          />
        </>
      ) : (
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
