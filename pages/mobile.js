// Render MOBILE page
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import useWindowSize from "../customHooks/useWindowSize";

///-------------
import dynamic from "next/dynamic";
import { MainFrame } from "../styles/Main";

// Context
import ApiDataProvider, { ApiDataContext } from "../Context/ApiDataContext";
import DaysInfoProvider from "../Context/DaysInfoContext";
import SearchProvider from "../Context/SearchContext";

const mobile = () => {
  // Render DESKTOP page
  const router = useRouter();
  const winwdowsSizeHook = useWindowSize();
  useEffect(() => {
    if (winwdowsSizeHook.width > 767) {
      router.replace("/");
    }
  }, [winwdowsSizeHook.width]);

  //------------------------
  const MobileAppDynamic = dynamic(
    () => import("../components/Mobile/MobileApp")
    // { loading: () => <h1>LOADING</h1> }
  );

  return (
    <MainFrame>
      <ApiDataProvider ipInfo={router.query}>
        <SearchProvider>
          <DaysInfoProvider>
            <MobileAppDynamic />
          </DaysInfoProvider>
        </SearchProvider>
      </ApiDataProvider>
    </MainFrame>
  );
};

export default mobile;
