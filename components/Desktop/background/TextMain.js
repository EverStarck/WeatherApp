import React from "react";
import Image from "next/image";
// Custom Hook
import useWindoSize from "../../../customHooks/useWindowSize";

import styled from "@emotion/styled";
import dayjs from "dayjs";
import { TextMainLoader } from "./SkeletonLoadears";

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
  .mobileDetailsFlex {
    h1 {
      font-size: clamp(3.6rem, 10vw, 9.6rem);
      color: var(--main-bg-color);
      font-weight: 600;
      margin: 50px 0;
    }
    .imgFrame {
      font-size: clamp(2.4rem, 3vw, 4rem);
      p {
        margin-top: 5px;
        margin-bottom: 0;
        small {
          color: var(--gray-date);
          text-transform: capitalize;
        }
      }
    }
  }

  /* Height overflow for tvs */
  @media only screen and (max-height: 889px) and (min-width: 767px) {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  /* MOBILE */
  @media only screen and (max-width: 767px) {
    padding-top: ${(props) => (props.mobileDetailInfo ? "16px" : "25px")};

    ${(props) =>
      props.mobileDetailInfo
        ? `.mobileDetailsFlex {
      margin-top: 30px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-evenly;
      align-items: center;
      // background-color: red;
      h1 {
        margin: 0 0 20px 0;
      }
    }`
        : `.mobileDetailsFlex {
          h1 {
        margin: 30px 0 20px 0;
      }
    }`}
  }
`;

const TextMain = ({ weatherInfo, isReady, mobileDetailInfo }) => {
  let dateToday = dayjs().format("MM/DD/YYYY");
  // console.log(fecha); //2021/01/13
  // console.log(dayjs().add(1, "days").format("ddd, DD MMM"));

  const windowsSize = useWindoSize();

  return (
    <TextMainFrame mobileDetailInfo={mobileDetailInfo}>
      {isReady ? (
        <>
          <h2>
            {weatherInfo.name} <span>({weatherInfo.sys.country})</span>
          </h2>
          <h3>{dateToday}</h3>
          <div className="mobileDetailsFlex">
            <h1>
              {weatherInfo.main.temp} <span>&#176;C</span>
            </h1>
            <div className="imgFrame">
              {windowsSize.width > 767 ? (
                <Image
                  src={`/icons/${weatherInfo.weather[0].icon}.svg`}
                  alt={`Icon of ${weatherInfo.weather[0].description}`}
                  width={200}
                  height={190}
                />
              ) : (
                <Image
                  src={`/icons/${weatherInfo.weather[0].icon}.svg`}
                  alt={`Icon of ${weatherInfo.weather[0].description}`}
                  width={60}
                  height={58}
                />
              )}
              <p>
                <small>{weatherInfo.weather[0].description}</small>{" "}
              </p>
            </div>
          </div>
        </>
      ) : (
        <TextMainLoader />
      )}
    </TextMainFrame>
  );
};
export default TextMain;
