import styled from "@emotion/styled";
import { useContext } from "react";
import {ApiDataContext} from "../../Context/ApiDataContext";
import {DaysInfoContext} from "../../Context/DaysInfoContext";

// import { ApiContext } from "../../pages/index";

const MobileErrorStyle = styled.span`
  font-size: 12px;
  color: #e05353;
`;

const MobileError = () => {
  // const { apiData } = useContext(ApiDataContext);
  // console.log(apiData);

  // const { datesInfo } = useContext(DaysInfoContext);
  // console.log(datesInfo);

  return <MobileErrorStyle>Error</MobileErrorStyle>;
};

export default MobileError;
