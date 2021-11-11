import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-areas: "title search themeswitch";
  background-color: ${({ theme }) => theme.colours.header};
  grid-area: header;
  transition: all 0.2s;
`;

export const ThemeSwitch = styled.div`
  grid-area: themeswitch;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TitleContainer = styled.div`
  grid-area: title;
  display: flex;
  align-items: center;
  width: auto;
  margin: 0px 0px 0px 15px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colours.headerText};
  margin: 0px;

  transition: all 0.2s;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
