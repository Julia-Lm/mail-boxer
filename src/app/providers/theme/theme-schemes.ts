import { colorShades } from "./color-shades.ts";

export const mainTheme = {
  bodyBackground: colorShades.white,
  text: colorShades.black,
  header: {
    border: colorShades.green,
    link: {
      color: colorShades.green,
    },
  },
  spinner: {
    border: colorShades.lightGrey,
    backgroundColor: colorShades.green,
  },
  loader: {
    backgroundColor: colorShades.lightWhite,
  },
};

type ThemeType = typeof mainTheme;

export interface AppTheme extends ThemeType {}
