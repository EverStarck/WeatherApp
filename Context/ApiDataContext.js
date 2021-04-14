import React, { useState, useEffect } from "react";

export const ApiDataContext = React.createContext();

const ApiDataProvider = ({ children }) => {
  // All data from the apis. OpenWeatherMap and Pixebay
  const [apiData, setApiData] = useState({
    dayWeatherInfo: {},
    forecastWeatherInfo: {},
    pixabayBackground: {},
  });

  //Are the apis loaded when the web is opened? //False
  const [apiIsReady, setApiIsReady] = useState({
    dayWeather: false,
    forecastWeather: false,
    pixabay: false,
    modal: false,
  });

  return (
    <ApiDataContext.Provider
      value={{ apiData, setApiData, apiIsReady, setApiIsReady }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataProvider;
