import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Textbox = styled.input`
  background-color: ${({ theme }) => theme.colours.input};
  color: ${({ theme }) => theme.colours.inputText};
  height: 50%;
  width: 100%;
  text-indent: 10px;
  border: 0px none;
  border-radius: 5px;
  outline: none;
  font-size: 24px;
  transition: all 0.2s;
`;

export const SearchContainer = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: -130px;
  justify-content: space-around;
`;
interface ViewProps {
  isSelected: boolean;
}

export const ViewButton = styled(FontAwesomeIcon)<ViewProps>`
  color: ${(props) =>
    props.isSelected
      ? props.theme.colours.addRecipeButtonHoverColour
      : "#757575"};
  transition: all 0.1s;
  padding: 0px 5px;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colours.addRecipeButtonHoverColour};
  }
`;

export const AddRecipeButton = styled(FontAwesomeIcon)`
  color: #757575;
  transition: all 0.1s;
  margin-left: 20px;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colours.addRecipeButtonHoverColour};
  }
`;
