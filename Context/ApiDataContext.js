import React, { useState, useEffect } from "react";

export const ApiDataContext = React.createContext();

const ApiDataProvider = ({ children, ipInfo }) => {
  // const { city = "Mountain View", country = "US" } = ipInfo;
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
  // async function fetchData() {
  //   //Pixabay Background
  //   let req = await fetch(
  //     `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${city}&per_page=3`
  //   );

  //   const pixabayJson = await req.json();

  //   //If the API don't have imgs, put one
  //   if (!req.ok || pixabayJson.total === 0) {
  //     setApiData((apiData) => ({
  //       ...apiData,
  //       pixabayBackground: {
  //         fullHDURL: "/assets/mountain.webp",
  //       },
  //     }));
  //   } else {
  //     //Set the first img only
  //     setApiData((apiData) => ({
  //       ...apiData,
  //       pixabayBackground: pixabayJson.hits[0],
  //     }));
  //   }
  //   // Pixabay is Ready
  //   setApiIsReady((apiIsReady) => ({
  //     ...apiIsReady,
  //     pixabay: true,
  //   }));

  //   //DAY Openweathermap
  //   req = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
  //   );

  //   const weatherData = await req.json();

  //   //If the api don't response, show error text
  //   if (!req.ok || weatherData.cod === "404") {
  //     setApiIsReady((apiIsReady) => ({
  //       ...apiIsReady,
  //       dayWeather: false,
  //       modal: true,
  //     }));
  //   } else {
  //     setApiData((apiData) => ({
  //       ...apiData,
  //       dayWeatherInfo: weatherData,
  //     }));

  //     //dayWeather is Ready
  //     setApiIsReady((apiIsReady) => ({
  //       ...apiIsReady,
  //       dayWeather: true,
  //     }));
  //   }

  //   //FORECAST Openweathermap
  //   req = await fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
  //   );

  //   const forecastWeatherData = await req.json();

  //   //If the api don't response, show error text
  //   if (!req.ok || forecastWeatherData.cod === "404") {
  //     setApiIsReady((apiIsReady) => ({
  //       ...apiIsReady,
  //       forecastWeather: false,
  //       modal: true,
  //     }));
  //   } else {
  //     setApiData((apiData) => ({
  //       ...apiData,
  //       forecastWeatherInfo: {
  //         list: [
  //           weatherData, //Day
  //           forecastWeatherData.list[3], //Tomorrow
  //           forecastWeatherData.list[11],
  //           forecastWeatherData.list[19],
  //           forecastWeatherData.list[27],
  //           forecastWeatherData.list[35],
  //         ],
  //       },
  //     }));

  //     //forecastWeather is Ready
  //     setApiIsReady((apiIsReady) => ({
  //       ...apiIsReady,
  //       forecastWeather: true,
  //     }));
  //   }
  // }

  // useEffect(() => {
  //   // fetchData();
  // }, []);

  // Just for avoid fetch
  // useEffect(() => {
  //   setApiData({
  //     dayWeatherInfo: {
  //       coord: { lon: -122.0838, lat: 37.3861 },
  //       weather: [
  //         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
  //       ],
  //       base: "stations",
  //       main: {
  //         temp: 13.63,
  //         feels_like: 13.19,
  //         temp_min: 12,
  //         temp_max: 15.56,
  //         pressure: 1011,
  //         humidity: 82,
  //       },
  //       visibility: 10000,
  //       wind: { speed: 4.12, deg: 340 },
  //       clouds: { all: 1 },
  //       dt: 1618286525,
  //       sys: {
  //         type: 1,
  //         id: 5310,
  //         country: "US",
  //         sunrise: 1618234625,
  //         sunset: 1618281629,
  //       },
  //       timezone: -25200,
  //       id: 5375480,
  //       name: "Mountain View",
  //       cod: 200,
  //     },
  //     forecastWeatherInfo: {
  //       list: [
  //         {
  //           coord: { lon: -122.0838, lat: 37.3861 },
  //           weather: [
  //             { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
  //           ],
  //           base: "stations",
  //           main: {
  //             temp: 13.63,
  //             feels_like: 13.19,
  //             temp_min: 12,
  //             temp_max: 15.56,
  //             pressure: 1011,
  //             humidity: 82,
  //           },
  //           visibility: 10000,
  //           wind: { speed: 4.12, deg: 340 },
  //           clouds: { all: 1 },
  //           dt: 1618286525,
  //           sys: {
  //             type: 1,
  //             id: 5310,
  //             country: "US",
  //             sunrise: 1618234625,
  //             sunset: 1618281629,
  //           },
  //           timezone: -25200,
  //           id: 5375480,
  //           name: "Mountain View",
  //           cod: 200,
  //         },
  //         {
  //           dt: 1618326000,
  //           main: {
  //             temp: 10,
  //             feels_like: 9.49,
  //             temp_min: 10,
  //             temp_max: 10,
  //             pressure: 1012,
  //             sea_level: 1012,
  //             grnd_level: 1009,
  //             humidity: 77,
  //             temp_kf: 0,
  //           },
  //           weather: [
  //             {
  //               id: 801,
  //               main: "Clouds",
  //               description: "few clouds",
  //               icon: "02d",
  //             },
  //           ],
  //           clouds: { all: 23 },
  //           wind: { speed: 1.66, deg: 226 },
  //           visibility: 10000,
  //           pop: 0,
  //           sys: { pod: "d" },
  //           dt_txt: "2021-04-13 15:00:00",
  //         },
  //         {
  //           dt: 1618412400,
  //           main: {
  //             temp: 10.03,
  //             feels_like: 8.94,
  //             temp_min: 10.03,
  //             temp_max: 10.03,
  //             pressure: 1014,
  //             sea_level: 1014,
  //             grnd_level: 1011,
  //             humidity: 71,
  //             temp_kf: 0,
  //           },
  //           weather: [
  //             { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
  //           ],
  //           clouds: { all: 2 },
  //           wind: { speed: 0.63, deg: 137 },
  //           visibility: 10000,
  //           pop: 0,
  //           sys: { pod: "d" },
  //           dt_txt: "2021-04-14 15:00:00",
  //         },
  //         {
  //           dt: 1618498800,
  //           main: {
  //             temp: 11.57,
  //             feels_like: 10.24,
  //             temp_min: 11.57,
  //             temp_max: 11.57,
  //             pressure: 1016,
  //             sea_level: 1016,
  //             grnd_level: 1012,
  //             humidity: 56,
  //             temp_kf: 0,
  //           },
  //           weather: [
  //             { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
  //           ],
  //           clouds: { all: 0 },
  //           wind: { speed: 0.21, deg: 10 },
  //           visibility: 10000,
  //           pop: 0,
  //           sys: { pod: "d" },
  //           dt_txt: "2021-04-15 15:00:00",
  //         },
  //         {
  //           dt: 1618585200,
  //           main: {
  //             temp: 10.76,
  //             feels_like: 9.64,
  //             temp_min: 10.76,
  //             temp_max: 10.76,
  //             pressure: 1018,
  //             sea_level: 1018,
  //             grnd_level: 1014,
  //             humidity: 67,
  //             temp_kf: 0,
  //           },
  //           weather: [
  //             { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
  //           ],
  //           clouds: { all: 3 },
  //           wind: { speed: 0.36, deg: 4 },
  //           visibility: 10000,
  //           pop: 0,
  //           sys: { pod: "d" },
  //           dt_txt: "2021-04-16 15:00:00",
  //         },
  //         {
  //           dt: 1618671600,
  //           main: {
  //             temp: 12.68,
  //             feels_like: 11.73,
  //             temp_min: 12.68,
  //             temp_max: 12.68,
  //             pressure: 1017,
  //             sea_level: 1017,
  //             grnd_level: 1013,
  //             humidity: 66,
  //             temp_kf: 0,
  //           },
  //           weather: [
  //             { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
  //           ],
  //           clouds: { all: 8 },
  //           wind: { speed: 0.48, deg: 300 },
  //           visibility: 10000,
  //           pop: 0,
  //           sys: { pod: "d" },
  //           dt_txt: "2021-04-17 15:00:00",
  //         },
  //       ],
  //     },
  //     pixabayBackground: {
  //       id: 351266,
  //       pageURL:
  //         "https://pixabay.com/photos/pyrenees-mountains-snow-landscape-351266/",
  //       type: "photo",
  //       tags: "pyrenees, mountains, snow",
  //       previewURL:
  //         "https://cdn.pixabay.com/photo/2014/05/22/16/52/pyrenees-351266_150.jpg",
  //       previewWidth: 150,
  //       previewHeight: 99,
  //       webformatURL:
  //         "https://pixabay.com/get/g5fd537f6a55e195c89f74c1c420bce39def2b0a20dbcfae938b9859b57bdbae830321edf80834ca7fe141b47472d3147_640.jpg",
  //       webformatWidth: 640,
  //       webformatHeight: 426,
  //       largeImageURL:
  //         "https://pixabay.com/get/g2996306664a0de047e16cdccb7a06e009a5daf05ebd875f339180b46bb03281864cf9af3213a4ec98282a6a6d2ff6882a8308323fde80cced6cd7f8a29fac55d_1280.jpg",
  //       imageWidth: 2247,
  //       imageHeight: 1498,
  //       imageSize: 490529,
  //       views: 377835,
  //       downloads: 185304,
  //       favorites: 926,
  //       likes: 1126,
  //       comments: 172,
  //       user_id: 261998,
  //       user: "Witizia",
  //       userImageURL:
  //         "https://cdn.pixabay.com/user/2014/05/22/17-07-12-990_250x250.jpg",
  //       id_hash: "351266",
  //       fullHDURL:
  //         "https://pixabay.com/get/g94ebd53b9a3920207ac0bb0b64c77f787d80d9770a276a0a7ff2c3929b017fe39240ef1fa2ef2e566b0dd0cf1af0338fc24a40fddc793b64c9a4d77097d0deba_1920.jpg",
  //       imageURL:
  //         "https://pixabay.com/get/g3dabb83d4196823b2b2710d2ccf381d8b983616e1e78d97146e311dd072c9fb61a9f9bf1753fd5cbc6fe1d7415e54eea.jpg",
  //     },
  //   });

  //   setApiIsReady({
  //     dayWeather: true,
  //     forecastWeather: true,
  //     pixabay: true,
  //     modal: false,
  //   });
  // }, []);
  return (
    <ApiDataContext.Provider
      value={{ apiData, setApiData, apiIsReady, setApiIsReady }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataProvider;
