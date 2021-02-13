import { useContext } from "react";
import styled from "@emotion/styled";
import {ApiDataContext} from "../../Context/ApiDataContext";
// import { ApiContext } from "../../pages/index";

const MobileErrorStyle = styled.span`
  font-size: 12px;
  color: #e05353;
`;

const MobileError = () => {
  const { apiData } = useContext(ApiDataContext);
  console.log(apiData);

  // const { apiData } = useContext(ApiContext);
  // console.log(apiData);

  return <MobileErrorStyle>Error</MobileErrorStyle>;
};

export default MobileError;
