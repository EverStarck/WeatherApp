import React from "react";
import styled from "@emotion/styled";
import CardForecast from "./CardForecast";

const TextForecast = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    font-size: clamp(1.8rem, 3vw, 2rem);;
    font-weight: 500;
    color: var(--main-color);
  }
`;

const ForecastFrameLayaout = styled.section`
  display: flex;
  justify-content: center;
`;

const ForecastFrame = () => {
  return (
    <>
      <TextForecast>
        <h2>Next 5 Days</h2>
      </TextForecast>
      <ForecastFrameLayaout>
        <CardForecast />
        <CardForecast />
        <CardForecast />
        <CardForecast />
        <CardForecast />
      </ForecastFrameLayaout>
    </>
  );
};

export default ForecastFrame;
