import React from "react";
import styled from "@emotion/styled";
import MobileDetailMainGridCard from "./MobileDetailMainGridCard";
import MobileError from "../../../MobileError";

const MobileDetailMainGridStyle = styled.section`
  /* background-color: red; */
  display: grid;
  gap: 5vw;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "card1 card2 card3"
    "cardLong cardLong cardLong";
  margin-top: 24px;
`;

const MobileDetailMainGrid = ({ getInfoDay }) => {
  return (
    <>
      {getInfoDay.length === 0 ? <MobileError/> : (
        <MobileDetailMainGridStyle>
          <MobileDetailMainGridCard
            typeOfData={getInfoDay[0].main.humidity}
            gridArea="card1"
            cardTittle="Humidity"
          />
          <MobileDetailMainGridCard
            typeOfData={getInfoDay[0].visibility}
            gridArea="card2"
            cardTittle="Visibility"
          />
          <MobileDetailMainGridCard
            typeOfData={getInfoDay[0].wind.speed}
            gridArea="card3"
            cardTittle="Wind"
          />
          <MobileDetailMainGridCard
            typeOfData="no se"
            gridArea="cardLong"
            cardTittle="Predictability"
            backgroundCard={true}
            flexCard={true}
          />
        </MobileDetailMainGridStyle>
      )}
    </>
  );
};

export default MobileDetailMainGrid;
