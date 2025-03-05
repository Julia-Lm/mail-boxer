import { Spinner } from "shared/ui-elements";
import * as S from "./loader.styles";

export const Loader = () => {
  return (
    <S.LoaderWrapper>
      <Spinner />
    </S.LoaderWrapper>
  );
};
