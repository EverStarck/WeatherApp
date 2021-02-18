import styled from "@emotion/styled";
import MobileHeader from "../Header/MobileHeader";
import MobileDetailMain from "./Main/MobileDetailMain";

// Context
import { useContext } from "react";
import { GetInfoDayContext } from "../../../Context/Mobile/GetInfoDayContext";
import { MobileDetailAndIndexContext } from "../../../Context/Mobile/MobileDetailAndIndexContext";

const MobileDetailWeatherStyles = styled.section`
  /* transform: ${(props) =>
    props.mobileDetailInfo ? "translateY(0);" : "translateY(110%);"};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow: hidden;
  transition: 0.5s; */

  opacity: ${(props) => props.mobileDetailInfo ? "1" : "0"};
  z-index: ${(props) => props.mobileDetailInfo ? "9999" : "-1"};

  
  /* transform: ${(props) =>
    props.mobileDetailInfo ? "pointer-events: none" : "pointer-events: auto"}; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: calc(100% + 16px);
  padding-bottom: 16px;
  top: 0;
  left: 0;
  background-color: #fff;
  /* overflow: hidden; */
`;

const MobileDetailButton = styled.button`
  width: 30px;
  height: 20px;
  background-color: transparent;
  background-image: url("/assets/buttonArrow.svg");
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: contain;
  transform: rotate(180deg);
  border: none;
  position: absolute;
  top: 16px;
  left: 5%;
`;

const MobileDetailWeather = () => {
  // Context Data
  const { setGetInfoDay } = useContext(GetInfoDayContext);
  const { mobileDetailInfo, setMobileDetailInfo, setMobileIndex } = useContext(
    MobileDetailAndIndexContext
  );

  const backArrowClick = () => {
    setMobileDetailInfo(false);
    setGetInfoDay([]);
    setMobileIndex(null);
  };

  return (
    <MobileDetailWeatherStyles mobileDetailInfo={mobileDetailInfo}>
      <MobileDetailButton onClick={backArrowClick}></MobileDetailButton>
      <MobileHeader />
      <MobileDetailMain />
    </MobileDetailWeatherStyles>
  );
};

export default MobileDetailWeather;
