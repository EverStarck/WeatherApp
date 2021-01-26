import React, { useState, useEffect } from "react";
import Head from "next/head";
// import dynamic from "next/dynamic";

// Custom Hook
import useWindoSize from "../customHooks/useWindowSize";

import DesktopApp from "../components/Desktop/DesktopApp";
import MobileApp from "../components/Mobile/MobileApp";

import { MainFrame } from "../styles/Main";

export default function Home({ userIpState }) {
  //Value of the input search
  const [searchValue, setSearchValue] = useState("");
  //Data about the user (location)
  const [userDataIp] = useState(userIpState.location);
  const { country, city } = userDataIp;

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

  const winwdowsSizeHook = useWindoSize();

  // Fetch data at the open of the web
  async function fetchData() {
    //Pixabay Background
    let req = await fetch(
      `https://pixabay.com/api/?key=${proccess.env.PIXABAY_KEY}
&q=${city}&per_page=3`
    );

    const pixabayJson = await req.json();

    //If the API don't have imgs, put one
    if (!req.ok || pixabayJson.total === 0) {
      setApiData((apiData) => ({
        ...apiData,
        pixabayBackground: {
          fullHDURL: "/assets/mountain.jpg",
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
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${proccess.env.OPENWEATHERMAP_KEY}`
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
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${proccess.env.OPENWEATHERMAP_KEY}`
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
        forecastWeatherInfo: forecastWeatherData,
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
      `https://pixabay.com/api/?key=16548154-${proccess.env.PIXABAY_KEY}
&q=${searchValue}&per_page=3`
    );

    const pixabayJson = await req.json();

    //If the API don't have imgs, put one
    if (!req.ok || pixabayJson.total === 0) {
      setApiData((apiData) => ({
        ...apiData,
        pixabayBackground: {
          fullHDURL: "/assets/mountain.jpg",
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
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${proccess.env.OPENWEATHERMAP_KEY}`
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
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=${proccess.env.OPENWEATHERMAP_KEY}`
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
        forecastWeatherInfo: forecastWeatherData,
      }));

      //forecastWeather is Ready
      setApiIsReady((apiIsReady) => ({
        ...apiIsReady,
        forecastWeather: true,
      }));
    }
  }

  // Dynamic import
  // Desktop
  // const DesktopApp = dynamic(
  //   () => import("../components/Desktop/DesktopApp"),
  //   // { loading: () => <h1>LOADING</h1> }
  // );
  // import DesktopApp from "../components/Desktop/DesktopApp";

  // Mobile
  // const MobileApp = dynamic(
  //   () => import("../components/Mobile/MobileApp"),
  //   // { loading: () => <h1>LOADING</h1> }
  // );
  // import MobileApp from "../components/Mobile/MobileApp";

  return (
    <MainFrame>
      <Head>
        <title>WeatherApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {winwdowsSizeHook.width > 767 ? (
        <DesktopApp
          apiData={apiData}
          apiIsReady={apiIsReady}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchFetchData={searchFetchData}
          setApiIsReady={setApiIsReady}
        />
      ) : (
        <MobileApp
          apiData={apiData}
          apiIsReady={apiIsReady}
          setApiIsReady={setApiIsReady}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchFetchData={searchFetchData}
        />
      )}
    </MainFrame>
  );
}

// GET IP
// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  let res = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_KEY}`
  );

  //If the api don't response, show the data of Mountan View
  if (!res.ok) {
    return {
      props: {
        userIpState: {
          location: {
            country: "US",
            region: "California",
            city: "Mountain View",
            lat: 37.40599,
            lng: -122.078514,
            postalCode: "94043",
            timezone: "-07:00",
            geonameId: 5375481,
          },
        },
      },
    };
  }

  const userIpState = await res.json();

  console.log("IP," + process.env.IPIFY_KEY);
  console.log("WEATHER," + process.env.OPENWEATHERMAP_KEY);
  console.log("PIXABAY," + process.env.PIXABAY_KEY);

  // Pass data to the page via props
  return { props: { userIpState } };
}
