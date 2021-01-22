import React from "react";
import styled from "@emotion/styled";
import MobileDetailMainGridCard from "./MobileDetailMainGridCard";

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

const MobileDetailMainGrid = () => {
  return (
    <MobileDetailMainGridStyle>
      <MobileDetailMainGridCard gridArea="card1" />
      <MobileDetailMainGridCard gridArea="card2" />
      <MobileDetailMainGridCard gridArea="card3" />
      <MobileDetailMainGridCard gridArea="cardLong" backgroundCard={true} flexCard={true} />
    </MobileDetailMainGridStyle>
  );
};

export default MobileDetailMainGrid;
