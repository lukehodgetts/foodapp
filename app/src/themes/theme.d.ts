import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colours: {
      background: string;
      header: string;
      footer: string;
    };
  }
}
