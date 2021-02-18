import React, { useState, useEffect } from "react";

export const ApiDataContext = React.createContext();

const ApiDataProvider = ({ children, ipInfo }) => {
  const { city = "Mountain View", country = "US" } = ipInfo;
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

  // Fetch data at the open of the web
  async function fetchData() {
    //Pixabay Background
    let req = await fetch(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${city}&per_page=3`
    );

    const pixabayJson = await req.json();

    //If the API don't have imgs, put one
    if (!req.ok || pixabayJson.total === 0) {
      setApiData((apiData) => ({
        ...apiData,
        pixabayBackground: {
          fullHDURL: "/assets/mountain.webp",
        },
      }));
    } else {
      //Set the first img only
      setApiData((apiData) => ({
        ...apiData,
        pixabayBackground: pixabayJson.hits[0],
      }));
    }
    // Pixabay is Ready
    setApiIsReady((apiIsReady) => ({
      ...apiIsReady,
      pixabay: true,
    }));

    //DAY Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
    );

    const weatherData = await req.json();

    //If the api don't response, show error text
    if (!req.ok || weatherData.cod === "404") {
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        dayWeather: false,
        modal: true,
      }));
    } else {
      setApiData((apiData) => ({
        ...apiData,
        dayWeatherInfo: weatherData,
      }));

      //dayWeather is Ready
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        dayWeather: true,
      }));
    }

    //FORECAST Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
    );

    const forecastWeatherData = await req.json();

    //If the api don't response, show error text
    if (!req.ok || forecastWeatherData.cod === "404") {
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        forecastWeather: false,
        modal: true,
      }));
    } else {
      setApiData((apiData) => ({
        ...apiData,
        forecastWeatherInfo: {
          list: [
            weatherData, //Day
            forecastWeatherData.list[3], //Tomorrow
            forecastWeatherData.list[11],
            forecastWeatherData.list[19],
            forecastWeatherData.list[27],
            forecastWeatherData.list[35],
          ],
        },
      }));

      //forecastWeather is Ready
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        forecastWeather: true,
      }));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiDataContext.Provider
      value={{ apiData, setApiData, apiIsReady, setApiIsReady }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataProvider;
