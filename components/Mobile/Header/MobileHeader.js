import React from "react";
import styled from "@emotion/styled";

import { Frame80 } from "../../../styles/Main";
import SearchBar from "../../Desktop/background/SearchBar";
import TextMain from "../../Desktop/background/TextMain";
import MobileButtonDetails from "./MobileButtonDetails";
import ModalWeatherError from "../../ModalWeatherError";

// Skeleton Loader
import { MobileHeaderLoader } from "../MobileSkeletonLoader";

const MobileBackground = styled.div`
  max-height: ${(props) => (props.mobileDetailInfo ? "30vh" : "60vh")};
  min-height: ${(props) => (props.mobileDetailInfo ? "30vh" : "60vh")};

  background-color: var(--gray-search);
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(000, 000, 0, 0.7)
    ),
    url("${(props) => props.apiData.pixabayBackground.fullHDURL}");
  background-repeat: no-repeat;
  background-position: 50% 25%;
  background-size: cover;
`;

const MobileHeader = ({
  apiData,
  apiIsReady,
  setApiIsReady,
  searchValue,
  setSearchValue,
  searchFetchData,
  setMobileDetailInfo,
  mobileDetailInfo,
  setMobileIndex,
  getInfoDay,
  datesInfo,
}) => {
  return (
    <>
      {/* If the pixabay is loaded, show all the componentes */}
      {apiIsReady.pixabay ? (
        <>
          <MobileBackground
            apiData={apiData}
            mobileDetailInfo={mobileDetailInfo}
          >
            <Frame80>
              {/* Hide searchBar if click on details weather */}
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
                getInfoDay={getInfoDay}
                datesInfo={datesInfo}
              />

              {/* Hide button "See Details" if click on details weather */}
              {!mobileDetailInfo ? (
                <>
                  {/* Avoid overlap with another skeleton loader */}
                  {apiIsReady.dayWeather ? (
                    <MobileButtonDetails
                      setMobileDetailInfo={setMobileDetailInfo}
                      setMobileIndex={setMobileIndex}
                    />
                  ) : null}
                </>
              ) : null}
            </Frame80>
          </MobileBackground>

          {/* Show a modal if wetheropenmap don't have results */}
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
          {/* Show a modal if wetheropenmap don't have results */}
          {apiIsReady.modal ? (
            <ModalWeatherError
              searchValue={searchValue}
              apiIsReady={apiIsReady}
              setApiIsReady={setApiIsReady}
            />
          ) : null}
          <MobileHeaderLoader />
        </>
      )}
    </>
  );
};

export default MobileHeader;
