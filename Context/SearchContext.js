import React, { useContext, useState } from "react";
import { ApiDataContext } from "./ApiDataContext";

export const SearchContext = React.createContext();

const SearchProvider = ({ children }) => {
  const { apiData, setApiData, apiIsReady, setApiIsReady } = useContext(
    ApiDataContext
  );

  //Value of the input search
  const [searchValue, setSearchValue] = useState("");

  // Fetch data at search city
  async function searchFetchData(e) {
    e.preventDefault();

    // All the apis don't load yet
    setApiIsReady((apiIsReady) => ({
      dayWeather: false,
      forecastWeather: false,
      pixabay: false,
      modal: false,
    }));

    //Pixabay Background
    let req = await fetch(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}

&q=${searchValue}&per_page=3`
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
    //pixabay is Ready
    setApiIsReady((apiIsReady) => ({
      ...apiIsReady,
      pixabay: true,
    }));

    //DAY Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}
`
    );

    const weatherData = await req.json();
    //If the api don't response, show error text
    if (!req.ok || weatherData.cod === "404") {
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        dayWeather: false,
      }));
    } else {
      setApiData((apiData) => ({
        ...apiData,
        dayWeatherInfo: weatherData,
        modal: true,
      }));

      //dayWeather is Ready
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        dayWeather: true,
      }));
    }

    //FORECAST Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}
`
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

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, searchFetchData }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
