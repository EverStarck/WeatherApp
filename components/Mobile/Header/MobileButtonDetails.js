import React from "react";
import styled from "@emotion/styled";

const MobileButtonDetailStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button {
    font-size: 1.4rem;
    font-weight: 500;
    background-color: transparent;
    color: var(--main-bg-color);
    padding: 10px 20px;
    border: 2px solid var(--main-bg-color);
    border-radius: 8px;
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      /* background-image: url("/assets/buttonArrow.svg");
      background-repeat: no-repeat;
      margin-left: 10px;
      width: 6pt;
      height: 12pt; */
      mask: url("/assets/buttonArrow.svg") no-repeat;
      background-color: var(--main-bg-color);
      margin-left: 10px;
      width: 6pt;
      height: 12pt;
    }
    &:active,
    :focus,
    :hover {
      background-color: var(--main-bg-color);
      color: var(--main-color);
      span {
        background-color: var(--main-color);
      }
    }
  }
`;

const MobileButtonDetails = ({ setMobileDetailInfo, setMobileIndex }) => {
  const handleClickButton = () => {
    setMobileIndex(0);
    setMobileDetailInfo(true);
  };

  return (
    <MobileButtonDetailStyle>
      <button onClick={handleClickButton}>
        See details <span></span>
      </button>
    </MobileButtonDetailStyle>
  );
};

export default MobileButtonDetails;
