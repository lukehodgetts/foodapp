import styled from "styled-components";

interface GridProps {
  gridRowStart?: any;
  gridRowEnd?: any;
  gridColumnStart?: any;
  gridColumnEnd?: any;
  gridArea?: any;
}

export const Grid = styled.div<GridProps>`
  grid-row-start: ${({ gridRowStart }) => gridRowStart};
  grid-row-end: ${({ gridRowEnd }) => gridRowEnd};
  grid-column-start: ${({ gridColumnStart }) => gridColumnStart};
  grid-column-end: ${({ gridColumnEnd }) => gridColumnEnd};
  grid-area: ${({ gridArea }) => gridArea};
`;

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

  transition: all 0.2s;
`;
