import useWindowSize from "../customHooks/useWindowSize";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from '../components/Loader';

const AppRoute = () => {
  const router = useRouter();
  // Get the width and height
  const winwdowsSizeHook = useWindowSize();

  async function renderDesktopOrMobile() {
    switch (true) {
      case winwdowsSizeHook.width > 767:
        await import("../pages/desktop.js");
        router.push({
          pathname: "/desktop",
        });
        break;
      case winwdowsSizeHook.width < 767:
        await import("../pages/mobile.js");
        router.push({
          pathname: "/mobile",
        });
        break;
    }
  }

  useEffect(() => {
    renderDesktopOrMobile();
  }, [winwdowsSizeHook.width]);


  return <Loader/>;
};

export default AppRoute;
