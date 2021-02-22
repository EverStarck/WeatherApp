import React, { useContext } from "react";
import styled from "@emotion/styled";

import { Frame80 } from "../../../styles/Main";
import SearchBar from "../../Desktop/background/SearchBar";
import TextMain from "../../Desktop/background/TextMain";
import MobileButtonDetails from "./MobileButtonDetails";
import ModalWeatherError from "../../ModalWeatherError";

// Context
import { ApiDataContext } from "../../../Context/ApiDataContext";
import { MobileDetailAndIndexContext } from "../../../Context/Mobile/MobileDetailAndIndexContext";

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

  /* MOBILE 375 */
  @media only screen and (max-height: 660px) {
    max-height: ${(props) => (props.mobileDetailInfo ? "40vh" : "75vh")};
    min-height: ${(props) => (props.mobileDetailInfo ? "40vh" : "75vh")};
  }
  /* transition: .1s cubic-bezier(.54,.51,.74,.72); */
`;

const MobileHeader = () => {
  // Context Data
  const { apiData, apiIsReady } = useContext(ApiDataContext);
  const { mobileDetailInfo } = useContext(MobileDetailAndIndexContext);

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
              {!mobileDetailInfo ? <SearchBar /> : null}

              <TextMain />

              {/* Hide button "See Details" if click on details weather */}
              {!mobileDetailInfo ? (
                <>
                  {/* Avoid overlap with another skeleton loader */}
                  {apiIsReady.dayWeather ? <MobileButtonDetails /> : null}
                </>
              ) : null}
            </Frame80>
          </MobileBackground>

          {/* Show a modal if wetheropenmap don't have results */}
          {apiIsReady.modal ? <ModalWeatherError /> : null}
        </>
      ) : (
        <>
          {/* Show a modal if wetheropenmap don't have results */}
          {apiIsReady.modal ? <ModalWeatherError /> : null}
          <MobileHeaderLoader />
        </>
      )}
    </>
  );
};

export default MobileHeader;
