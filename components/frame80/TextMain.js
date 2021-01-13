import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const TextMainFrame = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  /* background-color: red; */
  h2 {
    font-size: 4.8rem;
    color: var(--card-info-color);
    font-weight: 500;
    margin: 0;
  }
  h3 {
    font-size: 3rem;
    color: var(--gray-date);
    font-weight: 400;
    margin: 0;
  }
  h1 {
    font-size: 9.6rem;
    color: var(--main-bg-color);
    font-weight: 600;
    margin: 50px 0;
  }
  .imgFrame {
    font-size: 4rem;
  }
`;

const TextMain = () => {
  return (
    <TextMainFrame>
      <h2>London</h2>
      <h3>05/06/2021</h3>
      <h1>
        24 <span>&#176;C</span>
      </h1>
      <div className="imgFrame">
        <Image
          src="/icons/01d.svg"
          alt="Icon of "
          width={200}
          height={190}
        />
      </div>
    </TextMainFrame>
  );
};

export default TextMain;
