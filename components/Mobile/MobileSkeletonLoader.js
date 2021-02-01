import React from "react";
import dynamic from "next/dynamic";

const ContentLoader = dynamic(() => import("react-content-loader"), {
  //   ssr: false,
});

export const TextMainLoader = () => (
  <ContentLoader
    speed={1}
    width={360}
    height={500}
    viewBox="0 0 360 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#e0e0e0"
  >
    <rect x="27" y="8" rx="3" ry="3" width="216" height="58" />
    <rect x="258" y="15" rx="3" ry="3" width="69" height="37" />
    <rect x="103" y="77" rx="3" ry="3" width="152" height="35" />
    <rect x="8" y="148" rx="0" ry="0" width="271" height="117" />
    <rect x="288" y="190" rx="0" ry="0" width="69" height="73" />
    <rect x="75" y="300" rx="0" ry="0" width="200" height="190" />
  </ContentLoader>
);

export const MobileHeaderLoader = () => (
  <ContentLoader
    speed={1}
    width={360}
    height={400}
    viewBox="0 0 360 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#e0e0e0"
  >
    {/* <rect x="15" y="18" rx="8" ry="8" width="337" height="36" /> */}
    <rect x="129" y="86" rx="3" ry="3" width="84" height="23" />
    <rect x="222" y="90" rx="3" ry="3" width="26" height="14" />
    <rect x="165" y="-48" rx="3" ry="3" width="300" height="35" />
    <rect x="150" y="114" rx="3" ry="3" width="84" height="16" />
    <rect x="156" y="157" rx="3" ry="3" width="36" height="45" />
    <rect x="203" y="172" rx="3" ry="3" width="27" height="29" />
    <circle cx="197" cy="248" r="30" />
    <rect x="169" y="287" rx="3" ry="3" width="54" height="10" />
    <rect x="123" y="318" rx="8" ry="8" width="137" height="40" />
  </ContentLoader>
);

export const MobileForecasLoader = () => (
  <ContentLoader
    speed={1}
    width={324}
    height={81}
    viewBox="0 0 324 81"
    backgroundColor="#f3f3f3"
    foregroundColor="#e0e0e0"
  >
    <rect x="4" y="2" rx="8" ry="8" width="317" height="61" />
  </ContentLoader>
);
