import { darkColors, lightColors } from "../../theme/colors";
import { ZenithToggleTheme } from "./types";

export const light: ZenithToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: ZenithToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
