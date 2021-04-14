// Render MOBILE page
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import useWindowSize from "../customHooks/useWindowSize";

///-------------
import { MainFrame } from "../styles/Main";
import MobileApp from "../components/Mobile/MobileApp";

// Context
import ApiDataProvider from "../Context/ApiDataContext";
import DaysInfoProvider from "../Context/DaysInfoContext";
import SearchProvider from "../Context/SearchContext";
import MobileDetailProvider from "../Context/Mobile/MobileDetailAndIndexContext";
import GetInfoDayProvider from "../Context/Mobile/GetInfoDayContext";

const mobile = () => {
  // Render Mobile page
  const router = useRouter();
  const winwdowsSizeHook = useWindowSize();
  useEffect(() => {
    if (winwdowsSizeHook.width > 767) {
      router.replace("/");
    }
  }, [winwdowsSizeHook.width]);

  return (
    <MainFrame>
      {/* <ApiDataProvider ipInfo={router.query}> */}
        <SearchProvider>
          <DaysInfoProvider>
            <MobileDetailProvider>
              <GetInfoDayProvider >
                <MobileApp/>
              </GetInfoDayProvider>
            </MobileDetailProvider>
          </DaysInfoProvider>
        </SearchProvider>
      {/* </ApiDataProvider> */}
    </MainFrame>
  );
};

export default mobile;
