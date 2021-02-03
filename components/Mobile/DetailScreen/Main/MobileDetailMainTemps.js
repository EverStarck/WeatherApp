import React from "react";
import styled from "@emotion/styled";
import MobileError from "../../MobileError";

const MobileDetailTempsFrame = styled.section`
  display: flex;
  justify-content: space-evenly;
  .mobileDetailTemps {
    h3 {
      font-size: clamp(1.6rem, 3vw, 2.6rem);
      font-weight: 400;
      margin-top: 0px;
      padding-top: 16px;
      color: var(--main-color);
    }
    h2 {
      font-size: clamp(2.4rem, 3vw, 3.4rem);
    }
  }
`;

const MobileDetailMainTemps = ({ getInfoDay }) => {
  return (
    <>
      {getInfoDay.length === 0 ? <MobileError/> : (
        <MobileDetailTempsFrame>
          <article className="mobileDetailTemps">
            <h3>Min</h3>
            <h2>
              {getInfoDay[0].main.temp_min}
              <span>&#176;C</span>
            </h2>
          </article>
          <article className="mobileDetailTemps">
            <h3>Max</h3>
            <h2>
              {getInfoDay[0].main.temp_max}
              <span>&#176;C</span>
            </h2>
          </article>
        </MobileDetailTempsFrame>
      )}
    </>
  );
};

export default MobileDetailMainTemps;
