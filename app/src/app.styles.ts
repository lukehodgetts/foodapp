import styled from "styled-components";

interface GridProps {
  gridRowStart?: any;
  gridRowEnd?: any;
  gridColumnStart?: any;
  gridColumnEnd?: any;
  gridArea?: any;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 80px auto 30px;
  grid-template-areas:
    "header header header"
    "prev main next"
    "footer footer footer";

  height: 100%;
  background-color: ${({ theme }) => theme.colours.background};
`;

export const Grid = styled.div<GridProps>`
  grid-row-start: ${({ gridRowStart }) => gridRowStart};
  grid-row-end: ${({ gridRowEnd }) => gridRowEnd};
  grid-column-start: ${({ gridColumnStart }) => gridColumnStart};
  grid-column-end: ${({ gridColumnEnd }) => gridColumnEnd};
  grid-area: ${({ gridArea }) => gridArea};
`;

export const MainContent = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(6, 16.6%);
  grid-area: main;
`;

export const Header = styled(Grid)`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colours.header};
`;

export const Footer = styled(Grid)`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colours.footer};
`;

export const FlexBox = styled.div`
  grid-area: main;
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

export const NextButton = styled.div`
  grid-area: next;
`;

export const PrevButton = styled.div`
  grid-area: prev;
`;
