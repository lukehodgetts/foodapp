import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "../../app.styles";

export const RecipeContainer = styled(Grid)`
  display: grid;
  grid-area: main;
  grid-template-areas: "left centre right";
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: repeat(auto-fill, 50px);
  margin: 20px 50px;
  row-gap: 10px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colours.bodyText};

  font-size: max;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface ButtonProps {
  isLastIngredient: boolean;
}

export const IngredientButton = styled(FontAwesomeIcon)<ButtonProps>`
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    color: ${({ theme, isLastIngredient }) =>
      isLastIngredient
        ? theme.colours.addIngredientButtonHoverColourGreen
        : theme.colours.addIngredientButtonHoverColourRed};
  }
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SaveButton = styled.button`
  width: 50%;
  border: 0px solid;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 24px;

  background-color: ${({ theme }) => theme.colours.saveButton};
  color: ${({ theme }) => theme.colours.saveButtonText};

  :hover {
    background-color: ${({ theme }) => theme.colours.saveButtonHover};
  }
  :active {
    background-color: ${({ theme }) => theme.colours.saveButtonClick};
  }
`;
