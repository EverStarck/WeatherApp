import styled from "@emotion/styled";
import MobileHeader from "../Header/MobileHeader";
import MobileDetailMain from "./Main/MobileDetailMain";

// Context
import { useContext } from "react";
import { GetInfoDayContext } from "../../../Context/Mobile/GetInfoDayContext";
import { MobileDetailAndIndexContext } from "../../../Context/Mobile/MobileDetailAndIndexContext";

const MobileDetailWeatherStyles = styled.section`
  transform: ${(props) =>
    props.mobileDetailInfo ? "scale(1, 1)" : "scale(0.9, 0.9)"};
  opacity: ${(props) => (props.mobileDetailInfo ? "1" : "0")};
  transform-origin: center center;
  position: absolute;
  overflow-x: hidden;
  top: 0;
  left: 0;
  width: 100%;
  min-height: calc(100% + 16px);
  padding-bottom: 16px;
  pointer-events: ${(props) => (props.mobileDetailInfo ? "auto" : "none")};
  transition: 0.5s cubic-bezier(0.54, 0.51, 0.74, 0.72);
  /* transition-delay: .4s; */
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
