import { ContainerProps } from "shared/ui-elements/container/container.type.ts";
import * as S from "./container.styles.ts";

export const Container = ({ children }: ContainerProps) => {
  return <S.ContainerWrapper>{children}</S.ContainerWrapper>;
};
