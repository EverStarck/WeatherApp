import styled from "@emotion/styled";

const MobileErrorStyle = styled.span`
  font-size: clamp(1.5rem, 3vw, 2rew);
  color: #e05353;
`;

const MobileError = () => {
  return <MobileErrorStyle>Error</MobileErrorStyle>;
};

export default MobileError;
