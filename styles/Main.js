import styled from "@emotion/styled";

export const MainFrame = styled.main`
  /* background-color: violet; */

  /* Variables */
  --main-bg-color: #fff;
  --main-color: #1d3b88;
  --black-forecast: #0c193b;
  --gray-search: #b7b7b7;
  --gray-date: #e5e5e5;
  --card-info-color: #fcfafa;
  --mobile-card-color: #DFE3EE;
  --border-radius: 8px;

  /* Desktop */
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
`;

export const Frame80 = styled.div`
  margin: 0 auto;

  /* background-color: aliceblue; */

  /* Desktop */
  min-width: 70vw;
  max-width: 70vw;
  /* min-height: 80vh;
  max-height: 80vh; */

  /* Tablet */
  @media only screen and (max-width: 768px) {
    min-width: 90vw;
    max-width: 90vw;
  }

  /* MOBILE 375 */
  @media only screen and (max-width: 375px) {
    min-width: 90vw;
    max-width: 90vw;
    /* background-color: aliceblue; */
  }
`;
