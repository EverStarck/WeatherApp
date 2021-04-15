import React, { useContext } from "react";
import styled from "@emotion/styled";

import MobileHeader from "./Header/MobileHeader";
import MobileMain from "./Main/MobileMain";
import MobileDetailWeather from "./DetailScreen/MobileDetailWeather";

import { MobileDetailAndIndexContext } from "../../Context/Mobile/MobileDetailAndIndexContext";

const MainScreen = styled.div`
  opacity: ${(props) => (props.mobileDetailInfo ? "0" : "1")};
  transition: 0.5s cubic-bezier(0.54, 0.51, 0.74, 0.72);
`;

const MobileApp = () => {
  const { mobileDetailInfo } = useContext(MobileDetailAndIndexContext);
  return (
    <>
      <MainScreen mobileDetailInfo={mobileDetailInfo}>
        {/* Start app */}
        <MobileHeader />

        <MobileMain />
      </MainScreen>
      {/* Click on any button? */}
      <MobileDetailWeather />
    </>
  );
};

export default MobileApp;
