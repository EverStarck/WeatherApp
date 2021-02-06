import Head from "next/head";

const HeadInfo = ({apiData,apiIsReady }) => {
  return (
    <Head>
      {/* TITLE */}
      {apiIsReady.dayWeather ? (
        <title>
          {apiData.dayWeatherInfo.main.temp.toString()} &#xb0;C -{" "}
          {apiData.dayWeatherInfo.name}
        </title>
      ) : (
        <title>Loading...</title>
      )}

      {/* FAVICON */}
      {apiIsReady.dayWeather ? (
        <link
          rel="icon"
          type="image/svg+xml"
          href={`/icons/${apiData.dayWeatherInfo.weather[0].icon}.svg`}
        />
      ) : (
        <link rel="icon" href="/favicon.ico" />
      )}

      {/* DESCRIPTION */}
      <meta
        name="description"
        content="The latest weather information for today and the next 5 days"
      />
      <meta
        name="keywords"
        content="Weather info, openweathermaps, Weather next days, pixabay"
      />
      <meta
        name="author"
        content="Made by EverStarck. Thanks to Pixabay, OpenWeatherMaps and IPIFY"
      />
    </Head>
  );
};

export default HeadInfo;