import { Route, Routes } from "react-router-dom";
import { ROUTES } from "app/routes/routes.constant.ts";
import * as S from "./routes.styles.ts";
import { AuthPage } from "pages/auth-page";

export const RoutesComponent = () => {
  return (
    <S.Wrapper>
      <Routes>
        <Route path={`${ROUTES.basePath}*`} element={<AuthPage />} />
      </Routes>
    </S.Wrapper>
  );
};
