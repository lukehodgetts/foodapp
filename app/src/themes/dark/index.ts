import { DefaultTheme } from "styled-components";
import { lighten, darken } from "polished";

const theme: DefaultTheme = {
  colours: {
    background: "#121212",
    header: "#1f1f1f",
    footer: "#1f1f1f",
    headerText: "#ffffff",
    footerText: "#ffffff",
    bodyText: "#ffffff",
    input: "#121212",
    inputText: "#ffffff",
    inputBorder: "#ffffff",
    card: "#202020",
    cardBorder: "#121212",
    cardHoverShadow: "inherit",
    cardHoverColour: lighten(0.1, "#202020"),
    prevNextButtons: "#ffffff",
    prevNextButtonsHoverColour: darken(0.5, "#ffffff"),
    addRecipeButtonHoverColour: lighten(0.5, "#757575"),
    addIngredientButtonHoverColourRed: lighten(0.1, "#ff0000"),
    addIngredientButtonHoverColourGreen: lighten(0.1, "#008000"),
    saveButton: "#1f1f1f",
    saveButtonHover: lighten(0.1, "#1f1f1f"),
    saveButtonClick: lighten(0.4, "#1f1f1f"),
    saveButtonText: "#ffffff",
    loadingColour: "#1f1f1f",
    loadingColourAnimated: lighten(0.3, "#1f1f1f")
  },
};

export default theme;
