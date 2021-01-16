import React, { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import dayjs from "dayjs";

const TextMainFrame = styled.article`
  /* width: 400px; */
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  /* background-color: red; */
  h2 {
    /* font-size: 4.8rem; */
    font-size: clamp(1.8rem, 5vw, 4.8rem);
    color: var(--card-info-color);
    font-weight: 500;
    margin: 0;
  }
  h3 {
    font-size: clamp(1.4rem, 3vw, 3rem);
    color: var(--gray-date);
    font-weight: 400;
    margin: 0;
  }
  h1 {
    font-size: clamp(3.6rem, 10vw, 9.6rem);
    color: var(--main-bg-color);
    font-weight: 600;
    margin: 50px 0;
  }
  .imgFrame {
    font-size: 4rem;
  }
`;

const TextMain = ({ weatherInfo, isReady }) => {
  let fecha = dayjs().format("MM/DD/YYYY");
  // console.log(fecha); //2021/01/13

  return (
    <TextMainFrame>
      {isReady ? (
        <>
          <h2>{weatherInfo.name} <span>({weatherInfo.sys.country})</span></h2>
          <h3>{fecha}</h3>
          <h1>
            {weatherInfo.main.temp} <span>&#176;C</span>
          </h1>
          <div className="imgFrame">
            <Image
              src={`/icons/${weatherInfo.weather[0].icon}.svg`}
              alt={`Icon of ${weatherInfo.weather[0].description}`}
              width={200}
              height={190}
            />
          </div>
        </>
      ) : (
        <h1>Waiting</h1>
      )}
    </TextMainFrame>
  );
};
export default TextMain;
