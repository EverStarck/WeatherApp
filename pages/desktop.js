// Render Desktop page
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// Hook
import useWindowSize from "../customHooks/useWindowSize";

// Styles
import { MainFrame } from "../styles/Main";

// Context
import ApiDataProvider from "../Context/ApiDataContext";
import SearchProvider from "../Context/SearchContext";
import DaysInfoProvider from "../Context/DaysInfoContext";
import GetInfoDayProvider from "../Context/Mobile/GetInfoDayContext";

const desktop = () => {
  // Render MOBILE page
  const router = useRouter();
  const winwdowsSizeHook = useWindowSize();
  useEffect(() => {
    if (winwdowsSizeHook.width < 767) {
      router.replace("/");
    }
  }, [winwdowsSizeHook.width]);

  //------------------------
  const DesktopAppDynamic = dynamic(
    () => import("../components/Desktop/DesktopApp")
    // { loading: () => <h1>LOADING</h1> }
  );
  return (
    <MainFrame>
      <ApiDataProvider ipInfo={router.query}>
        <SearchProvider>
          <DaysInfoProvider>
            <GetInfoDayProvider>
              <DesktopAppDynamic />
            </GetInfoDayProvider>
          </DaysInfoProvider>
        </SearchProvider>
      </ApiDataProvider>
    </MainFrame>
  );
};

export default desktop;
