import "../styles/globals.css";
import "normalize.css";
import ApiDataProvider from "../Context/ApiDataContext";
import HeadInfo from "../components/HeadInfo";

function MyApp({ Component, pageProps }) {
  return (
    <ApiDataProvider>
      <HeadInfo/>

      <Component {...pageProps} />
    </ApiDataProvider>
  );
}

export default MyApp;
