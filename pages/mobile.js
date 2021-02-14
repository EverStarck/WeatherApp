// Render DESKTOP page
import { useEffect } from "react";
import { useRouter } from "next/router";
import useWindowSize from "../customHooks/useWindowSize";

///-------------
import dynamic from "next/dynamic";
import { MainFrame } from "../styles/Main";

// Context
import ApiDataProvider from "../Context/ApiDataContext";
import DaysInfoProvider from "../Context/DaysInfoContext";

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
        <DaysInfoProvider>
          <MobileAppDynamic
          // apiData={apiData}
          // apiIsReady={apiIsReady}
          // setApiIsReady={setApiIsReady}
          // searchValue={searchValue}
          // setSearchValue={setSearchValue}
          // searchFetchData={searchFetchData}
          // datesInfo={datesInfo}
          />
        </DaysInfoProvider>
      </ApiDataProvider>
    </MainFrame>
  );
};

export default mobile;
