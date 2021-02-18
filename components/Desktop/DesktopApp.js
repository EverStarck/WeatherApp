import React from "react";

import { Frame80 } from "../../styles/Main";
import ImageBackground from "./background/ImageBackground";
import ForecastFrame from "./forecast/ForecastFrame";

const DesktopApp = () => {
  return (
    <>
      <ImageBackground />

      <Frame80>
        <ForecastFrame />
      </Frame80>
    </>
  );
};

export default DesktopApp;
