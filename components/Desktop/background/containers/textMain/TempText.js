import styled from "@emotion/styled";
import MobileError from "../../../../Mobile/MobileError";

const H1Temp = styled.h1`
  font-size: clamp(3.6rem, 10vw, 9.6rem);
  color: var(--main-bg-color);
  font-weight: 600;
  margin: 50px 0;
`;

const TempText = ({ mobileDetailInfo, getInfoDay, apiData }) => {
  /* Change the info on detail window */
  if (mobileDetailInfo) {
    if (getInfoDay.length === 0) {
      return <MobileError />;
    }
    return (
      <H1Temp>
        {getInfoDay[0].main.temp} <span>&#176;C</span>
      </H1Temp>
    );
  }
  return (
    <H1Temp>
      {apiData.dayWeatherInfo.main.temp} <span>&#176;C</span>
    </H1Temp>
  );
};

export default TempText;