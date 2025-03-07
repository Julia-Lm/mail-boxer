import { colorShades } from "./color-shades.ts";

export const mainTheme = {
  bodyBackground: colorShades.white,
  text: colorShades.black,
  errorText: colorShades.red10,
  header: {
    border: colorShades.black,
    link: {
      color: colorShades.mainBlue,
    },
  },
  spinner: {
    border: colorShades.lightGrey,
    backgroundColor: colorShades.mainBlue,
  },
  loader: {
    backgroundColor: colorShades.lightWhite,
  },
};

type ThemeType = typeof mainTheme;

export interface AppTheme extends ThemeType {}
