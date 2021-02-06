export async function searchFetchDataTest(searchValue,setBackgroundPixabay ) {
  //Pixabay Background
  let req = await fetch(
    `https://pixabay.com/api/?key=16548154-5a2a1bb33b7d39c9155307e21&q=${searchValue}&per_page=3`
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

  //Openweathermap
  req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8fd68c9d020a9bf0f2a7482a46cf04a0`
  );

  const weatherData = await req.json();
  //If the api don't response, show error text
  if (!req.ok || weatherData.cod === "404") {
    setIsReady(false);
  } else {
    setWeatherInfo(weatherData);
    setIsReady(true);
  }
}
