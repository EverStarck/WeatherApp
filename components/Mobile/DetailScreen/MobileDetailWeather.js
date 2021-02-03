import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import MobileHeader from "../Header/MobileHeader";
import MobileDetailMain from "./Main/MobileDetailMain";

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
  z-index: 1;
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

const MobileDetailWeather = ({
  apiIsReady,
  apiData,
  searchValue,
  setSearchValue,
  searchFetchData,
  mobileDetailInfo,
  setMobileDetailInfo,
  mobileIndex,
  datesInfo,
}) => {
  const [getInfoDay, setGetInfoDay] = useState([]);
  //Set forecast info in array, this depend of where do you make the clic
  useEffect(() => {
    switch (mobileIndex) {
      case 0:
        setGetInfoDay([apiData.forecastWeatherInfo.list[0], datesInfo.today.dateInfo.number]);
        break;
      case 1:
        setGetInfoDay([apiData.forecastWeatherInfo.list[1], datesInfo[0].dateInfo.letter]);
        break;
      case 2:
        setGetInfoDay([apiData.forecastWeatherInfo.list[2], datesInfo[1].dateInfo.number]);
        break;
      case 3:
        setGetInfoDay([apiData.forecastWeatherInfo.list[3], datesInfo[2].dateInfo.number]);
        break;
      case 4:
        setGetInfoDay([apiData.forecastWeatherInfo.list[4], datesInfo[3].dateInfo.number]);
        break;
      case 5:
        setGetInfoDay([apiData.forecastWeatherInfo.list[5], datesInfo[4].dateInfo.number]);
        break;
    }
  }, [mobileIndex]);

  console.log(getInfoDay[1])
  return (
    <MobileDetailWeatherStyles mobileDetailInfo={mobileDetailInfo}>
      <MobileDetailButton
        onClick={() => setMobileDetailInfo(false)}
      ></MobileDetailButton>

      <MobileHeader
        apiData={apiData}
        apiIsReady={apiIsReady}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        mobileDetailInfo={mobileDetailInfo}
        getInfoDay={getInfoDay}
        datesInfo={datesInfo}
      />

      <MobileDetailMain getInfoDay={getInfoDay} />
    </MobileDetailWeatherStyles>
  );
};

export default MobileDetailWeather;
