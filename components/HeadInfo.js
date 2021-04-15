import Head from "next/head";
import { useContext } from "react";
import { ApiDataContext } from "../Context/ApiDataContext";
import { imgSelecter } from "../helpers/ImageSelector";

const HeadInfo = () => {
  // Context
  const { apiData, apiIsReady } = useContext(ApiDataContext);
  return (
    <Head>
      {/* TITLE */}
      {apiIsReady.dayWeather ? (
        <title>
          {apiData.dayWeatherInfo.main.temp.toString()} &#xb0;C -{" "}
          {apiData.dayWeatherInfo.name} || Weather App
        </title>
      ) : (
        <title>Weather App</title>
      )}

      {/* FAVICON */}
      {apiIsReady.dayWeather ? (
        <link
          rel="icon"
          type="image/svg+xml"
          // href={`/icons/${apiData.dayWeatherInfo.weather[0].icon}.svg`}
          href={`/icons/${imgSelecter(apiData.dayWeatherInfo.weather[0].icon)}.svg`}
        />
      ) : (
        <link rel="icon" type="image/svg+xml" href="/icons/01d.svg" />
      )}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta
        name="description"
        content="🔎 Get the latest weather information for today and the next 5 days and also enjoy beautiful images of it!"
      />
      <meta
        name="keywords"
        content="Weather info, openweathermaps, Weather next days, pixabay"
      />
      <meta
        name="author"
        content="Made by EverStarck. Thanks to Pixabay and OpenWeatherMaps"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EverStarck" />
      <meta name="twitter:creator" content="@EverStarck" />
      <meta property="og:url" content="https://www.weather.everstarck.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Weather App by EverStarck" />
      <meta
        property="og:description"
        content="🔎 Get the latest weather information for today and the next 5 days and also enjoy beautiful images of it!"
      />
      <meta
        property="og:image"
        content="https://weather.everstarck.com/MetaTagImage.png"
      />
      <link rel="canonical" href="https://www.everstarck.com" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#596c71" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="google-site-verification" content="ZJbTYzN7mCOFKfUVozRPtd02757Q7IFuxa8xU-66s48" />
    </Head>
  );
};

export default HeadInfo;
