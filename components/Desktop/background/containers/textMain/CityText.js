import styled from "@emotion/styled";

const H2City = styled.h2`
  /* font-size: 4.8rem; */
  font-size: clamp(1.8rem, 5vw, 4.8rem);
  color: var(--card-info-color);
  font-weight: 500;
  margin: 0;
`;

const CityText = ({ apiData }) => {
  return (
    <H2City>
      {apiData.dayWeatherInfo.name}
      <span> ({apiData.dayWeatherInfo.sys.country})</span>
    </H2City>
  );
};

export default CityText;
