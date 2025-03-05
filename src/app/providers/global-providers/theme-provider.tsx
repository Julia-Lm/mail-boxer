import { ReactNode } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { GlobalCSSStyle } from "../theme/global-styles.tsx";
import { mainTheme } from "app/providers/theme/theme-schemes.ts";

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <SCThemeProvider theme={mainTheme}>
      <GlobalCSSStyle />
      {children}
    </SCThemeProvider>
  );
};
