import React, { useState } from "react";
import styled from "@emotion/styled";

import { Frame80 } from "../styles/Main";
import SearchBar from "./SearchBar";

const ImgFrame = styled.div`
  /* background-color: green; */
  width: 100vw;
  height: 80vh;
  /* color: #fff; */
`;

export default function ImageBackground({ searchValue, setSearchValue }) {
  return (
    <>
      <ImgFrame>
        <Frame80>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </Frame80>
      </ImgFrame>
    </>
  );
}
