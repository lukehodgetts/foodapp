import styled from "styled-components";
import { Grid } from "../../app.styles";

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

export const MainContent = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(6, 16.6%);
  grid-area: main;
`;
