import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

export const DaysInfoContext = React.createContext();

const DaysInfoProvider = ({ children }) => {
  // Dates of days
  const [datesInfo, setDatesInfo] = useState({});

  //Logic
  const mobileDaysForecast = (add) => {
    return {
      letter: dayjs().add(add, "days").format("ddd, DD MMM"),
      number: dayjs().add(add, "days").format("MM/DD/YYYY"),
    };
  };

  // Set the days
  const setTheDays = () => {
    setDatesInfo({
      0: {
        dateInfo: {
          letter: "Tomorrow",
          number: mobileDaysForecast(1).number,
        },
      },
      1: { dateInfo: mobileDaysForecast(2) },
      2: { dateInfo: mobileDaysForecast(3) },
      3: { dateInfo: mobileDaysForecast(4) },
      4: { dateInfo: mobileDaysForecast(5) },
      today: { dateInfo: mobileDaysForecast(0) },
    });
  };

  useEffect(() => {
    setTheDays();
  }, []);

  return (
    <DaysInfoContext.Provider value={{ datesInfo, setDatesInfo }}>
      {children}
    </DaysInfoContext.Provider>
  );
};

export default DaysInfoProvider;
