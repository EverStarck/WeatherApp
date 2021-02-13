// Render MOBILE page
import { useEffect } from "react";
import { useRouter } from "next/router";
import useWindowSize from "../customHooks/useWindowSize";

const desktop = () => {
  // Render MOBILE page
  const router = useRouter();
  const winwdowsSizeHook = useWindowSize();
  useEffect(() => {
    if (winwdowsSizeHook.width < 767) {
      router.replace("/");
    }
  }, [winwdowsSizeHook.width]);

  return <h1>Desktop</h1>;
};

export default desktop;
