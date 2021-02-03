import Image from "next/image";
import useWindowSize from "../../../../../customHooks/useWindowSize";
import MobileError from "../../../../Mobile/MobileError";

const ImgText = ({ apiData, mobileDetailInfo, getInfoDay }) => {
  const windowsSize = useWindowSize();

  if (windowsSize.width > 767) {
    // Icon of the weather for DESKTOP
    return (
      <Image
        src={`/icons/${apiData.dayWeatherInfo.weather[0].icon}.svg`}
        alt={`Icon of ${apiData.dayWeatherInfo.weather[0].description}`}
        width={200}
        height={190}
      />
    );
  }

  // Icon of the weather for MOBIL
  if (mobileDetailInfo) {
    if (getInfoDay.length === 0) {
      return <MobileError/>;
    }
    // Change the img on detail window
    return (
      <Image
        src={`/icons/${getInfoDay[0].weather[0].icon}.svg`}
        alt={`Icon of ${getInfoDay[0].weather[0].description}`}
        width={60}
        height={58}
      />
    );
  }

  // //Main Screen
  return (
    <Image
      src={`/icons/${apiData.dayWeatherInfo.weather[0].icon}.svg`}
      alt={`Icon of ${apiData.dayWeatherInfo.weather[0].description}`}
      width={60}
      height={58}
    />
  );
};

export default ImgText;

// {windowsSize.width > 767 ? (
//     // Icon of the weather for DESKTOP
//     <Image
//       src={`/icons/${apiData.dayWeatherInfo.weather[0].icon}.svg`}
//       alt={`Icon of ${apiData.dayWeatherInfo.weather[0].description}`}
//       width={200}
//       height={190}
//     />
//   ) : (
//     // Icon of the weather for MOBIL
//     <>
//       {/* Change the img on detail window */}
//       {mobileDetailInfo ? (
//         <>
//           {getInfoDay.length === 0 ? (
//             <MobileError />
//           ) : (
//             <Image
//               src={`/icons/${getInfoDay[0].weather[0].icon}.svg`}
//               alt={`Icon of ${getInfoDay[0].weather[0].description}`}
//               width={60}
//               height={58}
//             />
//           )}
//         </>
//       ) : (
//         <Image
//           src={`/icons/${apiData.dayWeatherInfo.weather[0].icon}.svg`}
//           alt={`Icon of ${apiData.dayWeatherInfo.weather[0].description}`}
//           width={60}
//           height={58}
//         />
//       )}
//     </>
//   )}
