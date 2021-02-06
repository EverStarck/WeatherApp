import React from "react";
import styled from "@emotion/styled";

const MobileDetailMainGridCardStyle = styled.article`
  background-color: var(--mobile-card-color);
  padding: 10px;
  /* width: 100%; */
  border-radius: var(--border-radius);
  grid-area: ${(props) => props.gridArea};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.flexCard ? "flex-start" : "center")};

  ${(props) =>
    props.backgroundCard
      ? `  background-image: url("/assets/cloud.svg");
  background-repeat: no-repeat;
  background-position: 110% top;`
      : null};
  h4 {
    font-size: clamp(1.4rem, 3vw, 2.4rem);
    font-weight: 400;
    color: var(--main-color);
    margin: 0;
  }
  h3 {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 500;
    color: var(--black-forecast);
    margin: 10px 0;
  }
  p {
    font-size: clamp(0.9rem, 3vw, 1.9rem);
    font-weight: 400;
    color: var(--gray-search);
    margin: 0;
  }
`;

const MobileDetailMainGridCard = ({
  gridArea,
  cardTittle,
  backgroundCard = false,
  flexCard = false,
  typeOfData,
  descriptionCard,
  getInfoDay,
}) => {
  return (
    <MobileDetailMainGridCardStyle
      gridArea={gridArea}
      backgroundCard={backgroundCard}
      flexCard={flexCard}
    >
      <h4>{cardTittle}</h4>
      <h3>{typeOfData}</h3>
      <p>
        <small>{descriptionCard}</small>
      </p>
    </MobileDetailMainGridCardStyle>
  );
};

export default MobileDetailMainGridCard;
