import styled from "@emotion/styled";
import MobileHeader from "../Header/MobileHeader";
import MobileDetailMain from "./Main/MobileDetailMain";

// Context
import { useContext } from "react";
import {GetInfoDayContext} from "../../../Context/Mobile/GetInfoDayContext"

const MobileDetailWeatherStyles = styled.section`
  transform: ${(props) =>
    props.mobileDetailInfo ? "translateY(0);" : "translateY(110%);"};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow: hidden;
  transition: 0.5s;

  /* width: ${(props) => (props.mobileDetailInfo ? "100%" : "0")};
  height: 100%;
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s; */
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

const MobileDetailWeather = ({ mobileDetailInfo, setMobileDetailInfo }) => {
  // Context Data
  const {setGetInfoDay} = useContext(GetInfoDayContext)

  const backArrowClick = () => {
    setMobileDetailInfo(false);
    setGetInfoDay([])

  };

  return (
    <MobileDetailWeatherStyles mobileDetailInfo={mobileDetailInfo}>
      <MobileDetailButton onClick={backArrowClick}></MobileDetailButton>

      <MobileHeader mobileDetailInfo={mobileDetailInfo} />

      <MobileDetailMain />
    </MobileDetailWeatherStyles>
  );
};

export default MobileDetailWeather;
