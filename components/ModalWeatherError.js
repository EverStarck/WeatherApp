import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const ModalFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 50px;
  width: 25vw;
  /* height: 50vh; */
  background-color: var(--main-bg-color);
  border-radius: calc(var(--border-radius) * 2);
  /* font-size: clamp(1rem, 10vw, 2rem); */
  transform: translate(-50%, -50%);
  outline: transparent;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    .errorName {
      font-size: clamp(2.2rem, 3vw, 3.2rem);
      font-weight: 600;
      color: var(--black-forecast);
      margin: 35px 0 0 0;
    }
    p {
      font-size: clamp(1rem, 3vw, 1.8rem);
      font-weight: 400;
      color: var(--gray-search);
      span {
        font-size: clamp(1rem, 3vw, 1.8rem);
        font-weight: 500;
      }
    }
  }
  button {
    font-size: clamp(1rem, 3vw, 1.8rem);
    padding: 15px 30px;
    border-radius: var(--border-radius);
    background-color: var(--main-color);
    color: var(--main-bg-color);
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  /* Laptops */
  @media only screen and (max-width: 1500px) {
    width: 50vw;
  }
  /* MOBIL */
  @media only screen and (max-width: 767px) {
    width: 90vw;
  }
`;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const ModalWeatherError = ({ searchValue, apiIsReady, setApiIsReady }) => {
  return (
    <>
      <ModalFrame>
        <Image src={`/icons/09d.svg`} alt="Icon of" width={200} height={190} />
        <article>
          <p className="errorName">Oh no :(</p>
          <p>
            It seems that we could not find information about
            <span> {searchValue} </span>, please try to search again with a
            different name.
          </p>
          <button
            onClick={() =>
              setApiIsReady({
                ...apiIsReady,
                modal: false,
              })
            }
          >
            Close and search again
          </button>
        </article>
      </ModalFrame>
      <ModalBackground
        onClick={() =>
          setApiIsReady({
            ...apiIsReady,
            modal: false,
          })
        }
      >
        bg
      </ModalBackground>
    </>
  );
};

export default ModalWeatherError;
