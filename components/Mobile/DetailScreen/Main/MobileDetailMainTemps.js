import React from "react";
import styled from "@emotion/styled";

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

const MobileDetailMainTemps = () => {
  return (
    <MobileDetailTempsFrame>
      <article className="mobileDetailTemps">
        <h3>Min</h3>
        <h2>
          4<span>&#176;C</span>
        </h2>
      </article>
      <article className="mobileDetailTemps">
        <h3>Max</h3>
        <h2>
          24<span>&#176;C</span>
        </h2>
      </article>
    </MobileDetailTempsFrame>
  );
};

export default MobileDetailMainTemps;
