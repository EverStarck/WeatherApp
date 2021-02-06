import React from "react";
import styled from "@emotion/styled";

import { Frame80 } from "../../../styles/Main";
import SearchBar from "./SearchBar";
import TextMain from "./TextMain";
import AsideCardInfo from "./containers/AsideCardInfo";
import ModalWeatherError from "../../ModalWeatherError";
import { BackgroundLoader, TextMainLoader } from "../SkeletonLoadears";
import Tooltip from "../Tooltip";

const ImgFrame = styled.section`
  background-color: var(--gray-search);
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(000, 000, 0, 0.5)
    ),
    url("${(props) => props.apiData.pixabayBackground.fullHDURL}");
  background-repeat: no-repeat;
  background-position: 50% 25%;
  background-size: cover;
  width: 100vw;
  height: 80vh;
  /* color: #fff; */
  .tooltip {
    position: absolute;
    top: 75vh;
    left: 0px;
  }
  nav {
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    /* background: red; */
  }
`;
const BackgroundLayout = styled.div`
  /* margin-top: 30px; */
  /* background-color: green; */
  height: 75vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Height overflow for tvs */
  @media only screen and (max-height: 889px) {
    overflow: scroll;
  }
`;
// Sekeleton Loader
const LoaderFlex = styled.section`
  position: absolute;
  top: 0;
  left: 18%;
`;

export default function ImageBackground({
  apiIsReady,
  apiData,
  setApiIsReady,
  searchValue,
  setSearchValue,
  searchFetchData,
  datesInfo,
}) {
  return (
    <>
      {/* If the pixabay is loaded, show all the componentes */}
      {apiIsReady.pixabay ? (
        <>
          <ImgFrame apiData={apiData}>
            <div className="tooltip">
              <Tooltip
              textTooltip="Credits to PIXABAY for all the background images"
              bottomTooltip="-50%"
              rightTooltip="-1500%"
              afterTooltip="none"
              />
            </div>
            <Frame80>
              <nav>
                <SearchBar
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  searchFetchData={searchFetchData}
                />
              </nav>
              <BackgroundLayout>
                <TextMain
                  apiData={apiData}
                  apiIsReady={apiIsReady}
                  datesInfo={datesInfo}
                />
                <AsideCardInfo apiData={apiData} apiIsReady={apiIsReady} />
              </BackgroundLayout>
            </Frame80>
          </ImgFrame>

          {/* Ternary to show the modal */}
          {apiIsReady.modal ? (
            <ModalWeatherError
              searchValue={searchValue}
              apiIsReady={apiIsReady}
              setApiIsReady={setApiIsReady}
            />
          ) : null}
        </>
      ) : (
        <>
          {/* Ternary to show the modal */}
          {apiIsReady.modal ? (
            <ModalWeatherError
              searchValue={searchValue}
              apiIsReady={apiIsReady}
              setApiIsReady={setApiIsReady}
            />
          ) : null}

          {/* Sekeleton Loader */}
          <BackgroundLoader />
          <LoaderFlex>
            <TextMainLoader />
          </LoaderFlex>
        </>
      )}
    </>
  );
}
