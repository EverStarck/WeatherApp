import Image from "next/image";
import useWindowSize from "../../../../../customHooks/useWindowSize";
import MobileError from "../../../../Mobile/MobileError";

// Context
import { useContext } from "react";
import { ApiDataContext } from "../../../../../Context/ApiDataContext";
import { GetInfoDayContext } from "../../../../../Context/Mobile/GetInfoDayContext";
import { MobileDetailAndIndexContext } from "../../../../../Context/Mobile/MobileDetailAndIndexContext";

import { imgSelecter } from "../../../../../helpers/ImageSelector";

const ImgText = () => {
  const windowsSize = useWindowSize();

  // Context Data
  const { apiData } = useContext(ApiDataContext);
  const { getInfoDay } = useContext(GetInfoDayContext);
  const { mobileDetailInfo } = useContext(MobileDetailAndIndexContext);

  if (windowsSize.width > 767) {
    // Icon of the weather for DESKTOP
    return (
      <Image
        src={`/icons/${imgSelecter(apiData.dayWeatherInfo.weather[0].icon)}.svg`}
        alt={`Icon of ${apiData.dayWeatherInfo.weather[0].description}`}
        layout="fill"
        objectFit="contain"
        objectPosition="center center"
        title={apiData.dayWeatherInfo.weather[0].description}
      />
    );
  }

  // Icon of the weather for MOBIL
  if (mobileDetailInfo) {
    if (getInfoDay.length === 0) {
      return <MobileError />;
    }
    // Change the img on detail window
    return (
      <Image
        src={`/icons/${imgSelecter(apiData.dayWeatherInfo.weather[0].icon)}.svg`}
        alt={`Icon of ${apiData.dayWeatherInfo.weather[0].description}`}
        layout="fill"
        objectFit="contain"
    />
    );
  }

  //Main Screen
  return (
    <Image
      src={`/icons/${imgSelecter(apiData.dayWeatherInfo.weather[0].icon)}.svg`}
      alt={`Icon of ${apiData.dayWeatherInfo.weather[0].description}`}
      layout="fill"
      objectFit="contain"
    />
  );
};

export default ImgText;
