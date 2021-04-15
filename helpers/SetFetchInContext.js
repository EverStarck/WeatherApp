import { useContext, useEffect } from "react";
import { ApiDataContext } from "../Context/ApiDataContext";

const SetFetchInContext = ({ fetchDay, fetchForecast }) => {
  // Context
  const { apiData, setApiData, setApiIsReady } = useContext(ApiDataContext);

  function setData() {
    // Check if the api fetch well
    if (fetchDay || fetchForecast === "Error calling to the api") {
      setApiData({
        dayWeatherInfo: {
          coord: { lon: -122.0838, lat: 37.3861 },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          base: "stations",
          main: {
            temp: 13.63,
            feels_like: 13.19,
            temp_min: 12,
            temp_max: 15.56,
            pressure: 1011,
            humidity: 82,
          },
          visibility: 10000,
          wind: { speed: 4.12, deg: 340 },
          clouds: { all: 1 },
          dt: 1618286525,
          sys: {
            type: 1,
            id: 5310,
            country: "US",
            sunrise: 1618234625,
            sunset: 1618281629,
          },
          timezone: -25200,
          id: 5375480,
          name: "Mountain View",
          cod: 200,
        },
        forecastWeatherInfo: {
          list: [
            {
              coord: { lon: -122.0838, lat: 37.3861 },
              weather: [
                {
                  id: 800,
                  main: "Clear",
                  description: "clear sky",
                  icon: "01n",
                },
              ],
              base: "stations",
              main: {
                temp: 13.63,
                feels_like: 13.19,
                temp_min: 12,
                temp_max: 15.56,
                pressure: 1011,
                humidity: 82,
              },
              visibility: 10000,
              wind: { speed: 4.12, deg: 340 },
              clouds: { all: 1 },
              dt: 1618286525,
              sys: {
                type: 1,
                id: 5310,
                country: "US",
                sunrise: 1618234625,
                sunset: 1618281629,
              },
              timezone: -25200,
              id: 5375480,
              name: "Mountain View",
              cod: 200,
            },
            {
              dt: 1618326000,
              main: {
                temp: 10,
                feels_like: 9.49,
                temp_min: 10,
                temp_max: 10,
                pressure: 1012,
                sea_level: 1012,
                grnd_level: 1009,
                humidity: 77,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 801,
                  main: "Clouds",
                  description: "few clouds",
                  icon: "02d",
                },
              ],
              clouds: { all: 23 },
              wind: { speed: 1.66, deg: 226 },
              visibility: 10000,
              pop: 0,
              sys: { pod: "d" },
              dt_txt: "2021-04-13 15:00:00",
            },
            {
              dt: 1618412400,
              main: {
                temp: 10.03,
                feels_like: 8.94,
                temp_min: 10.03,
                temp_max: 10.03,
                pressure: 1014,
                sea_level: 1014,
                grnd_level: 1011,
                humidity: 71,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 800,
                  main: "Clear",
                  description: "clear sky",
                  icon: "01d",
                },
              ],
              clouds: { all: 2 },
              wind: { speed: 0.63, deg: 137 },
              visibility: 10000,
              pop: 0,
              sys: { pod: "d" },
              dt_txt: "2021-04-14 15:00:00",
            },
            {
              dt: 1618498800,
              main: {
                temp: 11.57,
                feels_like: 10.24,
                temp_min: 11.57,
                temp_max: 11.57,
                pressure: 1016,
                sea_level: 1016,
                grnd_level: 1012,
                humidity: 56,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 800,
                  main: "Clear",
                  description: "clear sky",
                  icon: "01d",
                },
              ],
              clouds: { all: 0 },
              wind: { speed: 0.21, deg: 10 },
              visibility: 10000,
              pop: 0,
              sys: { pod: "d" },
              dt_txt: "2021-04-15 15:00:00",
            },
            {
              dt: 1618585200,
              main: {
                temp: 10.76,
                feels_like: 9.64,
                temp_min: 10.76,
                temp_max: 10.76,
                pressure: 1018,
                sea_level: 1018,
                grnd_level: 1014,
                humidity: 67,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 800,
                  main: "Clear",
                  description: "clear sky",
                  icon: "01d",
                },
              ],
              clouds: { all: 3 },
              wind: { speed: 0.36, deg: 4 },
              visibility: 10000,
              pop: 0,
              sys: { pod: "d" },
              dt_txt: "2021-04-16 15:00:00",
            },
            {
              dt: 1618671600,
              main: {
                temp: 12.68,
                feels_like: 11.73,
                temp_min: 12.68,
                temp_max: 12.68,
                pressure: 1017,
                sea_level: 1017,
                grnd_level: 1013,
                humidity: 66,
                temp_kf: 0,
              },
              weather: [
                {
                  id: 800,
                  main: "Clear",
                  description: "clear sky",
                  icon: "01d",
                },
              ],
              clouds: { all: 8 },
              wind: { speed: 0.48, deg: 300 },
              visibility: 10000,
              pop: 0,
              sys: { pod: "d" },
              dt_txt: "2021-04-17 15:00:00",
            },
          ],
        },
        pixabayBackground: {
          fullHDURL: "/assets/mountainView.webp",
        },
      });
    } else {
      setApiData({
        dayWeatherInfo: fetchDay,
        forecastWeatherInfo: {
          list: [
            fetchDay, //Day
            fetchForecast.list[3], //Tomorrow
            fetchForecast.list[11],
            fetchForecast.list[19],
            fetchForecast.list[27],
            fetchForecast.list[35],
          ],
        },
        pixabayBackground: {
          fullHDURL: "/assets/mountainView.webp",
        },
      });
    }
  }

  function apiReady() {
    setApiIsReady({
      dayWeather: true,
      forecastWeather: true,
      pixabay: true,
      modal: false,
    });
  }

  useEffect(() => {
    setData();
    apiReady();
  }, []);

  return <></>;
};

export default SetFetchInContext;
