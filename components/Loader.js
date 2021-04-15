import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const LoaderFrame = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .loader {
    font-size: clamp(1.6rem, 5vw, 2.6rem);
    margin-top: 200px;
  }
  .circle {
    height: 125px;
    width: 125px;
    border-radius: 50%;
    background-color: #4392f1;
    position: absolute;
    animation: ${spin} .6s linear infinite;
    &::after {
      content: "";
      height: 115px;
      width: 115px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      top: 10px;
      left: 1px;
    }
    &::before {
      content: "";
      height: 9px;
      width: 9px;
      border-radius: 50%;
      background-color: #4392f1;
      position: absolute;
      top: 56%;
      right: .5px;
      z-index: 2;
    }
    span {
      height: 50px;
      width: 80px;
      background-color: #fff;
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderFrame>
      <div className="circle">
        <span></span>
      </div>
      <p className="loader">Loading...</p>
    </LoaderFrame>
  );
};

export default Loader;