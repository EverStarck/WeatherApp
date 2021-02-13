import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// Custom Hook
import useWindoSize from "../customHooks/useWindowSize";


import { MainFrame } from "../styles/Main";
import HeadInfo from "../components/HeadInfo";

import AppRoute from "../router/AppRoute";
import MobileError from "../components/Mobile/MobileError";


export default function Home({ userIpState }) {
  //Value of the input search
  const [searchValue, setSearchValue] = useState("");
  //Data about the user (location, country and city)
  const { country, city } = userIpState.location;
  // Get the width and height
  const winwdowsSizeHook = useWindoSize();


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

  // Dynamic import
  // Desktop
  const DesktopAppDynamic = dynamic(
    () => import("../components/Desktop/DesktopApp")
    // { loading: () => <h1>LOADING</h1> }
  );

  // Mobile
  const MobileAppDynamic = dynamic(
    () => import("../components/Mobile/MobileApp")
    // { loading: () => <h1>LOADING</h1> }
  );

  return (
    <MainFrame>
      {/* <HeadInfo apiData={apiData} apiIsReady={apiIsReady}/>

      {winwdowsSizeHook.width > 767 ? (
        <DesktopAppDynamic
          apiData={apiData}
          apiIsReady={apiIsReady}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchFetchData={searchFetchData}
          setApiIsReady={setApiIsReady}
          datesInfo={datesInfo}
        />
      ) : (
        <MobileAppDynamic
          apiData={apiData}
          apiIsReady={apiIsReady}
          setApiIsReady={setApiIsReady}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchFetchData={searchFetchData}
          datesInfo={datesInfo}
        />
      )} */}

      <AppRoute country={country} city={city} />
    </MainFrame>
  );
}

// GET IP
// This gets called on every request
export async function getStaticProps() {
  // console.log(req.headers) //see if you have those headers

  // Fetch data from external API
  let res = await fetch(`https://geo.ipify.org/api/v1?apiKey=aa`);

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

  // Fetch data from external API
  // let res2 = await fetch(`http://localhost:3000/api`);
  // const myData = await res2.json();
  // console.log(myData);

  console.log("IP," + process.env.NEXT_PUBLIC_IPIFY_KEY);
  console.log("WEATHER," + process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY);
  console.log("PIXABAY," + process.env.NEXT_PUBLIC_PIXABAY_KEY);

  // Pass data to the page via props
  return { props: { userIpState } };
}
