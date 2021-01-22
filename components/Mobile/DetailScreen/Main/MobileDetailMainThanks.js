import React from "react";
import styled from "@emotion/styled";

const MobileDetailMainThanksStyled = styled.article`
  h4 {
    font-size: clamp(1.4rem, 3vw, 2.4rem);
    font-weight: 400;
    color: var(--main-color);
    margin: 20px 0 0 0;
  }
  p:first-of-type {
    font-size: clamp(1.1rem, 3vw, 2.1rem);
    font-weight: 400;
    color: var(--gray-search);
    margin: 12px 0 0 0;
  }
  p:last-of-type {
    font-size: clamp(0.9rem, 3vw, 1.9rem);
    font-weight: 400;
    color: var(--gray-search);
    margin: 8px 0 0 0;
  }
`;

const MobileDetailMainThanks = () => {
  return (
    <MobileDetailMainThanksStyled>
      <h4>Thanks</h4>
      <p>
        If you see some information similar or exactly the same, like the min
        and max temperature, it’s because is the minimal and maximal currently
        observed temperature (within large megalopolises and urban areas).
      </p>
      <p>
        This app was made thanks to pixabay, openweathermap, ipify and iconify.
        Made by EverStarck ♥
      </p>
    </MobileDetailMainThanksStyled>
  );
};

export default MobileDetailMainThanks;
