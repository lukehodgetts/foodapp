import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);

  background-color: ${({ theme }) => theme.colours.footer};
  grid-area: footer;
`;

export const Signature = styled.h3`
  grid-column-start: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 15px 0px 0px;
  color: ${({ theme }) => theme.colours.footerText}
`;