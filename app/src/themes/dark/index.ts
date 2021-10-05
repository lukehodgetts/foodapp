import { DefaultTheme } from "styled-components";
import { lighten } from "polished";

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
    cardHoverColour: lighten(0.05, "#202020")
  },
};

export default theme;
