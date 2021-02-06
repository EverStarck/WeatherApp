import styled from "@emotion/styled";
import MobileError from "../../../../Mobile/MobileError";

const SmallTextStyles = styled.small`
  color: var(--gray-date);
  text-transform: capitalize;
`;

const SmallText = ({ mobileDetailInfo, getInfoDay, apiData }) => {
  if (mobileDetailInfo) {
    if (getInfoDay.length === 0) {
      return <MobileError />;
    }
    return (
      <SmallTextStyles>{getInfoDay[0].weather[0].description}</SmallTextStyles>
    );
  }
  return (
    <SmallTextStyles>
      {apiData.dayWeatherInfo.weather[0].description}
    </SmallTextStyles>
  );
};

export default SmallText;

{
  /* <p>
{mobileDetailInfo ? (
  <>
    {getInfoDay.length === 0 ? (
      <MobileError />
    ) : (
      <small>{getInfoDay[0].weather[0].description}</small>
    )}
  </>
) : (
  <small>{apiData.dayWeatherInfo.weather[0].description}</small>
)}
</p> */
}
