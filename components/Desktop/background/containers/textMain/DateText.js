import { useContext } from "react";
import styled from "@emotion/styled";
// Context
import { DaysInfoContext } from "../../../../../Context/DaysInfoContext";
import { GetInfoDayContext } from "../../../../../Context/Mobile/GetInfoDayContext";

const H3Date = styled.h3`
  font-size: clamp(1.4rem, 3vw, 3rem);
  color: var(--gray-date);
  font-weight: 400;
  margin: 0;
`;
const DateText = () => {
  // Context Data
  const { datesInfo } = useContext(DaysInfoContext);
  const { getInfoDay } = useContext(GetInfoDayContext);

  if (getInfoDay.length == 0) {
    return <H3Date>{datesInfo.today.dateInfo.number}</H3Date>;
  }
  return <H3Date>{getInfoDay[1]}</H3Date>;
};

export default DateText;
