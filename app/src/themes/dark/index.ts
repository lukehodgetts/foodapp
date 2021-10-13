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
    searchInput: "#121212",
    searchText: "#ffffff",
    card: "#202020",
    cardBorder: "#121212",
    cardHoverShadow: "inherit",
    cardHoverColour: lighten(0.1, "#202020"),
    prevNextButtons: "#ffffff",
    prevNextButtonsHoverColour: darken(0.5,"#ffffff"),
    addRecipeButtonHoverColour: lighten(0.1, "#757575")
  },
};

export default theme;
