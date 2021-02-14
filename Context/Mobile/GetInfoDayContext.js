import React, { useState, useEffect, useContext } from "react";

import { ApiDataContext } from "../ApiDataContext";
import { DaysInfoContext } from "../DaysInfoContext";

export const GetInfoDayContext = React.createContext();

const GetInfoDayProvider = ({ children, mobileIndex }) => {
  const [getInfoDay, setGetInfoDay] = useState([]);

  //   Context
  const { apiData } = useContext(ApiDataContext);
  const { datesInfo } = useContext(DaysInfoContext);

  //Set forecast info in array, this depend of where do you make the clic
  useEffect(() => {
    switch (mobileIndex) {
      case 0:
        setGetInfoDay([
          apiData.forecastWeatherInfo.list[0],
          datesInfo.today.dateInfo.number,
        ]);
        break;
      case 1:
        setGetInfoDay([
          apiData.forecastWeatherInfo.list[1],
          datesInfo[0].dateInfo.letter,
        ]);
        break;
      case 2:
        setGetInfoDay([
          apiData.forecastWeatherInfo.list[2],
          datesInfo[1].dateInfo.number,
        ]);
        break;
      case 3:
        setGetInfoDay([
          apiData.forecastWeatherInfo.list[3],
          datesInfo[2].dateInfo.number,
        ]);
        break;
      case 4:
        setGetInfoDay([
          apiData.forecastWeatherInfo.list[4],
          datesInfo[3].dateInfo.number,
        ]);
        break;
      case 5:
        setGetInfoDay([
          apiData.forecastWeatherInfo.list[5],
          datesInfo[4].dateInfo.number,
        ]);
        break;
    }
  }, [mobileIndex]);

  return (
    <GetInfoDayContext.Provider value={{ getInfoDay, setGetInfoDay }}>
      {children}
    </GetInfoDayContext.Provider>
  );
};

export default GetInfoDayProvider;
