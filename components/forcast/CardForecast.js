import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const CardForecastFrame = styled.article`
  width: 200px;
  /* font-size: 5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  /* margin-right: 80px; */
  position: relative;
  /* background-color: red; */
  h2 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--main-color);
  }
  h4 {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--black-forecast);
  }
  .imgForecast {
    margin: 10px 0;
  }
  .degreesForecast {
    display: flex;
    justify-content: space-between;
  }

  &::after {
    content: "";
    width: 2px;
    height: 116px;
    background-color: var(--gray-search);
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const CardForecast = () => {
  return (
    <CardForecastFrame>
      <h2>Tomorrow</h2>
      <div className="imgForecast">
        <Image src="/icons/01d.svg" alt="Icon of " width={30} height={28} />
      </div>
      <div className="degreesForecast">
        <h4>
          11 <span>&#176;C</span>
        </h4>
        <h4>
          20 <span>&#176;C</span>
        </h4>
      </div>
    </CardForecastFrame>
  );
};

export default CardForecast;
