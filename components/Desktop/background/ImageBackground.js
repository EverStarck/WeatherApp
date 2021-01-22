import React from "react";
import styled from "@emotion/styled";

import { Frame80 } from "../../../styles/Main";
import SearchBar from "./SearchBar";
import TextMain from "./TextMain";
import AsideCardInfo from "./containers/AsideCardInfo";
import { BackgroundLoader, TextMainLoader } from "./SkeletonLoadears";

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
    color: var(--main-bg-color);
  }

  /* Height overflow for tvs */
  @media only screen and (max-height: 889px) {
    overflow: scroll;
  }
`;

const LoaderFlex = styled.section`
  position: absolute;
  top: 0;
  left: 18%;
`;

export default function ImageBackground({
  apiIsReady,
  apiData,
  searchValue,
  setSearchValue,
  searchFetchData,
}) {
  return (
    <>
      {apiIsReady.pixabay ? (
        <ImgFrame apiData={apiData}>
          <Frame80>
            <nav>
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchFetchData={searchFetchData}
              />
            </nav>
            <BacgroundLayout>
              <TextMain apiData={apiData} apiIsReady={apiIsReady} />
              <AsideCardInfo apiData={apiData} apiIsReady={apiIsReady} />
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
