import React, { useState } from "react";
import Head from "next/head";
import { MainFrame, Frame80 } from "../styles/Main";
import ImageBackground from "../components/ImageBackground";

export default function Home({
  userIpState,
  backgroundPixabayState,
  WeatherInfoState,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [userDataIp] = useState(userIpState.location);
  const [backgroundPixabay, setBackgroundPixabay] = useState(
    backgroundPixabayState.hits[0]
  );
  const [WeatherInfo] = useState(WeatherInfoState);

  const { country, region, city, lat, lng } = userDataIp;

  console.log(city,"country: ", country);
  console.log(backgroundPixabay);
  console.log(WeatherInfo);

  return (
    <MainFrame>
      <Head>
        <title>WeatherApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageBackground
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </MainFrame>
  );
}

// This gets called on every request
export async function getStaticProps({ city }) {
  // Fetch data from external API
  // GET IP
  let res = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_KEY}`
  );
  const userIpState = await res.json();

  //GET BACKGROUND from PIXABAY
  res = await fetch(
    `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${city}&per_page=3`
  );
  const backgroundPixabayState = await res.json();

  //GET WEATHER Info
  res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=MX&appid=${process.env.OPENWEATHERMAP_KEY}`
  );
  const WeatherInfoState = await res.json();

    console.log("aa" + userIpState )

  console.log("IP," + process.env.IPIFY_KEY);
  console.log("WEATHER," + process.env.OPENWEATHERMAP_KEY);
  console.log("PIXABAY," + process.env.PIXABAY_KEY);

  // Pass data to the page via props
  return { props: { userIpState, backgroundPixabayState, WeatherInfoState } };
}
