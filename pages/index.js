import { fetcher } from "../helpers/fetcher";
import SetFetchInContext from "../helpers/SetFetchInContext";
import AppRoute from "../router/AppRoute";
export default function Home({ fetchDay, fetchForecast }) {
  return (
    <>
      <SetFetchInContext fetchDay={fetchDay} fetchForecast={fetchForecast} />
      <AppRoute />
    </>
  );
}

export const getStaticProps = async () => {
  // Fetch day wehather info
  const fetchDay = await fetcher(
    `https://api.openweathermap.org/data/2.5/weather?q=US,Mountain View&units=metric&appid=dsa${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
  );
  // Fetch forecast info
  const fetchForecast = await fetcher(
    `https://api.openweathermap.org/data/2.5/forecast?q=US,Mountain View&units=metric&appid=dad${process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY}`
  );

  return { props: { fetchDay, fetchForecast }, revalidate: 86400 };
};
