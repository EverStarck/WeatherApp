import React, { useContext, useState } from "react";
import { fetcher } from "../helpers/fetcher";
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

    // --------------------------------------------------------------------------

    // Fetch Pixabay Background
    const fetchPixabay = await fetcher(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${searchValue}&per_page=3`
    );

    //If the API don't have imgs, put one
    if (
      fetchPixabay === "Error calling to the api" ||
      fetchPixabay.total === 0
    ) {
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
        pixabayBackground: fetchPixabay.hits[0],
      }));
    }

    //Set Pixabay to Ready
    setApiIsReady((apiIsReady) => ({
      ...apiIsReady,
      pixabay: true,
    }));

    // --------------------------------------------------------------------------

    // Fetch DAY Openweathermap
    const fetchDayWeather = await fetcher(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
    );

    //If the api don't response, show error text
    if (fetchDayWeather === "Error calling to the api") {
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        dayWeather: false,
      }));
    } else {
      setApiData((apiData) => ({
        ...apiData,
        dayWeatherInfo: fetchDayWeather,
        modal: true,
      }));

      //Set dayWeather to Ready
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        dayWeather: true,
      }));
    }

    // --------------------------------------------------------------------------

    // Fetch FORECAST Openweathermap
    const fetchForecastWeather = await fetcher(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
    );

    //If the api don't response, show error text
    if (fetchForecastWeather === "Error calling to the api") {
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
            fetchDayWeather, //Day
            fetchForecastWeather.list[3], //Tomorrow
            fetchForecastWeather.list[11],
            fetchForecastWeather.list[19],
            fetchForecastWeather.list[27],
            fetchForecastWeather.list[35],
          ],
        },
      }));

      //Set forecastWeather to Ready
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
