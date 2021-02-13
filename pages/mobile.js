// Render DESKTOP page
import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import useWindowSize from "../customHooks/useWindowSize";

///-------------
import dynamic from "next/dynamic";
import MobileError from "../components/Mobile/MobileError";
import ApiDataProvider from "../Context/ApiDataContext";

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

  // return <MobileAppDynamic/>;
  return (
    <ApiDataProvider ipInfo={router.query}>
      <MobileError />
    </ApiDataProvider>
  );
};

export default mobile;
