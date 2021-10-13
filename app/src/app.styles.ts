import styled from 'styled-components';

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