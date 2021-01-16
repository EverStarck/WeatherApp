import React from "react";
import styled from "@emotion/styled";

const CardInfoFrame = styled.article`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--card-info-color);
  padding: 10px 20px;
  margin-top: 25px;
  /* background-color: red; */
  position: relative;
  h3 {
    font-size: 2rem;
    margin: 0;
    font-weight: 500;
  }
  .cardInfoNumber {
    font-size: 3.6rem;
    text-align: center;
    margin: 10px;
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    margin: 0;
    font-weight: 400;
  }
  &::after {
    content: "";
    width: 200px;
    height: 2px;
    background-color: var(--gray-search);
    position: absolute;
    bottom: 0;
    left: 50;
    transform: translateY(10px);
  }
`;

const CardInfo = ({ nameWeather, numberWeather, descriptionWeather }) => {
  return (
    <CardInfoFrame>
      <h3>{nameWeather}</h3>
      <p className="cardInfoNumber">{numberWeather}</p>
      <p>{descriptionWeather}</p>
    </CardInfoFrame>
  );
};

export default CardInfo;
