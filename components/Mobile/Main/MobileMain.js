import { useContext } from "react";
import styled from "@emotion/styled";

import { Frame80 } from "../../../styles/Main";
import MobileForecastFrame from "./MobileForecastFrame";

const MobileMainStyles = styled.section`
  min-height: calc(66vh + 16px);
  max-height: calc(100% + 16px);
  /* min-width: 100vw; */
  /* max-width: 100vw; */
  background-color: aliceblue;
  border-radius: 16px 16px 0 0;
  margin-top: -20px;

  .next5daysh3 {
    font-size: clamp(1.6rem, 3vw, 2.6rem);
    font-weight: 400;
    margin-top: 0px;
    padding-top: 16px;
    color: var(--main-color);
    /* background-color: red; */
  }
`;

const MobileMain = () => {
  return (
    <MobileMainStyles>
      <Frame80>
        <h3 className="next5daysh3">Next 5 days</h3>
        <MobileForecastFrame/>
      </Frame80>
    </MobileMainStyles>
  );
};

export default MobileMain;
