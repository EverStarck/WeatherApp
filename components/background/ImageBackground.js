import React from "react";
import styled from "@emotion/styled";

import { Frame80 } from "../../styles/Main";
import SearchBar from "./SearchBar";
import TextMain from "./TextMain";
import AsideCardInfo from "./containers/AsideCardInfo";
import { BackgroundLoader, TextMainLoader } from "./SkeletonLoadears";

const ImgFrame = styled.section`
  background-color: #a4a8a4;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(000, 000, 0, 0.5)
    ),
    url("${(props) => props.backgroundPixabay.fullHDURL}");
  background-repeat: no-repeat;
  background-position: 50% 25%;
  background-size: cover;
  width: 100vw;
  height: 80vh;
  /* color: #fff; */
  nav {
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    /* background: red; */
  }
`;

const BacgroundLayout = styled.div`
  /* margin-top: 30px; */
  /* background-color: green; */
  height: 75vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2rem;
    color: #fff;
  }
`;

const LoaderFlex = styled.section`
  position: absolute;
  top: 0;
  left: 18%;
`;

export default function ImageBackground({
  searchValue,
  setSearchValue,
  searchFetchData,
  backgroundPixabay,
  weatherInfo,
  isReady,
  pixabayIsReady,
}) {
  return (
    <>
      {pixabayIsReady ? (
        <ImgFrame backgroundPixabay={backgroundPixabay}>
          <Frame80>
            <nav>
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchFetchData={searchFetchData}
              />
            </nav>
            <BacgroundLayout>
              <TextMain weatherInfo={weatherInfo} isReady={isReady} />
              <AsideCardInfo weatherInfo={weatherInfo} isReady={isReady} />
            </BacgroundLayout>
          </Frame80>
        </ImgFrame>
      ) : (
        <>
          <BackgroundLoader />
          <LoaderFlex>
            <TextMainLoader />
          </LoaderFlex>
        </>
      )}
    </>
  );
}
