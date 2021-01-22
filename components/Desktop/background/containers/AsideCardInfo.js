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

const AsideCardInfo = ({ apiIsReady, apiData }) => {
  return (
    <AsideCardInfoStyles>
      {apiIsReady.dayWheater ? (
        <>
          <CardInfo
            apiIsReady={apiIsReady}
            nameWeather="Feels like"
            numberWeather={apiData.dayWheaterInfo.main.feels_like}
            descriptionWeather="This temperature parameter is the human perception of weather"
            marginTop="-10px"
          />
          <CardInfo
            apiIsReady={apiIsReady}
            nameWeather="Humidity"
            numberWeather={apiData.dayWheaterInfo.main.humidity}
            descriptionWeather="The amount of water vapor in the air"
          />
          <CardInfo
            apiIsReady={apiIsReady}
            nameWeather="Pressure"
            numberWeather={apiData.dayWheaterInfo.main.pressure}
            descriptionWeather="Force exerted on a surface by the air above it"
          />
          <CardInfo
            apiIsReady={apiIsReady}
            nameWeather="Wind Speed"
            numberWeather={apiData.dayWheaterInfo.wind.speed}
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
