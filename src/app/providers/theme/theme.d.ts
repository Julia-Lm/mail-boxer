import "styled-components";
import { AppTheme } from "app/providers/theme/theme-schemes.ts";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
