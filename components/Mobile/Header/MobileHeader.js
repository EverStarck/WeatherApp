import React from "react";
import styled from "@emotion/styled";
import { Frame80 } from "../../../styles/Main";
import SearchBar from "../../Desktop/background/SearchBar";
import TextMain from "../../Desktop/background/TextMain";
import MobileButtonDetails from "./MobileButtonDetails";

const MobileBackground = styled.div`
  max-height: 60vh;
  min-height: 60vh;

  background-color: var(--gray-search);
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(000, 000, 0, 0.5)
    ),
    url("${(props) => props.backgroundPixabay.fullHDURL}");
  background-repeat: no-repeat;
  background-position: 50% 25%;
  background-size: cover;
`;

const MobileHeader = ({
  backgroundPixabay,
  weatherInfo,
  isReady,
  searchValue,
  setSearchValue,
  searchFetchData,
}) => {
  return (
    <>
      <MobileBackground backgroundPixabay={backgroundPixabay}>
        <Frame80>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchFetchData={searchFetchData}
          />

          <TextMain weatherInfo={weatherInfo} isReady={isReady} />
        </Frame80>

        <MobileButtonDetails/>
      </MobileBackground>
    </>
  );
};

export default MobileHeader;
