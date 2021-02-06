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
      {getInfoDay.length === 0 ? (
        <MobileError />
      ) : (
        <MobileDetailMainGridStyle>
          <MobileDetailMainGridCard
            typeOfData={getInfoDay[0].main.humidity}
            gridArea="card1"
            cardTittle="Humidity"
            descriptionCard="Amount of vapor in the air"
          />
          <MobileDetailMainGridCard
            typeOfData={getInfoDay[0].visibility}
            gridArea="card2"
            cardTittle="Visibility"
            descriptionCard="Distance at which an object can be discerned"
          />
          <MobileDetailMainGridCard
            typeOfData={getInfoDay[0].wind.speed}
            gridArea="card3"
            cardTittle="Wind"
            descriptionCard="Atmospheric quantity caused by air moving"
          />
          <MobileDetailMainGridCard
            typeOfData={
              getInfoDay[0].weather[0].main === "Rain"
                ? `${getInfoDay[0].pop}%`
                : "0%"
            }
            gridArea="cardLong"
            cardTittle="Probability of Rain"
            backgroundCard={true}
            flexCard={true}
            descriptionCard="Probability of precipitation"
          />
        </MobileDetailMainGridStyle>
      )}
    </>
  );
};

export default MobileDetailMainGrid;
