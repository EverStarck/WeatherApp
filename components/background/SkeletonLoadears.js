import ContentLoader from "react-content-loader";

export const BackgroundLoader = () => (
  <ContentLoader
    speed={1}
    width={`100vw`}
    height={`80vh`}
    // viewBox="0 0 1000 772"
    backgroundColor="#f3f3f3"
    foregroundColor="#e0e0e0"
  >
    <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
  </ContentLoader>
);

export const TextMainLoader = () => (
  <ContentLoader
    speed={1}
    width={366}
    height={500}
    viewBox="0 0 366 500"
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

export const AsideCardLoader = () => (
  <ContentLoader
    speed={1}
    width={200}
    height={160}
    viewBox="0 0 200 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#e0e0e0"
  >
    <rect x="49" y="1" rx="3" ry="3" width="95" height="23" />
    <rect x="79" y="36" rx="3" ry="3" width="36" height="41" />
    <rect x="26" y="86" rx="3" ry="3" width="142" height="6" />
    <rect x="0" y="99" rx="3" ry="3" width="186" height="6" />
    <rect x="34" y="111" rx="3" ry="3" width="129" height="6" />
    <rect x="0" y="135" rx="3" ry="3" width="186" height="3" />

  </ContentLoader>
);

export const ForecastCardLoader = () => (
  <ContentLoader
    speed={1}
    width={200}
    height={116}
    viewBox="0 0 200 116"
    backgroundColor="#f3f3f3"
    foregroundColor="#e0e0e0"
  >
    <rect x="197" y="3" rx="3" ry="3" width="3" height="140" />
    <rect x="26" y="4" rx="0" ry="0" width="140" height="20" />
    <circle cx="91" cy="53" r="20" />
    <rect x="10" y="82" rx="0" ry="0" width="38" height="29" />
    <rect x="127" y="82" rx="0" ry="0" width="38" height="29" />
    <rect x="53" y="92" rx="0" ry="0" width="17" height="19" />
    <rect x="170" y="90" rx="0" ry="0" width="17" height="19" />
  </ContentLoader>
);
