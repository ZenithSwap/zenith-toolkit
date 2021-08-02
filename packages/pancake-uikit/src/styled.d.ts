import "styled-components";
import { ZenithTheme } from "./theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ZenithTheme {}
}
