import { DefaultTheme } from "styled-components";
import { lighten, darken } from "polished";

const theme: DefaultTheme = {
  colours: {
    background: "#ffffff",
    header: "#6200ee",
    footer: "#6200ee",
    headerText: "#ffffff",
    footerText: "#ffffff",
    bodyText: "#00000f",
    searchInput: "#ffffff",
    searchText: "#00000f",
    card: "#ffffff",
    cardBorder: "#00000f",
    cardHoverShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
    cardHoverColour: "inherit",
    prevNextButtons: "#6200ee",
    prevNextButtonsHoverColour: lighten(0.1, "#6200ee"),
    addRecipeButtonHoverColour: darken(0.3, "#757575"),
  },
};

export default theme;
