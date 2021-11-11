import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colours: {
      background: string;
      header: string;
      footer: string;
      headerText: string;
      footerText: string;
      bodyText: string;
      input: string;
      inputText: string;
      inputBorder: string;
      card: string;
      cardBorder: string;
      cardHoverShadow: string;
      cardHoverColour: string;
      prevNextButtons: string;
      prevNextButtonsHoverColour: string;
      addRecipeButtonHoverColour: string;
      addIngredientButtonHoverColourGreen: string;
      addIngredientButtonHoverColourRed: string;
      saveButton: string;
      saveButtonHover: string;
      saveButtonClick: string;
      saveButtonText: string;
      loadingColour: string;
      loadingColourAnimated: string;
    };
  }
}
