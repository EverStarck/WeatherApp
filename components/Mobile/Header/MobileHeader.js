import React from "react";
import styled from "@emotion/styled";
import { Frame80 } from "../../../styles/Main";
import SearchBar from "../../Desktop/background/SearchBar";
import TextMain from "../../Desktop/background/TextMain";
import MobileButtonDetails from "./MobileButtonDetails";
import ModalWeatherError from "../../ModalWeatherError";

// Loader
import { MobileHeaderLoader } from "../MobileSkeletonLoader";

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
  setApiIsReady,
  searchValue,
  setSearchValue,
  searchFetchData,
  setMobileDetailInfo,
  mobileDetailInfo,
  setIdForecastButton,
  idForecastButton,
}) => {
  return (
    <>
      {apiIsReady.pixabay ? (
        <>
          <MobileBackground
            apiData={apiData}
            mobileDetailInfo={mobileDetailInfo}
          >
            <Frame80>
              {!mobileDetailInfo ? (
                <>
                  {apiIsReady.dayWeather ? (
                    <SearchBar
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      searchFetchData={searchFetchData}
                    />
                  ) : null}
                </>
              ) : null}

              <TextMain
                apiData={apiData}
                apiIsReady={apiIsReady}
                mobileDetailInfo={mobileDetailInfo}
              />
              {!mobileDetailInfo ? (
                <>
                  {apiIsReady.dayWeather ? (
                    <MobileButtonDetails
                      setMobileDetailInfo={setMobileDetailInfo}
                      setIdForecastButton={setIdForecastButton}
                      idForecastButton={idForecastButton}
                    />
                  ) : null}
                </>
              ) : null}
            </Frame80>
          </MobileBackground>

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
          {apiIsReady.modal ? (
            <ModalWeatherError
              searchValue={searchValue}
              apiIsReady={apiIsReady}
              setApiIsReady={setApiIsReady}
            />
          ) : null}
          {/* {apiIsReady.dayWeather ? <MobileHeaderLoader /> : null} */}
          <MobileHeaderLoader />
        </>
      )}
    </>
  );
};

export default MobileHeader;
