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
      searchInput: string;
      searchText: string;
    };
  }
}
