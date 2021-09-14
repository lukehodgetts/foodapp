import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);

  background-color: ${({ theme }) => theme.colours.header};
  grid-area: header;
`;

export const ThemeSwitch = styled.div`
  grid-column-start: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;