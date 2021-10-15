import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Textbox = styled.input`
  background-color: ${({ theme }) => theme.colours.searchInput};
  color: ${({ theme }) => theme.colours.searchText};
  height: 50%;
  width: 100%;
  text-indent: 10px;
  border: 0px none;
  border-radius: 5px;
  outline: none;
  font-size: 24px;
`;

export const SearchContainer = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
`;

export const AddButton = styled(FontAwesomeIcon)`
  margin-left: -30px;
  color: #757575;
  transition: all 0.1s;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colours.addRecipeButtonHoverColour};
  }
`;
