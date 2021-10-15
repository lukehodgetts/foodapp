import styled from "styled-components";
import { Grid } from "../../app.styles";

export const MainContent = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(6, 16.6%);
  grid-area: main;
`;
