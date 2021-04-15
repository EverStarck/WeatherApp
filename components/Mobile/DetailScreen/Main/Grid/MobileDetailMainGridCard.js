import Image from "next/image";
import styled from "@emotion/styled";

const MobileDetailMainGridCardStyle = styled.article`
  background-color: var(--mobile-card-color);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  padding: 10px;
  /* width: 100%; */
  border-radius: var(--border-radius);
  grid-area: ${(props) => props.gridArea};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.flexCard ? "flex-start" : "center")};
  position: relative;
  h4 {
    font-size: clamp(1.5rem, 3vw, 2.4rem);
    font-weight: 400;
    color: var(--main-color);
    margin: 0;
  }
  h3 {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 500;
    color: var(--black-forecast);
    margin: 10px 0;
  }
  p {
    font-size: clamp(1.2rem, 3vw, 1.9rem);
    font-weight: 400;
    color: var(--gray-search);
    margin: 0;
  }
`;

const ImageFrame = styled.div`
  position: absolute;
  width: 120px;
  height: 100px;
  top: 0;
  right: -15px;
  /* background-color: red; */
`;

const MobileDetailMainGridCard = ({
  gridArea,
  cardTittle,
  backgroundCard = false,
  flexCard = false,
  typeOfData,
  descriptionCard,
}) => {
  return (
    <MobileDetailMainGridCardStyle
      gridArea={gridArea}
      backgroundCard={backgroundCard}
      flexCard={flexCard}
    >
      <h4>{cardTittle}</h4>
      <h3>{typeOfData}</h3>
      <p>{descriptionCard}</p>

      {backgroundCard && (
        <ImageFrame>
          <div className="tes">
            <Image
              src="/assets/backgroundRain.svg"
              alt="Image of a cloud with rain"
              layout="fill"
            />
          </div>
        </ImageFrame>
      )}
    </MobileDetailMainGridCardStyle>
  );
};

export default MobileDetailMainGridCard;
