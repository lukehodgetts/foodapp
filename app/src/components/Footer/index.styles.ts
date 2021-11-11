import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-areas: ". pagenum signature";

  background-color: ${({ theme }) => theme.colours.footer};
  transition: all 0.2s;
  grid-area: footer;
`;

export const Signature = styled.h3`
  grid-column-start: 3;
  grid-area: signature;
  display: flex;
  justify-content: flex-end;
  margin: 0px 15px 0px 0px;
  color: ${({ theme }) => theme.colours.footerText};
`;

export const PageNumberContainer = styled.div`
  grid-area: pagenum;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageNumber = styled.h3`
  margin: 0px;
  color: ${({ theme }) => theme.colours.footerText};
`;
