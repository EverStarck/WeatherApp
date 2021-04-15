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
    bottom: ${(props) => props.bottomTooltip};
    right: ${(props) => props.rightTooltip};
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
      display: ${props => props.afterTooltip};
    }
  }
  &:hover {
    .tooltipText {
      opacity: 1;
      pointer-events: none;
    }
  }
`;
const Tooltip = ({
  textTooltip,
  bottomTooltip = "120%",
  rightTooltip = "-675%",
  afterTooltip = "block"
}) => {
  return (
    <TooltipStyle bottomTooltip={bottomTooltip} rightTooltip={rightTooltip} afterTooltip = {afterTooltip}>
      &#x1F6C8;
      <span className="tooltipText">{textTooltip}</span>
    </TooltipStyle>
  );
};

export default Tooltip;
