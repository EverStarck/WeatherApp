import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const CardForecastFrame = styled.article`
  min-width: 200px;
  /* font-size: 5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  /* margin-right: 80px; */
  position: relative;
  /* background-color: red; */
  h2 {
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.8rem);
    font-weight: 500;
    color: var(--main-color);
  }
  h4 {
    white-space: pre;
    margin: 0;
    font-size: clamp(1.4rem, 2vw, 2.4rem);
    font-weight: 500;
    color: var(--black-forecast);
    &:first-of-type {
      margin-right: 15px;
    }
  }
  .imgForecast {
    margin: 10px 0;
  }
  .degreesForecast {
    display: flex;
    justify-content: space-between;
  }

  &::after {
    content: "";
    width: 2px;
    height: 116px;
    background-color: var(--gray-search);
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const CardForecast = ({ minWeather, maxWeather, date, icon,iconDescription}) => {
  return (
    <CardForecastFrame>
      <h2>{date}</h2>
      <div className="imgForecast">
        <Image src={`/icons/${icon}.svg`} alt={`Icon of ${iconDescription}`} width={30} height={28} />
      </div>
      <div className="degreesForecast">
        <h4>
          {minWeather} <span>&#176;C</span>
        </h4>
        <h4>
          {maxWeather} <span>&#176;C</span>
        </h4>
      </div>
    </CardForecastFrame>
  );
};

export default CardForecast;
