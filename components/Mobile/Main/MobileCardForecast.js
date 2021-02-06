import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const MobileCardForecastStyles = styled.article`
  background-color: var(--mobile-card-color);
  border-radius: var(--border-radius);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  .dayDate {
    h2 {
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      color: var(--main-color);
      font-weight: 500;
      margin: 0;
    }
    h3 {
      font-size: clamp(1.4rem, 3vw, 2.4rem);
      color: var(--black-forecast);
      font-weight: 400;
      margin: 5px 0 0 0;
    }
  }
  .imgTempFrame {
    display: flex;
    align-items: center;
    /* background-color: green; */
    .mobileImg {
      width: 30px;
      height: 100%;
      margin-right: 22px;
      /* background-color: red; */
    }
    .tempArrow {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      h2 {
        font-size: clamp(1.8rem, 3vw, 2.8rem);
        color: var(--black-forecast);
        margin: 0;
      }
      button {
        background-color: var(--black-forecast);
        mask: url("/assets/buttonArrow.svg") no-repeat right center;
        width: 22px;
        height: 32px;
        border: none;
        padding: 0;
        /* background-color: transparent; */
      }
    }
  }
`;

const MobileCardForecast = ({
  data,
  index,
  mobileDaysForecast,
  mobileDateCardForecast,
  setMobileDetailInfo,
  setMobileIndex,
  ariaLabel
}) => {
  const handleClick = () => {
    setMobileDetailInfo(true);
    // alert(index);
    setMobileIndex(index);
  };

  return (
    <MobileCardForecastStyles onClick={handleClick}>
      <div className="dayDate">
        <h2>{mobileDateCardForecast}</h2>
        <h3>{mobileDaysForecast}</h3>
      </div>
      <div className="imgTempFrame">
        <div className="mobileImg">
          <Image
            src={`/icons/${data.weather[0].icon}.svg`}
            alt={`Icon of ${data.weather[0].description}`}
            width={30}
            height={24}
          />
        </div>
        <div className="tempArrow">
          <h2>
            {data.main.temp} <span>&#176;C</span>
          </h2>
          <button aria-label={`See details of ${ariaLabel}`} onClick={handleClick}></button>
        </div>
      </div>
    </MobileCardForecastStyles>
  );
};

export default MobileCardForecast;
