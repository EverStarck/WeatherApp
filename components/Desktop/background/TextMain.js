import React, { useContext } from "react";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

// Custom Hook
import useWindoSize from "../../../customHooks/useWindowSize";

import { TextMainLoader } from "../SkeletonLoadears";

// const MobileHeaderLoader = dynamic(() =>
//   import("../../Mobile/MobileSkeletonLoader")
// );
import { MobileHeaderLoader } from "../../Mobile/MobileSkeletonLoader";
import CityText from "./containers/textMain/CityText";
import DateText from "./containers/textMain/DateText";
import TempText from "./containers/textMain/TempText";
import ImgText from "./containers/textMain/ImgText";
import SmallText from "./containers/textMain/SmallText";

// Context
import { ApiDataContext } from "../../../Context/ApiDataContext";
import { MobileDetailAndIndexContext } from "../../../Context/Mobile/MobileDetailAndIndexContext";

const TextMainFrame = styled.article`
  /* width: 400px; */
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  /* background-color: red; */
  .mobileDetailsFlex {
    display: flex;
    flex-direction: column;
    align-items: center;
    .imgFrame {
      display: flex;
      flex-direction: column-reverse;
      font-size: clamp(2.4rem, 3vw, 4rem);
      position: relative;
      height: 200px;
      width: 200px;
    }
    p {
      margin-top: 5px;
      margin-bottom: 0;
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
    .mobileDetailsFlex {
      .imgFrame {
        font-size: clamp(2.4rem, 3vw, 4rem);
        height: 100px;
        width: 100px;
        p {
          margin-bottom: -5px;
        }
      }
    }
  }
`;
// Sekeleton Loader
const MobileLoaderWeatherCenter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const TextMain = () => {
  // Get the width and height of the browser window
  const windowsSize = useWindoSize();
  // Context Data
  const { apiIsReady } = useContext(ApiDataContext);
  const { mobileDetailInfo } = useContext(MobileDetailAndIndexContext);

  return (
    <TextMainFrame mobileDetailInfo={mobileDetailInfo}>
      {/* If the weatheropenmap is loaded, show the html tags */}
      {apiIsReady.dayWeather ? (
        <>
          <CityText />
          <DateText />
          <div className="mobileDetailsFlex">
            <TempText />
            <div className="imgFrame">
              <ImgText />
              <p>
                <SmallText />
              </p>
            </div>
          </div>
        </>
      ) : (
        // Render the skeleton loader if is Mobile or desktop
        <>
          {windowsSize.width > 767 ? (
            <TextMainLoader />
          ) : (
            <MobileLoaderWeatherCenter>
              <MobileHeaderLoader />
            </MobileLoaderWeatherCenter>
          )}
        </>
      )}
    </TextMainFrame>
  );
};
export default TextMain;
