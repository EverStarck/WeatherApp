import React from "react";
import styled from "@emotion/styled";
import { Frame80 } from "../../../styles/Main";
import SearchBar from "../../Desktop/background/SearchBar";
import TextMain from "../../Desktop/background/TextMain";
import MobileButtonDetails from "./MobileButtonDetails";

const MobileBackground = styled.div`
  max-height: ${(props) => (props.mobileDetailInfo ? "30vh" : "60vh")};
  min-height: ${(props) => (props.mobileDetailInfo ? "30vh" : "60vh")};

  background-color: var(--gray-search);
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(000, 000, 0, 0.5)
    ),
    url("${(props) => props.apiData.pixabayBackground.fullHDURL}");
  background-repeat: no-repeat;
  background-position: 50% 25%;
  background-size: cover;
`;

const MobileHeader = ({
  apiData,
  apiIsReady,
  searchValue,
  setSearchValue,
  searchFetchData,
  setMobileDetailInfo,
  mobileDetailInfo,
}) => {
  return (
    <>
      <MobileBackground
        apiData={apiData}
        mobileDetailInfo={mobileDetailInfo}
      >
        <Frame80>
          {!mobileDetailInfo ? (
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchFetchData={searchFetchData}
            />
          ) : null}

          <TextMain
            apiData={apiData}
            apiIsReady={apiIsReady}
            mobileDetailInfo={mobileDetailInfo}
          />
          {!mobileDetailInfo ? (
            <MobileButtonDetails setMobileDetailInfo={setMobileDetailInfo} />
          ) : null}
        </Frame80>
      </MobileBackground>
    </>
  );
};

export default MobileHeader;
