import { LayoutI } from "./layout.type.ts";
import * as S from "./layout.styles";
import { Header } from "entities/index";
import { Container } from "shared/ui-elements";

export const Layout = ({ children }: LayoutI) => {
  return (
    <S.Wrapper>
      <Header />
      <S.MainWrapper>
        <Container>{children}</Container>
      </S.MainWrapper>
    </S.Wrapper>
  );
};
