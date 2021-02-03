import styled from "@emotion/styled";

const TooltipStyle = styled.div`
  font-size: clamp(1rem, 5vw, 2rem);
  position: relative;
  margin: 16.6px 0 16.6px 10px;
  color: var(--gray-search);
  cursor: pointer;
  .tooltipText {
    width: 250px;
    position: absolute;
    bottom: 120%;
    right: -675%;
    color: var(--main-bg-color);
    border-radius: var(--border-radius);
    padding: 10px 20px;
    margin-left: -60px;
    z-index: 1;
    font-size: clamp(0.5rem, 5vw, 1.2rem);
    text-align: center;
    text-transform: none;
    content: attr(aria-label);
    background-color: var(--black-forecast);
    transition: all 0.5s ease;
    opacity: 0;
    b {
      font-size: clamp(0.5rem, 5vw, 1.4rem);
    }
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--black-forecast) transparent transparent transparent;
    }
  }
  &:hover {
    .tooltipText {
      opacity: 1;
      pointer-events: none;
    }
  }
`;
const Tooltip = () => {
  return (
    <TooltipStyle>
      &#x1F6C8;
      <span className="tooltipText">
        <b> Left:</b> Min temp <b> Rigtht:</b> Max temp <br /> If you see the
        information similar or exactly the same, is because it is the minimum
        and maximum currently observed temperature (within large megalopolises
        and areas)
      </span>
    </TooltipStyle>
  );
};

export default Tooltip;
