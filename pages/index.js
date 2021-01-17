import React, { useState, useEffect } from "react";
import Head from "next/head";
import { MainFrame, Frame80 } from "../styles/Main";
import ImageBackground from "../components/background/ImageBackground";
import ForecastFrame from "../components/forcast/forecastFrame";

export default function Home({ userIpState }) {
  //Value of the input search
  const [searchValue, setSearchValue] = useState("");
  //Data about the user (location)
  const [userDataIp] = useState(userIpState.location);
  const { country, city } = userDataIp;
  //Background from pixabay
  const [backgroundPixabay, setBackgroundPixabay] = useState([]);
  //DAY Info from the weather api
  const [weatherInfo, setWeatherInfo] = useState([]);
  //FORECAST Info from the weather api
  const [forecastWeatherInfo, setForecastWeatherInfo] = useState([]);
  //DAY OpenWeatherApi is loaded when the web is opened? //False
  const [isReady, setIsReady] = useState(false);
  //FORECAST OpenWeatherApi is loaded when the web is opened? //False
  const [isReadyForcast, setIsReadyForcast] = useState(false);
  //PixabayApi is loaded when the web is opened? //False
  const [pixabayIsReady, setPixabayIsReady] = useState(false);

  // Fetch data at the open of the web
  async function fetchData() {
    //Pixabay Background
    let req = await fetch(
      `https://pixabay.com/api/?key=${procces.env.PIXABAY_KEY}&q=${city}&per_page=3`
    );

    const pixabayJson = await req.json();

    //If the API don't have imgs, put one
    if (!req.ok || pixabayJson.total === 0) {
      setBackgroundPixabay({
        fullHDURL: "/assets/mountain.jpg",
      });
    } else {
      //Set the first img only
      setBackgroundPixabay(pixabayJson.hits[0]);
    }
    setPixabayIsReady(true);

    //DAY Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${procces.env.OPENWEATHERMAP_KEY}
`
    );

    const weatherData = await req.json();
    //If the api don't response, show error text
    if (!req.ok || weatherData.cod === "404") {
      setIsReady(false);
    } else {
      setWeatherInfo(weatherData);
      setIsReady(true);
    }

    //FORECAST Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${procces.env.OPENWEATHERMAP_KEY}
`
    );

    const forecastWeatherData = await req.json();
    //If the api don't response, show error text
    if (!req.ok || forecastWeatherData.cod === "404") {
      setIsReadyForcast(false);
    } else {
      setForecastWeatherInfo(forecastWeatherData);
      setIsReadyForcast(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data at search city
  async function searchFetchData(e) {
    e.preventDefault();
    setIsReady(false);
    setPixabayIsReady(false);

    //Pixabay Background
    let req = await fetch(
      `https://pixabay.com/api/?key=${procces.env.PIXABAY_KEY}
&q=${searchValue}&per_page=3`
    );

    const pixabayJson = await req.json();

    //If the API don't have imgs, put one
    if (!req.ok || pixabayJson.total === 0) {
      setBackgroundPixabay({
        fullHDURL: "/assets/mountain.jpg",
      });
    } else {
      //Set the first img only
      setBackgroundPixabay(pixabayJson.hits[0]);
    }
    setPixabayIsReady(true);

    //DAY Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${procces.env.OPENWEATHERMAP_KEY}
`
    );

    const weatherData = await req.json();
    //If the api don't response, show error text
    if (!req.ok || weatherData.cod === "404") {
      setIsReady(false);
    } else {
      setWeatherInfo(weatherData);
      setIsReady(true);
    }

    //FORECAST Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=${procces.env.OPENWEATHERMAP_KEY}
`
    );

    const forecastWeatherData = await req.json();
    //If the api don't response, show error text
    if (!req.ok || forecastWeatherData.cod === "404") {
      setIsReadyForcast(false);
    } else {
      setForecastWeatherInfo(forecastWeatherData);
      setIsReadyForcast(true);
    }
  }

  return (
    <MainFrame>
      <Head>
        <title>WeatherApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageBackground
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchFetchData={searchFetchData}
        backgroundPixabay={backgroundPixabay}
        weatherInfo={weatherInfo}
        isReady={isReady}
        pixabayIsReady={pixabayIsReady}
      />

      <Frame80>
        <ForecastFrame
          forecastWeatherInfo={forecastWeatherInfo.list}
          isReadyForcast={isReadyForcast}
        />
      </Frame80>
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
