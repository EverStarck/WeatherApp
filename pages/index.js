import HeadInfo from "../components/HeadInfo";
import AppRoute from "../router/AppRoute";

export default function Home({ userIpState }) {
  //Data about the user (location, country and city)
  const { country, city } = userIpState.location;

  return (
    //  <HeadInfo apiData={apiData} apiIsReady={apiIsReady}/>

    <AppRoute country={country} city={city} />
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
