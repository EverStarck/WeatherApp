import styled from "@emotion/styled";

const H3Date = styled.h3`
  font-size: clamp(1.4rem, 3vw, 3rem);
  color: var(--gray-date);
  font-weight: 400;
  margin: 0;
`;
// {datesInfo.today.dateInfo.number}
const DateText = ({ getInfoDay, datesInfo }) => {
  if (getInfoDay !== undefined) {
    return <H3Date>{getInfoDay[1]}</H3Date>;
  }
  return <H3Date>{datesInfo.today.dateInfo.number}</H3Date>;
};

export default DateText;
