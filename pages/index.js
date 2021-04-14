import HeadInfo from "../components/HeadInfo";
import { fetcher } from "../helpers/fetcher";
import SetFetchInContext from "../helpers/SetFetchInContext";
import AppRoute from "../router/AppRoute";

export default function Home({ userIpState, fetchDay, fetchForecast }) {
  //Data about the user (location, country and city)
  const { country, city } = userIpState.location;
  return (
    //  <HeadInfo apiData={apiData} apiIsReady={apiIsReady}/>
    <>
      <SetFetchInContext fetchDay={fetchDay} fetchForecast={fetchForecast} />
      <AppRoute
      // country={country} city={city}
      />
    </>
  );
}

export const getStaticProps = async () => {
  // Date of the initial location
  const userIpState = {
    location: {
      country: "US",
      city: "Mountain View",
    },
  };

  // Fetch day wehather info
  const fetchDay = await fetcher(
    `https://api.openweathermap.org/data/2.5/weather?q=US,Mountain View&units=metric&appid=dsa${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
  );
  // Fetch forecast info
  const fetchForecast = await fetcher(
    `https://api.openweathermap.org/data/2.5/forecast?q=US,Mountain View&units=metric&appid=dad${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
  );

  return { props: { userIpState, fetchDay, fetchForecast }, revalidate: 86400 };
};
