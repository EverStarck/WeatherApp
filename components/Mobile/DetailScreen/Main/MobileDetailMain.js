import styled from "@emotion/styled";
import { Frame80 } from "../../../../styles/Main";
import MobileDetailMainTemps from "./MobileDetailMainTemps";
import MobileDetailMainGrid from "./Grid/MobileDetailMainGrid";
import MobileDetailMainThanks from "./MobileDetailMainThanks";


const MobileDetailMainStyles = styled.main`
  min-height: calc(70vh + 20px);
  /* max-height: 100%; */
  /* min-width: 100vw; */
  /* max-width: 100vw; */
  background-color: var(--main-bg-color);
  border-radius: 16px 16px 0 0;
  margin-top: -20px;
`;

const MobileDetailMain = () => {
  return (
    <MobileDetailMainStyles>
      <Frame80>
        <MobileDetailMainTemps/>
        <MobileDetailMainGrid/>
        <MobileDetailMainThanks/>
      </Frame80>
    </MobileDetailMainStyles>
  );
};

export default MobileDetailMain;
