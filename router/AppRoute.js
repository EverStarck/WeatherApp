import useWindowSize from "../customHooks/useWindowSize";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AppRoute = ({ country, city }) => {
  const router = useRouter();
  // Get the width and height
  const winwdowsSizeHook = useWindowSize();

  async function renderDesktopOrMobile() {
    switch (true) {
      case winwdowsSizeHook.width > 767:
        await import("../pages/desktop.js");
        router.push({
          pathname: "/desktop",
          query: { country, city },
        });
        break;
      case winwdowsSizeHook.width < 767:
        await import("../pages/mobile.js");
        router.push({
          pathname: "/mobile",
          query: { country, city },
        });
        break;
    }
  }

  useEffect(() => {
    renderDesktopOrMobile();
  }, [winwdowsSizeHook.width]);


  return <h1>LOADING...</h1>;
};

export default AppRoute;
