import React, { useState, useEffect } from "react";
import Head from "next/head";
import { MainFrame, Frame80 } from "../styles/Main";
import ImageBackground from "../components/ImageBackground";

export default function Home({ userIpState, title }) {
  //Value of the input search
  const [searchValue, setSearchValue] = useState("");
  //Data about the user (location)
  const [userDataIp] = useState(userIpState.location);
  //Background from pixabay
  const [backgroundPixabay, setBackgroundPixabay] = useState([]);
  //Info from the weather api
  const [WeatherInfo, setWeatherInfo] = useState([]);


  const { country, city } = userDataIp;

  async function fetchData() {
    //Pixabay Background
    let req = await fetch(
      `https://pixabay.com/api/?key=16548154-5a2a1bb33b7d39c9155307e21&q=${city}&per_page=3`
    );

    //If the api don't response, show default Image
    // if (!res.ok) {
    //   return {
    //     props: {
    //       userIpState: {
    //         location: {
    //           country: "US",
    //           region: "California",
    //           city: "Mountain View",
    //           lat: 37.40599,
    //           lng: -122.078514,
    //           postalCode: "94043",
    //           timezone: "-07:00",
    //           geonameId: 5375481,
    //         },
    //       },
    //     },
    //   };
    // }

    const pixabayJson = await req.json();
    setBackgroundPixabay(pixabayJson.hits[0]);

    //Openweathermap
    req = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8fd68c9d020a9bf0f2a7482a46cf04a0`
    );

    //If the api don't response, show error text

    // if (!req.ok) {
    //   return {
    //     notFound: true,
    //   };
    // }

    const weatherData = await req.json();
    setWeatherInfo(weatherData);
  }

  //Fetch data on open the web
  useEffect(() => {
    fetchData();
  }, []);

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
export async function getStaticProps() {
  // Fetch data from external API
  // GET IP
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
