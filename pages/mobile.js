// Render MOBILE page
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import useWindowSize from "../customHooks/useWindowSize";

///-------------
import { MainFrame } from "../styles/Main";
import MobileApp from "../components/Mobile/MobileApp";

// Context
import { ApiDataContext } from "../Context/ApiDataContext";
import DaysInfoProvider from "../Context/DaysInfoContext";
import SearchProvider from "../Context/SearchContext";
import MobileDetailProvider from "../Context/Mobile/MobileDetailAndIndexContext";
import GetInfoDayProvider from "../Context/Mobile/GetInfoDayContext";

const mobile = () => {
  // Context
  const { apiData } = useContext(ApiDataContext);

  // Render Mobile page
  const router = useRouter();
  const winwdowsSizeHook = useWindowSize();

  // Avoid don't load nothing because the provider don't have info.
  useEffect(() => {
    if (Object.keys(apiData.dayWeatherInfo).length === 0) {
      router.push({
        pathname: "/",
      });
    }
  }, []);

  useEffect(() => {
    if (winwdowsSizeHook.width > 767) {
      router.replace("/");
    }
  }, [winwdowsSizeHook.width]);

  return (
    <MainFrame>
      <SearchProvider>
        <DaysInfoProvider>
          <MobileDetailProvider>
            <GetInfoDayProvider>
              <MobileApp />
            </GetInfoDayProvider>
          </MobileDetailProvider>
        </DaysInfoProvider>
      </SearchProvider>
    </MainFrame>
  );
};

export default mobile;
