import React, { useState } from "react";
import styled from "@emotion/styled";

import { Frame80 } from "../../styles/Main";
import SearchBar from "./SearchBar";
import CardInfo from "./CardInfo";
import TextMain from "./TextMain";

const ImgFrame = styled.section`
  background-color: #a4a8a4;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(000, 000, 0, 0.5)
    ),
    url("/assets/mountain.jpg");
  backdrop-filter: saturate(200%);
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
`;

export default function ImageBackground({ searchValue, setSearchValue }) {
  return (
    <ImgFrame>
      <Frame80>
        <nav>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </nav>
        <BacgroundLayout>
          <TextMain />
          <aside>
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </aside>
        </BacgroundLayout>
      </Frame80>
    </ImgFrame>
  );
}
