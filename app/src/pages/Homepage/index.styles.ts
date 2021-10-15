import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "../../app.styles";

export const MainContent = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(6, 16.6%);
  grid-area: main;
`;

interface GridAreaProps {
  gridArea?: string;
}

export const FlexBox = styled.div<GridAreaProps>`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;

  :before,
  :after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  :before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 0s;
  }

  :after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dotFlashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dotFlashing {
    0% {
      background-color: #9880ff;
    }
    50%,
    100% {
      background-color: #ebe6ff;
    }
  }
`;

export const Watermark = styled.h1`
  color: #757575;
`;

export const NextButton = styled(FontAwesomeIcon)`
  grid-area: next;
  color: ${({ theme }) => theme.colours.prevNextButtons};
  transition: all 0.2s;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colours.prevNextButtonsHoverColour};
  }
`;

export const PrevButton = styled(FontAwesomeIcon)`
  grid-area: prev;
  color: ${({ theme }) => theme.colours.prevNextButtons};
  transition: all 0.2s;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colours.prevNextButtonsHoverColour};
  }
`;
